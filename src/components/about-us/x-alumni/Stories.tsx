"use client";
import React, { useState } from "react";
import { Space, Row, Col, Card, Image, Button, Typography } from "antd";
import styles from "./Stories.module.scss";
import ColorfulCard from "@/components/common/colorful-card";
import { RightOutlined } from "@ant-design/icons";
import { useLang } from "@/hoc/with-intl/define";
import { NewEventCategory } from "@/apis/strapi-client/define";
import { useGetNewEvent } from "@/apis/strapi-client/strapi";
import { StrapiMedia } from "@/apis/strapi-client/strapiDefine";
import { getTransResult } from "@/utils/public";

const { Title, Paragraph, Text } = Typography;

const Stories: React.FC = () => {
  const pageSize = 3;
  const { lang, format: t } = useLang();
  const [current, setCurrent] = useState<number>(1);
  const [tag, setTag] = useState<NewEventCategory>(NewEventCategory.Event);

  const { data: newEventData } = useGetNewEvent({
    tag,
    current,
    pageSize,
  });

  const getTranslateImg = (imgZh: StrapiMedia, imgEn: StrapiMedia) => {
    return getTransResult(
      lang,
      imgZh.data?.attributes.url,
      imgEn.data?.attributes.url
    );
  };

  return (
    <div className={styles.storiesContainer}>
      <div className="container">
        <Space className={styles.topSpace}>
          <Space direction="vertical">
            <Title className={styles.title}>{t("XAlumniEvents")}</Title>
            <Paragraph className={styles.paragraph}>
              {t("XAlumniEvents.Desc")}
            </Paragraph>
          </Space>
          <button className={styles.button}>
            {t("ViewMoreEvents")} <RightOutlined />
          </button>
        </Space>

        <Row gutter={32} className={styles.row}>
          {newEventData?.data?.map((item, index) => (
            <Col key={index} xs={24} sm={24} md={8}>
              <ColorfulCard
                border="bottom"
                index={index}
                className={styles.colorfulCard}
              >
                <Card
                  className={styles.card}
                  bodyStyle={{
                    padding: 0,
                  }}
                >
                  <Space direction="vertical" size={32}>
                    <Image
                      alt=""
                      preview={false}
                      src={getTranslateImg(
                        item.attributes.imgZh,
                        item.attributes.imgEn
                      )}
                      className={styles.cardImage}
                    />

                    <Title ellipsis={{ rows: 2 }} className={styles.cardTitle}>
                      {getTransResult(
                        lang,
                        item?.attributes?.titleZh,
                        item?.attributes?.titleEn
                      )}
                      <Button
                        type="primary"
                        size="small"
                        ghost={true}
                        shape="circle"
                        className={styles.cardButton}
                      >
                        <RightOutlined />
                      </Button>
                    </Title>

                    <Paragraph
                      ellipsis={{ rows: 3 }}
                      className={styles.cardParagraph}
                    >
                      {getTransResult(
                        lang,
                        item?.attributes.descriptionZh,
                        item?.attributes.descriptionEn
                      )}
                    </Paragraph>
                  </Space>
                </Card>
              </ColorfulCard>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Stories;
