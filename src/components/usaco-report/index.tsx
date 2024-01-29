'use client';
import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';
import { Button, Cascader, Form, Input, InputNumber, Layout, Select, message, notification } from 'antd';
import { useMobile } from '@/utils';
import { useLang } from '@/hoc/with-intl/define';
import { getLangResult } from '@/utils/public';
import { useEstimatingScores } from '@/apis/common-client/common';

interface Options {
  value: string;
  label: string;
  children?: Options[];
}

interface FormValuesProps {
  stuName: string;
  email: string;
  level: string;
  grade: string;
  contest: string;
  xcampId: string;
  problemA: number;
  problemB: number;
  problemC: number;
  problemD?: number;
}

const { Content } = Layout;

const contestOptions = [
  {
    label: '2023 December Contest',
    value: '2023 December Contest'
  },
  // {
  //   label: '2024 January Contest',
  //   value: '2024 January Contest'
  // },
  // {
  //   label: '2024 February Contest',
  //   value: '2024 February Contest'
  // },
  // {
  //   label: '2024 March US Open',
  //   value: '2024 March US Open'
  // },
];
const levelOptions = [
  {
    label: 'Bronze',
    value: 'Bronze'
  },
  {
    label: 'Silver',
    value: 'Silver'
  },
  {
    label: 'Gold',
    value: 'Gold'
  },
  {
    label: 'Platinum',
    value: 'Platinum'
  },
];
const testCasesData = [
  {
    name: 'problemA',
    label: 'Problem A'
  },
  {
    name: 'problemB',
    label: 'Problem B'
  },
  {
    name: 'problemC',
    label: 'Problem C'
  },
];
const gradeOptionsEn: Options[] = [
  {
    'label': 'Preschool',
    'value': 'Preschool'
  },
  {
    'label': 'ElementarySchool',
    'value': 'ElementarySchool',
    'children': [
      {
        'label': '1st Grade',
        'value': '1st Grade'
      },
      {
        'label': '2nd Grade',
        'value': '2nd Grade'
      },
      {
        'label': '3rd Grade',
        'value': '3rd Grade'
      },
      {
        'label': '4th Grade',
        'value': '4th Grade'
      },
      {
        'label': '5th Grade',
        'value': '5th Grade'
      }
    ]
  },
  {
    'label': 'MiddleSchool',
    'value': 'MiddleSchool',
    'children': [
      {
        'label': '6th Grade',
        'value': '6th Grade'
      },
      {
        'label': '7th Grade',
        'value': '7th Grade'
      },
      {
        'label': '8th Grade',
        'value': '8th Grade'
      }
    ]
  },
  {
    'label': 'HighSchool',
    'value': 'HighSchool',
    'children': [
      {
        'label': '9th Grade /Freshman',
        'value': '9th Grade /Freshman'
      },
      {
        'label': '10th Grade /Sophomore',
        'value': '10th Grade /Sophomore'
      },
      {
        'label': '11th Grade /Junior',
        'value': '11th Grade /Junior'
      },
      {
        'label': '12th Grade /Senior',
        'value': '12th Grade /Senior'
      }
    ]
  },
  {
    'label': 'University',
    'value': 'University',
    'children': [
      {
        'label': 'Freshman',
        'value': 'Freshman'
      },
      {
        'label': 'Sophomore',
        'value': 'Sophomore'
      },
      {
        'label': 'Junior',
        'value': 'Junior'
      },
      {
        'label': 'Senior',
        'value': 'Senior'
      }
    ]
  },
  {
    'label': 'Out of school',
    'value': 'Out of school'
  }
];
const gradeOptionsZh: Options[] = [
  {
    'label': '学前',
    'value': '学前'
  },
  {
    'label': '小初',
    'value': '小初',
    'children': [
      {
        'label': '一年级',
        'value': '一年级'
      },
      {
        'label': '二年级',
        'value': '二年级'
      },
      {
        'label': '三年级',
        'value': '三年级'
      },
      {
        'label': '四年级',
        'value': '四年级'
      },
      {
        'label': '五年级',
        'value': '五年级'
      },
      {
        'label': '六年级',
        'value': '六年级'
      },
      {
        'label': '七年级',
        'value': '七年级'
      },
      {
        'label': '八年级',
        'value': '八年级'
      },
      {
        'label': '九年级',
        'value': '九年级'
      }
    ]
  },
  {
    'label': '高中',
    'value': '高中',
    'children': [
      {
        'label': '高一',
        'value': '高一'
      },
      {
        'label': '高二',
        'value': '高二'
      },
      {
        'label': '高三',
        'value': '高三'
      }
    ]
  },
  {
    'label': '大学',
    'value': '大学',
    'children': [
      {
        'label': '大一',
        'value': '大一'
      },
      {
        'label': '大二',
        'value': '大二'
      },
      {
        'label': '大三',
        'value': '大三'
      },
      {
        'label': '大四',
        'value': '大四'
      }
    ]
  },
  {
    'label': '非在校',
    'value': '非在校'
  }
];

