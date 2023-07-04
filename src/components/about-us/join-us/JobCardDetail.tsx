import { Space, Typography, Divider, List } from "antd";
import styles from "./JobCardDetail.module.scss";
import { GetAboutUsJoinUs } from "@/apis/strapi-client/define";
import { StrapiResponseDataItem } from "@/apis/strapi-client/strapiDefine";
const { Title } = Typography;

interface Props {
  data: StrapiResponseDataItem<GetAboutUsJoinUs> | undefined;
}

const JobCardDetail = ({ data }: Props) => {
  const ResponsibilitiesListData = [
    {
      text: "Collect students’ applications, evaluate and make suggestions and recommendations",
    },
    {
      text: "Respond to parents’ inquiries regarding admission policies and procedures in a timely manner",
    },
    {
      text: "Manage database, conduct data analysis and draft performance report",
    },
    {
      text: "Facilitate info sessions for student applicants and their parents",
    },
    {
      text: "Maintain and develop relationship with experts, professional institutions, students, parents and X-Camp alumni",
    },
    { text: "Provide logistic support for admission events" },
    { text: "Other duties may be assigned when necessary" },
  ];

  const qualificationsListData = [
    { text: "Bachelor’s degree and above" },
    {
      text: "A minimum of 2-3 years of work experience required, and previous experience in E-learning, coding, and/or admissions strongly preferred",
    },
    { text: "Strong data input and analysis skills required" },
    {
      text: "Strong oral and written communication skills both in English and Mandarin",
    },
    { text: "Good knowledge of Google Workspace" },
    {
      text: "Strong team spirit, attention to detail, responsive and attentive",
    },
    { text: "Good planning and time management skills" },
  ];

  const otherInformationListData = [
    {
      text: "This position can be eligible for 100% remote capability, but may require working onsite during certain periods of an academic year",
    },
    {
      text: "This is a part-time position (20 hours/week minimum) and may be full-time depending on the candidates’ qualification",
    },
  ];
  return (
    <>
      <div className={styles.cardListContainer}>
        <Divider style={{ borderColor: "#FFAD11" }} />
        <div style={{ marginTop: "50px" }}>
          <Title className={styles.cardListTitle}>Responsibilities</Title>
          <List
            dataSource={ResponsibilitiesListData}
            split={false}
            className={styles.cardList}
            renderItem={(item) => (
              <List.Item className={styles.cardListItem}>
                <Space>
                  <i className={styles.listItemCircle}></i>
                  <Typography className={styles.cardText}>
                    {item.text}
                  </Typography>
                </Space>
              </List.Item>
            )}
          />

          <Title className={styles.cardListTitle}>Qualifications</Title>
          <List
            dataSource={qualificationsListData}
            split={false}
            className={styles.cardList}
            renderItem={(item) => (
              <List.Item className={styles.cardListItem}>
                <Space>
                  <i className={styles.listItemCircle}></i>
                  <Typography className={styles.cardText}>
                    {item.text}
                  </Typography>
                </Space>
              </List.Item>
            )}
          />

          <Title className={styles.cardListTitle}>Other Information</Title>
          <List
            dataSource={otherInformationListData}
            split={false}
            className={styles.cardList}
            renderItem={(item) => (
              <List.Item className={styles.cardListItem}>
                <Space>
                  <i className={styles.listItemCircle}></i>
                  <Typography className={styles.cardText}>
                    {item.text}
                  </Typography>
                </Space>
              </List.Item>
            )}
          />
        </div>
      </div>
    </>
  );
};

export default JobCardDetail;
