import { useEffect } from 'react';
import useActions from '../redux/hooks/useActions';
import { useGetProductsQuery } from '../redux/products/product.api';

export const useProducts = () => {
  const { setProducts } = useActions();
  const { data, error, isLoading, isSuccess } = useGetProductsQuery({ limit: 100, skip: 0 });

  useEffect(() => {
    if (isSuccess) {
      setProducts(data.products);
    }
  }, [data, isSuccess, setProducts]);

  return { data, isLoading, isSuccess, error };
};
