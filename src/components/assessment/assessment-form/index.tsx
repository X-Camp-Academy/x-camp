'use client';
import { submitAssessmentRequest } from '@/apis/send-email-client/define';
import { useSubmitAssessment } from '@/apis/send-email-client/sendEmail';
import { useLang } from '@/hoc/with-intl/define';
import { Button, Col, Form, Input, Row, Select, message } from 'antd';
import React from 'react';
import styles from './index.module.scss';

const AssessmentForm: React.FC = () => {
  const { format: t } = useLang();
  const [form] = Form.useForm();
  const { runAsync: sendEmail } = useSubmitAssessment();

  const submitEmailValue = async (value: submitAssessmentRequest) => {
    const result = await sendEmail(value);
    message.config({
      top: 90
    });
    if (result.msg === 'ok') {
      message.success(t('Assessment.form.success'), 4);
      form.resetFields();
    } else {
      message.error(t('Assessment.form.fail'));
    }
  };

  return (
    <div className={styles.assessmentFormContainer}>
      <div className={`${styles.assessmentForm} container`}>
        <div className={styles.title}>{t('Assessment.form.title')}</div>
        <Row gutter={24}>
          <Col lg={12} md={24}>
            <Form form={form} name="AssessmentForm" size="large" autoComplete="off" colon={false} onFinish={submitEmailValue}>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item
                    name="stuName"
                    className={styles.required}
                    rules={[
                      {
                        required: true,
                        message: t('Assessment.form.stuName.required')
                      }
                    ]}
                  >
                    <Input placeholder={t('Assessment.form.stuName')} />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    name="email"
                    className={styles.required}
                    rules={[
                      {
                        required: true,
                        message: t('Assessment.form.Email.required')
                      },
                      {
                        type: 'email',
                        message: t('Assessment.form.Email.format')
                      }
                    ]}
                  >
                    <Input placeholder={t('Assessment.form.Email')} />
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item
                    name="phoneNumber"
                    className={styles.required}
                    rules={[
                      {
                        required: true,
                        message: t('Assessment.form.Phone.required')
                      }
                    ]}
                  >
                    <Input placeholder={t('Assessment.form.Phone')} />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    name="grade"
                    className={styles.required}
                    rules={[
                      {
                        required: true,
                        message: t('Assessment.form.Grade.required')
                      }
                    ]}
                  >
                    <Select
                      placeholder={t('Assessment.form.Grade')}
                      options={[
                        { value: '5', label: '5' },
                        { value: '6', label: '6' },
                        { value: '7', label: '7' },
                        { value: '8', label: '8' },
                        { value: '9', label: '9' },
                        { value: '10', label: '10' },
                        { value: '11', label: '11' },
                        { value: '12', label: '12' }
                      ]}
                    />
                  </Form.Item>
                </Col>
              </Row>

              <Form.Item
                name="codingBackground"
                className={styles.required}
                rules={[
                  {
                    required: true,
                    message: t('Assessment.form.CodingBackground.required')
                  }
                ]}
              >
                <Select
                  placeholder={t('Assessment.form.CodingBackground')}
                  options={[
                    {
                      value: 'No coding experiences',
                      label: t('Assessment.form.CodingBackground.NoCodingExperience')
                    },
                    {
                      value: '< half year coding experience',
                      label: t('Assessment.form.CodingBackground.LessThanHalfYear')
                    },
                    {
                      value: '< 1 year coding experiences',
                      label: t('Assessment.form.CodingBackground.LessThanOneYear')
                    },
                    {
                      value: '> 1 year coding experiences',
                      label: t('Assessment.form.CodingBackground.MoreThanOneYear')
                    },
                    {
                      value: '> 2 year coding experiences',
                      label: t('Assessment.form.CodingBackground.MoreThanTwoYear')
                    }
                  ]}
                />
              </Form.Item>
              <Form.Item
                name="codingLanguage"
                className={styles.required}
                rules={[
                  {
                    required: true,
                    message: t('Assessment.form.CodingLanguage.required')
                  }
                ]}
              >
                <Select
                  placeholder={t('Assessment.form.CodingLanguage')}
                  options={[
                    {
                      value: 'No coding experiences',
                      label: t('Assessment.form.CodingLanguage.NoCodingExperience')
                    },
                    {
                      value: 'Java coding experiences',
                      label: t('Assessment.form.CodingLanguage.Java')
                    },
                    {
                      value: 'Python coding experiences',
                      label: t('Assessment.form.CodingLanguage.Python')
                    },
                    {
                      value: 'C++ coding experiences',
                      label: t('Assessment.form.CodingLanguage.C++')
                    }
                  ]}
                />
              </Form.Item>
              <Form.Item name="programmingExp" className={styles.unRequired}>
                <Input placeholder={t('Assessment.form.ContestExperience')} />
              </Form.Item>
              <Form.Item
                name="aboutXcamp"
                className={styles.required}
                rules={[
                  {
                    required: true,
                    message: t('Assessment.form.AboutXCamp.required')
                  }
                ]}
              >
                <Select
                  placeholder={t('Assessment.form.AboutXCamp')}
                  options={[
                    {
                      value: 'X-Camp Consultant',
                      label: t('Assessment.form.AboutXCamp.Consultant')
                    },
                    {
                      value: 'X-Camp WeChat Official Account',
                      label: t('Assessment.form.AboutXCamp.OfficialAccount')
                    },
                    {
                      value: 'X-Camp Events',
                      label: t('Assessment.form.AboutXCamp.Events')
                    },
                    {
                      value: 'X-Camp Social Media (FB, Linkedin, Twitter)',
                      label: t('Assessment.form.AboutXCamp.SocialMedia')
                    },
                    {
                      value: 'Contest (HPI, Turing Cup)',
                      label: t('Assessment.form.AboutXCamp.Contest')
                    },
                    {
                      value: 'usaco.org',
                      label: t('Assessment.form.AboutXCamp.USACO')
                    },
                    {
                      value: 'Discord (Teamscode, CinT, LiT)',
                      label: t('Assessment.form.AboutXCamp.Discord')
                    },
                    {
                      value: 'Google Search',
                      label: t('Assessment.form.AboutXCamp.GoogleSearch')
                    },
                    {
                      value: 'Wechat Moments',
                      label: t('Assessment.form.AboutXCamp.WeChatMoments')
                    },
                    {
                      value: 'Word of mouth/Friends',
                      label: t('Assessment.form.AboutXCamp.Friend')
                    },
                    {
                      value: 'Xiaohongshu(小红书)',
                      label: t('Assessment.form.AboutXCamp.Xiaohongshu')
                    },
                    {
                      value: 'Others',
                      label: t('Assessment.form.AboutXCamp.Other')
                    }
                  ]}
                />
              </Form.Item>

              <Form.Item className={styles.unRequired}>
                <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
                  {t('Submit')}
                </Button>
              </Form.Item>
            </Form>
          </Col>
          <Col lg={12} md={24}>
            <div className={styles.right}>
              <img src="/image/evaluation/light.png" alt="img" />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default AssessmentForm;
