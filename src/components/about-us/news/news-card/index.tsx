import React, { useState } from "react";
import styles from "./index.module.scss";
import { Col, Pagination, Row, Space } from "antd";
import { useGetNewEvent } from "@/apis/strapi-client/strapi";
import { NewEventCategory } from "@/apis/strapi-client/define";
import { getTransResult } from "@/utils/public";
import { useLang } from "@/hoc/with-intl/define";
import dayjs from "dayjs";

const NewsCard = () => {
  const { lang } = useLang();
  const pageSize = 3;
  const [current, setCurrent] = useState<number>(1);
  const [tag, setTag] = useState<NewEventCategory>(NewEventCategory.News);

  const { data: newEventData, run } = useGetNewEvent({
    tag,
    current,
    pageSize,
  });

  const paginationOnChange = (page: number) => {
    setCurrent(page);
    run({
      populate: "*",
      sort: ["order:desc"],
      filters: {
        tags: {
          $eq: tag,
        },
      },
      pagination: {
        page: current,
        pageSize,
      },
    });
  };


  return (
    <div className={styles.content}>
      <div className={"container"}>
        <div className={styles.partner}>
          <Row gutter={[16, 16]}>
            {newEventData?.data?.map((item, index) => (
              <Col key={index}>
                <Space direction={"vertical"} className={styles.card}>
                  <img
                    src={item?.attributes?.img?.data?.attributes?.url}
                    alt=""
                  />
                  <Space className={styles.description} size={"middle"}>
                    {item?.attributes?.editor}
                    {dayjs(item?.attributes?.datetime).format("YYYY-MM-DD")}
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
            ))}
          </Row>
        </div>

        <Pagination
          defaultCurrent={1}
          total={newEventData?.meta?.pagination?.pageCount}
          className={styles.pagination}
          pageSize={pageSize}
          current={current}
          onChange={(page) => paginationOnChange(page)}
        />
      </div>
    </div>
  );
};

export default NewsCard;
