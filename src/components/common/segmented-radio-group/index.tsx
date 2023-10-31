'use client';
import { EventCategory, FacultyLevelCategory } from '@/apis/strapi-client/define';
import { useLang } from '@/hoc/with-intl/define';
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
  isRadioGroup?: boolean;
  value: SegmentedValue;
  setValue: (value: SegmentedValue) => void;
  options: EventOptionsProps[] | FacultyOptionsProps[];
  segmentedDom?: React.Ref<HTMLDivElement>;
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

const SegmentedRadioGroup: React.FC<SegmentedRadioGroupProps> = ({ isRadioGroup = false, value = '', setValue, options = [], segmentedDom }) => {
  return (
    <div className={styles.segmentedRadioGroup}>
      {isRadioGroup ? (
        <Radio.Group optionType="button" buttonStyle="solid" onChange={(e: RadioChangeEvent) => setValue(e?.target?.value as SegmentedValue)} value={value} className={styles.radioGroup}>
          <Space style={{ width: '100%' }} direction={'vertical'}>
            {options?.map((option) => (
              <Radio style={{ width: '100%' }} key={option?.value} value={option?.value}>
                {option?.label}
              </Radio>
            ))}
          </Space>
        </Radio.Group>
      ) : (
        <Segmented ref={segmentedDom} style={{ backgroundColor: '#fff' }} block value={value} options={options} onChange={(value: SegmentedValue) => setValue(value)} />
      )}
    </div>
  );
};

export default SegmentedRadioGroup;
