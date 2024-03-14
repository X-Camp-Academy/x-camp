import { useLang } from '@/hoc/with-intl/define';
import { useMobile } from '@/utils';
import { getTransContent } from '@/utils/public';
import { Typography } from 'antd';
import { useContext } from 'react';
import CourseClassesContext from '../../CourseClassesContext';
import styles from './index.module.scss';

const { Title, Text } = Typography;

const CourseSyllabus = () => {
  const { format: t, lang } = useLang();
  const courseData = useContext(CourseClassesContext);

  const format = (array: string[]) => {
    // 第一步：补全数组为偶数
    if (array.length % 2 !== 0) {
      array.push('');
    }

    // 第二步：将数组分为两个等长的数组
    const mid = array.length / 2;
    const firstHalf = array.slice(0, mid);
    const secondHalf = array.slice(mid);

    // 第三步和第四步：按顺序组合两个数组的项
    const result = [];
    for (let i = 0; i < mid; i++) {
      const newItem = [
        { value: firstHalf[i], index: i },
        { value: secondHalf[i], index: i + mid }
      ];
      result.push(newItem);
    }

    return result;
  };

  const rowData = getTransContent(lang, courseData?.attributes?.courseSyllabusZh, courseData?.attributes?.courseSyllabusEn) ?? [];

  const courseSyllabus = format([...rowData]);

  const isMobile = useMobile();

  return (
    <>
      {courseSyllabus && courseSyllabus?.length > 0 && (
        <div className={`${styles.content} container`}>
          <Title className={'tabTitle'} id="topics-covered">
            {t('TopicsCovered')}
          </Title>
          <div className={styles.tableBox}>
            <table border={0}>
              <tbody>
                {isMobile ? (
                  <>
                    {rowData?.map((v, index) => (
                      <tr key={v}>
                        <td>
                          <div className={styles.item}>
                            <Text className={styles.text}>{index + 1}</Text>
                            <Text className={styles.paragraph} ellipsis>
                              {v}
                            </Text>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </>
                ) : (
                  <>
                    {courseSyllabus?.map((v) => (
                      <tr key={v[0].index}>
                        {v?.map((u) => (
                          <td key={u.index}>
                            {u.value && (
                              <div className={styles.item}>
                                <Text className={styles.text}>{u.index + 1}</Text>
                                <Text className={styles.paragraph}>{u.value}</Text>
                              </div>
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
};

export default CourseSyllabus;
