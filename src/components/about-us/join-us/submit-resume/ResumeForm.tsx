"use client";
import {
  Typography,
  Divider,
  Form,
  Button,
  Input,
  Radio,
  Space,
  Upload,
  UploadFile,
  message,
} from "antd";
import styles from "./ResumeForm.module.scss";
import React from "react";
import { UploadChangeParam } from "antd/es/upload";
import { useSubmitResume } from "@/apis/send-email-client/sendEmail";
import { useLang } from "@/hoc/with-intl/define";
const { Title, Text, Paragraph } = Typography;

interface submitResumeProps {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  acRelocate: string;
  alphabetEmployee: string;
  resume: { originFileObj: Blob }[];
  letter?: { originFileObj: Blob }[];
  linkedIn?: Blob;
  website?: Blob;
}

const ResumeForm: React.FC<{
  job: string | undefined;
  department: string | undefined;
}> = ({ job, department }) => {
  const { format: t } = useLang();
  const fileSizeLimit = 10 * 1024 * 1024; // 10MB，字节为单位
  function beforePDFUpload(file: any) {
    const isSizeValid = file.size <= fileSizeLimit;
    if (!isSizeValid) {
      message.error("File size must be less than or equal to 10MB");
    }
    return false;
  }
  const submitCvPDF = async (info: UploadChangeParam<UploadFile<any>>) => {
    form.setFieldsValue({ resume: info.fileList });
  };

  function beforeLetterUpload(file: any) {
    const isSizeValid = file.size <= fileSizeLimit;
    if (!isSizeValid) {
      message.error(
        "File size must be less than or equal to 10MB. Please Upload again!"
      );
    }
    return false;
  }
  const submitLetter = async (info: UploadChangeParam<UploadFile<any>>) => {
    form.setFieldsValue({ letter: info.fileList });
  };

  const [form] = Form.useForm();

  const { runAsync: submitResume } = useSubmitResume();

  const submitResumeOnFinish = async (formValues: submitResumeProps) => {
    const requestData = new FormData();
    if (formValues.resume[0].originFileObj.size >= fileSizeLimit) {
      message.error(
        "File size must be less than or equal to 10MB. Please Upload again!"
      );
      return;
    }

    if (job) requestData.append("job", job);
    if (department) requestData.append("department", department);
    requestData.append("firstName", formValues.firstName);
    requestData.append("lastName", formValues.lastName);
    requestData.append("email", formValues.email);
    requestData.append("phone", formValues.phone);
    requestData.append("acRelocate", formValues.acRelocate);
    requestData.append("alphabetEmployee", formValues.alphabetEmployee);
    requestData.append("resume", formValues.resume[0].originFileObj);
    if (formValues.letter)
      requestData.append("letter", formValues.letter[0].originFileObj);
    if (formValues.linkedIn) requestData.append("linkIn", formValues.linkedIn);
    if (formValues.website) requestData.append("website", formValues.website);
    await submitResume(requestData);
  };

  return (
    <>
      <Divider style={{ borderColor: "#FFAD11" }} />
      <Form
        form={form}
        layout="vertical"
        autoComplete="off"
        size="large"
        className={styles.formContainer}
        onFinish={submitResumeOnFinish}
      >
        <Title className={styles.title}>{t("ApplyNow")}</Title>
        <Text className={styles.description}>{t("RequiredFields")}</Text>

        <div className={styles.basicInfoContainer}>
          <Form.Item name="firstName" rules={[{ required: true }]}>
            <Input placeholder={`${t("FirstName")} *`} />
          </Form.Item>
          <Form.Item name="lastName" rules={[{ required: true }]}>
            <Input placeholder={`${t("LastName")} *`} />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[{ type: "email" }, { required: true }]}
          >
            <Input type="email" placeholder={`${t("Email")} *`} />
          </Form.Item>
          <Form.Item name="phone" rules={[{ required: true }]}>
            <Input placeholder={`${t("Phone")} *`} />
          </Form.Item>
        </div>
        <Title className={styles.title}>{`${t("ResumeCV")} *`}</Title>
        <Form.Item name="resume" rules={[{ required: true }]}>
          <Upload
            accept=".pdf"
            maxCount={1}
            beforeUpload={beforePDFUpload}
            onChange={(info) => submitCvPDF(info)}
            showUploadList={{
              showRemoveIcon: false,
            }}
            disabled={false}
          >
            <Button type="primary" className={styles.upBtn}>
              {t("UploadFile")}
            </Button>
          </Upload>
        </Form.Item>
        <Title className={styles.title}>{t("CoverLetter")}</Title>
        <Form.Item name="letter">
          <Upload
            accept=".pdf"
            maxCount={1}
            beforeUpload={beforeLetterUpload}
            onChange={(info) => submitLetter(info)}
            showUploadList={{
              showRemoveIcon: false,
            }}
            disabled={false}
          >
            <Button type="primary" className={styles.upBtn}>
              {t("UploadFile")}
            </Button>
          </Upload>
        </Form.Item>

        <Form.Item name="linkedIn">
          <Input
            placeholder={t("LinkedInProfile")}
            className={styles.inputInfo}
          />
        </Form.Item>

        <Form.Item name="website">
          <Input placeholder={t("Website")} className={styles.inputInfo} />
        </Form.Item>

        <div style={{ marginBottom: 20 }}>
          <Text className={styles.problem}>
            {t("RelocationQuestion")}
            {" *"}
          </Text>
        </div>
        <Form.Item
          name="acRelocate"
          rules={[{ required: true, message: "please choose the radio" }]}
        >
          <Radio.Group>
            <Space direction="vertical">
              <Radio value="Yes" className={styles.problem}>
                {t("Yes")}
              </Radio>
              <Radio value="No" className={styles.problem}>
                {t("No")}
              </Radio>
            </Space>
          </Radio.Group>
        </Form.Item>

        <div style={{ marginBottom: 20 }}>
          <Text className={styles.problem}>
            {t("AlphabetEmployeeQuestion")}
            {" *"}
          </Text>
        </div>
        <Form.Item
          name="alphabetEmployee"
          rules={[{ required: true, message: "please choose the radio" }]}
        >
          <Radio.Group>
            <Space direction="vertical">
              <Radio value="Yes" className={styles.problem}>
                {t("Yes")}
              </Radio>
              <Radio value="No" className={styles.problem}>
                {t("No")}
              </Radio>
            </Space>
          </Radio.Group>
        </Form.Item>

        <Text className={styles.title}>{t("ApplicationConsent")}</Text>
        <Paragraph className={styles.acceptText}>
          {t("ApplicationConsent.Desc1")}{" "}
          <a style={{ color: "#FFAD11" }}>
            https://www.google.com/about/careers/privacy/
          </a>
          {t("ApplicationConsent.Desc2")}
        </Paragraph>

        <Form.Item
          name="accept"
          rules={[{ required: true, message: "please choose the answer" }]}
        >
          <Radio.Group>
            <Radio value="1" className={styles.problem}>
              {t("IAccept")}
            </Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className={styles.upBtn}>
            {t("Submit")}
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default ResumeForm;
