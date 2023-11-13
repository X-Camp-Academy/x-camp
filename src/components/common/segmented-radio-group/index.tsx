'use client';
import { EventCategory, FacultyLevelCategory } from '@/apis/strapi-client/define';
import { CourseTypes } from '@/components/courses/define';
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

export interface CourseOptionsProps {
  label: CourseTypes;
  value: CourseTypes;
}

export interface SegmentedRadioGroupProps {
  isRadioGroup?: boolean;
  value: SegmentedValue;
  setValue: (value: SegmentedValue) => void;
  options: EventOptionsProps[] | FacultyOptionsProps[] | CourseOptionsProps[];
  id?: string;
}

export const useEventOptions = (defaultValue: 'event' | 'faculty' | 'course') => {
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

  const courseOptions: CourseOptionsProps[] = Object.values(CourseTypes).map((item) => {
    return {
      label: item,
      value: item
    };
  });

  const optionsMap = {
    event: eventOptions,
    faculty: facultyOptions,
    course: courseOptions
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
