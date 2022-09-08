import { useParams } from 'react-router-dom';
import { useGetCategoryProductsQuery } from '../../../redux/products/product.api';
import ProductsList from '../../products/components/ProductsList';
import Loading from '../../../components/Loading';
import ErrorMessage from '../../../components/ErrorMessage';

type CategoryParamsId = {
  category: string;
};

const ProductDetails = () => {
  const { category } = useParams() as CategoryParamsId;
  const { data, isLoading, error } = useGetCategoryProductsQuery({ category });

  if (isLoading) return <Loading />;
  if (error) return <ErrorMessage error={error} />;

  return (
    <div className='category-details'>
      <h1>{category}</h1>
      <ProductsList products={data?.products} />
    </div>
  );
};

export default ProductDetails;
