import Image from 'next/image';
import styles from './singlePost.module.css';

const PostPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src='/post.jpeg' alt='' fill className={styles.img} />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <Image
            src='/post.jpeg'
            alt=''
            width={50}
            height={50}
            className={styles.avatar}
          />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Jeff Bezos</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.01.2022</span>
          </div>
        </div>
        <div className={styles.content}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti
          iusto natus error nam tenetur labore aperiam fugiat obcaecati ab
          voluptatem consequatur earum neque itaque tempore, magnam libero
          laborum, vel quo beatae velit doloribus! Excepturi dolor a sint
          voluptates eveniet nam molestiae. Eius nemo expedita quidem cumque,
          nam fugit iure quam laborum ipsa doloribus earum. Tenetur consequatur
          expedita labore ducimus eum doloremque eos voluptate voluptatem,
          sapiente recusandae. Voluptas voluptate dolorum perspiciatis,
          recusandae corrupti sapiente fugit iure asperiores deserunt maiores
          veniam dignissimos dolor incidunt vero praesentium ipsum libero dolore
          non? Doloremque totam pariatur placeat distinctio quaerat eos
          repudiandae aut animi officiis esse?
        </div>
      </div>
    </div>
  );
};

export default PostPage;
