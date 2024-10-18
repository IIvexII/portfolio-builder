import Image from 'next/image';
import { Roboto_Mono, Rubik } from 'next/font/google';

import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
} from '@radix-ui/react-icons';

import { Button } from '@/components/ui/button';
import { ThemeToggleButton } from '@/components/theme-toggle-btn';
import ProfileImage from '@/assets/zafeer.png';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const robotoMonoFont = Roboto_Mono({
  weight: ['200', '300', '500', '700'],
  subsets: ['latin-ext'],
});

const rubikFont = Rubik({
  weight: ['900'],
  subsets: ['latin-ext'],
});

export default function HarisSimplePage() {
  return (
    <>
      <main
        className={cn(
          robotoMonoFont.className,
          'text-slate-800 dark:text-slate-100'
        )}
      >
        {/* Hero Section */}
        <section className='flex items-center justify-center gap-6 min-h-screen'>
          {/* Left Part */}
          <div className='w-1/2 max-w-[500px] flex flex-col items-start gap-4'>
            <h1
              className={cn(
                rubikFont.className,
                'text-5xl font-bold tracking-widest'
              )}
            >
              Zafeer <br /> Hafeez
            </h1>
            <h2 className='text-xl font-bold uppercase'>Fullstack Developer</h2>
            {/* Social Icons */}
            <div className='flex gap-6 h-10'>
              <Link href='https://www.linkedin.com/in/zafeer-hafeez/' passHref>
                <LinkedInLogoIcon width={30} height={30} />
              </Link>
              <Link href='https://www.instagram.com/zafeerhafeez/' passHref>
                <InstagramLogoIcon width={30} height={30} />
              </Link>
              <Link href='https://github.com/iivexII/' passHref>
                <GitHubLogoIcon width={30} height={30} />
              </Link>
            </div>

            {/* tag line */}
            <p className='w-3/4 text-lg font-light'>
              With a passion for developing modern web apps for commercial
              businesses.
            </p>
            <Button className='bg-gradient-to-br from-purple-500 to-purple-600 text-xl px-6 py-6 rounded-2xl hover:scale-105 transition-all duration-200 dark:bg-none dark:bg-white dark:hover:bg-white'>
              Resume
            </Button>
          </div>
          {/* Right Part - Picture */}
          <div className='relative bg-gradient-to-tr from-purple-900 to-purple-500 rounded-full flex items-center justify-center w-80 h-80 overflow-clip'>
            <Image
              src={ProfileImage}
              alt='Image of Zafeer Hafeez Laughing'
              fill
            />
          </div>
        </section>
        {/* theme button */}
        <ThemeToggleButton className='fixed bottom-6 right-6' />
      </main>
    </>
  );
}
