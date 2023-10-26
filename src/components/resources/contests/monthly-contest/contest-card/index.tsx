import { useLang } from '@/hoc/with-intl/define';
import { useMobile } from '@/utils';
import { formatTimezone, getTransResult } from '@/utils/public';
import { CalendarOutlined } from '@ant-design/icons';
import { Divider, Popover, Space, Typography } from 'antd';
import classNames from 'classnames/bind';
import dayjs, { Dayjs } from 'dayjs';
import { ContestsByMonthInterface } from '../../define';
import styles from './index.module.scss';

const cx = classNames.bind(styles);
const { Paragraph } = Typography;

interface Props {
  data: ContestsByMonthInterface;
}

const ContestCard = ({ data }: Props) => {
  const { lang } = useLang();
  const isMobile = useMobile();
  return (
    <div className={styles.card}>
      <div className={styles.month}>{data?.month}</div>
      <Space size={'middle'} direction="vertical" className={cx(styles.content, styles.contentCenter)}>
        {data?.contests?.map((v, index) => {
          const { utcTime: startDateTime } = formatTimezone(v?.attributes?.startDateTime);
          const { utcTime: endDateTime } = formatTimezone(v?.attributes?.endDateTime);
          const noInvalid = (dateTime: Dayjs) => dayjs(dateTime).toString() !== 'Invalid Date';
          return (
            <Popover
              title={
                isMobile ? null : (
                  <div className={styles.popoverTitle}>
                    <div className={styles.left}>
                      <div className={styles.title}>{getTransResult(lang, v?.attributes?.titleZh, v?.attributes?.titleEn)}</div>
                      <Space className={styles.time}>
                        <CalendarOutlined />

                        <span>
                          {noInvalid(startDateTime) && dayjs(startDateTime).format('ddd, MMM DD')}
                          {noInvalid(endDateTime) && `-${dayjs(endDateTime).format('ddd, MMM DD')}`}
                        </span>
                      </Space>
                    </div>
                    <div className={styles.right}>{v?.attributes?.contestLogo?.data && <img src={v?.attributes?.contestLogo?.data?.attributes?.url} alt="" />}</div>
                  </div>
                )
              }
              content={
                isMobile ? null : (
                  <div className={styles.popoverContent}>
                    <Divider className={styles.divider} />
                    <div className={styles.description}>{'Description'}</div>
                    <div className={styles.descriptionContent}>
                      <Paragraph ellipsis={{ rows: 8 }}>{getTransResult(lang, v?.attributes?.descriptionZh, v?.attributes?.descriptionEn)}</Paragraph>
                    </div>
                  </div>
                )
              }
              arrow={false}
              placement="right"
              key={index}
            >
              <div
                className={cx(styles.item, index % 2 === 1 && styles.itemEven)}
                onClick={() => {
                  // 滚动到对应的比赛
                  const element = document.getElementById(`contest-${v?.id}`);
                  element?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center',
                    inline: 'nearest'
                  });
                }}
              >
                <div className={styles.title}>{getTransResult(lang, v?.attributes?.titleZh, v?.attributes?.titleEn)}</div>
                <div className={styles.description}>{getTransResult(lang, v?.attributes?.contestTitleExplanationZh, v?.attributes?.contestTitleExplanationEn)}</div>
                <div className={styles.bottom}>
                  <div className={styles.time}>
                    {noInvalid(startDateTime) && dayjs(startDateTime).format('MMM DD')}
                    {noInvalid(endDateTime) && `-${dayjs(endDateTime).format('MMM DD')}`}
                  </div>
                  {v?.attributes?.contestLogo?.data && (
                    <div className={styles.logo}>
                      <img src={v?.attributes?.contestLogo?.data?.attributes?.url} alt="" />
                    </div>
                  )}
                </div>
              </div>
            </Popover>
          );
        })}
      </Space>
    </div>
  );
};

export default ContestCard;
