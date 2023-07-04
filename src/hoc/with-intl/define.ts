"use client";
import React, { useContext } from "react";
import zh_CN from "@/lang/zh_CN.json";
import en_US from "@/lang/en_US.json";

type LangType = "zh" | "en";

const LANG_ZH_CN: LangType = "zh";
export type LangKey = keyof typeof zh_CN & keyof typeof en_US;

// format 定义
export type format = <T extends LangKey>(
  id: T
) => (typeof zh_CN | typeof en_US)[T];

type LangInfo = {
  lang: LangType;
  toggle: () => void;
  format: format;
};

const showWarning = () => {
  console.warn(
    "LangContext has not been provided. You are calling a noop function."
  );
};

export const LangContext = React.createContext<LangInfo>({
  lang: LANG_ZH_CN,
  toggle: showWarning,
  format: (id) => {
    showWarning();
    return zh_CN[id];
  },
});

export const useLang = () => {
  return useContext(LangContext);
};
