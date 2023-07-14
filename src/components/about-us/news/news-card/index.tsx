import React from "react";
import styles from "./index.module.scss";
import { Col, Pagination, Row, Space } from "antd";
import { GetNewEvent } from "@/apis/strapi-client/define";
import { formatTimezone, getTransResult } from "@/utils/public";
import { useLang } from "@/hoc/with-intl/define";
import { StrapiResponseDataItem } from "@/apis/strapi-client/strapiDefine";

interface Props {
  current: number;
  setCurrent: React.Dispatch<React.SetStateAction<number>>;
  newEventData: StrapiResponseDataItem<GetNewEvent>[] | undefined;
}

const NewsCard = ({ current, setCurrent, newEventData }: Props) => {
  const { lang } = useLang();
  const pageSize = 3;

  return (
    <div className={styles.content}>
      <div className={"container"}>
        <div className={styles.partner}>
          <Row gutter={[16, 16]}>
            {newEventData?.map((item, index) => {
              const { utcTime: startTime } = formatTimezone(
                item?.attributes?.startDateTime
              );
              return (
                <Col key={index}>
                  <Space direction={"vertical"} className={styles.card}>
                    <img
                      src={item?.attributes?.img?.data?.attributes?.url}
                      alt=""
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
          total={newEventData?.length}
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
