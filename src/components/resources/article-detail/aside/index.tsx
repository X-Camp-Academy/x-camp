import { EventCategory, GetNewEvent } from '@/apis/strapi-client/define';
import { useGetNewEvent } from '@/apis/strapi-client/strapi';
import { StrapiMedia, StrapiResponseDataItem } from '@/apis/strapi-client/strapiDefine';
import ActivityCalendar from '@/components/common/activity-calendar';
import ColorfulCard from '@/components/common/colorful-card';
import { useLang } from '@/hoc/with-intl/define';
import { formatTimezone, getTransResult, monthNameEn } from '@/utils/public';
import { AlignRightOutlined, RightCircleOutlined } from '@ant-design/icons';
import { Button, Card, Image, Row, Space, Typography } from 'antd';
import dayjs, { Dayjs } from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';
dayjs.extend(isBetween);

const { Title, Paragraph, Text } = Typography;

const ArticleSider: React.FC<{
  eventCategory: EventCategory | undefined;
  articleId: number;
}> = ({ eventCategory: EventCategory, articleId }) => {
  const { lang } = useLang();
  const router = useRouter();

  const [selectedDate, setSelectedDate] = useState<string>(dayjs().toString());
  const [eventThreeCard, setEventThreeCard] = useState<StrapiResponseDataItem<GetNewEvent>[]>([]); //日历下面三张卡片
  const [filterDateEventList, setFilterDateEventList] = useState<
    {
      titleZh?: string;
      titleEn?: string;
      descriptionZh?: string;
      descriptionEn?: string;
      startDateTime?: string;
      endDateTime?: string;
    }[]
  >([]);

  const [eventDate, setEventDate] = useState<
    {
      startDateTime?: string;
      endDateTime?: string;
    }[]
  >([]);

  const { data: articleData } = useGetNewEvent({ manual: false });

  const judgeDate = (selectDate: Dayjs, startDateTime: string, endDateTime: string) => {
    if (endDateTime === '') {
      return dayjs(selectDate).isSame(dayjs(startDateTime), 'days');
    }
    return dayjs(selectDate).isBetween(dayjs(startDateTime), dayjs(endDateTime), 'days', '[]');
  };

  const filterSameDateEvent = (selectDate: string) => {
    if (articleData) {
      const updatedEventDate = articleData.data
        ?.filter((item) => judgeDate(dayjs(selectDate), item?.attributes?.startDateTime || '', item?.attributes?.endDateTime || ''))
        .map((filteredItem) => ({
          ...filteredItem?.attributes
        }));
      setFilterDateEventList(updatedEventDate);
    }
  };

  const filterSameEventCategory = (eventCategory: EventCategory | undefined) => {
    if (articleData) {
      const filteredData = articleData?.data?.filter((item) => item.attributes.eventCategory === eventCategory && item.id !== articleId).slice(0, 3);
      setEventThreeCard(filteredData);
    }
  };

  useEffect(() => {
    if (articleData) {
      const articleDate = articleData?.data?.map((item) => ({
        startDateTime: item.attributes?.startDateTime,
        endDateTime: item.attributes?.endDateTime
      }));
      setEventDate(articleDate);
      filterSameDateEvent(selectedDate);
      filterSameEventCategory(EventCategory);
    }
  }, [articleData]);

  useEffect(() => {
    if (selectedDate) {
      filterSameDateEvent(selectedDate);
    }
  }, [selectedDate]);

  const formatDate = (date: string) => {
    const dateInfo = dayjs(date);
    const month = dateInfo.month();
    if (lang === 'en') {
      return monthNameEn[month] + ' ' + dateInfo.date();
    } else {
      return dateInfo.format('MM月DD日');
    }
  };

  const formatHourMinute = (time: string) => {
    const timeInfo = dayjs(time);
    const formatString = 'HH:mm';
    return timeInfo.format(formatString);
  };

  const formatYMDTime = (date: string) => {
    const formatStringZh = 'YYYY年MM月DD日 HH:mm';
    const formatStringEn = ' DD, YYYY HH:mm';
    return getTransResult(lang, dayjs(date).format(formatStringZh), `${monthNameEn[dayjs(date).month()]}` + dayjs(date).format(formatStringEn));
  };

  const getTranslateImg = (imgZh: StrapiMedia, imgEn: StrapiMedia) => {
    return getTransResult(lang, imgZh.data?.attributes.url, imgEn.data?.attributes.url);
  };

  console.log(eventThreeCard);

  return (
    <div className={styles.content}>
      <div className={styles.calendarContainer}>
        <ActivityCalendar className={styles.activityCalendar} onSelectDate={(date) => setSelectedDate(date)} eventDate={eventDate} />
      </div>

      <div className={styles.inDayAcyvityContainer}>
        <Space direction="vertical" className={styles.calendarSpace}>
          <Space className={styles.spaceDate}>
            <Text className={styles.text}>{selectedDate && formatDate(selectedDate)}</Text>
            <div className={styles.line} />
          </Space>

          {filterDateEventList.length !== 0 && (
            <div style={{ maxHeight: 400, overflow: 'scroll' }}>
              {filterDateEventList?.map(
                (item) =>
                  item?.startDateTime && (
                    <Space key={item?.titleZh} direction="vertical" className={styles.calendarItem}>
                      <Text className={styles.itemDate}>
                        {/* 当活动跨天显示完整的年月日时间，否则仅显示时间 */}

                        {`${
                          dayjs(item?.startDateTime).isSame(dayjs(item?.endDateTime), 'day')
                            ? `${formatHourMinute(item?.startDateTime || '')} - ${formatHourMinute(item?.endDateTime || '')} `
                            : `${formatYMDTime(item?.startDateTime || '')} ${item?.endDateTime ? '-' + formatYMDTime(item?.endDateTime) : ''}`
                        } 
                            ${formatTimezone(item?.startDateTime).timezone} 
                          `}
                      </Text>
                      <Paragraph
                        className={styles.itemParagraph}
                        ellipsis={{
                          rows: 2,
                          tooltip: `${getTransResult(lang, item?.titleZh, item?.titleEn)} -  ${getTransResult(lang, item?.descriptionZh, item?.descriptionEn)}`
                        }}
                      >
                        {getTransResult(lang, item?.titleZh, item?.titleEn)}
                        <br /> -{getTransResult(lang, item?.descriptionZh, item?.descriptionEn)}
                      </Paragraph>
                      <div className={styles.itemLine} />
                    </Space>
                  )
              )}
            </div>
          )}
        </Space>
      </div>

      <div className={styles.activityCardContainer}>
        {eventThreeCard?.map((v, index) => {
          return (
            <ColorfulCard border={'bottom'} animate={false} index={index} className={styles.card} key={v?.id}>
              <Card style={{ cursor: 'pointer' }} onClick={() => router.push(`/resources/education-forum/${v.id}`)}>
                <Space direction="vertical" style={{ width: '100%' }}>
                  <Image src={getTranslateImg(v?.attributes?.imgZh, v?.attributes?.imgEn)} alt="image" preview={false} className={styles.image} />

                  <Title ellipsis={{ rows: 1 }} className={styles.title}>
                    {getTransResult(lang, v?.attributes?.titleZh, v?.attributes?.titleEn)}
                  </Title>
                  <Row
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      overflow: 'hidden'
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <AlignRightOutlined style={{ fontSize: 16 }} />
                      <Paragraph
                        className={styles.description}
                        ellipsis={{
                          rows: 1,
                          tooltip: getTransResult(lang, v?.attributes?.descriptionZh, v?.attributes?.descriptionEn)
                        }}
                      >
                        {getTransResult(lang, v?.attributes?.descriptionZh, v?.attributes?.descriptionEn)}
                      </Paragraph>
                    </div>
                    <a href={`/resources/education-forum/${v.id}`}>
                      <Button type="link" className={styles.btn} icon={<RightCircleOutlined />} style={{ color: '#FFAD11', fontSize: 24 }} />
                    </a>
                  </Row>
                </Space>
              </Card>
            </ColorfulCard>
          );
        })}
      </div>
    </div>
  );
};

export default ArticleSider;
