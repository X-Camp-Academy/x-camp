import React from "react";
import Link from "next/link";
import { Button, Col, Row, Space, Typography } from "antd";
import { AlignRightOutlined, RightCircleOutlined } from "@ant-design/icons";
import ColorfulCard from "@/components/common/colorful-card";
import XCollapse from "@/components/common/collapse";
import { useLang } from "@/hoc/with-intl/define";
import { getTransResult } from "@/utils/public";
import { NewEventCategory } from "@/apis/strapi-client/define";
import { useGetNewEvent } from "@/apis/strapi-client/strapi";
import styles from "./RecentActivities.module.scss";

const { Title, Text } = Typography;

const RecentActivities: React.FC = () => {
  const { format: t, lang } = useLang();
  const { data: newEventData } = useGetNewEvent({
    tag: NewEventCategory.Event,
    current: 1,
    pageSize: 25,
  });

  const RecentActivities = newEventData?.data?.filter(item => {
    return (
      item?.attributes?.startDateTime &&
      new Date(item?.attributes?.startDateTime).getTime() -
      new Date().getTime() >
      0
    );
  });

  return (
    <div className={styles.content}>
      <div className="container">
        <div>
          <div className={styles.title}>
            {t("RecentPopularEvents")}
          </div>
          <Row className={styles.cards} gutter={[32, 32]}>
            {RecentActivities?.slice(0, 3).map((v, index) => (
              <Col key={index} xs={24} sm={24} md={12} lg={8}>
                <ColorfulCard border={"bottom"} animate={false} index={index}>
                  <Space direction="vertical" className={styles.card} >
                    <img src={getTransResult(lang, v.attributes?.imgZh?.data?.attributes?.url, v.attributes?.imgEn?.data?.attributes?.url)} alt="img" />
                    <Title className={styles.title} ellipsis={{ rows: 1 }}>
                      {getTransResult(
                        lang,
                        v?.attributes?.titleZh,
                        v?.attributes?.titleEn
                      )}
                    </Title>
                    <div className={styles.description}>
                      <Text
                        ellipsis={{
                          tooltip: `${getTransResult(
                            lang,
                            v?.attributes.descriptionZh,
                            v?.attributes.descriptionEn
                          )
                            }`
                        }}
                        className={styles.descriptionText}
                      >
                        <AlignRightOutlined className={styles.icon} />
                        {getTransResult(
                          lang,
                          v?.attributes.descriptionZh,
                          v?.attributes.descriptionEn
                        )}
                      </Text>

                      <Link className={styles.arrow} href={`/resources/${v.id}`}>
                        <RightCircleOutlined />
                      </Link>
                    </div>
                  </Space>
                </ColorfulCard>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </div >
  );
};

export default RecentActivities;
