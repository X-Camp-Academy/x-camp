'use client';
import { useGetAboutUsAlumniMap } from '@/apis/strapi-client/strapi';
import { useLang } from '@/hoc/with-intl/define';
import { Typography } from 'antd';
import * as echarts from 'echarts';
import React, { LegacyRef, useEffect, useRef } from 'react';
import styles from './index.module.scss';
import worldJson from './world.json';

const { Title, Text } = Typography;

const Map: React.FC = () => {
  const { format: t } = useLang();
  const { data } = useGetAboutUsAlumniMap();
  const worldDOM = useRef<HTMLDivElement>();

  useEffect(() => {
    if (worldDOM.current) {
      const mapChart = echarts.init(worldDOM.current);

      echarts.registerMap('world', JSON.stringify(worldJson));

      const options = {
        tooltip: {
          trigger: 'item',
          showDelay: 0,
          transitionDuration: 0.2
        },
        visualMap: {
          left: 'right',
          min: 0,
          max: 1000,
          inRange: {
            color: ['#D46B14', '#FFAD11', '#FFD600']
          },
          text: ['High', 'Low'],
          calculable: true
        },
        series: [
          {
            name: t('NUMBER_OF_ALUMNI'),
            type: 'map',
            mapType: 'world',
            roam: true,
            emphasis: {
              label: {
                show: true
              }
            },
            data: data?.world || []
          }
        ]
      };
      mapChart.setOption(options);
    }
  }, [data]);

  return (
    <div className={`${styles.map} container`}>
      <Title className={styles.title}>{t('OneBigFamily')}</Title>
      <Text className={styles.text}>{t('JoinBigFamily')}</Text>

      <div ref={worldDOM as LegacyRef<HTMLDivElement>} className={styles.mapContainer} />
    </div>
  );
};

export default Map;
