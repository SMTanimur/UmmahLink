/* eslint-disable react/jsx-no-useless-fragment */
'use client';


import { useEffect } from 'react';

import Link from 'next/link';

import { LoginButton } from '../modals/LoginButton';
import { cn } from '~ui';
import { GroupsDropdownMenu } from '../ui/menu/groups-menu';
import { Input } from '../ui/input';
import { Button } from '../ui/button/Button';



export const Header = () => {
  const isHomePage = true;
  useEffect(() => {
    if (!isHomePage) {
      console.log('search');
    }
  }, [isHomePage]);

  return (
    <header
      className={cn('site-header-with-search h-14 md:h-16 lg:h-22', {
        'lg:!h-auto': '',
      })}
    >
      <div
        className={cn(
          'fixed flex justify-between items-center w-full h-14 md:h-16 lg:h-22 px-4 lg:px-8 py-5 z-50 bg-white border-b border-border-200 shadow-sm transition-transform duration-300 transform-gpu',
          {
            'lg:absolute lg:bg-transparent lg:shadow-none lg:border-0': '',
          }
        )}
      >
        <div className="flex items-center w-full lg:w-auto">
          {/* <Logo className="mx-auto lg:mx-0" /> */}

          <div className="hidden ltr:ml-10 rtl:mr-10 ltr:mr-auto rtl:ml-auto xl:block">
            <GroupsDropdownMenu />
          </div>
        </div>
        {isHomePage ? (
          <>
            <div>
              <div className="block lg:hidden w-full absolute top-0 ltr:left-0 rtl:right-0 h-full bg-light pt-1.5 md:pt-2 px-5">
                <Input />
                {/* <Search label={t('text-search-label')} variant="minimal" /> */}
              </div>
            </div>
          </>
        ) : null}
        <ul className="items-center shrink-0 hidden lg:flex space-x-10 rtl:space-x-reverse">
          {/* <StaticMenu /> */}
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            <Button size="md" variant="primary">
              <Link
                href={`${process.env.NEXT_PUBLIC_ADMIN_URL}/register`}
                target="_blank"
                rel="noreferrer"
              >
                Become Seller
              </Link>
            </Button>

            <li>
              <LoginButton />
            </li>
          </div>
        </ul>
      </div>
    </header>
  );
};
