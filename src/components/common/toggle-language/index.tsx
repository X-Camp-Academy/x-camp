import React from "react";
import styles from "./index.module.scss";
import { getTransResult } from "@/utils/public";
import { useLang } from "@/hoc/with-intl/define";
import SvgIcon from "../svg-icon";

interface IProps {
  className?: string
}

const ToggleLanguage: React.FC<IProps> = ({ className }) => {
  const { lang, toggle } = useLang();

  return (
    <div onClick={toggle} className={`${styles.intl} ${className}`}>
      <SvgIcon icon="Earth" className={styles.svgIcon} />
      <span className={styles.text}>{getTransResult(lang, '中文', 'English')}</span>
    </div>
  );
};

export default ToggleLanguage;