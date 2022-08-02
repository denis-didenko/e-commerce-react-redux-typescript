import { FC } from 'react';
import './pagination.css';

interface IPaginationProps {
    activePage: number;
    setActivePage: (active: number) => void;
    totalPages: number;
}

// get array of pages
const getPages = (totalPages: number): number[] => {
    return Array.from({ length: totalPages }, (_, index) => index + 1);
};

const Pagination: FC<IPaginationProps> = ({ totalPages, activePage, setActivePage }) => {
    const pages = getPages(totalPages);

    return (
        <div className='pagination'>
            {pages.map(page => (
                <div key={page} className={`page-item${activePage === page ? ' is-active' : ''}`} onClick={() => setActivePage(page)}>
                    {page}
                </div>
            ))}
        </div>
    );
};

export default Pagination;
