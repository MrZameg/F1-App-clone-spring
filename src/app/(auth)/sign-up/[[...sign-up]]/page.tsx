import { SignUp } from '@clerk/nextjs';

export default function SignUpPage() {
  return (
    <div className="flex flex-col gap-4 w-[350px]">
      <span className="text-xl font-bold text-center">Create an account</span>
      <p className="text-sm text-center">
        to unlock all features and benefits — add your favorite drivers and teams, access the full
        race history, and enjoy <span className="font-bold">live transmissions for FREE.</span> from
        telegram channel
      </p>
      <SignUp />
    </div>
  );
}
