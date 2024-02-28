import { GetFaculty } from '@/apis/strapi-client/define';
import { StrapiResponseDataItem } from '@/apis/strapi-client/strapiDefine';
import { useLang } from '@/hoc/with-intl/define';
import { useMobile } from '@/utils';
import { Avatar, Card, Space, Typography } from 'antd';
import { getTransResult } from 'x-star-utils';
import ColorfulCard from '../../colorful-card';
import styles from './index.module.scss';
const { Paragraph, Text } = Typography;

const FacultyCard = ({ index, item }: { index: number; item: StrapiResponseDataItem<GetFaculty> }) => {
  const { lang } = useLang();
  const isMobile = useMobile();
  console.log(item, item?.attributes?.img?.data?.attributes?.url);

  return (
    <ColorfulCard border="bottom" split={4} index={index}>
      <Card bodyStyle={{ padding: 0, height: isMobile ? 224 : 310 }}>
        <Space direction="vertical">
          <Avatar src={item?.attributes?.img?.data?.attributes?.url} size={{ xs: 64, sm: 64, md: 64, lg: 64, xl: 80, xxl: 96 }} className={styles.avatar} />
          <Text className={styles.name}>{getTransResult(lang, item?.attributes?.titleZh, item?.attributes?.titleEn)}</Text>
          <Paragraph
            ellipsis={{
              rows: 4,
              tooltip: getTransResult(lang, item?.attributes?.descriptionZh, item?.attributes?.descriptionEn)
            }}
            className={styles.description}
          >
            {getTransResult(lang, item?.attributes?.descriptionZh, item?.attributes?.descriptionEn)}
          </Paragraph>
        </Space>
      </Card>
    </ColorfulCard>
  );
};

export default FacultyCard;
