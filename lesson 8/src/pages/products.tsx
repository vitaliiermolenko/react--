import Link from 'next/link';
import type { GetStaticProps } from 'next';

interface Product {
  id: number;
  name: string;
  price: number;
}

interface ProductsProps {
  products: Product[];
}

const Products: React.FC<ProductsProps> = ({ products }) => {
  return (
    <div>
      <h1>Наші продукти</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link href={`/products/${product.id}`}>
              {product.name}
            </Link>
            - ${product.price}
          </li>
        ))}
      </ul>
      <Link href="/">
        На головну
      </Link>
    </div>
  );
};

export const getStaticProps: GetStaticProps<ProductsProps> = async () => {
  const data: Product[] = require('../data/products.json');

  return {
    props: {
      products: data,
    },
  };
};

export default Products;
