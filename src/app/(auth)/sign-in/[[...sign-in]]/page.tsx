import { SignIn } from '@clerk/nextjs';

export default function SignInPage() {
  return (
    <div className="flex flex-col gap-4">
      <span className="text-xl font-bold text-center">Sign in to your account</span>
      <SignIn />
    </div>
  );
}
