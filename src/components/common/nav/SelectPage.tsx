import { useGetUserSearchMap } from '@/apis/strapi-client/strapi';
import { SearchOutlined } from '@ant-design/icons';
import { Select } from 'antd';
import { useRouter } from 'next/navigation';
import React, { useMemo, useState } from 'react';
interface ValueType {
  label: string;
  value: string;
}
const SelectPage = () => {
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
      style={{ width: '20vw', maxWidth: 200 }}
      suffixIcon={<SearchOutlined style={{ color: '#d9d9d9' }} />}
      notFoundContent={null}
      options={options || []}
      defaultActiveFirstOption={false}
    />
  );
};

export default SelectPage;
