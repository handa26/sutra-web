import axios from "axios";
import Image from "next/image";

import CardItem from "../../components/card-item/card-item.component";

import productSutra from "../../assets/product-sutra-bg.png";

const Products = ({ products }) => {
  return (
    <div className='h-full'>
      <div className='text-center static'>
        <Image src={productSutra} alt='sutra-bg' className='w-full relative' />
        <h3 className='absolute mx-auto top-60 left-60 right-60 text-4xl font-semibold text-white'>
          Produk Sutra
        </h3>
      </div>
      <div className='container mx-auto px-20 my-10'>
        <div className='my-10'>
          <h1 className='text-4xl font-semibold'>Kondom</h1>
          <div className='grid grid-cols-4 gap-5'>
            {products.data.map((product) => (
              <CardItem key={product.id} product={product} />
            ))}
          </div>
        </div>

        <div className='my-10'>
          <h1 className='text-4xl font-semibold'>Kondom Premium</h1>
          <div className='grid grid-cols-4 gap-5'>
            {products.data.map((product) => (
              <CardItem key={product.id} product={product} />
            ))}
          </div>
        </div>

        <div className='my-10'>
          <h1 className='text-4xl font-semibold'>Produk Lainnya</h1>
          <div className='grid grid-cols-4 gap-5'>
            {products.data.map((product) => (
              <CardItem key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;

export async function getServerSideProps() {
  const res = await axios.get("https://vast-eyrie-46380.herokuapp.com/api/products?populate=*");

  return {
    props: {
      products: res.data,
    },
  };
}
