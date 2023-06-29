import {
    Typography,
    Divider,
    Form,
    Button,
    Input,
    Radio
} from "antd";
import styles from "./ResumeForm.module.scss";
import React from "react";
const { Title, Text, Paragraph } = Typography;

const ResumeForm: React.FC = () => {

    const requiredInfoFormItem = [
        { name: 'firstName', placeholder: 'First Name *' },
        { name: 'lastName', placeholder: 'Last Name *' },
        { name: 'email', placeholder: 'Email *' },
        { name: 'phone', placeholder: 'Phone *' },
    ]

    const upLoadFormData = [
        { title: 'Resume/CV*', btnText: 'Upload File' },
        { title: 'Cover Letter', btnText: 'Upload File' },
    ]

    const RadioData = [
        { text: 'This position is located in Mountain View, CA. Are you able to commute to the office and/or are you willing to relocate?*' },
        { text: 'Are you currently or were you previously an Alphabet employee, contractor, or intern?*' }
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
                    {requiredInfoFormItem?.map((item, index) => {
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

                {upLoadFormData?.map((item, index) => {
                    return (
                        <Form.Item key={index}>
                            <Title className={styles.title}>{item.title}</Title>
                            <Button className={styles.upBtn}>{item.btnText}</Button>
                        </Form.Item>
                    )
                })}


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

                {RadioData?.map((item, index) => {
                    return (
                        <Form.Item key={index}>
                            <div style={{ marginBottom: 20 }}>
                                <Text className={styles.problem}>{item.text}</Text>
                            </div>

                            <Radio.Group>
                                <Radio value="1" className={styles.problem}> Yes </Radio>
                                <Radio value="0" className={styles.problem}> No </Radio>
                            </Radio.Group>
                        </Form.Item>
                    )
                })}

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