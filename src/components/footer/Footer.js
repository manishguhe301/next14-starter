import styles from './footer.module.css';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>MG</div>
      <div className={styles.text}>
        MG creative thoughts agency © All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
