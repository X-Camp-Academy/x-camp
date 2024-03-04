import { DownCircleOutlined } from '@ant-design/icons';
import { Collapse, CollapseProps } from 'antd';
import { useEffect, useRef, useState } from 'react';
import styles from './index.module.scss';
const { Panel } = Collapse;
interface LearningTracksMobileProps {
  title: string;
  titleIconUrl: string;
  content: string;
  imageUrlMobile: string;
  defaultOpen: boolean;
}
const LearningTracksMobile = ({ imageUrlMobile, title, titleIconUrl, content, defaultOpen }: LearningTracksMobileProps) => {
  const [activityKey, setActivityKey] = useState<string[]>(defaultOpen ? [title] : []);
  const collapseProps: CollapseProps = {
    expandIconPosition: 'end',
    expandIcon: ({ isActive }) => <DownCircleOutlined rotate={isActive ? 180 : 0} style={{ color: '#333', fontSize: 18 }} />,
    onChange: (key) => setActivityKey(key as string[])
  };
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ele = backgroundRef.current?.querySelector('.ant-collapse-header');
    if (activityKey.length > 0) {
      ele?.setAttribute('style', `background-image: url(${imageUrlMobile});background-position:0;height:160px;border-bottom: none`);
    } else {
      ele?.setAttribute('style', `background-image: url(${imageUrlMobile});background-position:0 -500px;height:77px;border-bottom: 3px solid #FFAD11;`);
    }
  }, [activityKey]);
  return (
    <div className={`${styles.learningTracks} container`} ref={backgroundRef}>
      <Collapse activeKey={activityKey} {...collapseProps} ghost>
        <Panel
          key={title}
          header={
            <div className={styles.header}>
              {activityKey.length === 0 && (
                <>
                  <img src={titleIconUrl} alt="" className={styles.icon} />
                  <div className={styles.title}>{title}</div>
                </>
              )}
            </div>
          }
        >
          <div className={styles.title}>{title}</div>
          <div className={styles.content}>{content}</div>
        </Panel>
      </Collapse>
    </div>
  );
};

export default LearningTracksMobile;
