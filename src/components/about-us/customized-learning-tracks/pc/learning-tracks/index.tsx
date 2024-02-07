import styles from './index.module.scss';
export interface LearningTracksProps {
  imagePosition: 'left' | 'right';
  imageUrl: string;
  title: string;
  titleIconUrl: string;
  content: string;
  avatarUrl?: string;
  comment?: string;
  commentBg?: string;
}
const LearningTracks = ({ imagePosition, imageUrl, title, titleIconUrl, content, avatarUrl, comment, commentBg = '#EFEFEF' }: LearningTracksProps) => {
  return (
    <div className={`${styles.learningTracks} container`} style={{ flexDirection: imagePosition === 'left' ? 'row' : 'row-reverse' }}>
      <div className={styles.image} style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className={styles.content}>
        <div className={styles.title}>
          <img src={titleIconUrl} alt="" />
          <span>{title}</span>
        </div>
        <p>{content}</p>
        {comment && (
          <div className={styles.comment} style={{ background: commentBg }}>
            <img src={avatarUrl} alt="" />
            <div className={styles.discourse}>{comment}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LearningTracks;
