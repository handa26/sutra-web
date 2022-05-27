import Image from "next/image";
import Link from "next/link";

const CardItem = ({ product }) => {
  const { id, attributes } = product;

  const imageUrl = attributes.images.data[0].attributes.url;

  return (
    <div className='h-auto mt-5 rounded-lg shadow-2xl p-10'>
      <span className='inline-block py-1.5 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-red-600 text-white rounded'>
        Terlaris
      </span>
      <Image
        src={`https://vast-eyrie-46380.herokuapp.com${imageUrl}`}
        alt='model-sutra'
        width={200}
        height={200}
      />
      <Link href={`/products/${id}`}>
        <h3 className='text-xl mb-2'>{attributes.name}</h3>
      </Link>
      <p className='text-base text-gray-500'>{attributes.summary}</p>
    </div>
  );
};

export default CardItem;
