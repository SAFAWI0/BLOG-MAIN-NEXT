import styles from "./card.module.css";
import Link from "next/link";
import dayjs from "dayjs";
import Image from "next/image";
import ButtSave from "../ButtSave/buttSave";

export const Card = ({ blog }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imag}>
        <Image alt="logo" src={blog.photo_url} fill={true} />
        <div className={styles.cardSave}>
          <ButtSave blog={blog} />
        </div>
      </div>
      <p className={styles.title}>{blog.title}</p>
      <p className={styles.supT}>{blog.category}</p>
      <div className={styles.linspa}>
        <Link href={`/article/${blog.id}`}>Read Article</Link>
        <span>{dayjs(blog.updated_at).format("DD/MM/YYYY")}</span>
      </div>
    </div>
  );
};
