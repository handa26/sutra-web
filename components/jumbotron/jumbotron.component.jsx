import Image from "next/image";

import sutraModel from "../../assets/model-sutra.png";
import sutraOk1 from "../../assets/sutra-ok-1.png";
import sutraOk2 from "../../assets/sutra-ok-2.png";
import sutraOk3 from "../../assets/sutra-ok-3.png";

const Jumbotron = () => {
  return (
    <main className='container mx-auto px-20 my-10 flex justify-between h-screen static'>
        <div className='w-1/2 mt-20'>
          <div className='absolute left-0 top-6 md:hidden xl:flex lg:flex'>
            <Image src={sutraOk1} alt='model-sutra' width={150} height={300} />
          </div>
          <h2 className='text-5xl font-semibold mb-5 text-red-600'>
            Makin Mantab <br />
            Makin Mesra
          </h2>
          <p className='text-base'>
            Produk sutra dibuat dengan latex pilihan dengan rubrikasi khusus,
            dapat memperpanjang durasi keintiman. Gunakan produk sutra untuk
            menambah kemesraan dan pengalaman yang memuaskan dengan pasangan.{" "}
          </p>
        </div>
        <div className='w-1/2'>
          <Image src={sutraModel} alt='model-sutra' />
          <div className='absolute right-0 -bottom-16 md:hidden xl:flex lg:flex'>
            <Image src={sutraOk2} alt='model-sutra' width={100} height={350} />
          </div>
        </div>
        {/* <div className='absolute -bottom-80 z-0'>
          <Image src={sutraOk3} alt='model-sutra' width={400} height={300} />
        </div> */}
      </main>
  );
};

export default Jumbotron;
