import { FC } from 'react';
import { Link } from 'react-router-dom';
import { ICategory } from '../../../redux/products/product.types';

interface Props {
  categories: ICategory[];
}

const CategoriesList: FC<Props> = ({ categories }) => (
  <ul className='categories-list'>
    {categories?.map(category => (
      <li key={category.id}>
        <Link to={`/products/categories/${category.name}`}>{category.name}</Link>
      </li>
    ))}
  </ul>
);

export default CategoriesList;
