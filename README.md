### 运行

```
  yarn i

  yarn dev
```

### 时区转化

- 使用 formatTimezone 函数进行转化
- 注意点：
  - 该函数会返回一个 dayjsTime（Dayjs 对象），使用直接调用 dayjs 相关方法即可
  - 还会返回一个 timezone （即时区），如果需要显示 CST PST UCT 时间，调用它即可
  - 如果你的时间不涉及到具体时间你需要调用 dayjs 转换为零点，如'2023-7-13 00:00:00'
- 用例:

  ```js
  const { dayjsTime: startTime, timezone } = formatTimezone(item?.attributes?.startDateTime);
  {
    `${startTime.format('dddd, MMMM DD, YYYY hh:mm A')} ${timezone} `;
  }
  ```

### 测试环境配置

NEXT_PUBLIC_API_SERVER=https://xcamp-service.test.turingstar.com.cn
NEXT_PUBLIC_ID_API=https://id.test.turingstar.com.cn
NEXT_PUBLIC_ID_BACKEND_API=https://id-api.test.turingstar.com.cn
NEXT_PUBLIC_STRAPI_SERVER=https://strapi.turingstar.com.cn
NEXT_PUBLIC_XYD=https://learn.x-camp.org
NEXT_PUBLIC_CLIENT_ID=xcamp-service-dev

### 页面中每个模块之间的间隔为 120px，150px，间隔较大时间隔为 100px。

- 如果使用 antd 的 Title 组件(默认的 marginTop: 30px)在设置模块之间的间隔时记得减去自带的 30px 上外边距。
