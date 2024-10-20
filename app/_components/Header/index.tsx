import Menu from '@/app/_components/Menu';
import Image from 'next/image';
import Link from 'next/link';
import styles from './index.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logoLink}>
        <Image
          src="/icon.svg"
          alt="SIMPLE"
          className={styles.logo}
          width={400}
          height={133}
          priority
        />
      </Link>
      <Menu />
    </header>
  );
}
