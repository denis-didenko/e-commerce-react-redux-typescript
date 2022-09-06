import { FC } from 'react';
import { IProduct } from '../../../redux/products/product.types';
import ProductItem from './ProductItem';
import '../products.css';

interface IProductsListProps {
  products: IProduct[];
}

const ProductsList: FC<IProductsListProps> = ({ products }) => {
  if (!products) return <p>Products not found</p>;

  return (
    <div className='products-list'>
      {products.map(product => (
        <ProductItem key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ProductsList;
