'use client';
import { useLang } from '@/hoc/with-intl/define';
import { getLangResult, getTransResult } from '@/utils/public';
import { Typography } from 'antd';
import React from 'react';
import styles from './index.module.scss';

const { Title, Paragraph, Text } = Typography;

const DisclaimerPrivacyPolicy: React.FC = () => {
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
          title: 'a. Data Collection Methods: ',
          desc: 'X-Camp Academy collects personal information through various methods, including online forms during enrollment, direct communications (e.g., emails, phone calls), and through automated technologies on our website (such as cookies).',
        },
        {
          title: 'b. Types of Data Collected: ',
          desc: 'The information collected may include but is not limited to, student names, ages, educational backgrounds, contact details (email, phone number), and parent/guardian information for minors.',
        },
        {
          title: 'c. Purpose of Data Collection: ',
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
          title: 'f. Sharing of Information: ',
          desc: "We do not sell, trade, or rent personal data to third parties. However, we may share information with trusted third parties who assist us in operating our website, conducting our business, or serving our users, so long as those parties agree to keep this information confidential. We may also release information when its release is appropriate to comply with the law, enforce our site policies, or protect ours or others' rights, property, or safety."
        },
        {
          title: 'g. Your Rights and Choices: ',
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
      desc: '',
      children: [
        {
          title: 'a. Special Considerations for Minors:',
          desc: 'At X-Camp Academy, we take extra precautions when handling information related to minors (individuals under 18 years old). We are committed to protecting their privacy and ensuring a safe online environment.',
        },
        {
          title: 'b. Collection of Information: ',
          desc: 'The collection of personal information from minors is limited to what is necessary for participation in our coding programs. Parental or guardian consent is required for the collection, use, or disclosure of personal information from minors.',
        },
        {
          title: 'c. Use of Information: ',
          desc: ' Information collected from minors is strictly used for educational purposes, such as tracking progress, providing feedback, and communicating about program activities. We do not use this information for marketing purposes or share it with third parties for their marketing activities.',
        },
        {
          title: 'd. Security Measures: ',
          desc: 'We employ robust security measures to protect the personal information of minors from unauthorized access, alteration, or misuse. This includes secure data storage practices and restricted access to personal data.',
        },
        {
          title: 'e. Parental Access and Control: ',
          desc: "Parents or guardians have the right to review, modify, or request the deletion of their child's personal information. They can also refuse further collection or use of their child's information by contacting us at the provided contact details."
        },
        {
          title: 'f. Compliance with Laws: ',
          desc: "X-Camp Academy complies with all applicable laws and regulations regarding the protection of children's data, including but not limited to the Children's Online Privacy Protection Act (COPPA) in the United States."
        }
      ]
    },
    {
      title: '11. Intellectual Property Protection',
      desc: '',
      children: [
        {
          title: 'a. Ownership of Materials and Content: ',
          desc: ' All materials, including curriculum content, teaching materials, and any online resources provided by X-Camp Academy, are the property of X-Camp Academy or its content providers and are protected by intellectual property laws. Unauthorized use, reproduction, modification, or distribution of these materials is strictly prohibited.',
        },
        {
          title: 'b. Student Creations: ',
          desc: 'While students retain ownership of the intellectual property rights for the original content they create as part of their coursework (e.g., coding projects, software applications), by participating in our programs, students grant X-Camp Academy a non-exclusive, royalty-free license to use, display, and reproduce such creations for educational and promotional purposes.',
        },
        {
          title: 'c. Respecting Third-Party IP: ',
          desc: 'Students and staff are expected to respect the intellectual property rights of others. This includes not using copyrighted materials without proper authorization or licensing and acknowledging the source of third-party content incorporated into their work.',
        },
        {
          title: 'd. IP Infringement: ',
          desc: "Any infringement of intellectual property rights can result in disciplinary action, including but not limited to removal from the program and legal action. Participants are encouraged to report any suspected infringement to X-Camp Academy's administration.",
        },
      ]
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
      desc: () => {
        return (
          <>
            <Text>If you have any questions or concerns regarding this disclaimer, or any other aspects of our programs and policies, please feel free to contact us. We welcome your inquiries and feedback. You can reach us via email at </Text>
            <a href="mailto:info@x-camp.academy"> info@x-camp.academy</a>
            <Text>Our team is dedicated to assisting you and will respond to your queries as promptly as possible.</Text>
          </>
        );
      }
    }
  ];

  const zhData = [
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
      desc: 'X-Camp Academy 根据我们的隐私政策收集、使用和保护个人信息。这包括数据收集方法、收集的数据类型、数据存储、数据安全和数据留存政策。',
      children: [
        {
          title: 'a. 数据收集方法: ',
          desc: 'X-Camp Academy 通过多种方法收集个人信息，包括注册时的在线表格、直接通信（如电子邮件、电话）以及网站上的自动技术（如 Cookies）。',
        },
        {
          title: 'b. 收集的数据类型: ',
          desc: '收集的信息可能包括但不限于学生姓名、年龄、教育背景、联系方式（电子邮件、电话号码）以及未成年人的家长/监护人信息。',
        },
        {
          title: 'c. 收集数据的目的: ',
          desc: '所收集的数据用于学生注册、课程管理、与学生和监护人的沟通，以及加强我们的教育服务。我们还可能将这些信息用于研究和分析目的，以改进我们的项目。',
        },
        {
          title: 'd. 数据存储和安全: ',
          desc: '个人数据存储在安全的加密数据库中。我们采取各种安全措施来维护个人信息的安全，防止未经授权的访问、篡改、披露或破坏。这些措施包括但不限于安全服务器存储、防火墙保护和安全数据传输协议。',
        },
        {
          title: 'e. 数据留存: ',
          desc: '个人信息的留存期限仅限于实现收集目的所需的时间，包括我们的项目持续时间以及任何法律、会计或报告要求。'
        },
        {
          title: 'f. 信息共享: ',
          desc: '我们不会向第三方出售、交易或出租个人数据。不过，我们可能会与协助我们运营网站、开展业务或为用户提供服务的可信第三方共享信息，前提是这些第三方同意对这些信息保密。为了遵守法律、执行我们的网站政策或保护我们或他人的权利、财产或安全，我们也会在适当的情况下发布信息。'
        },
        {
          title: 'g. 您的权利和选择: ',
          desc: '学员及其监护人有权访问、更正或删除 X-Camp Academy 所持有的个人信息。如需查阅或更正个人资料，可向我们的行政团队提出申请。学员和监护人还有权选择不使用其个人信息的某些用途，如推广信息。'
        },
        {
          title: 'h. 政策更新: ',
          desc: '我们的隐私政策可能会定期更新，以反映我们的实践或法律要求的变化。如有任何重大变更，我们将通知学员和监护人。'
        }
      ]
    },
    {
      title: '10. 未成年人信息的处理和保护',
      desc: 'X-Camp Academy在处理与未成年人（18 岁以下的个人）有关的信息时会采取额外的预防措施。我们致力于保护他们的隐私，确保他们有一个安全的网络环境。',
      children: [
        {
          title: 'a. 未成年人特别注意事项: ',
          desc: 'X-Camp Academy在处理与未成年人（18 岁以下的个人）有关的信息时会采取额外的预防措施。我们致力于保护他们的隐私，确保他们有一个安全的网络环境。',
        },
        {
          title: 'b. 信息收集: ',
          desc: '对未成年人个人信息的收集仅限于参与我们的编程项目所必需的内容。收集、使用或披露未成年人的个人信息必须征得家长或监护人的同意。',
        },
        {
          title: 'c. 信息使用: ',
          desc: '从未成年人处收集的信息严格用于教育目的，如跟踪进度、提供反馈和沟通项目活动。我们不会将这些信息用于营销目的，也不会与第三方共享这些信息用于他们的营销活动。',
        },
        {
          title: 'd. 安全措施: ',
          desc: '我们采取强有力的安全措施，保护未成年人的个人信息免遭未经授权的访问、篡改或滥用。这包括安全的数据存储做法和限制对个人数据的访问。',
        },
        {
          title: 'e. 家长访问和控制: ',
          desc: '家长或监护人有权查看、修改或要求删除其子女的个人信息。他们也可以通过提供的联系方式联系我们，拒绝进一步收集或使用其子女的信息。 '
        },
        {
          title: 'f. 遵守法律: ',
          desc: 'X-Camp Academy 遵守所有适用于儿童数据保护的法律法规，包括但不限于美国的《儿童在线隐私保护法案》（COPPA）。'
        }
      ]
    },
    {
      title: '11. 知识产权保护',
      desc: '所有材料，包括课程内容、教学材料和 X-Camp Academy提供的任何在线资源，均为 X-Camp Academy或其内容提供商的财产，受知识产权法保护。严禁未经授权使用、复制、修改或分发这些材料。',
      children: [
        {
          title: 'a. 材料和内容的所有权: ',
          desc: '所有材料，包括课程内容、教学材料和 X-Camp Academy提供的任何在线资源，均为 X-Camp Academy或其内容提供商的财产，受知识产权法保护。严禁未经授权使用、复制、修改或分发这些材料。',
        },
        {
          title: 'b.学生创作: ',
          desc: '学生保留对其在课程学习中创作的原创内容（如编程作品、软件应用程序）的知识产权，但在参与我们的课程时，学生授予 X-Camp Academy 非排他性、免版税的许可，允许我们出于教育和宣传目的使用、展示和复制这些创作。',
        },
        {
          title: 'c. 尊重第三方知识产权: ',
          desc: '学生和员工应尊重他人的知识产权。这包括未经适当授权或许可不使用受版权保护的材料，并确认其作品中包含的第三方内容的来源。',
        },
        {
          title: 'd. 知识产权侵犯: ',
          desc: '何侵犯知识产权的行为都可能导致纪律处分，包括但不限于从项目中除名和法律诉讼。我们鼓励学员向 X-Camp Academy的管理部门举报任何涉嫌侵权的行为。',
        },
      ]
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
    <div className={styles.disclaimerPrivacyPolicyContainer}>
      <div className={`${styles.disclaimerPrivacyPolicy} container`}>
        <Title className={styles.title}>{getTransResult(lang, 'X-Camp Academy免责声明与隐私政策', 'X - Camp Academy Disclaimer & Privacy Policy')}</Title>
        <Text className={styles.date}>{getTransResult(lang, '2024年2月版本', 'as of February 2024')}</Text>
        {
          getLangResult(lang, zhData, enData)?.map((item) => (
            <div key={item?.title}>
              <Title className={styles.itemTitle}>{item?.title}</Title>
              <Paragraph className={styles.itemDesc}>
                {typeof item?.desc === 'string' ? (
                  item.desc
                ) : (
                  item.desc()
                )}
              </Paragraph>
              <div className={styles.children}>
                {
                  item?.children && item?.children.map((childItem) => (
                    <div key={childItem?.title} style={{ marginBottom: 8 }}>
                      <Text className={styles.childTitle}>{childItem?.title}</Text>
                      <Text className={styles.childDesc}>{childItem?.desc}</Text>
                    </div>
                  ))
                }
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default DisclaimerPrivacyPolicy;
