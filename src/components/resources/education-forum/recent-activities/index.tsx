import XCollapse from "@/components/common/collapse";
import styles from "./index.module.scss";
import React from "react";
import { Button, Col, Row, Space, Typography } from "antd";
import ColorfulCard from "@/components/common/colorful-card";
import { AlignRightOutlined, RightCircleOutlined } from "@ant-design/icons";
import { NewEventCategory } from "@/apis/strapi-client/define";
import { useGetNewEvent } from "@/apis/strapi-client/strapi";
import { StrapiMedia } from "@/apis/strapi-client/strapiDefine";
import { getTransResult } from "@/utils/public";
import { useLang } from "@/hoc/with-intl/define";
const { Text } = Typography;
import Link from "next/link";

const RecentActivities: React.FC = () => {
  const { format: t, lang } = useLang();
  const { data: newEventData } = useGetNewEvent({
    tag: NewEventCategory.Event,
    current: 1,
    pageSize: 25,
  });

  const getImgUrl = (img: StrapiMedia) => {
    return img?.data?.attributes?.url;
  };

  const getTranslateImg = (imgZh: StrapiMedia, imgEn: StrapiMedia) => {
    return getTransResult(
      lang,
      getImgUrl(imgZh),
      getImgUrl(imgEn),
    )
  }

  const RecentActivities = newEventData?.data?.filter((item, index) => {
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
                  <Space direction="vertical" className={styles.card} >
                    <img src={getTranslateImg(v.attributes?.imgZh, v.attributes?.imgEn)} alt="img" />
                    <div className={styles.title}>
                      {getTransResult(
                        lang,
                        v?.attributes?.titleZh,
                        v?.attributes?.titleEn
                      )}
                    </div>
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
                        <AlignRightOutlined className={styles.icon} />&nbsp;
                        {getTransResult(
                          lang,
                          v?.attributes.descriptionZh,
                          v?.attributes.descriptionEn
                        )}
                      </Text>

                      <Link href={`/resources/${v.id}`}>
                        <Button
                          type="link"
                          className={styles.btn}
                          icon={<RightCircleOutlined />}
                        />
                      </Link>
                    </div>
                  </Space>
                </ColorfulCard>
              </Col>
            ))}
          </Row>
        </XCollapse>
      </div>
    </div >
  );
};

export default RecentActivities;
