import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import { Button, Col, Pagination, Row, Space, Typography } from "antd";
import { GetNewEvent } from "@/apis/strapi-client/define";
import { formatTimezone, getTransResult } from "@/utils/public";
import { useLang } from "@/hoc/with-intl/define";
import { StrapiMedia, StrapiResponseDataItem } from "@/apis/strapi-client/strapiDefine";
import { SegmentedValue } from "antd/es/segmented";
import SegmentedRadioGroup from "@/components/common/segmented-radio-group";
import { NEWS_TYPES } from "../define";
import ColorfulCard from "@/components/common/colorful-card";
import Link from "next/link";
import { RightCircleOutlined } from "@ant-design/icons";


const { Title, Text } = Typography;
interface NewsCardProps {
  current: number;
  setCurrent: React.Dispatch<React.SetStateAction<number>>;
  newEventData: StrapiResponseDataItem<GetNewEvent>[] | undefined;
  pageSize: number;
  total?: number;
}

const NewsCard: React.FC<NewsCardProps> = ({ current, setCurrent, newEventData, pageSize, total }) => {
  const { lang } = useLang();
  const [segmented, setSegmented] = useState<SegmentedValue>("School Experience");

  const getTranslateImg = (imgZh: StrapiMedia, imgEn: StrapiMedia) => {
    return getTransResult(
      lang,
      imgZh.data?.attributes.url,
      imgEn.data?.attributes.url,
    );
  };

  useEffect(() => {
    console.log(segmented);
  }, [segmented]);
  return (
    <div className={styles.content}>
      <div className={"container"}>
        <SegmentedRadioGroup
          segmented={segmented}
          setSegmented={setSegmented}
          data={NEWS_TYPES}
        />

        <div className={styles.partner}>
          <Row gutter={[32, 48]}>
            {newEventData?.map((item, index) => {
              const { utcTime: startTime } = formatTimezone(
                item?.attributes?.startDateTime
              );
              return (
                <Col key={index} xs={24} sm={24} md={24} lg={8}>
                  <ColorfulCard border={"bottom"} index={index} animate={false}>
                    <Space direction={"vertical"} className={styles.card}>
                      <img
                        alt=""
                        src={getTranslateImg(item.attributes?.imgZh, item.attributes?.imgEn)}
                      />
                      <Title className={styles.title} ellipsis={{ rows: 2 }}>
                        {getTransResult(
                          lang,
                          item?.attributes?.titleZh,
                          item?.attributes?.titleEn
                        )}
                      </Title>

                      <Space align="center">

                        <Text className={styles.date}>
                          {item?.attributes?.editor}
                          {startTime.format("YYYY-MM-DD")}
                        </Text>


                        <Link href={`/resources/${item?.id}`}>
                          <Button
                            type="link"
                            className={styles.btn}
                            icon={<RightCircleOutlined />}
                          />
                        </Link>
                      </Space>
                    </Space>
                  </ColorfulCard>
                </Col>
              );
            })}
          </Row>
        </div>

        <Pagination
          total={total}
          className={styles.pagination}
          pageSize={pageSize}
          current={current}
          onChange={(page) => setCurrent(page)}
        />
      </div>
    </div>
  );
};

export default NewsCard;
