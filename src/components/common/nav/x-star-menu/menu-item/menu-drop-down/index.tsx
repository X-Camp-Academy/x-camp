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
  const scroll = useScroll(document);
  const divideLength = (items?.length || 0) <= 6 ? 3 : 2;
  const dividedItems = useMemo(() => {
    // 分为若干列，大于6项则3列，否则2列
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
  }, [items]);

  return (
    <div
      className={cx(className, styles.dropdown)}
      style={{
        boxShadow: scroll?.top === 0 ? '0px 9px 20px -4px #D8D8D8' : '0px 9px 20px -4px #D8D8D8, 0px 9px 25px -4px #D8D8D8'
      }}
    >
      <Space className={cx('container', styles.dropdownContainer)} style={dropdown?.left?.key === '/courses' ? { paddingLeft: 100, paddingRight: 100 } : {}}>
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
