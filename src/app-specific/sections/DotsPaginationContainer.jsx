import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';
const DotsPaginationContainer = () => {
  const { meta } = useLoaderData();
  const { pageCount, page } = meta.pagination;

  const { search, pathname } = useLocation();
  const navigate = useNavigate();

  const handlePageChange = (pageNumber) => {
    const searchParams = new URLSearchParams(search);
    searchParams.set('page', pageNumber);
    navigate(`${pathname}?${searchParams.toString()}`);
  };

  const addPageButton = ({ pageNumber, activeClass }) => {
    return (
      <button
        key={pageNumber}
        className={`btn btn-xs sm:btn-md border-none join-item ${
          activeClass ? 'bg-base-300 border-base-300' : ''
        }`}
        onClick={() => handlePageChange(pageNumber)}
      >
        {pageNumber}
      </button>
    );
  };

  const renderPageButtons = () => {
    const pageButtons = [];

    const firstButton = addPageButton({
      pageNumber: 1,
      activeClass: page === 1,
    });
    pageButtons.push(firstButton);

    // dots
    if (page > 2) {
      pageButtons.push(
        <button key='dots-2' className='btn btn-xs sm:btn-md join-item'>
          ...
        </button>
      );
    }

    if (page != 1 && page != pageCount) {
      const activeButton = addPageButton({
        pageNumber: page,
        activeClass: page === page,
      });
      pageButtons.push(activeButton);
    }

    // dots
    if (page < pageCount - 1) {
      pageButtons.push(
        <button key='dots-1' className='btn btn-xs sm:btn-md join-item'>
          ...
        </button>
      );
    }

    const lastButton = addPageButton({
      pageNumber: pageCount,
      activeClass: page === pageCount,
    });
    pageButtons.push(lastButton);

    return pageButtons;
  };

  return (
    <div className='mt-16 flex justify-end'>
      <div className='join'>
        <button
          className='btn btn-xs sm:btn-md join-item'
          onClick={() => {
            if (page > 1) {
              handlePageChange(page - 1);
            }
          }}
        >
          Prev
        </button>
        {renderPageButtons()}
        <button
          className='btn btn-xs sm:btn-md join-item'
          onClick={() => {
            if (page < pageCount) {
              handlePageChange(page + 1);
            }
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default DotsPaginationContainer;
