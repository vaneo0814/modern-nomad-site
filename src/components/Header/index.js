import Link from 'next/link';

const navItems = [
  {
    path: '/flight-tickets',
    label: 'Flight tickets',
  },
];

const Header = () => {
  return (
    <header>
      <div>
        <Link href="/">
          <a>Home</a>
        </Link>

        <nav>
          {navItems.map(({ path, label }) => (
            <Link key={path} href={path}>
              <a>{label}</a>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;