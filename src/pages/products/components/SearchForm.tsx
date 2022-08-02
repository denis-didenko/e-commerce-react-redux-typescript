import { FC } from 'react';
import SearchIcon from '@mui/icons-material/Search';

interface ISearchFormProps {
    setQuery: (query: string) => void;
}

const SearchForm: FC<ISearchFormProps> = ({ setQuery }) => {
    return (
        <form action='/search' className='search-form'>
            <div className='form-field with-icon'>
                <input type='text' name='query' placeholder='Search' onChange={e => setQuery(e.target.value)} />
                <SearchIcon />
            </div>
        </form>
    );
};

export default SearchForm;
