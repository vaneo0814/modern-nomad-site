import Link from 'next/link';
import styles from './header.module.css';
import { useRouter } from 'next/router';

const navItems = [
  {
    path: '/',
    label: 'Flights',
  },
  {
    path: '/blog',
    label: 'Travel Blog',
  },
];

const Header = () => {
    const router = useRouter(); //useRouter is ia built in component for handling links between pages
  return (
    <header className={styles.header}>
    <div className={styles['header-wrapper']}>
      <Link href="/">
        <a className={styles['header-logo']}>Modern Travelers</a>
      </Link>
  
      <nav className={styles['header-nav']}>
        {navItems.map(({ path, label }) => (
          <Link key={path} href={path}>
          <a
            className={`${styles['header-link']} ${
              router && router.pathname.includes(path)
                ? styles['header-link-active']
                : ''
            }`}
          >
            {label}
          </a>
        </Link>
        ))}
      </nav>
    </div>
  </header>
  );
};

export default Header;