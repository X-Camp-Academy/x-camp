import React, { useMemo } from 'react';

export interface IConfig {
  text: string;
  color?: string;
  fontSize?: string;
}
interface IProps {
  title: string;
  config: IConfig[] | IConfig;
  className: string;
}


const getRegExp = (searchVal: string): RegExp => {
  // 将 $ 和 . 字符进行转义
  searchVal = searchVal.replace(/\$/g, '\\$').replace(/\./g, '\\.');
  return new RegExp(`(?!<)${searchVal}`);
};

const replaceStrWithColor = (val: string, color: string, fontSize: string) => `<span style="color: ${color}; font-size: ${fontSize};">${val}</span>`;

/**
 * 将一个字符串赋予不同颜色
 * @param title
 * @param config
 * @param className
 * @constructor
 */
const TitleColor: React.FC<IProps> = ({ title, config, className }: IProps) => {
  const html = useMemo(() => {
    let result = title;
    let configArr: IConfig[] = [];

    if (Array.isArray(config)) {
      configArr = configArr.concat(...config);
    } else {
      configArr.push(config);
    }

    configArr.forEach((config) => {
      result = result.replace(getRegExp(config.text), replaceStrWithColor(config.text, config.color || '#FFAD11', config.fontSize || ''));
    });
    return result;
  }, [title, config]);
  return (
    <>
      <span className={className} dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
};

export default TitleColor;
