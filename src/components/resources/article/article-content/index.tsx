import React from "react";
import styles from "./index.module.scss";
import { Breadcrumb, Space, Typography } from "antd";
import Link from "next/link";
import { ClockCircleOutlined, ReadOutlined } from "@ant-design/icons";
import { XStarViewer } from "@/utils/x-star-editor-beta";
import { viewerVideoPlugin } from "@/utils/x-star-editor-beta/plugins/viewer-video";
import { useLang } from "@/hoc/with-intl/define";
const { Title } = Typography;

const ArticleContent = () => {
  const { format: t } = useLang();
  const content = `我们对学霸常有天降紫微星的文艺想象，好象他们在学业上的成就都是上天注目的，是幸运的天选之人，但现实上并非如此。

  Joe是2022年美国信息学奥林匹克竞赛USACO国家集训队的26人之一，他的成就是个人极度努力和优秀人才系统培训共同合作用的结果，他的成功没有玄学没有捷径，他的成功是可以复制的的。沿着同样的路，同年X-Camp有另外三名优秀学生也进入了USACO美国国家集训队。
  
  他的经验是什么？我们《X营少年说》栏目采访了乔、他的妈妈微、他的老师徐源，听他们是如何总结乔的成功之道的。

  ![](https://pic4.zhimg.com/v2-97ec76e9efefec9fe3f12a9dfaa65a87_r.jpg)
  
  1、努力努力，一直努力，坚持努力

Joe是X-Camp最早的一个学生，可以说Joe和X-Camp是一起成长起来的。学生和老师都是编程培训的新人，进度相当于“野驴”。徐源老师在孩子们零基础入门仅半年后就开始让孩子们进入C++的学习，徐源老师回想起来也觉得确实太快了，对孩子们压力有点大，现在在X-Camp的课程结结构更科学，基础平台和网站的保障上比当时好太多了。

乔也分享了他的至暗时刻。在第一次USACO银牌考试时，乔拿到了一个“非常低的分数”，非常低的分数，连续三次都没有通过银牌，他一度怀疑自己你是不是还要继续在编程上走下去，Joe的妈妈微回忆，Joe那时候经常站四个小时候也做不出题，但就是让这种情况下，他也没有放弃，同时徐源老师查漏补缺及时给他们进行了一次集训，终于在第四次，班上所有的孩子，包括Joe，在Silver考试全部通过了。

2、保持热情保持专注，热爱可平山海

Joe是理科全才，他不仅是USACO美国国家训练队成员，也是物理学国际奥林匹克比赛铜奖、是数学AIME选手，是Teamscode编程大赛的主持人，他立了自己的慈善组织，同时还是优秀的小提琴手和蹬拳道高手。
但是对他来说，生活并没有平衡，只有选择。

他对自己要走的路有清晰的规划。随着USACO等级越来越高，他需要投入在编排上的时间越来越多，他先放了钢钢琴、数学、物理学，他在放弃中找到了自己的相爱——编程序，并专注于此。

他抓紧时间学习编排，出门旅游他带着电脑，早上参加比赛；去参加Party，随时间抱着电脑开工；甚至在课间，他也和同学（同时也是X-Camp的战友）一起讨论编程。

他说：“编程本身就是有趣的，我在思考这些问题的时候从不去思考我花了多少时间去思考它。”有时候我们说“吃得”苦中苦，方为人上人”，但是
站在Joe的角度，他感觉得不到吃苦，他感觉得把问题解决出来就已经是一个非常有意的事情，唯有热恋才能坚持，才能百分之百的投入。

3、薪火相传，顶级师资培养顶级人才

大家知道X-Camp的师资力量之强大，即使在全美也很难找到第二家。

乔和他的朋友们在进入高级别之后，给他们进行辅助指导的不是一个老师，而是很多老师，不同的领地会有对应领地的专家来授课和辅导。其中有国际信息学奥林匹克竞赛（I​​OI）的金牌选手、有国际大学生程序设计竞赛（ICPC）世界总决赛的选手、有各种国际金牌、国际冠军、有MIT、斯坦福、哥伦比亚等一线大学的前辈、有大厂资源的深工师，都是最顶尖的的高手。连乔的妈妈微微都感叹：“太奢侈了，本来是我们俩可能也遇到不到几个的，在X-Camp都遇到了，X-Camp给了各种顶级资源的支持。”

在竞赛领头域，X-Camp的老师很多都是各种竞赛中的冠军，对于知识点的分配、竞赛策略的安排，都有丰富的经验，以前的冠军军把自己的经验传授给后期，让他们站在成功者的肩膀上，X-Camp的孩子们就是这样被托举起来的。

<video src="https://media.strapi.turingstar.com.cn/production/2023/5/_ee80ac65dc.mp4?updated_at=2023-05-14T08:12:19.340Z"></video>

`;

  return (
    <div className={styles.content}>
      <Breadcrumb
        className={styles.breadcrumb}
        items={[
          {
            title: <Link href="/">{"Home"}</Link>,
          },
          {
            title: (
              <Link href="/resources/weekly-education-forum">
                {t("WeeklyEducationForum")}
              </Link>
            ),
          },
          {
            title: "专访USACO国家集训队学霸Joe:奋斗没有捷径",
          },
        ]}
      />
      <Title className={styles.title}>
        {"专访USACO国家集训队学霸Joe：奋斗没有捷径"}
      </Title>
      <Space className={styles.time}>
        <ClockCircleOutlined className={styles.icon} />
        <div className={styles.videoDate}>{"2023-04-10"}</div>
      </Space>
      <XStarViewer
        className={styles.viewer}
        value={content}
        plugins={[viewerVideoPlugin()]}
      />
      <Space className={styles.note}>
        <ReadOutlined className={styles.icon} />
        <span>{t("ArticleContent.Desc")}</span>
      </Space>
    </div>
  );
};

export default ArticleContent;
