import Image from 'next/image';
import { NavLink, ToggleTheme } from '.';
// import Logo from '@image/logo.jpeg';

const NAV_LINK_PROPS_LIST = [
  {
    href: 'https://guesung.notion.site',
    children: '노트',
    target: '_blank',
  },
  {
    href: '/series',
    children: '시리즈',
  },
  {
    href: '/library',
    children: '서재',
  },
  // {
  //   href: '/playground',
  //   children: '놀이터',
  // },
  {
    href: '/about',
    children: '소개',
  },
  // {
  //   href: '/plan',
  //   children: '계획',
  // },
];

export default function Header() {
  return (
    <>
      {/* <Image src={Logo} width="100" height="50" alt="logo" /> */}
      <NavLink href="/" className="font-bold text-body2">
        Guesung.
      </NavLink>
      <div className="flex items-center">
        {NAV_LINK_PROPS_LIST.map(props => (
          <NavLink {...props} />
        ))}
        <ToggleTheme />
      </div>
    </>
  );
}

function HeaderMargin() {
  return <div className="h-80" />;
}

Header.Margin = HeaderMargin;
