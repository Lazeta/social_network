import React, { useState } from "react";
import s from './Paginator.module.css';
import cn from 'classnames';

const Paginator = ({ currentPage, onPageChanged, totalItemsCount, pageSize, portionSize = 10 }) => {
    const pagesCount = Math.ceil(totalItemsCount / pageSize);

    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return <div className={s.paginator}>
        <div>
            {pages.filter((p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map((p) => {
                    return <span className={cn({ [s.selectedPage]: currentPage === p }, s.pageNumber)}
                        key={p}
                        onClick={(e) => { onPageChanged(p) }}>{p}</span>
                })
            }
        </div>

        <div className={s.buttonWrapper}>
            {portionNumber > 1 &&
                <button className={s.buttonPrevious} onClick={() => { setPortionNumber(portionNumber - 1) }}>PREV</button>
            }
            {portionCount > portionNumber &&
                <button className={s.buttonNext} onClick={() => { setPortionNumber(portionNumber + 1) }}>NEXT</button>
            }
        </div>
    </div>
}

export default Paginator;