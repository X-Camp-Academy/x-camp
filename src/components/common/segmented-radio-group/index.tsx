'use client';
import { EventCategory, FacultyLevelCategory } from '@/apis/strapi-client/define';
import { useLang } from '@/hoc/with-intl/define';
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
  style?: React.CSSProperties;
}

export const useEventOptions = (defaultValue?: 'event' | 'faculty') => {
  const { format: t } = useLang();
  const eventOptions: EventOptionsProps[] = [
    {
      label: t('All'),
      value: EventCategory.All
    },
    {
      label: t('SchoolLifeSharing'),
      value: EventCategory.SchoolLifeSharing
    },
    {
      label: t('CodingEducation'),
      value: EventCategory.CodingEducation
    },
    {
      label: t('CareerPath'),
      value: EventCategory.CareerPath
    },
    {
      label: t('Research'),
      value: EventCategory.Research
    }
  ];

  const facultyOptions: FacultyOptionsProps[] = [
    {
      label: t('Basic'),
      value: FacultyLevelCategory.Basic
    },
    {
      label: t('Intermediate'),
      value: FacultyLevelCategory.Intermediate
    },
    {
      label: t('Grandmaster'),
      value: FacultyLevelCategory.Grandmaster
    }
  ];
  return defaultValue === 'faculty' ? facultyOptions : eventOptions;
};

const SegmentedRadioGroup: React.FC<SegmentedRadioGroupProps> = ({ segmented = '', setSegmented, options = [], segmentedDom, style }) => {
  const isiPad = useMobile('xl');
  return (
    <div className={styles.segmentedRadioGroup} style={style}>
      {isiPad ? (
        <Radio.Group optionType="button" buttonStyle="solid" onChange={(e: RadioChangeEvent) => setSegmented(e?.target?.value as SegmentedValue)} value={segmented} className={styles.radioGroup}>
          <Space style={{ width: '100%' }} direction={isiPad ? 'vertical' : 'horizontal'}>
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
