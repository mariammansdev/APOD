import React from 'react';
import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';

const PaginationContainer = () => {
    const { meta } = useLoaderData();
    if (!meta || !meta.pagination) return null;

    const { pageCount, page } = meta.pagination;
    if (pageCount < 2) return null;

    const pages = Array.from({ length: pageCount }, (_, index) => index + 1);
    const navigate = useNavigate();
    const { search, pathname } = useLocation();

    const handlePageNavigation = (pageNumber) => {
        const searchParams = new URLSearchParams(search);
        searchParams.set('page', pageNumber);
        navigate(`${pathname}?${searchParams.toString()}`);
    };

    return (
        <div className="mt-10 flex justify-end">
            <div className="join">
                <button
                    className="btn btn-xs sm:btn-md join-item"
                    onClick={() => {
                        const pageNo = page === 1 ? 1 : page - 1;
                        handlePageNavigation(pageNo);
                    }}
                >
                    Prev
                </button>

                {pages.map((pageNumber) => (
                    <button
                        className={`btn btn-xs sm:btn-md border-none join-item ${
                            pageNumber === page ? 'bg-base-300 border-base-300' : ''
                        }`}
                        key={pageNumber}
                        onClick={() => handlePageNavigation(pageNumber)}
                    >
                        {pageNumber}
                    </button>
                ))}

                <button
                    className="btn btn-xs sm:btn-md join-item"
                    onClick={() => {
                        const pageNo = page === pageCount ? pageCount : page + 1;
                        handlePageNavigation(pageNo);
                    }}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default PaginationContainer;