const USACOReport: React.FC = () => {
  const isMobile = useMobile();
  const { lang } = useLang();
  const [form] = Form.useForm();
  const [testCases, setTestCases] = useState(testCasesData);
  const displayRender = (labels: string[]) => labels[labels.length - 1];
  const { runAsync } = useEstimatingScores();
  const contest = Form.useWatch('contest', form);
  const level = Form.useWatch('level', form);
  const [api, contextHolder] = notification.useNotification({ top: 120 });
  const onFinish = async (values: FormValuesProps) => {
    const { stuName, email, level, grade, contest, xcampId, problemA, problemB, problemC, problemD } = values;
    const params = {
      stuName,
      email,
      level,
      grade,
      contest,
      xcampId: xcampId ?? '',
      passCases: problemD ? [problemA, problemB, problemC, problemD] : [problemA, problemB, problemC]
    };
    await runAsync(params).then(() => {
      api.success({
        message: 'Notification',
        description: "Thanks for submitting your request, check your analytic report in your email. If you need more help, don't hesitate to reach out to us!",
        placement: 'topRight',
      });
    });
  };

  useEffect(() => {
    if (contest === '2024 March US Open') {
      setTestCases(prevTestCases => [
        ...prevTestCases,
        {
          name: 'problemD',
          label: 'Problem D'
        },
      ]);
    } else {
      setTestCases(testCasesData);
    }
  }, [contest]);
  useEffect(() => {
    if (level === 'Platinum') {
      message.config({
        top: 90
      });
      message.success({ key: 'success', content: 'Feel free to leave your contest info and comments, we will contact you.' });
    }
  }, [level]);
  return (
    <>
      {contextHolder}
      <Layout className={styles.usacoReportContainer}>
        <Content>
          <div className={`${styles.usacoReport} container`}>
            <div className={styles.title}>USACO Report Card</div>
            <Form
              form={form}
              name="basic"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              className={styles.form}
              initialValues={{
                contest: contestOptions[0].value,
                level: levelOptions[0].value,
                currentId: 'none for non X-Camp Students'
              }}
              onFinish={onFinish}
              autoComplete="off"
            >
              <Form.Item
                name="contest"
                label="Which contest did you take"
                rules={[{ required: true, message: 'Please select contest!' }]}
                className={styles.bold}
              >
                <Select allowClear options={contestOptions} />
              </Form.Item>


              <Form.Item
                name="level"
                label="Which level did you take"
                rules={[{ required: true, message: 'Please select contest level!' }]}
                className={styles.bold}
              >
                <Select allowClear options={levelOptions} />
              </Form.Item>

              {
                isMobile ?
                  <div style={{ marginBottom: 16 }} className={styles.bold}>How many test cases did you pass</div>
                  :
                  <Form.Item className={styles.bold} label="How many test cases did you pass" />
              }

              {
                testCases?.map(item => (
                  <Form.Item
                    key={item?.name}
                    name={item?.name}
                    label={item?.label}
                    rules={[{
                      required: true,
                      message: 'Please input the correct number of test cases!',
                      type: 'number',
                      min: 0,
                      max: 99
                    },
                    ]}
                  >
                    <InputNumber />
                  </Form.Item>
                ))
              }

              <Form.Item
                name="stuName"
                label="First Name"
                rules={[{ required: true }]}
                className={styles.bold}
              >
                <Input />
              </Form.Item>

              <Form.Item
                name="email"
                label="Email"
                rules={[{ required: true, type: 'email' }]}
                className={styles.bold}
              >
                <Input />
              </Form.Item>

              <Form.Item
                name="grade"
                label="Grade"
                rules={[{ required: true, message: 'Please select grade!' }]}
                className={styles.bold}
              >
                <Cascader
                  options={getLangResult(lang, gradeOptionsZh, gradeOptionsEn)}
                  expandTrigger="hover"
                  allowClear
                  displayRender={displayRender}
                  onChange={(value) => {
                    const lastValue = value[value?.length - 1];
                    form.setFieldsValue({ grade: lastValue?.toString() });
                  }}
                />
              </Form.Item>

              <Form.Item
                name="xcampId"
                label="Current X-Camp ID"
                className={styles.bold}
              >
                <Input />
              </Form.Item>

              <Form.Item wrapperCol={isMobile ? {} : { offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit" className={styles.button}>
                  Submit to get your analytic report
                </Button>
              </Form.Item>
            </Form>
          </div>
        </Content>
      </Layout>
    </>
  );
};

export default USACOReport;
