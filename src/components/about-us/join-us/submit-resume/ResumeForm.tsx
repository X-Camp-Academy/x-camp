import {
    Space,
    Row,
    Card,
    Typography,
    Divider,
    Form,
    Button,
    Input,
    Radio
} from "antd";
import {
    ClockCircleOutlined,
    BranchesOutlined,
    DownCircleOutlined,
} from "@ant-design/icons";
import styles from "./ResumeForm.module.scss";
import React, { useState } from "react";
import JobCardHeader from "../JobCardHeader";
import JobCardDetail from "../JobCardDetail";
import Link from "next/link";
const { Title, Text, Paragraph } = Typography;

const ResumeForm: React.FC = () => {

    const basicInfoFormItem = [
        { name: 'firstName', placeholder: 'First Name *' },
        { name: 'lastName', placeholder: 'Last Name *' },
        { name: 'email', placeholder: 'Email *' },
        { name: 'phone', placeholder: 'Phone *' },

    ]

    const [form] = Form.useForm();
    return (
        <>
            <Divider style={{ borderColor: '#FFAD11' }} />

            <Form
                form={form}
                layout="vertical"
                autoComplete="off"
                size="large"
                className={styles.formContainer}
            >
                
                <Title className={styles.title}>Apply Now</Title>
                <Text className={styles.description}>Fields marked with * are required</Text>


                <div className={styles.basicInfoContainer}>
                    {basicInfoFormItem?.map((item, index) => {
                        return (
                            <Form.Item
                                name={item.name}
                                rules={[{ required: true }]}
                                key={index}
                            >
                                <Input placeholder={item.placeholder} className={styles.inputInfo} />
                            </Form.Item>
                        )
                    })}
                </div>

                <Form.Item>
                    <Title className={styles.title}>Resume/CV*</Title>
                    <Button className={styles.upBtn}>Upload File</Button>
                </Form.Item>

                <Form.Item>
                    <Title className={styles.title}>Cover Letter</Title>
                    <Button className={styles.upBtn}>Upload File</Button>
                </Form.Item>


                <Form.Item
                    name="linkedlnProfile"
                >
                    <Input placeholder="Linkedln Profile" className={styles.inputInfo} />
                </Form.Item>

                <Form.Item
                    name="website"
                >
                    <Input placeholder="Website" className={styles.inputInfo} />
                </Form.Item>

                <Form.Item>
                    <div style={{ marginBottom: 20 }}>
                        <Text className={styles.problem}>This position is located in Mountain View, CA. Are you able to commute to the office and/or are you willing to relocate?*</Text>
                    </div>

                    <Radio.Group >
                        <Radio value="1" className={styles.problem}> Yes </Radio>
                        <Radio value="0" className={styles.problem}> No </Radio>
                    </Radio.Group>
                </Form.Item>

                <Form.Item>
                    <div style={{ marginBottom: 20 }}>
                        <Text className={styles.problem}>Are you currently or were you previously an Alphabet employee, contractor, or intern?*</Text>
                    </div>

                    <Radio.Group>
                        <Radio value="1" className={styles.problem}> Yes </Radio>
                        <Radio value="0" className={styles.problem}> No </Radio>
                    </Radio.Group>
                </Form.Item>

                <Form.Item>
                    <Text className={styles.title}>Application consent for X</Text>
                    <Paragraph className={styles.acceptText}>
                        By clicking the “I Accept” button you expressly give your consent for the collection and use of your information as described at
                    </Paragraph>
                    <Radio.Group>
                        <Radio value="1"> I Accept </Radio>

                    </Radio.Group>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" className={styles.upBtn}>Submit</Button>
                </Form.Item>
            </Form>
        </>
    )
}

export default ResumeForm;