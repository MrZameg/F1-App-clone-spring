import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function GoBackPage({ href, text }: { href?: string; text?: string }) {
  return (
    <Link
      href={href || '/'}
      className="w-fit flex gap-2 hover:font-bold hover:scale-105 transition-all duration-300"
    >
      <ArrowLeft />
      <span className="text-base font-medium">{text || 'Back to home'}</span>
    </Link>
  );
}
