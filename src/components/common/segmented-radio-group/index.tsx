"use client";
import React from "react";
import { Space, Radio, Segmented, RadioChangeEvent } from "antd";
import { SegmentedValue } from "antd/es/segmented";
import { useMobile } from "@/utils";
import styles from "./index.module.scss";

export interface SegmentedRadioGroupProps {
  segmented: SegmentedValue;
  setSegmented: (value: SegmentedValue) => void;
  data: string[];
  segmentedDom?: React.Ref<HTMLDivElement>;
}
const SegmentedRadioGroup: React.FC<SegmentedRadioGroupProps> = ({
  segmented = '',
  setSegmented,
  data = [],
  segmentedDom,
}) => {
  const isMobile = useMobile();
  return (
    <div className={styles.segmentedRadioGroup}>
      {
        isMobile ?
          <Radio.Group
            optionType="button"
            buttonStyle="solid"
            onChange={(e: RadioChangeEvent) => setSegmented(e?.target?.value as SegmentedValue)}
            value={segmented}
            className={styles.radioGroup}
          >
            <Space size={0} style={{ width: '100%' }} direction={isMobile ? 'vertical' : 'horizontal'}>
              {
                data?.map(type => (
                  <Radio style={{ width: '100%' }} key={type} value={type}>{type}</Radio>
                ))
              }
            </Space>
          </Radio.Group>
          :
          <Segmented
            ref={segmentedDom}
            style={{ backgroundColor: "#fff" }}
            block
            value={segmented}
            options={data}
            onChange={(value: SegmentedValue) => setSegmented(value)}
          />
      }
    </div>
  );
};

export default SegmentedRadioGroup;
