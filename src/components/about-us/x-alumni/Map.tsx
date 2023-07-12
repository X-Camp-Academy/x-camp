"use client";
import React, { LegacyRef, useEffect, useRef, useState } from "react";
import { Typography, Segmented } from "antd";
import * as echarts from "echarts";
import worldJson from "./world.json";
import usaJson from "./usa.json";
import styles from "./Map.module.scss";
import { SegmentedValue } from "antd/es/segmented";
import { useGetAboutUsAlumniMap } from "@/apis/strapi-client/strapi";

const { Title, Text } = Typography;

const Map: React.FC = () => {
  const { data } = useGetAboutUsAlumniMap();
  const [current, setCurrent] = useState<SegmentedValue>("World");
  const worldDOM = useRef<HTMLDivElement>();
  const usaDOM = useRef<HTMLDivElement>();


  useEffect(() => {
    if (worldDOM.current) {
      const mapChart = echarts.init(worldDOM.current);

      echarts.registerMap("world", JSON.stringify(worldJson));

      const options = {
        tooltip: {
          trigger: "item",
          showDelay: 0,
          transitionDuration: 0.2,
        },
        visualMap: {
          left: "right",
          min: 0,
          max: 1000,
          inRange: {
            color: ["#D46B14", "#FFAD11", "#FFD600"],
          },
          text: ["High", "Low"],
          calculable: true,
        },
        series: [
          {
            name: "校友人数",
            type: "map",
            mapType: "world",
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
  }, [data, current]);
  useEffect(() => {
    if (usaDOM.current) {
      const mapChart = echarts.init(usaDOM.current);

      echarts.registerMap("USA", JSON.stringify(usaJson), {
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
        "Puerto Rico": {
          left: -76,
          top: 26,
          width: 2,
        },
      });

      const options = {
        tooltip: {
          trigger: "item",
          showDelay: 0,
          transitionDuration: 0.2,
        },
        visualMap: {
          left: "right",
          min: 500000,
          max: 38000000,
          inRange: {
            color: ["#D46B14", "#FFAD11", "#FFD600"],
          },
          text: ["High", "Low"],
          calculable: true,
        },
        series: [
          {
            name: "USA PopEstimates",
            type: "map",
            roam: true,
            map: "USA",
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
  }, [data, current]);
  const onChange = (value: SegmentedValue) => {
    setCurrent(value);
  };
  return (
    <div className={`${styles.map} container`}>

      <Segmented
        options={["World", "USA"]}
        onChange={onChange}
        className={styles.button}
      />
      <Title className={styles.title}>We are one big family</Title>
      <Text className={styles.text}>Our alumni are located all over the world.</Text>

      <div
        ref={
          current === "World"
            ? (worldDOM as LegacyRef<HTMLDivElement>)
            : (usaDOM as LegacyRef<HTMLDivElement>)
        }
        className={styles.mapContainer}
      ></div>
    </div>
  );
};

export default Map;
