import XCollapse from "@/components/common/collapse";
import styles from "./index.module.scss";
import React, { useState } from "react";
import { Button, Col, Row, Space, Typography } from "antd";
import ColorfulCard from "@/components/common/colorful-card";
import { AlignRightOutlined, RightCircleOutlined } from "@ant-design/icons";
import { NewEventCategory, ActivityCategory } from "@/apis/strapi-client/define";
import { useGetNewEvent } from "@/apis/strapi-client/strapi";
import { StrapiMedia } from "@/apis/strapi-client/strapiDefine";

const RecentActivities = () => {

  const pageSize = 3;
  const [current, setCurrent] = useState<number>(1);
  const [tag, setTag] = useState<NewEventCategory>(NewEventCategory.Activity);

  //activityTag: SchoolLifeSharing, CodingEducation, CareerPath, Research
  const [activityTag, setActivityTag] = useState<ActivityCategory>(ActivityCategory.SchoolLifeSharing);

  const { data: newEventData } = useGetNewEvent({
    activityTag,
    tag,
    current,
    pageSize
  });

  const getImgUrl = (img: StrapiMedia) => {
    return img?.data?.attributes?.url;
  };

  

  return (
    <div className={styles.content}>
      <div className="container">
        <XCollapse
          header={{
            title: "Recent popular activities",
            description: "Recent popular activities",
          }}
        >
          <Row className={styles.cards} gutter={[32, 32]}>
            {newEventData?.data?.map((v, index) => (
              <Col key={index} md={24} lg={8}>
                <ColorfulCard border={"bottom"} animate={false} index={index}>
                  <Space direction="vertical" className={styles.card}>
                    <img
                      src={getImgUrl(v?.attributes?.img)}
                      alt="img"
                    />
                    <div className={styles.title}>
                      {v?.attributes?.titleZh}
                    </div>
                    <div className={styles.description}>
                      <div>
                        <AlignRightOutlined className={styles.icon} />
                        
                        {v?.attributes?.descriptionZh}
                        
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
