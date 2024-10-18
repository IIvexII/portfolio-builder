'use client';
import { useSession } from 'next-auth/react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

export function UserAvatar() {
  const { data: session } = useSession();

  if (!session?.user) {
    return null;
  }

  let src = session?.user?.image || undefined;
  let fallBackText = session?.user?.name || undefined;

  return (
    <Avatar>
      <AvatarImage src={src} />
      <AvatarFallback className='bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 text-white text-lg'>
        {fallBackText}
      </AvatarFallback>
    </Avatar>
  );
}
