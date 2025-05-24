import GoBackPage from '@/components/shared/GoBackPage/GoBackPage';
import Image from 'next/image';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-10">
      <GoBackPage />
      <h1 className="text-5xl font-bold">Welcome to F1 clone app</h1>
      <div className="flex justify-center gap-20 items-center flex-wrap">
        <Image
          src="/f1-image-login.webp"
          alt="F1 logo"
          width={350}
          height={525}
          className="rounded-lg shadow-lg shadow-gray-600/50 hover:scale-105 transition-all duration-300"
        />
        {children}
      </div>

      <span className="text-sm hover:underline cursor-pointer">
        Go to real <a href="https://formula1.com">formula1.com</a>
      </span>
    </div>
  );
}
