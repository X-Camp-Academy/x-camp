import { Space, Row, Card, Typography, Button } from "antd";
import {
  ClockCircleOutlined,
  BranchesOutlined,
  DownCircleOutlined,
} from "@ant-design/icons";
import styles from "./JobCardHeader.module.scss";
import { useState } from "react";
import Link from "next/link";
import { GetAboutUsJoinUs } from "@/apis/strapi-client/define";
import { StrapiResponseDataItem } from "@/apis/strapi-client/strapiDefine";
import { getTransResult } from "@/utils/public";
import { useLang } from "@/hoc/with-intl/define";
const { Title, Text } = Typography;

interface Props {
  data: StrapiResponseDataItem<GetAboutUsJoinUs> | undefined;
  showExpandBtn?: boolean;
}

const JobCardHeader = ({ data, showExpandBtn = true }: Props) => {
  const { lang, format: t } = useLang();
  const [isExpand, setIsExpand] = useState<boolean>(false);
  const handlerExpand = () => {
    setIsExpand(!isExpand);
  };

  return (
    <>
      <Card
        className={styles.cardContainer}
        style={
          isExpand ? { borderRadius: "10px 10px 0 0" } : { borderRadius: 10 }
        }
        onClick={handlerExpand}
      >
        <Row>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Title className={styles.jobCardTitle}>
              {getTransResult(
                lang,
                data?.attributes?.titleZh,
                data?.attributes?.titleEn
              )}
            </Title>
            {showExpandBtn && (
              <Button
                className={`${styles.expandBtn} ${
                  isExpand ? styles.expandIcon : ""
                }`}
                icon={<DownCircleOutlined />}
              />
            )}
          </div>
        </Row>
        <Row>
          <Text className={styles.jobCardDescription}>
            {getTransResult(
              lang,
              data?.attributes?.descriptionZh,
              data?.attributes?.descriptionEn
            )}
          </Text>
        </Row>
        <Row>
          <Space
            direction="horizontal"
            align="center"
            className={styles.iconsButtonRow}
          >
            <div className={styles.iconBox}>
              <div>
                <ClockCircleOutlined style={{ color: "#666666" }} />
                <Text className={styles.iconText}>
                  {data?.attributes?.category}
                </Text>
              </div>
              <div style={{ marginLeft: 20 }}>
                <BranchesOutlined style={{ color: "#666666" }} />
                <Text className={styles.iconText}>
                  {data?.attributes?.place}
                </Text>
              </div>
            </div>
            {showExpandBtn && (
              <Link
                className={styles.applyBtn}
                href={`/about-us/join-us/submit-resume/${data?.id}`}
              >
                {t("ApplyNow")}
              </Link>
            )}
          </Space>
        </Row>
      </Card>
    </>
  );
};

export default JobCardHeader;
