import React, { useRef } from "react";
import {
  Space,
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
  LeftOutlined,
  RightOutlined,
  setTwoToneColor,
} from "@ant-design/icons";
import { useLang } from "@/hoc/with-intl/define";
import { getTransResult } from "@/utils/public";
import { XStarViewer } from "@/utils/x-star-editor-beta";
import UsacoCards from "@/components/common/usaco-medal";
import {
  useGetAboutUsAchievementsAward,
  useGetAchievementsTimeLine,
} from "@/apis/strapi-client/strapi";
import styles from "./USACOWinners.module.scss";

const { Title, Text } = Typography;

const USACOSpotlight: React.FC = () => {
  const { lang, format: t } = useLang();
  const carouselEL = useRef<CarouselRef>(null);
  setTwoToneColor("#D46B14");
  const { data: awards } = useGetAboutUsAchievementsAward();
  const { data: timeLine } = useGetAchievementsTimeLine();

  return (
    <div className={styles.USACOSpotlightContainer}>
      <div className={`${styles.USACOSpotlight} container`}>
        <Space direction="vertical" align="start">
          <Title className={styles.title}>{t("USACOSpotlight")}</Title>
          <Text className={styles.intro}>{t("USACOMedal.Desc")}</Text>
        </Space>

        <div className={styles.medalIntro}>
          <Button
            type="primary"
            shape="circle"
            className={styles.prev}
            onClick={() => {
              carouselEL?.current?.prev();
            }}
          >
            <LeftOutlined />
          </Button>
          <Carousel
            ref={carouselEL}
            dots={false}
            slidesToShow={3}
            slidesToScroll={1}
            swipeToSlide={true}
            infinite={true}
            responsive={[
              {
                breakpoint: 992,
                settings: {
                  slidesToShow: 2,
                },
              },
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1,
                },
              },
            ]}
          >
            {awards?.map((item, index) => {
              return (
                <div key={index}>
                  <Card
                    style={{
                      backgroundImage: `url(${item?.attributes?.avatar?.data?.attributes?.url})`,
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
                </div>
              )
            })}
          </Carousel>

          <Button
            type="primary"
            shape="circle"
            className={styles.next}
            onClick={() => {
              carouselEL?.current?.next();
            }}
          >
            <RightOutlined />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default USACOSpotlight;
