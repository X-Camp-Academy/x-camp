'use client';
import { EventCategory, FacultyLevelCategory } from '@/apis/strapi-client/define';
import { useMobile } from '@/utils';
import { Radio, RadioChangeEvent, Segmented, Space } from 'antd';
import { SegmentedValue } from 'antd/es/segmented';
import React from 'react';
import styles from './index.module.scss';

export interface EventOptionsProps {
  label: React.ReactNode;
  value: EventCategory;
}

export interface FacultyOptionsProps {
  label: React.ReactNode;
  value: FacultyLevelCategory;
}

export interface SegmentedRadioGroupProps {
  segmented: SegmentedValue;
  setSegmented: (value: SegmentedValue) => void;
  options: EventOptionsProps[] | FacultyOptionsProps[];
  segmentedDom?: React.Ref<HTMLDivElement>;
}

const SegmentedRadioGroup: React.FC<SegmentedRadioGroupProps> = ({ segmented = '', setSegmented, options = [], segmentedDom }) => {
  const isMobile = useMobile();
  return (
    <div className={styles.segmentedRadioGroup}>
      {isMobile ? (
        <Radio.Group optionType="button" buttonStyle="solid" onChange={(e: RadioChangeEvent) => setSegmented(e?.target?.value as SegmentedValue)} value={segmented} className={styles.radioGroup}>
          <Space style={{ width: '100%' }} direction={isMobile ? 'vertical' : 'horizontal'}>
            {options?.map((option) => (
              <Radio style={{ width: '100%' }} key={option?.value} value={option?.value}>
                {option?.label}
              </Radio>
            ))}
          </Space>
        </Radio.Group>
      ) : (
        <Segmented ref={segmentedDom} style={{ backgroundColor: '#fff' }} block value={segmented} options={options} onChange={(value: SegmentedValue) => setSegmented(value)} />
      )}
    </div>
  );
};

export default SegmentedRadioGroup;
