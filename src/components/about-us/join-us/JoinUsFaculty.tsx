import React from "react";
import { useRouter } from "next/navigation";
import { Space, Row, Col, Image, Typography, Button } from "antd";
import { useLang } from "@/hoc/with-intl/define";
import { UsergroupAddOutlined } from "@ant-design/icons";
import { useGetFaculty } from "@/apis/strapi-client/strapi";
import styles from "./JoinUsFaculty.module.scss";

const { Paragraph } = Typography;

const JoinUsFaculty: React.FC = () => {
  const { format: t } = useLang();
  const router = useRouter();
  const { data: imgUrlList } = useGetFaculty({
    pageName: ["/about-us/join-us/"],
  });
  return (
    <div className={styles.joinUsFacultyContainer}>
      <Row className={`${styles.joinUsFaculty} container`}>
        <Col className={styles.xCampIntro} lg={12} md={24} xs={24}>
          <Space direction="vertical" size="large">
            <Image
              alt="image"
              src="/logo/logo.png"
              preview={false}
              className={styles.logo}
            />
            <Paragraph className={styles.introText}>
              {t("XCampFaculty.Desc")}
            </Paragraph>
            <Button
              className={styles.introBtn}
              onClick={() => {
                router.push("/about-us/join-us");
              }}
            >
              {t("XCampFaculty")}
              <UsergroupAddOutlined />
            </Button>
          </Space>
        </Col>
        <Col className={styles.facultyImgs} lg={12} md={24} xs={24}>
          <Row gutter={16}>
            {imgUrlList?.slice(0, 2)?.map((item, index) => {
              return (
                <Col span={8} offset={3} key={index}>
                  <Image
                    alt="image"
                    src={item.attributes.img.data.attributes.url}
                    preview={false}
                    className={styles.image}
                  />
                </Col>
              );
            })}
          </Row>
          <Row gutter={16} style={{ marginTop: "20px" }}>
            {imgUrlList?.slice(2, 5)?.map((item, index) => {
              return (
                <Col span={8} key={index}>
                  <Image
                    alt="image"
                    src={item.attributes.img.data.attributes.url}
                    preview={false}
                    className={styles.image}
                  />
                </Col>
              );
            })}
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default JoinUsFaculty;
