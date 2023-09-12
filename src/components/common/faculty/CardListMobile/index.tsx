import React from "react";
import styles from "@/components/common/faculty/index.module.scss";

interface IProps {
	children: React.ReactNode
}
const CardListMobile: React.FC<IProps> = ({ children }: IProps) => {
	return (<div className={styles.cardListMobileContainer}>
  	{children}
	</div>);
};

export default CardListMobile;