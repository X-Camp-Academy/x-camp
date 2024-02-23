'use client';
import { useLang } from '@/hoc/with-intl/define';
import { getTransResult } from '@/utils/public';
import { Space, Typography } from 'antd';
import React from 'react';
import styles from './index.module.scss';

const { Title, Paragraph, Text } = Typography;

const PrivacyPolicy: React.FC = () => {
  const { lang } = useLang();
  const enData = [
    {
      title: '1. General Information',
      desc: "This disclaimer provides essential information about X-Camp Academy's coding programs, schedules, activities, and policies. It is intended for general informational purposes. While we endeavor to keep this information accurate and up-to-date, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the academy or the information, products, services, or related graphics contained herein."
    },
    {
      title: '2. Educational Purpose',
      desc: 'X-Camp Academy is dedicated to teaching coding skills to students from grades 5 to 12. Our programs are designed to provide quality education in coding, but we do not guarantee any specific academic or career outcomes for students.'
    },
    {
      title: '3. Staff and Employee Information',
      desc: 'Our faculty consists of part-time educators who are knowledgeable in the field of coding, and we have full-time administrative staff ensuring the smooth operation of the academy. Our staff is committed to providing a supportive and effective learning environment, but their opinions and teachings may not necessarily reflect the official policy or stance of X-Camp Academy.'
    },
    {
      title: '4. Accessibility and Non-Discrimination Policy',
      desc: 'X-Camp Academy is committed to creating an inclusive and accessible educational environment for all students, including those with disabilities. We adhere to non-discrimination policies and ensure equal opportunities in all our programs, regardless of race, gender, religion, or other characteristics.'
    },
    {
      title: '5. Liability and Personal Responsibility',
      desc: "Participation in X-Camp Academy's programs is at the participant's own risk. The academy is not liable for any injury, damage, or loss of property that may occur during participation. Participants and their guardians are responsible for ensuring their own safety and well-being during academy activities."
    },
    {
      title: '6. Health and Safety Compliance',
      desc: 'In compliance with California state regulations, X-Camp Academy follows strict health and safety protocols. All participants and their guardians are expected to adhere to these regulations to ensure a safe learning environment for everyone.'
    },
    {
      title: '7. Program Amendments',
      desc: 'X-Camp Academy reserves the right to make necessary changes to programs, schedules, and activities. These changes could be due to a variety of factors, such as changes in educational standards, technological advancements, or staff availability.'
    },
    {
      title: '8. Media Consent',
      desc: 'By participating in X-Camp Academy activities, students and their guardians grant permission for the use of photographs and videos taken during academy events for promotional or educational purposes, unless a specific opt-out request is made.'
    },
    {
      title: '9. Privacy Policy and Personal Data Handling',
      desc: 'X-Camp Academy collects, uses, and protects personal information in accordance with our Privacy Policy. This includes data collection methods, types of data collected, data storage, security, and data retention policies.',
      children: [
        {
          title: 'a. Data Collection Methods:',
          desc: 'X-Camp Academy collects personal information through various methods, including online forms during enrollment, direct communications (e.g., emails, phone calls), and through automated technologies on our website (such as cookies).',
        },
        {
          title: 'b. Types of Data Collected:',
          desc: 'The information collected may include but is not limited to, student names, ages, educational backgrounds, contact details (email, phone number), and parent/guardian information for minors.',
        },
        {
          title: 'c. Purpose of Data Collection:',
          desc: 'The collected data is used for student enrollment, program administration, communication with students and guardians, and for enhancing our educational offerings. We may also use this information for research and analytical purposes to improve our programs.',
        },
        {
          title: 'd. Data Storage and Security: ',
          desc: 'Personal data is stored in secure, encrypted databases. We implement a variety of security measures to maintain the safety of personal information and protect it from unauthorized access, alteration, disclosure, or destruction. These measures include, but are not limited to, secure server storage, firewall protection, and secure data transmission protocols.',
        },
        {
          title: 'e. Data Retention: ',
          desc: 'Personal information is retained only for as long as necessary to fulfill the purposes for which it was collected, including for the duration of our programs and any legal, accounting, or reporting '
        },
        {
          title: 'f. Sharing of Information:',
          desc: "We do not sell, trade, or rent personal data to third parties. However, we may share information with trusted third parties who assist us in operating our website, conducting our business, or serving our users, so long as those parties agree to keep this information confidential. We may also release information when its release is appropriate to comply with the law, enforce our site policies, or protect ours or others' rights, property, or safety."
        },
        {
          title: 'g. Your Rights and Choices:',
          desc: 'Participants and their guardians have the right to access, correct, or delete their personal information held by X-Camp Academy. Requests for access or correction of personal data can be made to our administrative team. Participants and guardians also have the right to opt out of certain uses of their personal information, such as promotional communications.'
        },
        {
          title: 'h. Policy Updates: ',
          desc: 'Our Privacy Policy may be updated periodically to reflect changes in our practices or legal requirements. We will notify participants and guardians of any significant changes.'
        }
      ]
    },
    {
      title: '10. Handling and Protection of Minors\' Information',
      desc: 'At X-Camp Academy, we take extra precautions when handling information related to minors (individuals under 18 years old). We are committed to protecting their privacy and ensuring a safe online environment.'
    },
    {
      title: '11. Intellectual Property Protection',
      desc: 'All materials, including curriculum content, teaching materials, and any online resources provided by X-Camp Academy, are the property of X-Camp Academy or its content providers and are protected by intellectual property laws. Unauthorized use, reproduction, modification, or distribution of these materials is strictly prohibited.'
    },
    {
      title: '12. Amendments to the Disclaimer',
      desc: 'X-Camp Academy reserves the right to update or amend this disclaimer at any time. Changes will be communicated through our official channels, and continued participation in our programs following such changes will constitute acceptance of the new terms.'
    },
    {
      title: '13. Governing Law and Jurisdiction',
      desc: 'This disclaimer is governed by the laws of the State of Delaware, where X-Camp Academy is incorporated, and the State of California, where we operate. Any disputes arising from or related to this disclaimer are subject to the jurisdiction of these states.'
    },
    {
      title: '14. Acknowledgment',
      desc: 'By participating in X-Camp Academy\'s programs, individuals acknowledge and agree to the terms and conditions stated in this disclaimer.'
    },
    {
      title: '15. Contact Us',
      desc: 'If you have any questions or concerns regarding this disclaimer, or any other aspects of our programs and policies, please feel free to contact us. We welcome your inquiries and feedback. You can reach us via email at info@x-camp.academy. Our team is dedicated to assisting you and will respond to your queries as promptly as possible.'
    }
  ];

  const cnData = [
    {
      title: '1. 一般信息',
      desc: '本免责声明提供有关 X-Camp Academy 编程项目、时间表、活动和政策的基本信息。本免责声明旨在提供一般信息。尽管我们努力保持信息的准确性和及时性，但我们不对本学院或其中包含的信息、产品、服务或相关图片的完整性、准确性、可靠性、适用性或可用性做出任何明示或暗示的陈述或保证。'
    },
    {
      title: '2. 教育目的',
      desc: 'X-Camp Academy 致力于向 5 至 12 年级的学生传授编程技能。我们的课程旨在提供高质量的编程教育，但我们不保证学生取得任何具体的学术或职业成果。'
    },
    {
      title: '3. 员工信息',
      desc: '我们的教师团队由在编程领域知识渊博的兼职教育工作者组成，并有全职行政员工确保学院的顺利运作。我们的员工致力于提供一个充满支持和成效的学习环境，但他们的观点和教导不一定代表X-Camp Academy的官方政策或立场。'
    },
    {
      title: '4. 无障碍和非歧视政策',
      desc: 'X-Camp Academy 致力于为包括残障学生在内的所有学生创造一个包容和无障碍的教育环境。我们遵守非歧视政策，确保所有项目中的机会均等，无论种族、性别、宗教或其他特征如何。'
    },
    {
      title: '5. 责任和个人义务',
      desc: '参加 X-Camp Academy课程的风险由参加者自行承担。对于参加活动期间可能发生的任何伤害、损坏或财产损失，学院概不负责。学员及其监护人有责任确保自己在学院活动期间的安全和福祉。'
    },
    {
      title: '6. 健康与安全规定',
      desc: 'X-Camp Academy 严格遵守加利福尼亚州的健康和安全规定。所有学员及其监护人都应遵守这些规定，以确保每个人都有一个安全的学习环境。'
    },
    {
      title: '7. 项目修订',
      desc: 'X-Camp Academy 保留对课程、时间表和活动进行必要修改的权利。这些更改可能是由多种因素造成的，如教育标准的变化、技术进步或员工配备情况。'
    },
    {
      title: '8. 媒体授权同意',
      desc: '参加 X-Camp Academy活动的学生及其监护人同意将学院活动期间拍摄的照片和视频用于宣传或教育目的，除非特别提出拒绝参与的诉求。'
    },
    {
      title: '9. 隐私政策和个人数据处理',
      desc: 'X-Camp Academy 根据我们的隐私政策收集、使用和保护个人信息。这包括数据收集方法、收集的数据类型、数据存储、数据安全和数据留存政策。'
    },
    {
      title: '10. 未成年人信息的处理和保护',
      desc: 'X-Camp Academy在处理与未成年人（18 岁以下的个人）有关的信息时会采取额外的预防措施。我们致力于保护他们的隐私，确保他们有一个安全的网络环境。'
    },
    {
      title: '11. 知识产权保护',
      desc: '所有材料，包括课程内容、教学材料和 X-Camp Academy提供的任何在线资源，均为 X-Camp Academy或其内容提供商的财产，受知识产权法保护。严禁未经授权使用、复制、修改或分发这些材料。'
    },
    {
      title: '12. 免责声明的修订',
      desc: 'X-Camp Academy 保留随时更新或修改本免责声明的权利。如有更改，将通过我们的官方渠道通知，在更改后继续参加我们的项目，即表示接受新的条款。'
    },
    {
      title: '13. 适用法律和管辖权',
      desc: '本免责声明受 X-Camp Academy 注册地特拉华州和经营地加利福尼亚州的法律管辖。因本免责声明引起的或与之相关的任何争议均受上述两个州的司法管辖。'
    },
    {
      title: '14. 确认',
      desc: '参加 X-Camp Academy的项目，即表示个人承认并同意本免责声明中的条款和条件。'
    },
    {
      title: '15. 联系我们',
      desc: '如果您对本免责声明或我们的项目和政策的任何其他方面有任何问题或疑虑，请随时联系我们。我们欢迎您的咨询和反馈。您可以通过电子邮件info@x-camp.academy与我们联系。我们的团队将竭诚为您服务，并尽快回复您的询问。'
    }
  ];

  return (
    <div className={styles.privacyPolicyContainer}>
      <div className={`${styles.privacyPolicy} container`}>
        <Title className={styles.title}>{getTransResult(lang, 'X-Camp Academy免责声明与隐私政策', 'X - Camp Academy Disclaimer & Privacy Policy')}</Title>
        <Space direction="vertical" style={{ marginTop: 30 }}>
          <Text className={styles.policyExplains}>as of February 2024</Text>
          <Paragraph className={styles.policyExplainsList}>
            <ol>
              {/* {policyExplains[lang].map((explain) => (
                <li key={explain}>
                  <Text className={styles.policyExplains}>
                    {explain}
                    <br />
                  </Text>
                </li>
              ))} */}
            </ol>
          </Paragraph>
        </Space>



        <div className={styles.text} style={{ padding: '30px 0' }}>
          Last updated: July 27, 2023
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
