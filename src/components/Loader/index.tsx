import styles from './loader.module.scss';
import Image from 'next/image';

const LoadingComponent = () => (
  <div className={styles.loader}>
    <Image src="./loading.gif" alt="loader" width={64} height={64} />
  </div>
)

export default LoadingComponent;