-### 时区转化

- 使用 formatTimezone 函数进行转化
- 注意点：
  - 该函数会返回一个 utcTime（Dayjs 对象），使用直接调用 dayjs 相关方法即可
  - 还会返回一个 timezone （即时区），如果需要显示 CST PST UCT 时间，调用它即可
  - 如果你的时间不涉及到具体时间点无需调用它，如'2023-7-13'，因为无法根据时区转化
- 用例:

  ```js
  const { utcTime: startTime, timezone } = formatTimezone(
    item?.attributes?.startDateTime
  );
  {
    `${startTime.format('dddd, MMMM DD, YYYY hh:mm A')} ${timezone} `;
  }
  ```
