import React, { useEffect, useState } from 'react';
import { Space, Divider } from 'antd';
import styles from './index.module.scss';

interface IProps {
  dots: number,
  goTo: (index: number) => void
}
const CarouselDots: React.FC<IProps> = ({ dots, goTo }) => {
  const [dotsArr, setDotsArr] = useState<number[]>([]);

  const [activeIndex, setActiveIndex] = useState(0);

  const onClick = (index: number) => {
    goTo(index);
    setActiveIndex(index);
  };

  useEffect(() => {
    const arr: number[] = [];
    for (let i = 0; i < dots; i++) {
      arr.push(i);
    }
    setDotsArr(arr);
  }, [dots]);

  return (<>
    <ul className={styles.carouselDots}>
      {
        dotsArr.map((dots: any, index: number) => (<li key={index} onClick={() => onClick(index)}>
          <Space direction={'vertical'} className={`${styles.li} ${activeIndex === index && styles.active}`} size={2}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <Divider className={styles.divider} />
            <span>page</span>
          </Space>
        </li>))
      }
    </ul>
  </>);
};

export default CarouselDots;