import React, {useState} from "react";
import style from "./Paginator.module.css";

let Paginator = (props) => {
    const {paginatorPortionSize: portionSize} = props;

    let pagesQuantity = Math.ceil(props.totalItems / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesQuantity; i++) {
        pages.push(i);
    }

    const [currentPortion, setCurrentPortion] = useState(1);
    const portionQuantity = Math.ceil(pagesQuantity / portionSize);
    const portionLeftBorder = (currentPortion - 1) * portionSize + 1;
    const portionRightBorder = currentPortion * portionSize;

    const pagesList = pages
        .filter(p => p >= portionLeftBorder && p <= portionRightBorder)
        .map(p => (
            <span key={p} className={`${props.currentPage === p && style.selectedPage} ${style.page}`}
                  onClick={() => {
                      props.onSetPage(p)
                  }}>{p}</span>)
        );


    return (
        <div className={style.paginator}>
            {portionQuantity > 1 && currentPortion > 1
                ? <button onClick={() => setCurrentPortion(currentPortion - 1)}>prev</button>
                : null
            }
            {pagesList}
            {portionQuantity > 1 && currentPortion < portionQuantity
                ? <button onClick={() => setCurrentPortion(currentPortion + 1)}>next</button>
                : null
            }
        </div>
    )
};

export default Paginator;