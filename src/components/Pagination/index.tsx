import { FC } from 'react';
import './pagination.css';

interface IPaginationProps {
    activePage: number;
    setActivePage: (active: number) => void;
    visibleItems: number;
    totalItems: number;
}

// get array of pages
const getPages = (visibleItems: number, totalItems: number): number[] => {
    const pagesCount = Math.ceil(totalItems / visibleItems);

    return Array.from({ length: pagesCount }, (_, index) => index + 1);
};

const Pagination: FC<IPaginationProps> = ({ totalItems, visibleItems, activePage, setActivePage }) => {
    const pages = getPages(visibleItems, totalItems);

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
