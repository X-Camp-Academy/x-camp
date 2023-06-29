"use client";
import React from 'react';
import 'dayjs/locale/zh-cn';
import { Calendar, Col, Radio, Row, Select, Typography, theme, Button } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import styles from './index.module.scss'

interface Props {
    className?: string;
}

const ActivityCalendar: React.FC<Props> = ({
    className = ""
}) => {
    const monthNameEn = [
        'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
    ]

    const { token } = theme.useToken();

    const wrapperStyle = {
        width: 300,
        border: `1px solid ${token.colorBorderSecondary}`,
        borderRadius: token.borderRadiusLG,
    };

    return (
        <div style={wrapperStyle}>
            <Calendar
                fullscreen={false}
                className={className}
                //style={{ padding: 10, borderRadius: 0 }}
                headerRender={({ value, onChange }) => {

                    const year = value.year();
                    const month = value.month();

                    const backMonth = () => {
                        const now = value.clone().month(month - 1);
                        onChange(now);
                    }

                    const forwardMonth = () => {
                        const now = value.clone().month(month + 1);
                        onChange(now);
                    }



                    return (
                        <div style={{ padding: 8 }}>
                            <Row gutter={8} className={styles.row}>
                                <Col className={styles.dateTextCol}>
                                    {monthNameEn[month]} {year}
                                </Col>
                                <Col className={styles.btnCol}>
                                    <Button icon={<LeftOutlined />} className={styles.changeMonthBtn} onClick={backMonth} style={{ marginRight: 10 }}></Button>
                                    <Button icon={<RightOutlined />} className={styles.changeMonthBtn} onClick={forwardMonth}></Button>
                                </Col>
                            </Row>
                        </div>
                    );
                }}
            />
        </div>
    );
}

export default ActivityCalendar;