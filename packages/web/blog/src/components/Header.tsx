import { COOKIE_KEY_THEME, DATA, Theme } from '@constants';
import { cookies } from 'next/headers';
import { HeaderWrapper, NavLink, ToggleTheme } from '.';

const NAV_LINK_PROPS_LIST = [
  {
    href: '/blog',
    children: 'Blog',
  },
  {
    href: 'https://guesung.notion.site',
    children: 'Note',
    target: '_blank',
  },
  // {
  //   href: '/series',
  //   children: 'Series',
  // },
  // {
  //   href: '/playground',
  //   children: '놀이터',
  // },
  // {
  //   href: '/about',
  //   children: 'About',
  // },
  // {
  //   href: '/guestbook',
  //   children: 'Guestbook',
  // },
  // {
  //   href: '/plan',
  //   children: '계획',
  // },
];

export default function Header() {
  const theme = cookies().get(COOKIE_KEY_THEME)?.value as Theme;

  return (
    <HeaderWrapper>
      <header className="inset-x-0 flex items-center justify-between w-full py-2 bg-transition">
        <NavLink href="/">{DATA.blog.name}</NavLink>
        <div className="flex items-center gap-8">
          {NAV_LINK_PROPS_LIST.map(props => (
            <NavLink {...props} />
          ))}
          <ToggleTheme initialTheme={theme} />
        </div>
      </header>
    </HeaderWrapper>
  );
}

function HeaderMargin() {
  return <div className="h-80" />;
}

Header.Margin = HeaderMargin;
