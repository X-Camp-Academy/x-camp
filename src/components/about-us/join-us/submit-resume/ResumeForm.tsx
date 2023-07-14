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
import React, { useState } from "react";
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

const ResumeForm = () => {
  const { format: t } = useLang();
  const [pdfFileList, setPdfFileList] = useState<any>(); //已选择的文件列表（只有一个）
  function beforePDFUpload(file: Blob) {
    const fileSizeLimit = 10 * 1024 * 1024; // 10MB，字节为单位
    const isSizeValid = file.size <= fileSizeLimit;
    if (!isSizeValid) {
      message.error("File size must be less than or equal to 10MB");
    }
    return isSizeValid;
  }
  const submitCvPDF = async (info: UploadChangeParam<UploadFile<any>>) => {
    setPdfFileList(info.fileList);
    form.setFieldsValue({ resume: info.fileList });
  };

  const [letterFileList, setLetterFileList] = useState<any>(); //已选择的文件列表（只有一个）
  function beforeLetterUpload(file: Blob) {
    const fileSizeLimit = 10 * 1024 * 1024; // 10MB，字节为单位
    const isSizeValid = file.size <= fileSizeLimit;
    if (!isSizeValid) {
      message.error("File size must be less than or equal to 10MB");
    }
    return false;
  }
  const submitLetter = async (info: UploadChangeParam<UploadFile<any>>) => {
    setLetterFileList(info.fileList);
    form.setFieldsValue({ letter: info.fileList });
  };

  const [form] = Form.useForm();

  const { runAsync: submitResume } = useSubmitResume();

  const submitResumeOnFinish = async (formValues: submitResumeProps) => {
    const requestData = new FormData();
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
            fileList={pdfFileList}
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
            fileList={letterFileList}
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
        <Form.Item name="acRelocate">
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
        <Form.Item name="alphabetEmployee">
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

        <Form.Item rules={[{ required: true }]}>
          <Text className={styles.title}>{t("ApplicationConsent")}</Text>
          <Paragraph className={styles.acceptText}>
            {t("ApplicationConsent.Desc1")}{" "}
            <a style={{ color: "#FFAD11" }}>
              https://www.google.com/about/careers/privacy/
            </a>
            {t("ApplicationConsent.Desc2")}
          </Paragraph>
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
