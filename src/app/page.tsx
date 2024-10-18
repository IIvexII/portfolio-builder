import { SignIn } from '@/components/auth/sign-in';
import { SignOut } from '@/components/auth/sign-out';
import { UserAvatar } from '@/components/user-avatar';
import { auth } from '@/lib/auth';

export default async function Home() {
  const session = await auth();

  let renderAuthButton = !session?.user ? <SignIn /> : <SignOut />;

  return (
    <>
      <h1>{session?.user?.name}</h1>
      <UserAvatar />
      {renderAuthButton}
    </>
  );
}
