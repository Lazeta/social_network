import React from "react";
import s from './Users.module.css';

const Paginator = ({ currentPage, onPageChanged, totalUsersCount, pageSize}) => {
    const pagesCount = Math.ceil(totalUsersCount / pageSize);
    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    // console.log('Users props:', props);

    return <div>
        <div className={s.pages}>
            {pages.map((p, index) => {
                return <span key={index}
                    onClick={() => { onPageChanged(p) }}
                    className={`${currentPage === p ? s.selectedPage : ''} ${s.pageNumber}`}
                >{p}</span>
            })}
        </div>
    </div>
}

export default Paginator;