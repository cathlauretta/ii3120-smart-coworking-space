import Link from 'next/link';
import Image from 'next/image';

export const Brand = () => {
  return (
    <Link href="/" legacyBehavior passHref>
        <Image src="/assets/image/brand.svg" alt="Sentrice Logo" width={160} height={33} />
    </Link>
  );
};
