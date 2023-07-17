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
import { useRouter } from "next/navigation";
import Link from "next/link";

const RecentActivities = () => {
  const router = useRouter();
  const pageSize = 25;
  const [current, setCurrent] = useState<number>(1);
  const [tag, setTag] = useState<NewEventCategory>(NewEventCategory.Event);
  const { format: t, lang } = useLang();
  const { data: newEventData } = useGetNewEvent({
    tag,
    current,
    pageSize,
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
                    <img src={getTranslateImg(v.attributes?.imgZh,v.attributes?.imgEn)} alt="img" />
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
    </div>
  );
};

export default RecentActivities;
