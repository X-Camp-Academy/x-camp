import React from "react";
import styles from "./index.module.scss";
import { Col, Pagination, Row, Space } from "antd";
import { GetNewEvent } from "@/apis/strapi-client/define";
import { formatTimezone, getTransResult } from "@/utils/public";
import { useLang } from "@/hoc/with-intl/define";
import { StrapiMedia, StrapiResponseDataItem } from "@/apis/strapi-client/strapiDefine";

interface NewsCardProps {
  current: number;
  setCurrent: React.Dispatch<React.SetStateAction<number>>;
  newEventData: StrapiResponseDataItem<GetNewEvent>[] | undefined;
  pageSize: number;
  total?: number;
}

const NewsCard: React.FC<NewsCardProps> = ({ current, setCurrent, newEventData, pageSize, total }) => {
  const { lang } = useLang();

  const getTranslateImg = (imgZh: StrapiMedia, imgEn: StrapiMedia) => {
    return getTransResult(
      lang,
      imgZh.data?.attributes.url,
      imgEn.data?.attributes.url,
    )
  }

  return (
    <div className={styles.content}>
      <div className={"container"}>
        <div className={styles.partner}>
          <Row gutter={[32, 48]}>
            {newEventData?.map((item, index) => {
              const { utcTime: startTime } = formatTimezone(
                item?.attributes?.startDateTime
              );
              return (
                <Col key={index} xs={24} sm={24} md={24} lg={8}>
                  <Space direction={"vertical"} className={styles.card}>
                    <img
                      alt=""
                      src={getTranslateImg(item.attributes?.imgZh, item.attributes?.imgEn)}
                    />
                    <Space className={styles.description} size={"middle"}>
                      {item?.attributes?.editor}
                      {startTime.format("YYYY-MM-DD")}
                    </Space>
                    <div className={styles.title}>
                      {getTransResult(
                        lang,
                        item?.attributes?.titleZh,
                        item?.attributes?.titleEn
                      )}
                    </div>
                  </Space>
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
