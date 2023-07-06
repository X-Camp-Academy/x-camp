import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import { news } from "./define";
import ColorfulCard from "@/components/common/colorful-card";
import { Button, Col, Pagination, Row, Space, Typography } from "antd";
import {
  FieldTimeOutlined,
  PercentageOutlined,
  RightCircleOutlined,
} from "@ant-design/icons";
import { useGetNewEvent } from "@/apis/strapi-client/strapi";
import { NewEventCategory } from "@/apis/strapi-client/define";
import { StrapiMedia } from "@/apis/strapi-client/strapiDefine";
const { Title, Paragraph, Text } = Typography;


const NewsCard = () => {


  const pageSize = 3;
  const [current, setCurrent] = useState<number>(1);
  const [tag, setTag] = useState<NewEventCategory>(NewEventCategory.News);


  const { data: newEventData, run } = useGetNewEvent({
    tag,
    current,
    pageSize
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
  }

  const getImgUrl = (img: StrapiMedia) => {
    return img?.data?.attributes?.url;
  };



  return (
    <div className={styles.content}>
      <div className={"container"}>
        <div className={styles.partner}>
          <Space direction="vertical" style={{ width: "100%" }} size={52}>
            {newEventData?.data?.map((item, index) => (
              <ColorfulCard
                key={index}
                border={"bottom"}
                index={index}
                animate={false}
              >
                <div className={styles.card}>
                  <div className={styles.img}>
                    <img src={getImgUrl(item?.attributes?.img)} alt="img" style={{ width: "100%" }} />
                  </div>
                  <div className={styles.cardContent}>
                    <Title className={styles.cardTitle}>{item?.attributes?.titleZh}</Title>
                    <Paragraph
                      className={styles.cardDescription}
                      ellipsis={{ rows: 2 }}
                    >
                      {item?.attributes?.descriptionZh}
                    </Paragraph>

                    <Row justify="space-around" style={{ marginTop: 80, width: "100%" }}>
                      <Col span={20}>
                        <Space size={30}>
                          <Text type="secondary">
                            <FieldTimeOutlined /> {item?.attributes?.updatedAt}
                          </Text>

                          <Text type="secondary">
                            <PercentageOutlined /> {item?.attributes?.editor}
                          </Text>
                        </Space>
                      </Col>
                      <Col span={4} style={{ textAlign: "end" }}>
                        <Button icon={<RightCircleOutlined />} type="link" />
                      </Col>
                    </Row>
                  </div>
                </div>
              </ColorfulCard>
            ))}
          </Space>
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
