import Image from "next/image";

import logoSutra from "../../assets/logo-sutra-footer.png";
import socialMedia from "../../assets/social-media.png";
import eCommerce from "../../assets/e-commerce.png";
import sutraPacks from "../../assets/sutra-packs.png";

const Footer = () => {
  return (
    <footer className='text-center lg:text-left bg-red-700 text-white overflow-hidden'>
      <div className='py-10 text-center md:text-left container mx-auto px-20'>
        <div className='grid grid-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          <div className=''>
            <h6
              className='
            uppercase
            font-semibold
            mb-4
            flex
            items-center
            justify-center
            md:justify-start
          '
            >
              <Image src={logoSutra} alt='sutra-logo' width={60} height={50} />
            </h6>
          </div>
          <div className=''>
            <h6 className='uppercase font-semibold mb-4 flex justify-center md:justify-start'>
              Menu
            </h6>
            <p className='mb-4'>
              <a href='#!'>Produk</a>
            </p>
            <p className='mb-4'>
              <a href='#!'>Kata Sutra</a>
            </p>
            <p className='mb-4'>
              <a href='#!'>Tentang Kami</a>
            </p>
            <p>
              <a href='#!'>Kontak</a>
            </p>
          </div>
          <div className=''>
            <h6 className='uppercase font-semibold mb-2 flex justify-center md:justify-start'>
              Official Store
            </h6>
            <Image src={eCommerce} alt='e-commerce' width={250} height={40} />

            <h6 className='uppercase font-semibold mb-2 mt-4 flex justify-center md:justify-start'>
              Sosial Media
            </h6>
            <Image
              src={socialMedia}
              alt='social-media'
              width={100}
              height={25}
            />
          </div>
          <div className=''></div>
        </div>
      </div>
      <div className='text-left p-6 bg-red-700 container mx-auto px-20 relative'>
        <span>
          © 2020 Kondom Sutra part of DKT Indonesia — All Rights Reserved
        </span>
        <div className='absolute -right-10 -bottom-10'>
          <Image src={sutraPacks} alt='sutra-logo' />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
