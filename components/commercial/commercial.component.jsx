import Image from "next/image";

import tv from "../../assets/tv.png";
import family from "../../assets/family.png";
import women from "../../assets/gals.png";

const Commercial = () => {
  return (
    <>
      <main className='h-screen bg-red-600 bg-cover py-10'>
        <div className='container mx-auto px-20 my-10'>
          <div className='w-3/4 mx-auto'>
            <Image src={tv} alt='TV' className='rounded-2xl' />
          </div>
        </div>
      </main>
      <main className='py-10 bg-red-800 overflow-hidden'>
        <div className='container mx-auto px-20 flex justify-between gap-8 items-center'>
          <h4 className='text-4xl font-semibold text-white'>
            TV <br /> Comersial
          </h4>
          <div className='flex justify-between gap-5 relative left-40'>
            <div className='w-1/3'>
              <Image
                src={tv}
                alt='TV'
                className='rounded-xl'
                width={400}
                height={250}
              />
            </div>
            <div className='w-1/3'>
              <Image
                src={family}
                alt='TV'
                className='rounded-xl'
                width={400}
                height={250}
              />
            </div>
            <div className='w-1/3'>
              <Image
                src={women}
                alt='TV'
                className='rounded-xl'
                width={400}
                height={250}
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Commercial;
