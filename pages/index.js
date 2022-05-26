import Image from "next/image";

import Jumbotron from "../components/jumbotron/jumbotron.component";
import Commercial from "../components/commercial/commercial.component";
import Articles from "../components/Articles/articles.component";

import redSutra from "../assets/sutra-red.png";
import blackSutra from "../assets/sutra-black.png";
import age18 from "../assets/18-plus.png";

export default function Home() {
  return (
    <>
      {/* Jumbotron */}
      <Jumbotron />

      {/* Produks */}
      <main className='h-full py-10 bg-[url("../assets/bedroom-bf.png")] bg-cover static'>
        <div className='container mx-auto px-20 my-10 flex justify-between gap-20'>
          <div className='w-1/2 mt-20'>
            <h2 className='text-4xl font-semibold mb-5 text-white'>
              Produk Sutra
            </h2>
            <p className='text-base text-white'>
              Tersedia dalam beberapa variant yang bisa menambah pengalaman
              hubungan suami istri menjadi luar biasa.
            </p>
            <button className='p-2 bg-white mt-5 rounded'>
              Lihat semua produk
            </button>
            <div className='absolute left-28 mt-60 md:hidden xl:flex lg:flex 2xl:flex'>
              <Image src={age18} alt='model-sutra' width={150} height={150} />
            </div>
          </div>
          <div className='w-1/2 mt-20 gap-10 grid grid-cols-2'>
            <div className='text-center'>
              <div className='bg-indigo-100 p-8 rounded-xl'>
                <Image src={redSutra} alt='model-sutra' />
              </div>
              <h4 className='mt-3 text-white text-2xl'>Red Sutra</h4>
            </div>
            <div className='text-center'>
              <div className='bg-indigo-100 p-8 rounded-xl'>
                <Image src={blackSutra} alt='model-sutra' />
              </div>
              <h4 className='mt-3 text-white text-2xl'>Black Sutra</h4>
            </div>
            <div className='text-center'>
              <div className='bg-indigo-100 p-8 rounded-xl'>
                <Image src={blackSutra} alt='model-sutra' />
              </div>
              <h4 className='mt-3 text-white text-2xl'>Black Sutra</h4>
            </div>
            <div className='text-center'>
              <div className='bg-indigo-100 p-8 rounded-xl'>
                <Image src={redSutra} alt='model-sutra' />
              </div>
              <h4 className='mt-3 text-white text-2xl'>Red Sutra</h4>
            </div>
          </div>
        </div>
      </main>

      {/* TV Commersial */}
      <Commercial />

      {/* Article */}
      <Articles />
    </>
  );
}
