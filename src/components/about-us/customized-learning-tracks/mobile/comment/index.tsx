import { Carousel, Typography } from 'antd';
import styles from './index.module.scss';
const { Paragraph } = Typography;
const CommentMobile = () => {
  const comment = [
    { avatarUrl: '/image/about-us/learning-tracks/weekly-assign-avatar.png', comment: '”Good and challenging homework problems.”- CS 301B' },
    {
      avatarUrl: '/image/about-us/learning-tracks/study-forum-avatar.png',
      comment: '"The new platform is effective tool to engage everyone to share information and help each other" - CS 202'
    },
    {
      avatarUrl: '/image/about-us/learning-tracks/coach-avatar.png',
      comment:
        '"CUSTOMIZED training makes sure students get enough support, like one of our teachers is a problem writer for China national training team." - X-Camp Alumni, USACO Finalist in 21/22 season'
    }
  ];
  return (
    <div className={`${styles.comment} container`}>
      <Carousel slidesToShow={1} slidesToScroll={1} swipeToSlide>
        {comment.map((item) => (
          <div className={styles.commentContainer} key={item.comment}>
            <img src={item.avatarUrl} alt="" />
            <Paragraph className={styles.content} ellipsis={{ rows: 2 }}>
              {item.comment}
            </Paragraph>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CommentMobile;
