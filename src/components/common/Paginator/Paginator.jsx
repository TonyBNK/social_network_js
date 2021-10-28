import React, {useState} from "react";
import c from "./Paginator.module.scss";


export const Paginator = React.memo((
    {
        currentPage,
        pageSize,
        itemsTotalCount,
        requestItems,
    }
) => {
    const pagesCount = Math.ceil(itemsTotalCount / pageSize);
    const portionSize = 10;

    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    const portionCount = Math.ceil(pagesCount / portionSize);
    const [portionNumber, setPortionNumber] = useState(1);
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    const rightPortionPageNumber = portionNumber * portionSize;

    const onPreviousClick = () => {
        setPortionNumber(portionNumber - 1);
    }
    const onNextClick = () => {
        setPortionNumber(portionNumber + 1);
    }

    const pagesList = pages
        .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
        .map(p => {
            const onChangeCurrentPageHandler = () => {
                requestItems(p, pageSize);
            }

            return (
                <span
                    className={currentPage === p && c.pageSelected}
                    onClick={onChangeCurrentPageHandler}
                    style={{margin: '0 5px'}}
                >
                {p}
            </span>
            )
        });

    return (
        <div className={c.paginatorContainer}>
            <button
                onClick={onPreviousClick}
                disabled={portionNumber <= 1}>
                previous
            </button>
            {pagesList}
            <button
                onClick={onNextClick}
                disabled={portionCount <= portionNumber}>
                next
            </button>
        </div>
    )
});