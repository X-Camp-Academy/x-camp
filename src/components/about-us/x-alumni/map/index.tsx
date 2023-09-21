'use client';
import React, { LegacyRef, useEffect, useRef } from 'react';
import { Typography } from 'antd';
import * as echarts from 'echarts';
import { useLang } from '@/hoc/with-intl/define';
import { useGetAboutUsAlumniMap } from '@/apis/strapi-client/strapi';
import worldJson from './world.json';
import usaJson from './usa.json';
import styles from './index.module.scss';

const { Title, Text } = Typography;

const Map: React.FC = () => {
  const { format: t } = useLang();
  const { data } = useGetAboutUsAlumniMap();
  const worldDOM = useRef<HTMLDivElement>();
  const usaDOM = useRef<HTMLDivElement>();

  useEffect(() => {
    if (worldDOM.current) {
      const mapChart = echarts.init(worldDOM.current);

      echarts.registerMap('world', JSON.stringify(worldJson));

      const options = {
        tooltip: {
          trigger: 'item',
          showDelay: 0,
          transitionDuration: 0.2,
        },
        visualMap: {
          left: 'right',
          min: 0,
          max: 1000,
          inRange: {
            color: ['#D46B14', '#FFAD11', '#FFD600'],
          },
          text: ['High', 'Low'],
          calculable: true,
        },
        series: [
          {
            name: t('NUMBER_OF_ALUMNI'),
            type: 'map',
            mapType: 'world',
            roam: true,
            emphasis: {
              label: {
                show: true,
              },
            },
            data: data?.world || [],
          },
        ],
      };
      mapChart.setOption(options);
    }
  }, [data]);
  useEffect(() => {
    if (usaDOM.current) {
      const mapChart = echarts.init(usaDOM.current);

      echarts.registerMap('USA', JSON.stringify(usaJson), {
        Alaska: {
          left: -131,
          top: 25,
          width: 15,
        },
        Hawaii: {
          left: -110,
          top: 28,
          width: 5,
        },
        'Puerto Rico': {
          left: -76,
          top: 26,
          width: 2,
        },
      });

      const options = {
        tooltip: {
          trigger: 'item',
          showDelay: 0,
          transitionDuration: 0.2,
        },
        visualMap: {
          left: 'right',
          min: 500000,
          max: 38000000,
          inRange: {
            color: ['#D46B14', '#FFAD11', '#FFD600'],
          },
          text: ['High', 'Low'],
          calculable: true,
        },
        series: [
          {
            name: t('USAPopEstimates'),
            type: 'map',
            roam: true,
            map: 'USA',
            emphasis: {
              label: {
                show: true,
              },
            },
            data: data?.usa || [],
          },
        ],
      };
      mapChart.setOption(options);
    }
  }, [data]);

  return (
    <div className={`${styles.map} container`}>
      <Title className={styles.title}>{t('OneBigFamily')}</Title>
      <Text className={styles.text}>{t('JoinBigFamily')}</Text>

      <div
        ref={worldDOM as LegacyRef<HTMLDivElement>}
        className={styles.mapContainer}
      />
      <div
        ref={usaDOM as LegacyRef<HTMLDivElement>}
        className={styles.mapContainer}
      />
    </div>
  );
};

export default Map;
