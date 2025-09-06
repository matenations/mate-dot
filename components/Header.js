import Image from 'next/image';
import Link from 'next/link';

export default function Header({ name }) {
  return (
    <header className="pt-20 pb-12">
      <div className="relative mx-auto mb-4 aspect-square w-20 sm:w-24 md:w-32 lg:w-40">
        <Image
          src="/logo.jpeg"   // place your logo in /public/logo.jpeg
          alt="Site Logo"
          fill
          className="rounded-full object-cover"
        />
      </div>
      <p className="text-2xl text-center dark:text-white">
        <Link href="/">{name}</Link>
      </p>
    </header>
  );
}
