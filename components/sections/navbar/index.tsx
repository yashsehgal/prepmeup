"use client";
import { Button } from '@/components/ui/button';
import { Moon } from 'lucide-react';
import { Sun } from 'lucide-react';
import ViewContainer from '@/components/layouts/view-container';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const Navbar: React.FunctionComponent = () => {
  return (
    <nav className="navbar py-6">
      <ViewContainer className="flex items-center justify-between">
        {/* Here true represents the logged in state */}
        <Link
          href={true ? '/dashboard' : '/'}
          className={cn('flex flex-row items-center gap-2')}>
          <div className="w-3 h-3 rounded-full bg-neutral-900 animate-pulse" />
          <h1 className="font-medium text tracking-tighter">{'PrepMe⎯Up'}</h1>
        </Link>
        <div className="flex gap-2">
          <Button variant="ghost" className="rounded-full">
            {true ? (
              <Moon className="w-5 h-auto" />
            ) : (
              <Sun className="w-5 h-auto" />
            )}
          </Button>
          <Avatar>
            <AvatarImage></AvatarImage>
            <AvatarFallback>{'YS'}</AvatarFallback>
          </Avatar>
        </div>
      </ViewContainer>
    </nav>
  );
};

export default Navbar;
