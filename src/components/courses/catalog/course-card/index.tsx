import React from 'react';
import styles from './index.module.scss';
import { Button, Col, Form, Input, Row, Select, Space, Table, Typography, Descriptions, Divider } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { useMobile } from '@/utils';
import { SearchOutlined } from '@ant-design/icons';
import { ScheduleData } from '../schedule-table';
const { Text, Title } = Typography;



const CourseCard: React.FC<ScheduleData> = ({ ...props }: ScheduleData) => {
    return (
        <>
            <Row className={styles.row}>
                <Col sm={24} lg={12} className={styles.col}>
                    <Title className={styles.title}>{props.class}:{props.courseTitle}</Title>
                </Col>
                <Col sm={24} lg={12} className={`${styles.col} ${styles.feeCol}`} style={{  }}>
                    <Title className={styles.title}>{"10 Weeks"}</Title>
                </Col>
            </Row>
            <Row style={{ marginTop: 20 }} className={styles.row}>
                <Col lg={12} className={styles.col}>
                    <Descriptions column={1}>
                        <Descriptions.Item label="Course Style" >{props.style}</Descriptions.Item>
                        <Descriptions.Item label="Level">{props.level}</Descriptions.Item>
                        <Descriptions.Item label="Language">{props.language}</Descriptions.Item>
                        <Descriptions.Item label="Classes Time">{props.time}</Descriptions.Item>
                    </Descriptions>
                </Col>
                <Col lg={12} className={styles.col} style={{ justifyContent: 'flex-end' }}>
                    <Text className={styles.fee}>{props.fee}</Text>
                </Col>
            </Row>
            <Divider style={{ marginTop: 35 }} />
        </>
    )
}

export default CourseCard;