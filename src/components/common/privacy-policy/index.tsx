'use client';
import { useLang } from '@/hoc/with-intl/define';
import { List, Space, Typography } from 'antd';
import React from 'react';
import styles from './index.module.scss';

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

  const categoriesOfInformationWeCollect = [
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
  ];

  const businessPurposes = [
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
  ];

  const partiesWithInformation = [
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
  ];

  return (
    <div className={styles.privacyPolicyContainer}>
      <div className={`${styles.privacyPolicy} container`}>
        <Title className={styles.title}>Applicant and Candidate Privacy Policy</Title>
        <Space direction="vertical" style={{ marginTop: 30 }}>
          <Text className={styles.policyExplains}>This policy explains:</Text>
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
            We will also use your information to protect the rights and property of X-Camp Academy,applicants, candidates, employees or the public as required or permitted by law.
          </Paragraph>
        </div>

        <div className={styles.employment}>
          <Title className={styles.subTitle}>
            If you are offered and accept employment with X-Camp Academy, the information collected during the application and recruitment process will become part of your employment record.
          </Title>
          <Paragraph className={styles.singleParagraph}>
            <Text className={styles.text}>
              We collect and process your information where it is necessary in order to take steps, at your request, prior to our potentially entering into a contract of employment with you.
            </Text>
          </Paragraph>
          <Paragraph className={styles.singleParagraph}>
            <Text className={styles.text}>
              We may also seek your consent to process your personal information in specific circumstances, or process it where necessary to comply with a legal obligation or for purposes connected to
              legal claims. If we use your information to improve our application or recruitment process, we do so on the basis that it is in our legitimate interests to ensure we recruit the best
              possible candidates.
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
              X-Camp Academy takes appropriate steps to protect information about you that is collected, processed, and stored as part of the application and recruitment process.
            </Paragraph>
          </div>
        </div>

        <div style={{ marginTop: 25 }}>
          <Title className={styles.subTitle}>Our retention of your information</Title>
          <Paragraph className={styles.text} style={{ marginTop: 35 }}>
            {
              'If you apply for a job at X-Camp Academy and your application is unsuccessful (or you withdraw from the process or decline our offer), X-Camp Academy will retain your information for a period after your application. We retain this information for various reasons, including in case we face a legal challenge in respect of a recruitment decision, to consider you for other current or future jobs at X-Camp Academy and to help us better understand, analyze and improve our recruitment processes.'
            }
          </Paragraph>
          <Paragraph className={styles.text} style={{ marginTop: 35 }}>
            If you do not want us to retain your information for consideration for other roles, or want us to update it, please contact&nbsp;
            <a href="mailto:hr@x-camp.academy" className={styles.link}>
              hr@x-camp.academy
            </a>
            . Please note, however, that we may retain some information if required by law or as necessary to protect ourselves from legal claims.
          </Paragraph>
        </div>

        <div style={{ marginTop: 25 }}>
          <Title className={styles.subTitle}>Your rights in respect of your information</Title>
          <Paragraph className={styles.text} style={{ marginTop: 35 }}>
            {
              'In certain countries, you may have certain rights under data protection law. This may include the right to request access or to update or review your information, request that it be deleted or anonymized, or object to or restrict X-Camp Academy using it for certain purposes.'
            }
          </Paragraph>
          <Paragraph className={styles.text} style={{ marginTop: 35 }}>
            {'If you wish to exercise a right of access please contact'}&nbsp;
            <a href="mailto:hr@x-camp.academy" className={styles.link}>
              hr@x-camp.academy
            </a>
            {'. We will respond to any requests in accordance with applicable law, and so there may be circumstances where we are not able to comply with your request.'}
          </Paragraph>
        </div>

        <div style={{ marginTop: 25 }}>
          <Title className={styles.subTitle}>Changes to this Policy</Title>
          <Paragraph className={styles.text} style={{ marginTop: 35 }}>
            {'We may change this policy from time to time. We will post any changes to this policy on this page.'}
          </Paragraph>
        </div>

        <div style={{ marginTop: 25 }}>
          <Title className={styles.subTitle}>{'U.S. state law requirements'}</Title>
          <Paragraph className={styles.text} style={{ marginTop: 35 }}>
            {'Some U.S. state privacy laws, such as the California Consumer Privacy Act (CCPA), require specific disclosures for state residents.'}
          </Paragraph>
          <Paragraph className={styles.text} style={{ marginTop: 35 }}>
            {
              'This policy is designed to help you understand how X-Camp Academy handles your information. In the sections above, we explain: (1) the categories of information X-Camp Academy collects and the sources of that information; (2) how X-Camp Academy uses information; (3) when X-Camp Academy may disclose information; and (4) how X-Camp Academy retains information. X-Camp Academy does not sell your personal information. X-Camp Academy also does not “share” your personal information as that term is defined in the CCPA.'
            }
          </Paragraph>
          <Paragraph className={styles.text} style={{ marginTop: 35 }}>
            {
              'State laws like the CCPA also provide the right to request information about how X-Camp Academy collects, uses, and discloses your information. And they may give you the right to access and correct your information, and to request that X-Camp Academy delete that information. Finally, the CCPA provides the right to not be discriminated against for exercising these privacy rights.'
            }
          </Paragraph>
          <Paragraph className={styles.text} style={{ marginTop: 35 }}>
            {
              'If you have questions or concerns related to your rights under CCPA, or would like to exercise your rights, you (or your authorized agent) can contact X-Camp Academy at hr@x-camp.academy. We’ll validate your request by verifying your interactions with X-Camp Academy, and may require that you provide us with additional information, such as any names, phone numbers or email addresses you have used when communicating with us.'
            }
          </Paragraph>
          <Paragraph className={styles.text} style={{ marginTop: 35 }}>
            {'The CCPA also requires a description of data practices using specific categories. This table uses these categories to organize the information in this policy.'}
          </Paragraph>
        </div>

        <div className={styles.textBorder}>
          <Title className={styles.subTitle}>{'Categories of information we collect'}</Title>
          <ul>
            {categoriesOfInformationWeCollect.map((item, index) => (
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
          <Title className={styles.subTitle}>{'Business purposes for which information may be used or disclosed'}</Title>
          <ul>
            {businessPurposes.map((item, index) => (
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
          <Title className={styles.subTitle}>{'Parties with whom information may be disclosed'}</Title>
          <ul>
            {partiesWithInformation.map((item, index) => (
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
          Last updated: July 27, 2023
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
