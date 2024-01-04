'use client';
import en_US from '@/lang/en_US.json';
import zh_CN from '@/lang/zh_CN.json';
import dayjs from 'dayjs';
import 'dayjs/locale/en';
import 'dayjs/locale/zh-cn';
import calenderPlugin from 'dayjs/plugin/calendar';
import duration from 'dayjs/plugin/duration';
import localData from 'dayjs/plugin/localeData';
import LocalizedFormat from 'dayjs/plugin/localizedFormat';
import relativeTime from 'dayjs/plugin/relativeTime';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import React, { useCallback, useEffect, useState } from 'react';
import cookie from 'react-cookies';
import { IntlProvider, useIntl } from 'react-intl';
import { LangContext } from './define';
dayjs.extend(LocalizedFormat);
dayjs.extend(calenderPlugin);
dayjs.extend(localData);
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(relativeTime);
dayjs.extend(duration);
type LangType = 'zh' | 'en';

const LANG_ZH_CN: LangType = 'zh';
const LANG_EN_US: LangType = 'en';
export type LangKey = keyof typeof zh_CN & keyof typeof en_US;

export type format = <T extends LangKey>(id: T) => (typeof zh_CN | typeof en_US)[T];

const WithLang: React.FC<{
  lang: LangType;
  setLang: (lang: LangType) => void;
  children: React.ReactNode;
}> = ({ lang, setLang, children }) => {
  const intl = useIntl();
  const format = useCallback(<T extends LangKey>(id: T) => intl.formatMessage({ id }) as (typeof zh_CN | typeof en_US)[T], [intl]);
  const toggle = useCallback(() => {
    const newLang: LangType = lang === LANG_ZH_CN ? LANG_EN_US : LANG_ZH_CN;
    cookie.save('lang', newLang, {
      expire: 30,
      path: '/'
    });
    setLang(newLang);
  }, [lang, setLang]);

  return (
    <LangContext.Provider
      value={{
        lang,
        toggle,
        format
      }}
    >
      {children}
    </LangContext.Provider>
  );
};
interface WithIntlIProps {
  children: React.ReactNode;
}

const WithIntl: React.FC<WithIntlIProps> = ({ children }) => {
  const [lang, setLang] = useState<LangType>((cookie.load('lang') || window.navigator.language.slice(0, 2)) === LANG_ZH_CN ? LANG_ZH_CN : LANG_EN_US);

  useEffect(() => {
    dayjs.locale(lang === LANG_ZH_CN ? 'zh-cn' : 'en');
  }, [lang]);

  return (
    <IntlProvider messages={lang === LANG_ZH_CN ? zh_CN : en_US} locale={lang} defaultLocale={LANG_ZH_CN}>
      <WithLang lang={lang} setLang={setLang}>
        {children}
      </WithLang>
    </IntlProvider>
  );
};

export default WithIntl;
