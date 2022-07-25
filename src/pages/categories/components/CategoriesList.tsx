import { FC } from 'react';
import { Link } from 'react-router-dom';
import { ICategory } from '../../../redux/products/product.types';

interface Props {
    categories: ICategory[];
}

const CategoriesList: FC<Props> = ({ categories }) => {
    return (
        <ul className='categories-list'>
            {categories?.map(category => {
                return (
                    <li key={category.id}>
                        <Link to={category.name}>{category.name}</Link>
                    </li>
                );
            })}
        </ul>
    );
};

export default CategoriesList;
