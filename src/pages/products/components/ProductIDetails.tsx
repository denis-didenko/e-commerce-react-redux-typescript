import { useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import StarIcon from '@mui/icons-material/Star';
import { useGetProductQuery } from '../../../redux/products/product.api';
import AddToCartBtn from '../../cart/components/AddToCartBtn';
import Loading from '../../../components/Loading';
import 'swiper/css';
import 'swiper/css/pagination';

type ProductParamsId = {
  id: string;
};

const ProductDetails = () => {
  const { id } = useParams() as ProductParamsId;
  const { data: product, isLoading } = useGetProductQuery({ id });

  if (isLoading) return <Loading />;
  if (!product) return <p>Product not found</p>;

  const { title, description, price, rating, category, images, id: productId } = product;

  return (
    <div className='product-details'>
      <h1>{title}</h1>
      <div className='product-details__pics'>
        <Swiper modules={[Pagination]} pagination={{ clickable: true }} slidesPerView={1}>
          {images.map(image => (
            <SwiperSlide key={image}>
              <img src={image} alt={title} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className='product-details__description'>
        <p>{description}</p>
      </div>
      <div className='product-details__category'>
        <p>
          <strong>Category:</strong> {category}
        </p>
      </div>
      <div className='product-details__price'>
        <p>
          <strong>Price:</strong> {price}$
        </p>
      </div>
      <div className='product-details__rating'>
        <div className='product-rating'>
          <strong>Rating:</strong>
          <StarIcon />
          {rating}
        </div>
      </div>
      <AddToCartBtn id={productId}>Add to cart</AddToCartBtn>
    </div>
  );
};

export default ProductDetails;
