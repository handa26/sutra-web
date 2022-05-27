import axios from "axios";
import Images from "next/image";

const Details = ({ product }) => {
  const { attributes } = product;

  const firstImg = product.data.attributes.images.data[0].attributes.url;

  return (
    <main className='h-screen container mx-auto px-20 my-10 flex'>
      <div className='w-1/2'>
        <Images
          src={`https://vast-eyrie-46380.herokuapp.com${firstImg}`}
          width={200}
          height={200}
          className='rounded-md'
        />
        <div className='flex'>
          {product.data.attributes.images.data.map((image) => (
            <div key={image.id} className=''>
              <Images
                src={`https://vast-eyrie-46380.herokuapp.com${image.attributes.url}`}
                width={60}
                height={60}
                className='rounded-md'
              />
            </div>
          ))}
        </div>
      </div>
      <div className='w-1/2'>
        <h3 className='text-4xl mb-4'>{product.data.attributes.name}</h3>
        <span className='text-4xl text-red-600'>
          Rp {product.data.attributes.price}
        </span>
        <p className='my-4'>{product.data.attributes.description}</p>
        <button
          type='button'
          className='mb-2 w-full inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-normal uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out'
        >
          Beli Sekarang
        </button>
      </div>
    </main>
  );
};

export default Details;

export const getStaticPaths = async () => {
  const res = await axios.get("https://vast-eyrie-46380.herokuapp.com/api/products");

  const paths = res.data.data.map((dt) => {
    return {
      params: { id: dt.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await axios.get(
    "https://vast-eyrie-46380.herokuapp.com/api/products/" + id + "?populate=*"
  );

  return {
    props: {
      product: res.data,
    },
  };
};
