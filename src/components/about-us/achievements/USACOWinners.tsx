import {
  Space,
  Row,
  Col,
  Card,
  Image,
  Typography,
  Carousel,
  Button,
  List,
  message
} from "antd";
import { CarouselRef } from "antd/es/carousel";
import {
  LeftCircleTwoTone,
  RightCircleOutlined,
  setTwoToneColor,
} from "@ant-design/icons";
import styles from "./USACOWinners.module.scss";
import React, { useRef } from "react";
import Link from "next/link";
import UsacoCards from "@/components/common/usaco-cards";
import {
  useGetAboutUsAchievementsAward,
  useGetAchievementsTimeLine,
} from "@/apis/strapi-client/strapi";
import { getTransResult } from "@/utils/public";
import { useLang } from "@/hoc/with-intl/define";
import { XStarViewer } from "@/utils/x-star-editor-beta";

const { Title, Text } = Typography;

const USACOMedal = () => {
  const { lang, format: t } = useLang();
  const carouselEL = useRef<CarouselRef>(null);
  setTwoToneColor("#D46B14");
  const { data: awards } = useGetAboutUsAchievementsAward();
  const { data: timeLine } = useGetAchievementsTimeLine();

  return (
    <>
      <div className={styles.USACOMedalContainer}>
        <div className={`${styles.USACOMedal} container`}>
          <Space direction="vertical" align="start">
            <Title className={styles.title}>{t("USACOMedal")}</Title>
            <Text className={styles.intro}>{t("USACOMedal.Desc")}</Text>
          </Space>

          <div className={styles.medalIntro}>
            <Button
              className={styles.prev}
              onClick={() => {
                carouselEL?.current?.prev();
              }}
              icon={<LeftCircleTwoTone style={{ fontSize: 25 }} />}
            ></Button>
            <Carousel ref={carouselEL} dots={false}>
              {awards?.map((page, index) => {
                return (
                  <div key={index}>
                    <Row
                      gutter={40}
                      justify="center"
                      align="middle"
                      className={styles.row}
                    >
                      {page?.map((item, index) => {
                        return (
                          <Col
                            key={index}
                            xs={24}
                            sm={24}
                            md={24}
                            lg={8}
                            className={styles.col}
                          >
                            <Card
                              style={{
                                backgroundImage: `url(
                                  ${item?.attributes?.avatar?.data?.attributes?.url}
                                )`,
                              }}
                              className={styles.colCard}
                            >
                              <Space
                                direction="vertical"
                                className={styles.infoContainer}
                              >
                                <Title className={styles.cardTitle}>
                                  {getTransResult(
                                    lang,
                                    item?.attributes?.titleZh,
                                    item?.attributes?.titleEn
                                  )}
                                </Title>
                                <Text className={styles.cardText}>
                                  {getTransResult(
                                    lang,
                                    item?.attributes?.descriptionZh,
                                    item?.attributes?.descriptionEn
                                  )}
                                </Text>
                              </Space>
                            </Card>
                          </Col>
                        );
                      })}
                    </Row>
                  </div>
                );
              })}
            </Carousel>

            <Button
              className={styles.next}
              onClick={() => {
                carouselEL?.current?.next();
              }}
              icon={<RightCircleOutlined style={{ fontSize: 25 }} />}
            ></Button>
          </div>

          <div className={styles.timeLineContainer}>
            <div className={styles.timeLine}>
              <Space direction="vertical" align="start">
                <Title className={styles.title}>{t("Timeline")}</Title>
                <Text className={styles.intro}>{t("Timeline.Desc")}</Text>
              </Space>

              <div className={styles.listContainer}>
                <List
                  dataSource={timeLine}
                  split={false}
                  renderItem={(item) => (
                    <List.Item className={styles.timeListItem}>
                      <List.Item.Meta
                        title={
                          <Text className={styles.timeListTitle}>
                            {getTransResult(
                              lang,
                              item?.attributes?.titleZh,
                              item?.attributes?.titleEn
                            )}
                          </Text>
                        }
                        description={
                          <XStarViewer
                            className={styles.timeListDetail}
                            value={getTransResult(
                              lang,
                              item?.attributes?.descriptionZh,
                              item?.attributes?.descriptionEn
                            )}
                          />
                        }
                      />
                    </List.Item>
                  )}
                />
              </div>

              {/*               <Link className={styles.download} href="/" onClick={() => { message.info(getTransResult(lang,"")) }}>
                <Image
                  alt="download"
                  src="/image/about-us/achievement/download-outlined.png"
                  preview={false}
                ></Image>
                <Text className={styles.downloadText} underline>
                  {t("USACO.DownloadPackage")}
                </Text>
              </Link> */}
              <div className={styles.download}
                onClick={() => {
                  message.info(getTransResult(
                    lang,
                    "点击页面下方subscribe newsletter ，获取X-Camp更多信息，领取USACO大礼包",
                    "Click the 'Subscribe Newsletter' at the bottom of the page to receive more information from X-Camp and get the USACO gift package."
                  ))
                }}>
                <Image
                  alt="download"
                  src="/image/about-us/achievement/download-outlined.png"
                  preview={false}
                ></Image>
                <Text className={styles.downloadText} underline>
                  {t("USACO.DownloadPackage")}
                </Text>
              </div>

              <UsacoCards showTitle />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default USACOMedal;
