import { useCallback } from "react";
import { useIntl } from "react-intl";
import type zh_CN from "@/lang/zh_CN.json";
import type en_US from "@/lang/en_US.json";

export const LANG_ZH_CN = "zh";
export const LANG_EN_US = "en";
export const DEFAULT_LANG = LANG_ZH_CN;

export type LangType = typeof LANG_ZH_CN | typeof LANG_EN_US;

export const useLang = () => useIntl().locale as LangType;

export type LangKey = keyof typeof zh_CN & keyof typeof en_US;

export const useFormatMessage = () => {
  const intl = useIntl();
  return useCallback(
    <T extends LangKey>(id: T) =>
      intl.formatMessage({ id }) as (typeof zh_CN | typeof en_US)[T],
    [intl]
  );
};
