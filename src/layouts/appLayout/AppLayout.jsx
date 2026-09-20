import styles from './appLayout.module.css';
import { Header } from '../../components/header/Header';
import { Content } from '../../components/content/Content';

export function AppLayout({ children }) {
  return (
    <div className={styles.appLayout}>
      <Header />
      <Content>
        {children}
      </Content>
    </div>
  );
}