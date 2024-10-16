import Image from 'next/image';
import ProfileImage from '@/assets/zafeer-image.png';
import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from '@radix-ui/react-icons';
import { Button } from '@/components/ui/button';

export default function PortfolioPage() {
  return (
    <>
      <main>
        <section>
          <div>
            <h1 className='text-5xl font-bold'>
              Zafeer <br /> Hafeez
            </h1>
            <h2>Fullstack Developer</h2>
            {/* Social Icons */}
            <div className='flex gap-6 h-16'>
              <LinkedInLogoIcon width={30} height={30} />
              <InstagramLogoIcon width={30} height={30} />
              <GitHubLogoIcon width={30} height={30} />
            </div>

            {/* tag line */}
            <p>
              With a passion for developing modern React web apps for commercial
              businesses.
            </p>
            <Button className='bg-blue-500 text-xl px-6 py-6 rounded-2xl hover:scale-105 hover:bg-blue-500 transition-all duration-300 dark:bg-white dark:hover:bg-white'>
              Resume
            </Button>
          </div>
          <div className='relative bg-gradient-to-tr from-purple-900 to-purple-500 rounded-full flex items-center justify-center w-96 h-96 overflow-clip'>
            <Image
              src={ProfileImage}
              alt='Image of Zafeer Hafeez Laughing'
              fill
            />
          </div>
        </section>
      </main>
    </>
  );
}
