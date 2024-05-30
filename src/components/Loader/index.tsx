import styles from './loader.module.scss';


const LoadingComponent = () => (
  <div className={styles.loader}>
    <img src="./loading.gif" alt="loader" />
  </div>
)

export default LoadingComponent;