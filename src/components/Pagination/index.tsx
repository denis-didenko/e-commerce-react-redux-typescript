import { FC } from 'react';
import './pagination.css';

interface IPaginationProps {
  activePage: number;
  setActivePage: (active: number) => void;
  total: number | undefined;
  limit: number | undefined;
}

// get array of pages
const getPages = (total: number, limit: number): number[] => {
  const totalPages = Math.ceil(total / limit);

  return Array.from({ length: totalPages }, (_, index) => index + 1);
};

const Pagination: FC<IPaginationProps> = ({ total, limit, activePage, setActivePage }) => {
  if (!total || !limit) return null;

  const pages = getPages(total, limit);

  return (
    <div className='pagination'>
      {pages.map(page => (
        <div
          key={page}
          className={`page-item${activePage === page ? ' is-active' : ''}`}
          onClick={() => setActivePage(page)}
          onKeyDown={() => setActivePage(page)}
          role='button'
          tabIndex={0}
        >
          {page}
        </div>
      ))}
    </div>
  );
};

export default Pagination;
