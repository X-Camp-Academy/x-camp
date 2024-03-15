import FacultyCard from '@/components/common/faculty-coaches/faculty-card';
import { useMobile } from '@/utils';
import { Col, Row } from 'antd';
import { useContext } from 'react';
import CourseClassesContext from '../../CourseClassesContext';
import styles from './index.module.scss';

const Faculty = () => {
  const courseData = useContext(CourseClassesContext);
  const { faculties } = courseData?.attributes ?? {};
  const isiPad = useMobile('xl');

  return (
    <div className={`${styles.faculty}`}>
      <div className={`${styles.content} container`}>
        <div className={'tabTitle'} id="faculty-coaches">
          {'Faculty & Coaches'}
        </div>
        <div className={styles.intro}>
          {
            'Our teachers are super cool tech pros who have worked at big companies, smart college students studying computers, and champions in tough coding competitions like the International Olympiad in Informatics (IOI), the International Collegiate Programming Contest (ICPC), and the USA Computing Olympiad (USACO).'
          }
        </div>
        {!!faculties?.data?.length && (
          <div className={styles.faculties}>
            <Row justify="center" align="middle" gutter={isiPad ? 24 : 48} className={styles.row}>
              {faculties?.data?.map((item, index) => (
                <Col key={item?.id} xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 6 }} className={styles.col}>
                  <FacultyCard index={index} item={item} />
                </Col>
              ))}
            </Row>
          </div>
        )}
      </div>
    </div>
  );
};

export default Faculty;
