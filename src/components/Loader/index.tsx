import styles from './loader.module.scss';
import Image from 'next/image';

const LoadingComponent = () => (
  <div className={styles.loader}>
    <Image src="/loading.gif" alt="loader" width={84} height={84} />
  </div>
)

export default LoadingComponent;