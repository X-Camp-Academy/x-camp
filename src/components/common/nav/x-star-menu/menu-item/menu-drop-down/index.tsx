import { useMobile } from '@/utils';
import { useScroll } from 'ahooks';
import { Col, Row, Space } from 'antd';
import classNames from 'classnames/bind';
import React, { useMemo } from 'react';
import { XStarMenuItemType } from '../..';
import styles from './index.module.scss';

const cx = classNames.bind(styles);

interface Props {
  className?: string;
  items?: React.ReactNode[];
  dropdown?: XStarMenuItemType['dropdown'];
  showBtn?: boolean;
}

const MenuDropdown = ({ className, items, dropdown, showBtn = true }: Props) => {
  const isiPad = useMobile('xl');
  const scroll = useScroll(document);
  const divideLength = (items?.length || 0) <= 4 || isiPad ? 2 : 3;
  const dividedItems = useMemo(() => {
    // 分为若干列，小于等于4项则2列，否则3列
    const result: React.ReactNode[][] =
      items?.reduce((pre: React.ReactNode[][], cur, index) => {
        const rowIndex = Math.floor(index / divideLength);
        if (!pre?.[rowIndex]) {
          pre[rowIndex] = [];
        }
        pre[rowIndex].push(cur);
        return pre;
      }, []) || [];
    return result;
  }, [items, isiPad]);

  return (
    <div
      className={cx(className, styles.dropdown)}
      style={{
        boxShadow: scroll?.top === 0 ? '0px 9px 20px -4px #D8D8D8' : '0px 9px 20px -4px #D8D8D8, 0px 9px 25px -4px #D8D8D8'
      }}
    >
      <Space
        className={cx('container', styles.dropdownContainer)}
        style={isiPad ? { paddingLeft: 16, paddingRight: 16 } : dropdown?.left?.key === '/courses' ? { paddingLeft: 96, paddingRight: 96 } : {}}
      >
        {dropdown?.left && (
          <Space direction="vertical" className={styles.left} size={'middle'}>
            <div className={styles.title}>{dropdown?.left?.title}</div>
            {showBtn && (
              <div className={styles.btn}>
                <span>{dropdown?.left?.btn}</span>
              </div>
            )}
          </Space>
        )}
        <Space direction="vertical" className={styles.items}>
          {dividedItems?.map((row, rowIndex) => (
            <Row key={rowIndex} gutter={divideLength * 16}>
              {row?.map((item, colIndex) => (
                <Col key={colIndex} span={24 / divideLength} className={styles.item}>
                  {item}
                </Col>
              ))}
            </Row>
          ))}
        </Space>
        {dropdown?.right && (
          <div
            className={styles.right}
            onClick={() => {
              dropdown?.right?.action?.();
            }}
          >
            <div className={styles.title}>{dropdown?.right?.title}</div>
            <div className={styles.description}>{dropdown?.right?.description}</div>
          </div>
        )}
      </Space>
    </div>
  );
};

export default MenuDropdown;
