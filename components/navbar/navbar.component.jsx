import Link from "next/link";
import Image from "next/image";

import SutraLogo from "../../assets/logo-sutra.png";

const Navbar = () => {
  return (
    <nav className='my-5 container mx-auto px-20'>
      <div className='flex justify-between items-center'>
        <Link href='/'>
          <Image src={SutraLogo} alt='sutra-logo' width={60} height={50} />
        </Link>

        <ul className='flex'>
          <li className='mx-5 text-red-600'>
            <Link href='/products'>Produk</Link>
          </li>
          <li className='mx-5 text-red-600'>Kata Sutra</li>
          <li className='mx-5 text-red-600'>Tentang Kami</li>
          <li className='mx-5 text-red-600'>Kontak</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
