import React, { useRef } from "react";
import {
  Space,
  Image,
  Typography,
  List,
  message
} from "antd";
import { CarouselRef } from "antd/es/carousel";
import {
  setTwoToneColor,
} from "@ant-design/icons";
import { useLang } from "@/hoc/with-intl/define";
import { getTransResult } from "@/utils/public";
import { XStarViewer } from "@/utils/x-star-editor-beta";
import {
  useGetAboutUsAchievementsAward,
  useGetAchievementsTimeLine,
} from "@/apis/strapi-client/strapi";
import styles from "./TimeLine.module.scss";

const { Title, Text } = Typography;

const TimeLine: React.FC = () => {
  const { lang, format: t } = useLang();
  const carouselEL = useRef<CarouselRef>(null);
  setTwoToneColor("#D46B14");
  const { data: timeLine } = useGetAchievementsTimeLine();

  return (
    <div className={`${styles.timeLineContainer} container`}>
      <div className={styles.timeLine}>
        <Space direction="vertical" align="start">
          <Title className={styles.title}>{t("Timeline")}</Title>
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

        <Text className={styles.intro}>{t("Timeline.Desc")}</Text>

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
            src="/image/about-us/download-outlined.png"
            preview={false}
          ></Image>
          <Text className={styles.downloadText} underline>
            {t("USACO.DownloadPackage")}
          </Text>
        </div>
      </div>
    </div>
  );
};

export default TimeLine;
