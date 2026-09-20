import styles from './incomingTasks.module.css';
import { MainContainer } from '../../components/mainContainer/MainContainer';
import { Footer } from '../../components/footer/Footer';

export function IncomingTasks() {
  return (
    <div className={styles.incomingTasks}>
      <MainContainer />
      <Footer />
    </div>
  );
}