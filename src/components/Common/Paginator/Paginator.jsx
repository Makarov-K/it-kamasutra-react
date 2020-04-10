import React, {useState} from "react";
import style from "./Paginator.module.css";

let Paginator = (props) => {

    let pagesQuantity = Math.ceil(props.totalItems / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesQuantity; i++) {
        pages.push(i);
    }

    const [currentPortion, setCurrentPortion] = useState(1);
    const portionQuantity = Math.ceil(pagesQuantity / props.portionSize);
    const portionLeftBorder = (currentPortion - 1) * props.portionSize + 1;
    const portionRightBorder = currentPortion * props.portionSize;

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
                ? <span>
                    <button onClick={() => setCurrentPortion(1)}>to start</button>
                    <button onClick={() => setCurrentPortion(currentPortion - 1)}>prev</button>
                </span>
                : null
            }
            {pagesList}
            {portionQuantity > 1 && currentPortion < portionQuantity
                ? <span>
                    <button onClick={() => setCurrentPortion(currentPortion + 1)}>next</button>
                    <button onClick={() => setCurrentPortion(portionQuantity)}>end</button>
                </span>
                : null
            }
        </div>
    )
};

export default Paginator;