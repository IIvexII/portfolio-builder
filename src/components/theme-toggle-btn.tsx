'use client';

import { cn } from '@/lib/utils';
import { MoonStar, SunDim } from 'lucide-react';
import { useTheme } from 'next-themes';

export function ThemeToggleButton({ className }: { className?: string }) {
  const { setTheme, theme } = useTheme();

  const handleThemeToggle = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <button
      className={cn(
        className,
        'hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black p-2 rounded-full transition-all duration-200'
      )}
      onClick={handleThemeToggle}
    >
      <SunDim className='block dark:hidden' />
      <MoonStar className='hidden dark:block' />
    </button>
  );
}
