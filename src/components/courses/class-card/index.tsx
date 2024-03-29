import { useMobile } from '@/utils';
import { ClockCircleOutlined, RightCircleOutlined } from '@ant-design/icons';
import { Button, Card, Space, Typography } from 'antd';
import ColorfulCard, { ColorfulCardProps } from '@/components/common/colorful-card';
import styles from './index.module.scss';

const { Title, Paragraph } = Typography;

type ClassCardProps = Omit<ColorfulCardProps, 'children'> & {
  index: number;
  title: string;
  href: string;
  list: string[];
  time: string;
  bilingual?: boolean;
};

const ClassCard = ({ index, title, href, list, time, bilingual }: ClassCardProps) => {
  const isMobile = useMobile();
  return (
    <ColorfulCard border={'bottom'} index={index} animate={false} className={styles.colorfulCard}>
      <a href={href}>
        <Card className={styles.card} >
          <Space
            direction="vertical"
            style={{
              width: '100%',
              height: '100%',
              justifyContent: 'space-between'
            }}
          >
            <Title ellipsis={{ rows: 3 }} className={styles.cardTitle}>{title}</Title>
            <Paragraph ellipsis={{ rows: 3 }}>
              {list?.map((v) => (
                <div key={v} className={styles.list}>
                  {v}
                </div>
              ))}
            </Paragraph>
            <Space className={styles.bottom}>
              <Space className={styles.week} size={5}>
                <ClockCircleOutlined />
                <span>{time}</span>
              </Space>
              <Button icon={<RightCircleOutlined style={{ fontSize: isMobile ? 18 : 24 }} />} className={styles.link} type="link" />
            </Space>
          </Space>
          {bilingual && <div className={styles.bilingual}>BILINGUAL</div>}
        </Card>
      </a>
    </ColorfulCard>
  );
};

export default ClassCard;
