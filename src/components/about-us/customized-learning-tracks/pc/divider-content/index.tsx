import styles from './index.module.scss';
interface DividerContentProps {
  content: string;
  grade: string;
  symbolPosition: 'front' | 'end';
}
const DividerContent = ({ content, grade, symbolPosition }: DividerContentProps) => {
  return (
    <div className={styles.dividerContent}>
      {symbolPosition === 'front' && (
        <span className={styles.symbol} style={{ marginRight: 30 }}>
          {'“'}
        </span>
      )}
      <span className={styles.content}>{content}</span>
      <span className={styles.class}>{grade}</span>
      {symbolPosition === 'end' && (
        <span className={styles.symbol} style={{ marginLeft: 30 }}>
          {'“'}
        </span>
      )}
    </div>
  );
};

export default DividerContent;
