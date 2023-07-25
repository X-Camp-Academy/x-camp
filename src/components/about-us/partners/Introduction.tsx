import React from "react";
import styles from "./Introduction.module.scss";
import { Button, Space, Typography } from "antd";
import { RightOutlined } from "@ant-design/icons";
import { useGetPartner } from "@/apis/strapi-client/strapi";
import { useLang } from "@/hoc/with-intl/define";
import { getTransResult } from "@/utils/public";
const { Title, Paragraph } = Typography;

const Introduction = () => {
  const { lang } = useLang();
  const { data: partner } = useGetPartner();

  return (
    <div className={styles.content}>
      <div className={"container"}>
        <Space direction="vertical" style={{ width: "100%" }} size={108}>
          {partner?.map((items, index) => (
            <div className={styles.partner} key={index}>
              <div className={styles.title}>
                {items?.[0]?.attributes?.category}
              </div>
              <Space direction="vertical" style={{ width: "100%" }} size={52}>
                {items?.map((card, index) => (
                  <div className={styles.card} key={index}>
                    <div className={styles.img}>
                      <img
                        src={card?.attributes?.logo?.data?.attributes?.url}
                        alt=""
                      />
                    </div>
                    <div className={styles.cardContent}>
                      <Title className={styles.cardTitle}>
                        {getTransResult(
                          lang,
                          card?.attributes?.titleZh,
                          card?.attributes?.titleEn
                        )}
                      </Title>
                      <Paragraph
                        className={styles.cardDescription}
                        ellipsis={{ rows: 5 }}
                      >
                        {getTransResult(
                          lang,
                          card?.attributes?.titleDescriptionZh,
                          card?.attributes?.titleDescriptionEn
                        )}
                      </Paragraph>
                      <Button
                        className={styles.btn}
                        href={card?.attributes?.link}
                      >
                        {"Learn More "}
                        <RightOutlined style={{ color: "#333333" }} />
                      </Button>
                    </div>
                  </div>
                ))}
              </Space>
            </div>
          ))}
        </Space>
      </div>
    </div>
  );
};

export default Introduction;
