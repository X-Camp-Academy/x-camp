"use client";
import React, { useEffect } from "react";
import { IntlProvider } from "react-intl";
import dayjs from "dayjs";
import { DEFAULT_LANG, LANG_ZH_CN } from "@/utils/intl";
import { useLocalState } from "@/utils/local-state";
import zh_CN from "@/lang/zh_CN.json";
import en_US from "@/lang/en_US.json";
import LocalizedFormat from "dayjs/plugin/localizedFormat"; // 按需加载插件
import calenderPlugin from "dayjs/plugin/calendar";
import localData from "dayjs/plugin/localeData";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import relativeTime from "dayjs/plugin/relativeTime";
import duration from "dayjs/plugin/duration";
dayjs.extend(LocalizedFormat);
dayjs.extend(calenderPlugin);
dayjs.extend(localData);
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(relativeTime);
dayjs.extend(duration);
const WithIntl = ({ children }: { children: React.ReactNode }) => {
  const [, lang] = useLocalState("lang");
  useEffect(() => {
    dayjs.locale(lang === LANG_ZH_CN ? "zh-cn" : "en");
  }, [lang]);

  return (
    <IntlProvider
      messages={lang === LANG_ZH_CN ? zh_CN : en_US}
      locale={lang}
      defaultLocale={DEFAULT_LANG}
    >
      {children}
    </IntlProvider>
  );
};
export default WithIntl;
