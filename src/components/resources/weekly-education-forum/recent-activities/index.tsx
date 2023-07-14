import XCollapse from "@/components/common/collapse";
import styles from "./index.module.scss";
import React, { useState } from "react";
import { Button, Col, Row, Space, Typography } from "antd";
import ColorfulCard from "@/components/common/colorful-card";
import { AlignRightOutlined, RightCircleOutlined } from "@ant-design/icons";
import { NewEventCategory } from "@/apis/strapi-client/define";
import { useGetNewEvent } from "@/apis/strapi-client/strapi";
import { StrapiMedia } from "@/apis/strapi-client/strapiDefine";
import { getTransResult } from "@/utils/public";
import { useLang } from "@/hoc/with-intl/define";

const RecentActivities = () => {
  const pageSize = 25;
  const [current, setCurrent] = useState<number>(1);
  const [tag, setTag] = useState<NewEventCategory>(NewEventCategory.Activity);
  const { format: t, lang } = useLang();
  const { data: newEventData } = useGetNewEvent({
    tag,
    current,
    pageSize,
  });

  const getImgUrl = (img: StrapiMedia) => {
    return img?.data?.attributes?.url;
  };

  const RecentActivities = newEventData?.filter((item, index) => {
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
        <XCollapse
          header={{
            title: t("RecentPopularEvents"),
            description: t("RecentPopularEvents.Desc"),
          }}
        >
          <Row className={styles.cards} gutter={[32, 32]}>
            {RecentActivities?.slice(0, 3).map((v, index) => (
              <Col key={index} xs={24} sm={24} md={12} lg={8}>
                <ColorfulCard border={"bottom"} animate={false} index={index}>
                  <Space direction="vertical" className={styles.card}>
                    <img src={getImgUrl(v.attributes.img)} alt="img" />
                    <div className={styles.title}>
                      {getTransResult(
                        lang,
                        v?.attributes?.titleZh,
                        v?.attributes?.titleEn
                      )}
                    </div>
                    <div className={styles.description}>
                      <div>
                        <AlignRightOutlined className={styles.icon} />

                        {getTransResult(
                          lang,
                          v?.attributes.descriptionZh,
                          v?.attributes.descriptionEn
                        )}
                      </div>
                      <Button
                        type="link"
                        className={styles.btn}
                        icon={<RightCircleOutlined />}
                      />
                    </div>
                  </Space>
                </ColorfulCard>
              </Col>
            ))}
          </Row>
        </XCollapse>
      </div>
    </div>
  );
};

export default RecentActivities;
