import styles from "./index.module.scss";

export const RainbowCat = ({ text }: { text: string }) => (
  <div className={styles.page}>
    <img
      src="https://static.production.xjoi.net/images/emoticon-1.gif"
      alt=""
    />
    <div>
      <span>{text}</span>
      <span className={styles.dot}>...</span>
    </div>
  </div>
);
