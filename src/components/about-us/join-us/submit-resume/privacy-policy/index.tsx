'use client';
import { useLang } from '@/hoc/with-intl/define';
import { Layout, List, Space, Typography } from 'antd';
import React from 'react';
import { getTransResult } from 'x-star-utils';
import styles from './index.module.scss';

const { Content } = Layout;
const { Title, Paragraph, Text } = Typography;

const PrivacyPolicy: React.FC = () => {
  const { lang } = useLang();

  const policyExplains = {
    zh: ['我们在申请和招聘过程中收集的信息以及收集这些信息的原因；', '我们如何使用这些信息；以及 ', '如何访问和更新这些信息。'],
    en: ['What information we collect during our application and recruitment process and why we collect it;', 'How we use that information; and', 'How to access and update that information.']
  };

  const typesInformationWeCollect = {
    en: {
      subTitle: 'Types of information we collect',
      description: 'This policy covers the information you share with us and/or which may be acquired or produced by X-Camp Academy during the application or recruitment process including:',
      list: [
        'Your name, address, email address, telephone number and other contact information;',
        'Your resume or CV, cover letter, previous and/or relevant work experience or other experience, education, transcripts, or other information you provide to us in support of an application and/or the application and recruitment process;',
        'Information from interviews and phone-screenings you may have, if any;',
        'Details of the type of employment you are or may be looking for, current and/or desired salary and other terms relating to compensation and benefits packages, willingness to relocate, or other job preferences;',
        'Details of how you heard about the position you are applying for;',
        'Any sensitive and/or demographic information processed during the application or recruitment process such as gender, information about your citizenship and/or nationality, medical or health information and/or your racial or ethnic origin;',
        'Reference information and/or information received from background checks (where applicable), including information provided by third parties;',
        'Information relating to any previous applications you may have made to X-Camp Academy and/or any previous employment history with X-Camp Academy;',
        'Your information from publicly available sources, including online, that we believe is relevant to your application or a potential future application (e.g. your LinkedIn profile); and/or',
        'Information related to any assessment you may take as part of the interview screening process.'
      ]
    },
    zh: {
      subTitle: '我们收集的信息类型',
      description: '本政策涵盖了您在申请或招聘过程中与我们分享的信息和/或可能由X-Camp Academy获取或产生的信息，包括： ',
      list: [
        '您的姓名，地址，电子邮件地址，电话号码和其他联系信息；',
        '您的简历或CV、求职信、以前和/或相关的工作经验或其他经验、教育、成绩单或其他您为支持申请和/或申请和招聘过程而提供给我们的信息；',
        '您可能参加的面试和电话筛选的信息（如果有）；',
        '您正在寻找或可能寻找的工作类型、当前和/或期望的薪水和其他与薪酬和福利套餐相关的条款、是否愿意搬迁或其他工作偏好；',
        '您是如何得知您申请的职位的；',
        '在申请或招聘过程中处理的任何敏感和/或人口统计信息，如性别、关于您的公民身份和/或国籍、医疗或健康信息和/或您的种族或民族来源；',
        '参考信息和/或来自背景调查（如适用）的信息，包括第三方提供的信息；',
        '与您可能向X-Camp Academy提交过的任何以前的申请和/或任何以前与X-Camp Academy的雇佣历史有关的信息；',
        '来自公开可用来源，包括在线，我们认为与您的申请或潜在未来申请相关（例如，您的LinkedIn个人资料）的信息；和/或',
        '与您作为面试筛选过程一部分可能参加的任何评估有关的信息。 '
      ]
    }
  };

  const howWeUseInformationWeCollect = {
    en: {
      subTitle: 'How we use information we collect',
      description: 'Your information will be used by X-Camp Academy for the purposes of carrying out its application and recruitment process which includes:',
      list: [
        'Assessing your skills, qualifications and interests against our career opportunities;',
        'Verifying your information and carrying out reference checks and/or conducting background checks (where applicable) if you are offered a job;',
        'Communications with you about the recruitment process and/or your application(s), including, in appropriate cases, informing you of other potential career opportunities at X-Camp Academy;',
        'Creating and/or submitting reports as required under any local laws and/or regulations, where applicable;',
        'Where requested by you, assisting you with obtaining a work permit where required;',
        'Making improvements to X-Camp Academy’s application and/or recruitment process including improving diversity in recruitment practices;',
        'Complying with applicable laws, regulations, legal processes or enforceable governmental requests; and/or',
        'Proactively conducting research about your educational and professional background and skills and contacting you if we think you would be suitable for a role with us.',
        'As part of our commitment to equal opportunity employment, we may process information regarding your membership in various organizations to support our diversity and inclusion efforts. This may include associating participant membership with sensitive and/or demographic information.'
      ]
    },
    zh: {
      subTitle: '我们如何使用我们收集的信息',
      description: 'X-Camp Academy将使用您的信息进行其申请和招聘过程，包括：',
      list: [
        '评估您的技能、资格和兴趣是否符合我们的职业机会；',
        '验证您的信息并进行参考检查和/或进行背景调查（如适用）如果您被录用；',
        '与您就招聘过程和/或您的申请进行沟通，包括在适当情况下，告知您X-Camp Academy其他潜在的职业机会； ',
        '根据任何当地法律和/或法规要求创建和/或提交报告（如适用）；',
        '根据您的要求，在需要时协助您获得工作许可；',
        '改进X-Camp Academy 的申请和/或招聘过程，包括改进招聘实践中的多样性；',
        '遵守适用法律、法规、法律程序或可执行政府要求；和/或',
        '主动对您的教育背景、专业背景和技能进行研究，并在我们认为您适合我们的角色时与您联系',
        '作为我们对平等就业机会承诺的一部分，我们可能会处理有关您在各种组织中成员资格的信息，以支持我们多元化和包容性工作。这可能包括将参与者成员资格与敏感和/或人口统计信息相关联'
      ]
    }
  };

  const whoMayHaveAccessToYourInformation = {
    en: {
      subTitle: 'Who may have access to your information',
      list: [
        {
          description:
            'If you have been referred for a job at X-Camp Academy by a current employee of ours, with your consent, we may inform that employee about the progress of your application and let the employee know the outcome of the process. In some cases, if it is identified that you have attended the same university/school or shared the same previous employer during the same period as a current X-Camp employee we may consult with that employee for feedback on you.',
          children: []
        },
        {
          description:
            'X-Camp Academy may also use service providers acting on X-Camp’s behalf to perform some of the services described above including for the purposes of the verification / background checks. These service providers may be located outside the country in which you live or the country where the position you have applied for is located.',
          children: []
        },
        {
          description:
            '  X-Camp Academy may sometimes be required to disclose your information to external third parties such as to local labor authorities, courts and tribunals, regulatory bodies and/or law enforcement agencies for the purpose of complying with applicable laws and regulations, or in response to legal process.',
          children: []
        },
        {
          description:
            'We will also share your personal information with other third parties if we have your consent (for example if you have given us permission to contact your referees), or to detect, prevent or otherwise address fraud, security or technical issues, or to protect against harm to the rights, property or safety of X-Camp Academy, our users, applicants, candidates, employees or the public or as otherwise required by law.',
          children: []
        },
        {
          description: '  It is your responsibility to obtain consent from referees before providing their personal information to X-Camp Academy.',
          children: []
        },
        {
          description:
            'X-Camp Academy operates in multiple countries and regions, which means your information may be stored and processed outside of the country or region where it was originally collected including in the United States. In some of these countries, you may have fewer rights in respect of your information than you do in your country of residence. Regardless of where your information is processed, we apply the same protections described in this policy. We also comply with certain legal frameworks relating to the transfer of data, such as the European frameworks described below. The European Commission has determined that certain countries outside of the European Economic Area (EEA) adequately protect personal data. You can review current European Commission adequacy decisions on the Commission website. To transfer data from the EEA to other countries, such as the United States, we comply with legal frameworks that establish an equivalent level of protection with EU law.',
          children: [
            'Model contract clauses. The European Commission has approved the use of model contract clauses as a means of ensuring adequate protection when transferring data outside of the EEA. By incorporating model contract clauses into a contract established between the parties transferring data, personal data is considered protected when transferred outside the EEA or the UK to countries which are not covered by an adequacy decision. We rely on these model contract clauses for data transfers.',
            'EU-U.S. and Swiss-U.S. Privacy Shield Frameworks. As described in our Privacy Shield certification, we comply with the EU-US and Swiss-US Privacy Shield Frameworks as set forth by the US Department of Commerce regarding the collection, use and retention of personal information from the EEA member countries and the United Kingdom (UK) as well as Switzerland, respectively. X-Camp Academy remains responsible for any of your personal information that is shared under the Onward Transfer Principle with third parties for external processing, as described above. To learn more about the Privacy Shield program, please visit the Privacy Shield website. X-Camp Academy is subject to the investigatory and enforcement powers of the US Federal Trade Commission (FTC). You may refer a complaint to your local data protection authority and we will work with them to resolve your concern. In certain circumstances, the Privacy Shield Framework provides the right to invoke binding arbitration to resolve complaints not resolved by other means, as described in Annex I to the Privacy Shield Principles. As of July 16, 2020, we no longer rely on the EU-U.S. Privacy Shield to transfer data that originated in the EEA or the UK to the U.S.'
          ]
        }
      ]
    },
    zh: {
      subTitle: '谁可以访问您的信息',
      list: [
        {
          description:
            '如果我们的现任员工向您推荐 X-Camp Academy 的工作，经您同意，我们可能会通知该员工您的申请进展情况，并让该员工知道该流程的结果。在某些情况下，如果发现您与 X-Camp 现任员工在同一时期就读于同一所大学/学校或同一前任雇主，我们可能会咨询该员工以获取有关您的反馈。',
          children: []
        },
        {
          description: 'X-Camp Academy还可能使用代表 X-Camp 的服务提供商来执行上述某些服务，包括用于验证/背景调查的目的。这些服务提供商可能位于您居住的国家或您所申请的职位所在的国家/地区之外。',
          children: []
        },
        {
          description: 'X-Camp Academy 有时可能需要向外部第三方披露您的信息，例如当地劳动部门、法院和法庭、监管机构和/或执法机构，以遵守适用的法律和法规，或响应法律程序。',
          children: []
        },
        {
          description:
            '如果我们征得您的同意（例如，如果您允许我们联系您的推荐人），或者为了检测、防止或以其他方式解决欺诈、安全或技术问题，或者为了防止欺诈，我们还将与其他第三方共享您的个人信息。损害 X-Camp Academy、我们的用户、申请人、候选人、员工或公众的权利、财产或安全或法律另有要求的。',
          children: []
        },
        {
          description: '您有责任在向 X-Camp Academy提供推荐人的个人信息之前获得推荐人的同意。',
          children: []
        },
        {
          description:
            'X-Camp在多个国家和地区运营，这意味着您的信息可能会在最初收集信息的国家或地区（包括美国）之外存储和处理。在其中一些国家/地区，您对自己的信息享有的权利可能少于您在居住国/地区的权利。无论您的信息在何处处理，我们都会应用本政策中描述的相同保护措施。我们还遵守与数据传输相关的某些法律框架，例如下文所述的欧洲框架。欧盟委员会已确定欧洲经济区 (EEA) 以外的某些国家/地区充分保护个人数据。您可以在欧盟委员会网站上查看当前的欧盟委员会充分性决定。为了将数据从欧洲经济区传输到其他国家（例如美国），我们遵守建立与欧盟法律同等保护水平的法律框架。',
          children: [
            '示范合同条款。欧盟委员会已批准使用示范合同条款作为确保在欧洲经济区以外传输数据时提供充分保护的手段。通过将示范合同条款纳入数据传输双方之间建立的合同中，个人数据在欧洲经济区或英国境外传输至充分性决定未涵盖的国家/地区时将被视为受到保护。我们依赖这些示范合同条款进行数据传输。',
            '欧盟-美国和瑞士-美国隐私护盾框架。正如我们的隐私盾认证中所述，我们遵守美国商务部制定的关于收集、使用和保留来自欧洲经济区成员国、英国 (UK) 以及瑞士的个人信息的欧盟-美国和瑞士-美国隐私保护框架。如上所述，X-Camp Academy 仍对根据继续传输原则与第三方共享以进行外部处理的任何个人信息负责。要了解有关隐私护盾计划的更多信息，请访问隐私护盾网站。X-Camp Academy受美国联邦贸易委员会 (FTC) 的调查和执法权约束。您还可以将投诉提交给当地的数据保护机构，我们将与他们合作解决您的问题。在某些情况下，隐私护盾框架提供了援引具有约束力的仲裁的权利，以解决通过其他方式无法解决的投诉，如隐私护盾原则附件一所述。自 2020 年 7 月 16 日起，我们不再依赖欧盟-美国隐私护盾将源自欧洲经济区或英国的数据传输到美国。'
          ]
        }
      ]
    }
  };

  const categoriesOfInformationWeCollect = {
    zh: [
      {
        head: '标识符和类似信息',
        content: '，例如您的姓名、电话号码和地址；用户名和密码；以及您当前使用的 浏览器、应用或设备所绑定的唯一标识符。'
      },
      {
        head: '人口统计特征信息',
        content: '，例如您的年龄、性别和所用语言。您还可以选择提供更多信息， 例如您的种族或族裔、宗教或哲学信仰、工会成员身份、性取向或性别认同。'
      },
      {
        head: '财务信息',
        content: '，例如当前和/或期望的薪资水平以及其他方面 （关于薪酬福利待遇）的详情。'
      },
      {
        head: '互联网、网络和其他活动信息',
        content:
          '（与您使用 X-Camp Academy 帐号、系统和服务相关），例如您的搜索字词；内容的浏览次数和互动次数；以及您的应用、 浏览器和设备与 X-Camp Academy 服务进行互动的相关信息（例如 IP 地址、崩溃报告和系统活动）。'
      },
      {
        head: '地理定位数据',
        content: '，包括根据 IP 地址确定的位置数据，在一定程度上取决于您的设备和帐号设置。'
      },
      {
        head: '音频、电子、影像信息及类似信息',
        content: '例如您可能进行过的面试或 电话面试（如果有）的相关信息。'
      },
      {
        head: '通信数据',
        content: '，例如您在求职或招聘流程中可能发送或接收的电子邮件。'
      },
      {
        head: '健康信息',
        content: ', 如果您选择在求职 或招聘流程中 提供此类信息，例如您可能提供的与住宿要求 相关的信息。'
      },
      {
        head: '职业信息、工作信息和教育信息',
        content: '，例如您在求职招聘流程中提供的信息，以及 X-Camp Academy 可能会通过推荐人调查、犯罪和财务背景调查（如适用）另行收集的信息和来自公开来源（包括线上来源）的可能相关的信息。'
      },
      {
        head: '您创建或提供的其他信息',
        content: '，例如您创建、上传 或以其他方式提供的与求职招聘流程 相关的内容。'
      }
    ],
    en: [
      {
        head: 'Identifiers and similar information',
        content: ', such as your name, phone number, and address; username and password; and unique identifiers tied to the browser, application, or device you’re using.'
      },
      {
        head: 'Demographic information',
        content:
          ', such as your age, gender, and language(s) spoken. If you choose, you may also provide additional information, like your racial or ethnic origin, religious or philosophical beliefs, trade union membership, sexual orientation, or gender identity.'
      },
      {
        head: 'Financial information',
        content: ', such as your current and/or desired salary and other terms relating to compensation and benefits packages.'
      },
      {
        head: 'Internet, network, and other activity information',
        content:
          'in connection with your use of X-Camp Academy accounts, systems, and services, such as your search terms; views and interactions with content; and information about the interaction of your apps, browsers, and devices with X-Camp Academy services (like IP address, crash reports, and system activity).'
      },
      {
        head: 'Geolocation data',
        content: ', including as determined by IP address, depending in part on your device and account settings.'
      },
      {
        head: 'Audio, electronic, visual, and similar information',
        content: ', such as information transmitted in connection with interviews or phone-screenings you may have, if any.'
      },
      {
        head: 'Communications data',
        content: ', such as emails that you may send or receive in connection with the application or recruitment process.'
      },
      {
        head: 'Health information',
        content: ', if you choose to provide it, in connection with the application or recruitment process, such as data you may provide in connection with an accommodations request.'
      },
      {
        head: 'Professional, employment, and education information',
        content:
          ', such as information you provide in connection with the application and recruitment process, as well as information X-Camp Academy may otherwise collect through reference checks, criminal and financial background checks (where applicable) and information from publicly available sources, including online, that may be relevant.'
      },
      {
        head: 'Other information you create or provide',
        content: ', such as the content you create, upload, or otherwise provide in connection with the application and recruitment process.'
      }
    ]
  };

  const businessPurposes = {
    zh: [
      {
        head: '行政目的',
        content:
          ': X-Camp Academy 会利用并可能 披露与执行求职招聘流程相关的 信息， 包括评估职位候选人；核实信息 并进行推荐人调查以及 犯罪和财务 背景调查（如适用）；与您进行沟通；回应帮助您取得移民签证或工作许可证的请求（必要时）；多元化、公平性、包容性和归属感；以及其他相关活动。'
      },
      {
        head: '防范安全威胁、滥用行为、非法活动和违规行为',
        content:
          ': X-Camp Academy 会利用（且可能会通过披露信息）来检测、预防和响应安全事件，以及防范其他恶意、欺骗性、 欺诈性或非法的活动。例如，为了保护我们的服务，X-Camp Academy 可能会 接收或披露 与恶意行为者 入侵的 IP 地址有关的信息。'
      },
      {
        head: '审核和衡量',
        content: ': X-Camp Academy 会利用信息进行分析和衡量，以了解 X-Camp Academy 帐号、 系统和服务的使用情况。'
      },
      {
        head: '维护我们的服务',
        content: ': X-Camp Academy 会利用信息来确保 X-Camp Academy 设备、帐号、系统和服务正常运行，例如跟踪中断情况或排查错误和其他问题。'
      },
      {
        head: '研究和开发',
        content: ': X-Camp Academy 会利用信息来改进我们的求职招聘流程，包括增加招聘方式的多样性。'
      },
      {
        head: '使用服务提供商',
        content:
          ': X-Camp Academy 会遵照本隐私权政策的规定以及其他相关的机密性和安全措施，将您的信息分享给服务提供商，以供其代表 X-Camp Academy 提供相关服务。例如，我们可能需要服务提供商帮助进行犯罪和 财务背景调查（如适用）。'
      },
      {
        head: '法律原因',
        content: ': X-Camp Academy 也会为了满足相关法律或法规的要求而使用信息， 以及为了配合司法程序或强制执行的政府要求（包括配合执法部门的 要求）而披露 信息。'
      }
    ],
    en: [
      {
        head: 'Administrative purposes',
        content:
          ': X-Camp Academy uses and may disclose information for purposes related to carrying out its application and recruitment process, including for assessing candidates; verifying information and conducting reference checks and criminal and financial background checks (where applicable); communicating with you; responding to requests for assistance with obtaining an immigration visa or work permit (where required); diversity, equity, inclusion and belonging; and other related activities.'
      },
      {
        head: 'Protecting against security threats, abuse, illegal activity, and violations',
        content:
          ': X-Camp Academy uses and may disclose information to detect, prevent and respond to security incidents, and for protecting against other malicious, deceptive, fraudulent, or illegal activity. '
      },
      {
        head: 'Auditing and measurement',
        content: ': X-Camp Academy uses information for analytics and measurement to understand use of X-Camp Academy accounts, systems, and services.'
      },
      {
        head: 'Maintaining our services',
        content: ', : X-Camp Academy uses information to ensure our accounts systems and services are working as intended, such as tracking outages or troubleshooting bugs and other issues.'
      },
      {
        head: 'Research and development',
        content: ': X-Camp Academy uses information to improve our application and recruitment process, including improving diversity in recruitment practices.'
      },
      {
        head: 'Use of service providers',
        content:
          ': X-Camp Academy shares information with service providers to perform services on our behalf, in compliance with this privacy policy and other appropriate confidentiality and security measures. For example, we may rely on service providers to help perform criminal and financial background checks (where applicable).'
      },
      {
        head: 'Legal reasons',
        content:
          ': X-Camp Academy also uses information to satisfy applicable laws or regulations, and discloses information in response to legal process or enforceable government requests, including to law enforcement.'
      }
    ]
  };

  const partiesWithInformation = {
    zh: [
      {
        head: '您选择与之分享信息的他人',
        content: '，例如您与之分享您创建、上传或以其他方式提供的与求职招聘流程 相关的内容的人。'
      },
      {
        head: '您同意与之分享信息的第三方',
        content: '，例如，您允许我们联系的推荐人。'
      },
      {
        head: '服务提供商、可信商家或个人（代表 X-Camp Academy 处理信息）',
        content: '：他们会根据我们的说明、 遵照本隐私权政策的规定以及其他相关的机密性 和安全措施来处理信息。'
      },
      {
        head: '执法部门或其他第三方',
        content: '：为了发现、举报和调查 违反适用法律法规的行为，以及配合司法程序或强制性政府要求，我们会与相关部门/相关方分享必要的信息。'
      }
    ],
    en: [
      {
        head: 'Other people with whom you choose to share your information',
        content: ', such as the content you create, upload, or otherwise provide in connection with the application and recruitment process.'
      },
      {
        head: 'Third parties with your consent',
        content: ', for example if you have given us permission to contact your references.'
      },
      {
        head: 'Service providers',
        content:
          ', trusted businesses or persons that process information on X-Camp’s behalf, based on our instructions and in compliance with this privacy policy and any other appropriate confidentiality and security measures.'
      },
      {
        head: 'Law enforcement or other third parties',
        content: ', in response to legal process or enforceable government requests, and as necessary to identify, report on and investigate violations of applicable laws and regulations.'
      }
    ]
  };

  return (
    <Layout className={styles.privacyPolicyContainer}>
      <Content>
        <div className={`${styles.privacyPolicy} container`}>
          <Title className={styles.title}>{getTransResult(lang, '应聘者和职位候选人隐私权政策', 'Applicant and Candidate Privacy Policy')}</Title>
          <Space direction="vertical" style={{ marginTop: 30 }}>
            <Text className={styles.policyExplains}>{getTransResult(lang, '本政策阐明以下内容：', 'This policy explains:')}</Text>
            <Paragraph className={styles.policyExplainsList}>
              {policyExplains[lang].map((explain, index) => (
                <li key={index}>
                  <Text className={styles.policyExplains}>
                    {explain}
                    <br />
                  </Text>
                </li>
              ))}
            </Paragraph>
          </Space>
          <Space direction="vertical" style={{ marginTop: 25, width: '100%' }}>
            <Text className={styles.subTitle}>{typesInformationWeCollect[lang].subTitle}</Text>
            <div className={styles.text}>
              <div className={styles.description}>{typesInformationWeCollect[lang].description}</div>
              <List
                dataSource={typesInformationWeCollect[lang].list}
                split={false}
                renderItem={(item) => (
                  <List.Item className={styles.list}>
                    <List.Item.Meta description={<Paragraph className={styles.text}>{item}</Paragraph>} />
                  </List.Item>
                )}
              />
            </div>
          </Space>

          <Space direction="vertical" style={{ marginTop: 25, width: '100%' }}>
            <Text className={styles.subTitle}>{howWeUseInformationWeCollect[lang].subTitle}</Text>
            <div className={styles.text}>
              <div className={styles.description}>{howWeUseInformationWeCollect[lang].description}</div>
              <List
                dataSource={howWeUseInformationWeCollect[lang].list}
                split={false}
                renderItem={(item) => (
                  <List.Item className={styles.list}>
                    <List.Item.Meta description={<Paragraph className={styles.text}>{item}</Paragraph>} />
                  </List.Item>
                )}
              />
            </div>
          </Space>

          <div className={styles.singleParagraph}>
            <Paragraph className={styles.text}>
              {getTransResult(
                lang,
                '我们还会在法律要求或允许的范围内，使用您的信息保护 X-Camp Academy、X-Camp Academy 用户、应聘者、职位候选人、员工或公众的权利和财产免遭侵犯。',
                'We will also use your information to protect the rights and property of X-Camp Academy,applicants, candidates, employees or the public as required or permitted by law.'
              )}
            </Paragraph>
          </div>

          <div className={styles.employment}>
            <Title className={styles.subTitle}>
              {getTransResult(
                lang,
                '如果您接受 X-Camp Academy 提供的职位，那么我们在求职招聘流程中所收集的信息将成为您的工作履历的一部分。',
                'If you are offered and accept employment with X-Camp Academy, the information collected during the application and recruitment process will become part of your employment record.'
              )}
            </Title>
            <Paragraph className={styles.singleParagraph}>
              <Text className={styles.text}>
                {getTransResult(
                  lang,
                  '我们会在以下情况下收集和处理您的信息：为采取相应措施而有必要这么做时、当您要求我们这么做时，以及在我们有意与您签订雇佣合同之前。',
                  'We collect and process your information where it is necessary in order to take steps, at your request, prior to our potentially entering into a contract of employment with you.'
                )}
              </Text>
            </Paragraph>
            <Paragraph className={styles.singleParagraph}>
              <Text className={styles.text}>
                {getTransResult(
                  lang,
                  '我们可能还会于特定情况下在处理您的个人信息前征得您的同意，或是为了履行相关法律义务或应对与依法索赔要求有关的事宜而处理您的个人信息。如果我们使用您的信息来完善我们的求职或招聘流程，这样做是为了确保能够招聘到最合适的职位候选人， 而且这一做法符合我们的合法权益。',
                  'We may also seek your consent to process your personal information in specific circumstances, or process it where necessary to comply with a legal obligation or for purposes connected to legal claims. If we use your information to improve our application or recruitment process, we do so on the basis that it is in our legitimate interests to ensure we recruit the best possible candidates.'
                )}
              </Text>
            </Paragraph>
          </div>

          <div style={{ marginTop: 25 }}>
            <Text className={styles.subTitle}>{whoMayHaveAccessToYourInformation[lang].subTitle}</Text>
            <div className={styles.text}>
              <ul>
                {whoMayHaveAccessToYourInformation[lang].list.map((item, index) => (
                  <li key={index} style={{ padding: '5px 0' }}>
                    <Text className={styles.text}>{item.description}</Text>
                    {item.children.length > 0 && (
                      <ul style={{ marginTop: 20 }}>
                        {item.children.map((child, index) => (
                          <li key={index} style={{ padding: '5px 0' }}>
                            <Text className={styles.text}>{child}</Text>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
              <Paragraph className={styles.text}>
                {getTransResult(
                  lang,
                  'X-Camp Academy 会采取适当的措施来保护在求职招聘流程中收集、处理和存储的与您相关的信息。',
                  'X-Camp Academy takes appropriate steps to protect information about you that is collected, processed, and stored as part of the application and recruitment process.'
                )}
              </Paragraph>
            </div>
          </div>

          <div style={{ marginTop: 25 }}>
            <Title className={styles.subTitle}>{getTransResult(lang, '我们如何保留您的信息', 'Our retention of your information')}</Title>
            <Paragraph className={styles.text} style={{ marginTop: 35 }}>
              {getTransResult(
                lang,
                '如果您应聘 X-Camp Academy 的某一职位但未被录用（或者您中途退出了应聘流程或谢绝了我们的录用），X-Camp Academy 会在您的应聘流程结束后，将您的信息保留一段时间。我们会出于各种原因保留此类信息，包括：为了防止由于招聘决定而导致我们面临法律上的质疑；为了将您作为 X-Camp Academy 当前或日后其他职位的备选人员；或为了帮助我们更好地了解、分析和完善招聘流程。',
                'If you apply for a job at X-Camp Academy and your application is unsuccessful (or you withdraw from the process or decline our offer), X-Camp Academy will retain your information for a period after your application. We retain this information for various reasons, including in case we face a legal challenge in respect of a recruitment decision, to consider you for other current or future jobs at X-Camp Academy and to help us better understand, analyze and improve our recruitment processes.'
              )}
            </Paragraph>
            <Paragraph className={styles.text} style={{ marginTop: 35 }}>
              {getTransResult(
                lang,
                '如果您不希望我们保留您的信息以将您作为其他职位的备选人员，或者希望我们更新您的信息，请发送电子邮件至',
                'If you do not want us to retain your information for consideration for other roles, or want us to update it, please contact'
              )}
              &nbsp;
              <a href="mailto:hr@x-camp.academy" className={styles.link}>
                hr@x-camp.academy
              </a>
              {getTransResult(
                lang,
                '。不过，请注意，我们可能会因法律规定或为了免遭依法索赔要求而保留您的部分信息。',
                '. Please note, however, that we may retain some information if required by law or as necessary to protect ourselves from legal claims.'
              )}
            </Paragraph>
          </div>

          <div style={{ marginTop: 25 }}>
            <Title className={styles.subTitle}>{getTransResult(lang, '您在个人信息方面所享有的权利', 'Your rights in respect of your information')}</Title>
            <Paragraph className={styles.text} style={{ marginTop: 35 }}>
              {getTransResult(
                lang,
                '某些国家/地区的数据保护法可能会赋予您特定的权利。这些权利可能包括要求访问、更新或审核您的信息，要求删除或匿名处理您的信息，或者拒绝或限制 X-Camp Academy 将您的信息用于特定目的。',
                'In certain countries, you may have certain rights under data protection law. This may include the right to request access or to update or review your information, request that it be deleted or anonymized, or object to or restrict X-Camp Academy using it for certain purposes.'
              )}
            </Paragraph>
            <Paragraph className={styles.text} style={{ marginTop: 35 }}>
              {getTransResult(lang, '如果您希望行使访问权，请发送电子邮件至', 'If you wish to exercise a right of access please contact')}&nbsp;
              <a href="mailto:hr@x-camp.academy" className={styles.link}>
                hr@x-camp.academy
              </a>
              {getTransResult(
                lang,
                '与我们联系。我们会根据适用法律回复您的请求，因此在某些情形下，我们可能无法满足您的请求。',
                '. We will respond to any requests in accordance with applicable law, and so there may be circumstances where we are not able to comply with your request.'
              )}
            </Paragraph>
          </div>

          <div style={{ marginTop: 25 }}>
            <Title className={styles.subTitle}>{getTransResult(lang, '本政策的修订', 'Changes to this Policy')}</Title>
            <Paragraph className={styles.text} style={{ marginTop: 35 }}>
              {getTransResult(
                lang,
                '我们可能会不时修订此政策，并且会在此页面上发布对此政策进行的任何修订。本页面顶部按版本生效日期列出了此政策的各个版本。',
                'We may change this policy from time to time. We will post any changes to this policy on this page.'
              )}
            </Paragraph>
          </div>

          <div style={{ marginTop: 25 }}>
            <Title className={styles.subTitle}>{getTransResult(lang, '美国州法律的要求', 'U.S. state law requirements')}</Title>
            <Paragraph className={styles.text} style={{ marginTop: 35 }}>
              {getTransResult(
                lang,
                '根据美国《加州消费者隐私法案》(CCPA) 等某些州级隐私保护法律的规定，我们必须向相应州的居民披露特定信息。',
                'Some U.S. state privacy laws, such as the California Consumer Privacy Act (CCPA), require specific disclosures for state residents.'
              )}
            </Paragraph>
            <Paragraph className={styles.text} style={{ marginTop: 35 }}>
              {getTransResult(
                lang,
                '本政策旨在帮助您了解 X-Camp Academy 会如何处理您的信息。上文的几个部分对以下内容分别进行了说明：(1) X-Camp Academy 会收集哪些类别的信息，以及这些信息的来源；(2) X-Camp Academy 使用信息的方式；(3) X-Camp Academy 可能会披露信息的情形；以及 (4) X-Camp Academy 会如何保留信息。X-Camp Academy 不会出售您的个人信息，也不会分享这类信息（此“分享”与《CCPA》中的“share”一词同义）。',
                'This policy is designed to help you understand how X-Camp Academy handles your information. In the sections above, we explain: (1) the categories of information X-Camp Academy collects and the sources of that information; (2) how X-Camp Academy uses information; (3) when X-Camp Academy may disclose information; and (4) how X-Camp Academy retains information. X-Camp Academy does not sell your personal information. X-Camp Academy also does not “share” your personal information as that term is defined in the CCPA.'
              )}
            </Paragraph>
            <Paragraph className={styles.text} style={{ marginTop: 35 }}>
              {getTransResult(
                lang,
                '根据《CCPA》等州法律的规定，您还有权要求我们说明 X-Camp Academy 会如何收集、使用和披露您的个人信息，也有权访问和更正这些信息以及要求 X-Camp Academy 删除这些信息。最后，《CCPA》可保障您不会因行使这些隐私权而遭受不平等的待遇。',
                'State laws like the CCPA also provide the right to request information about how X-Camp Academy collects, uses, and discloses your information. And they may give you the right to access and correct your information, and to request that X-Camp Academy delete that information. Finally, the CCPA provides the right to not be discriminated against for exercising these privacy rights.'
              )}
            </Paragraph>
            <Paragraph className={styles.text} style={{ marginTop: 35 }}>
              {getTransResult(
                lang,
                '如果您在《CCPA》规定的相关权利方面有疑问或顾虑，或者想行使自己的权利，您（或您的授权代理人）可以发送电子邮件至',
                'If you have questions or concerns related to your rights under CCPA, or would like to exercise your rights, you (or your authorized agent) can contact X-Camp Academy at'
              )}
              <a href="mailto:hr@x-camp.academy" className={styles.link}>
                hr@x-camp.academy
              </a>
              {getTransResult(
                lang,
                ' 与 X-Camp Academy 联系。我们将通过确认您与 X-Camp Academy 之间的互动来验证您的请求，并可能要求您向我们提供其他信息，例如您在与我们沟通时使用的任何姓名、电话号码或电子邮件地址。',
                '. We’ll validate your request by verifying your interactions with X-Camp Academy, and may require that you provide us with additional information, such as any names, phone numbers or email addresses you have used when communicating with us.'
              )}
            </Paragraph>
            <Paragraph className={styles.text} style={{ marginTop: 35 }}>
              {getTransResult(
                lang,
                '《CCPA》还规定必须使用特定类别来说明数据方面的做法。下表使用这些类别梳理了本政策中涵盖的相关信息。',
                'The CCPA also requires a description of data practices using specific categories. This table uses these categories to organize the information in this policy.'
              )}
            </Paragraph>
          </div>

          <div className={styles.textBorder}>
            <Title className={styles.subTitle}>{getTransResult(lang, '我们收集的信息的类别', 'Categories of information we collect')}</Title>
            <ul>
              {categoriesOfInformationWeCollect[lang].map((item, index) => (
                <li key={index} style={{ marginTop: 25 }}>
                  <Paragraph className={styles.text}>
                    <Text className={styles.boldText}>{item.head}</Text>
                    <Text className={styles.text}>{item.content}</Text>
                  </Paragraph>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.textBorder}>
            <Title className={styles.subTitle}>{getTransResult(lang, '可出于哪些业务目的使用或披露信息', 'Business purposes for which information may be used or disclosed')}</Title>
            <ul>
              {businessPurposes[lang].map((item, index) => (
                <li key={index} style={{ marginTop: 25 }}>
                  <Paragraph className={styles.text}>
                    <Text className={styles.boldText}>{item.head}</Text>
                    <Text className={styles.text}>{item.content}</Text>
                  </Paragraph>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.textBorder}>
            <Title className={styles.subTitle}>{getTransResult(lang, '可能的信息披露对象', 'Parties with whom information may be disclosed')}</Title>
            <ul>
              {partiesWithInformation[lang].map((item, index) => (
                <li key={index} style={{ marginTop: 25 }}>
                  <Paragraph className={styles.text}>
                    <Text className={styles.boldText}>{item.head}</Text>
                    <Text className={styles.text}>{item.content}</Text>
                  </Paragraph>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.text} style={{ padding: '30px 0' }}>
            {getTransResult(lang, '最后更新时间: 2023年4月24日', 'Last updated: July 27, 2023')}
          </div>
        </div>
      </Content>
    </Layout>
  );
};

export default PrivacyPolicy;
