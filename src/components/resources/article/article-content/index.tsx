'use client';
import { GetNewEvent } from '@/apis/strapi-client/define';
import { StrapiResponseDataItem } from '@/apis/strapi-client/strapiDefine';
import { useLang } from '@/hoc/with-intl/define';
import { getTransResult } from '@/utils/public';
import { viewerVideoPlugin } from '@/utils/x-star-editor/plugins/viewer-video';
import { ClockCircleOutlined, ReadOutlined } from '@ant-design/icons';
import { Breadcrumb, Space, Typography } from 'antd';
import dayjs from 'dayjs';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import styles from './index.module.scss';

const XStarMdViewer = dynamic(() => import('x-star-editor').then((v) => v.XStarMdViewer), { ssr: false });
const { Title } = Typography;

interface Props {
  props: StrapiResponseDataItem<GetNewEvent> | undefined;
}

const ArticleContent = ({ props }: Props) => {
  const { format: t, lang } = useLang();

  const monthNameEn = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const formatDate = (date: string) => {
    const dayjsDate = dayjs(date);
    const formatStringZh = 'YYYY年MM月DD日 HH:mm';
    const formatStringEn = ' DD, YYYY HH:mm';
    return getTransResult(lang, dayjsDate.format(formatStringZh), monthNameEn[dayjsDate.month()] + dayjsDate.format(formatStringEn));
  };

  return (
    <div className={styles.content}>
      <Breadcrumb
        className={styles.breadcrumb}
        items={[
          {
            title: <Link href="/">{t('Home')}</Link>
          },
          {
            title: <Link href="/resources/education-forum">{t('EducationalForum')}</Link>
          },
          {
            title: `${getTransResult(lang, props?.attributes.titleZh, props?.attributes.titleEn)}`
          }
        ]}
      />
      <Title className={styles.title}>{getTransResult(lang, props?.attributes.titleZh, props?.attributes.titleEn)}</Title>
      <Space className={styles.time}>
        <ClockCircleOutlined className={styles.icon} />
        <div className={styles.videoDate}>
          {formatDate(props?.attributes?.startDateTime || '')} ~ {formatDate(props?.attributes.endDateTime || '')}
        </div>
      </Space>
      <XStarMdViewer className={styles.viewer} value={props?.attributes?.detailContent} plugins={[viewerVideoPlugin()]} />
      <Space className={styles.note}>
        <ReadOutlined className={styles.icon} />
        <span>{t('ArticleContent.Desc')}</span>
      </Space>
    </div>
  );
};

export default ArticleContent;
