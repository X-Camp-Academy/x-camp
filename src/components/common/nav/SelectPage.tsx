import React, { useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Select } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { useGetUserSearchMap } from '@/apis/strapi-client/strapi';
import styles from './SelectPage.module.scss';

interface ValueType {
  label: string;
  value: string;
}

const SelectPage: React.FC = () => {
  const [options, setOptions] = useState<ValueType[]>([]);
  const router = useRouter();
  const { data: searchMap } = useGetUserSearchMap();
  const searchUserMap = useMemo(
    () =>
      searchMap?.keywords
        ? Object.entries(searchMap.keywords).map(([label, value]) => ({
          label,
          value,
        }))
        : [],
    [searchMap]
  );
  const handleSearch = (value: string) => {
    if (!value) {
      setOptions([]);
      return;
    }
    const filteredOptions = searchUserMap.filter((option) =>
      option.label.toLowerCase().includes(value.toLowerCase())
    );
    setOptions(filteredOptions);
  };
  const handleSelect = (keyValue: ValueType) => {
    router.push(keyValue.value as any);
  };
  return (
    <Select
      value={[]}
      mode="multiple"
      labelInValue
      filterOption={false}
      onSearch={handleSearch}
      onSelect={handleSelect}
      className={styles.select}
      suffixIcon={<SearchOutlined style={{ color: '#d9d9d9' }} />}
      notFoundContent={null}
      options={options || []}
      defaultActiveFirstOption={false}
    />
  );
};

export default SelectPage;
