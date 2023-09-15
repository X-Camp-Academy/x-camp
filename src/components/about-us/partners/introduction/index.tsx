import React from "react";
import { Button, Space, Typography } from "antd";
import { RightOutlined } from "@ant-design/icons";
import { useLang } from "@/hoc/with-intl/define";
import { getTransResult } from "@/utils/public";
import { useGetPartner } from "@/apis/strapi-client/strapi";
import styles from "./index.module.scss";

const { Title, Paragraph } = Typography;
const backgroundMap = [
  '#FDF6F1',
  '#F7F7F7',
  '#EFEFEF'
];
const getBackgroundFromIndex = (index: number) => {
  return index > 2 ? backgroundMap[index % 3] : backgroundMap[index];
};

const Introduction: React.FC = () => {
  const { lang, format: t } = useLang();
  const { data: partner } = useGetPartner();

  return (
    <div className={styles.content}>
      {partner?.map((items, index) => (
        <div key={index} style={{ background: getBackgroundFromIndex(index), padding: 80 }}>
          <div className={`${styles.partner} container`}  >
            <div className={styles.title}>
              {items?.[0]?.attributes?.category}
            </div>
            <Space direction="vertical" style={{ width: "100%" }} size={52}>
              {items?.map(card => (
                <div className={styles.card} key={card?.id}>
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
                      {t("LearnMore")}
                      <RightOutlined style={{ color: "#333333" }} />
                    </Button>
                  </div>
                </div>
              ))}
            </Space>
          </div>
        </div>
      ))}

    </div>
  );
};

export default Introduction;
