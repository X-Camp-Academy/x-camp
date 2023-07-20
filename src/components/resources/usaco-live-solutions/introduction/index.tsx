import React from "react";
import styles from "./index.module.scss";
import { Collapse, Divider, Space, Typography } from "antd";
import { ClockCircleOutlined, DownOutlined } from "@ant-design/icons";
import { GetResourcesLiveSolution } from "@/apis/strapi-client/define";
import { StrapiResponseDataItem } from "@/apis/strapi-client/strapiDefine";
import { useLang } from "@/hoc/with-intl/define";
import { getTransResult } from "@/utils/public";
const { Panel } = Collapse;
const { Text } = Typography;

interface Props {
  data: StrapiResponseDataItem<GetResourcesLiveSolution>[][] | undefined;
}

const UsacoIntro = ({ data }: Props) => {
  const { format: t, lang } = useLang();
  return (
    <div className={styles.introduction}>
      <div className={"container"}>
        <div className={styles.description}>{t("USACOSolution.Intro")}</div>
        {data?.map((v, index) => {
          return (
            <div key={"video" + index} style={{ marginBottom: 42 }}>
              <Collapse
                ghost
                defaultActiveKey={index}
                expandIconPosition={"end"}
                expandIcon={({ isActive }) => (
                  <div className={styles.changeBtn}>
                    <DownOutlined
                      rotate={isActive ? 0 : 180}
                      className={styles.icon}
                    />
                  </div>
                )}
              >
                <Panel
                  key={index}
                  header={
                    <div className={styles.title}>
                      {v?.[0]?.attributes?.category}
                    </div>
                  }
                >
                  <Space className={styles.videoPane}>
                    {v?.map((g) => {
                      return (
                        <Space
                          direction={"vertical"}
                          className={styles.videoPanel}
                          key={"panel" + g}
                        >
                          <video controls className={styles.videoBox}>
                            <source
                              src={g?.attributes?.video?.data?.attributes?.url}
                              type="video/mp4"
                            />
                          </video>
                          <div className={styles.videoTitle}>
                            {getTransResult(
                              lang,
                              g?.attributes?.titleZh,
                              g?.attributes?.titleEn
                            )}
                          </div>
                          <Space>
                            <ClockCircleOutlined className={styles.icon} />
                            <div className={styles.videoDate}>
                              {g?.attributes?.date}
                            </div>
                          </Space>
                        </Space>
                      );
                    })}
                  </Space>
                </Panel>
              </Collapse>
            </div>
          );
        })}
        <div>
          <a
            href="https://www.youtube.com/playlist?list=PLaGrjYdzFQBtJBaopC8QW9G3Sv39eeifT"
            target={"_blank"}
          >
            <Text className={styles.title}>
              {t("MoreUSACOSolution")}
              <Text underline className={styles.title}>{t("MoreUSACOSolution.YoutubePlayList")}</Text>
            </Text>
          </a>
        </div>
      </div>
    </div>
  );
};

export default UsacoIntro;
