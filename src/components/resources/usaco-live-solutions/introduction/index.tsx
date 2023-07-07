import React from "react";
import styles from "./index.module.scss";
import { Collapse, Divider, Space } from "antd";
import { ClockCircleOutlined, DownOutlined } from "@ant-design/icons";
import { GetResourcesLiveSolution } from "@/apis/strapi-client/define";
import { StrapiResponseDataItem } from "@/apis/strapi-client/strapiDefine";
import { useLang } from "@/hoc/with-intl/define";
import { getTransResult } from "@/utils/public";
const { Panel } = Collapse;

interface Props {
  data: StrapiResponseDataItem<GetResourcesLiveSolution>[][] | undefined;
}

const UsacoIntro = ({ data }: Props) => {
  const { lang } = useLang();
  return (
    <div className={styles.introduction}>
      <div className={"container"}>
        <div
          className={styles.description}
        >{`In 2023 newest season, X-Camp hosts the first-ever USACO Live Solutions event
         on the entire web with our top coaches, including USACO Grandmaster Class instructors
          and ICPC World Finalists. They meticulously dissect the competition problems from the 
          USACO Bronze, Silver, and Gold levels, providing in-depth explanations and unraveling 
          the intricacies.`}</div>
        {data?.map((v, index) => {
          return (
            <div key={"video" + index}>
              <Collapse
                ghost
                defaultActiveKey={index}
                expandIconPosition={"end"}
                expandIcon={({ isActive }) => (
                  <div className={styles.changeBtn}>
                    <DownOutlined
                      rotate={isActive ? 180 : 0}
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
              <Divider className={styles.divider} />
            </div>
          );
        })}
        <div className={styles.title}>{"X-Camp More USACO Solutions"}</div>
        <a
          href="https://www.youtube.com/playlist?list=PLaGrjYdzFQBtJBaopC8QW9G3Sv39eeifT"
          className={styles.link}
          target={"_blank"}
        >
          {
            "https://www.youtube.com/playlist?list=PLaGrjYdzFQBtJBaopC8QW9G3Sv39eeifT"
          }
        </a>
      </div>
    </div>
  );
};

export default UsacoIntro;
