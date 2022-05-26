import Image from "next/image";

import man1 from "../../assets/man1.png";
import man2 from "../../assets/man2.png";
import man3 from "../../assets/man3.png";

const Articles = () => {
  return (
    <main className='h-full mb-48 mt-16'>
      <div className='container mx-auto px-20'>
        <h2 className='text-3xl'>Kata Sutra</h2>
        <div>
          <div className='w-full bg-slate-300 p-5 my-6 gap-5 flex rounded-xl'>
            <div className='w-3/12'>
              <Image
                src={man1}
                alt='Man'
                className='rounded-xl'
                width={400}
                height={250}
              />
            </div>
            <div className='w-9/12'>
              <h4 className='text-2xl'>
                Begini 6 Cara Melakukan Seks Oral yang Aman
              </h4>
              <p className='text-base my-7'>
                Seks oral yang aman sering dicari oleh pasangan suami istri.
                Beberapa pasangan mengatakan bahwa mereka menyukai seks oral.
                Akan tetapi...
              </p>
              <span>Baca Selengkapnya &#62;</span>
            </div>
          </div>
          <div className='w-full bg-slate-300 p-5 my-6 gap-5 flex rounded-xl'>
            <div className='w-3/12'>
              <Image
                src={man2}
                alt='Man'
                className='rounded-xl'
                width={400}
                height={250}
              />
            </div>
            <div className='w-9/12'>
              <h4 className='text-2xl'>
                5 Cara Mencegah Kondom Tersangkut di Vagina
              </h4>
              <p className='text-base my-7'>
                Kondom tersangkut di vagina sering terjadi pada pasangan yang
                tidak mengetahui cara yang tepat dalam memasang alat
                kontrasepsi...
              </p>
              <span>Baca Selengkapnya &#62;</span>
            </div>
          </div>
          <div className='w-full bg-slate-300 p-5 my-6 gap-5 flex rounded-xl'>
            <div className='w-3/12'>
              <Image
                src={man3}
                alt='Man'
                className='rounded-xl'
                width={400}
                height={250}
              />
            </div>
            <div className='w-9/12'>
              <h4 className='text-2xl'>
                6 Cara Berhubungan Intim dengan Aman dari Kehamilan
              </h4>
              <p className='text-base my-7'>
                Berhubungan intim dengan aman sangat disukai oleh semua pasangan
                suami istri. Sebagai seorang suami istri yang belum atau
                tidak...
              </p>
              <span>Baca Selengkapnya &#62;</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Articles;
