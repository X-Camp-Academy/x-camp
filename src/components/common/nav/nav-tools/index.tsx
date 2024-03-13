import { apiConfig } from '@/config/index';
import { useAuth } from '@/hoc/with-auth/define';
import { useLang } from '@/hoc/with-intl/define';
import { Button } from 'antd';
import DropdownUserMenu from '../../dropdown-user-menu';
import styles from './index.module.scss';

const NavTools = () => {
  const { xydApi } = apiConfig;
  const { user, logout } = useAuth();
  const { format: t } = useLang();
  return (
    <div className={styles.navTools}>
      {user ? (
        <div className={styles.logged}>
          <DropdownUserMenu user={user} logout={logout} />
          <Button className={styles.study} type="primary" onClick={() => window.open(`${xydApi}/courses`)}>
            {t('LearningCenter')}
          </Button>
        </div>
      ) : (
        <Button className={styles.study} type="primary" href="/login">
          {t('Nav.Login')}
        </Button>
      )}
      <>
        {/* ! 下一版更新 */}
        {/* <SelectPage /> */}
        {/* <ToggleLanguage /> */}
      </>
    </div>
  );
};

export default NavTools;
