import { useState } from "react";

const TopBar = () => {
    const startHour = 20;
    const hoursPerPage = 3;
    const maxPagination = 24 / hoursPerPage;
    const [paginationIdx, setpaginationIdx] = useState(0);
    const generateHourRange = (offset) => {
        const sum = startHour + (hoursPerPage * paginationIdx) + offset;
        const hour = sum >= 24 ? sum - 24 : sum;
        return hour + ':00';
    }

    const handleNext = () => {
        if (paginationIdx === maxPagination) {
            setpaginationIdx(0);
        }
        else setpaginationIdx(paginationIdx + 1);
    }

    const handlePrev = () => {
        if (paginationIdx === 0) {
            setpaginationIdx(maxPagination);
        }
        else setpaginationIdx(paginationIdx - 1);
    }



    return <div className="topbar-row">
        <div className="topbar-today">Hoy</div>
        <div className="topbar-dates">
            <p>{generateHourRange(0)}</p>
            <p>{generateHourRange(1)}</p>

            <p>{generateHourRange(2)}</p>
        </div>
        <button onClick={handlePrev}>{"<"}</button>
        <button onClick={handleNext}>{">"}</button>
    </div>
}
export default TopBar