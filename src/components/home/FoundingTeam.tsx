'use client';
import React from 'react';
import { Space, Tag, Button, Image, Typography } from 'antd';
import styles from './FoundingTeam.module.scss';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

const { Title, Paragraph, Text } = Typography;

const FoundingTeam = () => {
  const founders = [
    {
      name: 'Charlie Guo',
      tags: ['Co-founder', 'Principal of X-Camp Academy'],
      desc: 'Charlie has been working in a large tech company for more than 10 years. He earned his PhD. in Artificial Intelligence from UCLA with more than 20 papers published in international journals and more than10 patents granted. Dr. Guo is also a founding partner of the Himalaya Angel Fund, his investment areas include big data, artificial intelligence and augmented reality.',
      bigImg: '/image/home/Charlie-big.png',
      smallImg: '/image/home/Yuan-small.png'
    },
    {
      name: 'Yuan Xu',
      tags: ['Co-founder of X-Camp Academy'],
      desc: 'Extensive experience in a revenue-critical large scale distributed system team. In the last 5 years, Yuan who led the teaching team has helped 200+ students reach USACO Silver and above, including 5 in US Training camp 2020-2022 (only around 25 contestants were selected for the US Camp).',
      bigImg: '/image/home/Yuan-big.png',
      smallImg: '/image/home/Charlie-small.png'
    },
  ];
  const initialFounder = founders[0];
  return (
    <div className={styles.FoundingTeam}>
      <Space direction='vertical' align='center'>
        <Title className={styles.title}>Founding Team</Title>
        <Space>
          <Space direction='vertical' className={styles.founderLeft}>
            <Title level={2} className={styles.name}>{initialFounder.name}</Title>
            <Space>
              {
                initialFounder.tags.map(item => {
                  return <Tag key={item} color="#FFAD11" className={styles.tags}>{item}</Tag>
                })
              }
            </Space>
            <Paragraph className={styles.paragraph}>{initialFounder.desc}</Paragraph>
            <Space>
              <Button type="primary" ghost={true} shape="circle">
                <LeftOutlined />
              </Button>
              <Button type="primary" shape="circle">
                <RightOutlined />
              </Button>
            </Space>
          </Space>

          <Space>
            <Image
              src={initialFounder?.bigImg}
              alt="image"
              preview={false}
              width={380}
              height={430}
            />
            <Image
              src={initialFounder?.smallImg}
              alt="image"
              preview={false}
              width={250}
              height={430}
            />
          </Space>
        </Space>
      </Space>
    </div>
  )
}

export default FoundingTeam;
