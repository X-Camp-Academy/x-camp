import { useEffect } from 'react';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import 'dayjs/locale/en';
import isBetween from 'dayjs/plugin/isBetween';

const WEEKDAY_EN = ['Sun', 'Mon', 'Tues', 'Wed', 'Thu', 'Fri', 'Sat'];
const WEEKDAY_ZH = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];

const MONTH_EN = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

enum ILocal {
  zh  = 'zh-cn',
  en = 'en'
}

const FORMAT_M = 'MM月';
const FORMAT_H_m = 'HH:mm';
const FORMAT_YYYY_MM_DD_H_m_ZH = 'YYYY年MM月DD日 HH:mm';
const FORMAT_YYYY_MM_DD_H_m_EN = ' DD, YYYY HH:mm';
const FORMAT_MM_DD = 'MM月DD日';

dayjs.extend(isBetween);

const useDayJs = (lang?: string) => {

  useEffect(() => {
    const locale = lang === 'zh' ? ILocal.zh : ILocal.en;
    dayjs.locale(locale);
  }, [lang]);

  /**
   * 获取月份
   * @param date
   */
  const getMonth = (date: string) => {
    if (!date) return '';
    const month = dayjs(date).month();
    return lang === 'zh' ? `${month + 1}月` :  MONTH_EN[month];
  };

  /**
   * 获取一月中的几号
   * @param date
   */
  const getDate = (date: string) => {
    return dayjs(date).date();
  };

  /**
   * 获取星期几
   * @param date
   */
  const getWeekDay = (date: string) => {
    const day = dayjs(date).day();
    return lang === 'zh' ? WEEKDAY_ZH[day] : WEEKDAY_EN[day];
  };

  /**
   * 格式化时间 HH:mm
   * @param time
   */
  const formatHourMinute = (time: string | undefined) => {
    return dayjs(time).format(FORMAT_H_m);
  };

  /**
   * 格式化 年月日 时分
   * @param date
   */
  const formatYMDTime = (date: string | undefined) => {
    return lang === 'zh' ? dayjs(date).format(FORMAT_YYYY_MM_DD_H_m_ZH) :
      `${MONTH_EN[dayjs(date).month()]}${dayjs(date).format(FORMAT_YYYY_MM_DD_H_m_EN)}`;
  };

  /**
   * 格式化 MM月DD日
   * @param date
   */
  const formatDate = (date: string) => {
    const dateInfo = dayjs(date);
    const month = dateInfo.month();
    return lang === 'zh' ? dateInfo.format(FORMAT_MM_DD) : `${MONTH_EN[month]} ${dateInfo.date()}`;
  };

  return {
    dayjs,
    getMonth,
    getDate,
    getWeekDay,
    formatHourMinute,
    formatYMDTime,
    formatDate
  };
};

export default useDayJs;