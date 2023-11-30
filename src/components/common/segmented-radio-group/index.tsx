'use client';
import { EventCategory, FacultyLevelCategory } from '@/apis/strapi-client/define';
import { CourseType } from '@/components/courses/define';
import { CourseOptionsProps } from '@/components/courses/public';
import { useLang } from '@/hoc/with-intl/define';
import { Radio, RadioChangeEvent, Segmented, Space } from 'antd';
import { SegmentedValue } from 'antd/es/segmented';
import React from 'react';
import styles from './index.module.scss';

export interface EventFacultyOptions<T> {
  label: React.ReactNode;
  value: T;
}

export interface SegmentedRadioGroupProps {
  isRadioGroup?: boolean;
  value: SegmentedValue;
  setValue: (value: SegmentedValue) => void;
  options: EventFacultyOptions<EventCategory>[] | EventFacultyOptions<FacultyLevelCategory>[] | CourseOptionsProps<CourseType>[];
  id?: string;
}

export const useEventFacultyOptions = (defaultValue: 'event' | 'faculty') => {
  const { format: t } = useLang();
  const eventOptions: EventFacultyOptions<EventCategory>[] = [
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

  const facultyOptions: EventFacultyOptions<FacultyLevelCategory>[] = [
    {
      label: t('Beginner'),
      value: FacultyLevelCategory.Beginner
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

  const optionsMap = {
    event: eventOptions,
    faculty: facultyOptions
  };
  return optionsMap[defaultValue];
};

const SegmentedRadioGroup: React.FC<SegmentedRadioGroupProps> = ({ isRadioGroup = false, value = '', setValue, options = [], id }) => {
  return (
    <div className={styles.radioGroupContainer}>
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
        <Segmented id={id} style={{ backgroundColor: '#fff' }} block value={value} options={options} onChange={(value: SegmentedValue) => setValue(value)} />
      )}
    </div>
  );
};

export default SegmentedRadioGroup;
