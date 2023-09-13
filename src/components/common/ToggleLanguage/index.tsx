import React from "react";
import styles from "./index.module.scss";
import { getTransResult } from "@/utils/public";
import { useLang } from "@/hoc/with-intl/define";

interface IProps {
  className?: string
}

const ToggleLanguage: React.FC<IProps> = ({ className }) => {
  const { lang, toggle } = useLang();

  return (
    <div onClick={toggle} className={`${styles.intl} ${className}`}>
      <div className={styles.img} />
      <span>{getTransResult(lang, '中文', 'English')}</span>
    </div>
  );
};

export default ToggleLanguage;