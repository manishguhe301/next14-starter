import styles from './loading.module.css';
const loading = () => {
  return (
    <div className={styles.container}>
      <div className={styles.loader_container}>
        <div class={styles.dot}></div>
        <div class={styles.dot}></div>
        <div class={styles.dot}></div>
        <div class={styles.dot}></div>
        <div class={styles.dot}></div>
        <div class={styles.dot}></div>
      </div>
    </div>
  );
};

export default loading;
