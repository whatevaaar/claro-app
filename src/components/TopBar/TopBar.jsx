import { useContext } from "react";
import PaginationContext from "../../controller/PaginationContext";
import { HOURS_PER_PAGE, MAX_PAGINATION } from "../../constants/constants";
const TopBar = () => {
    const startHour = 20;
    const { paginationIdx, setpaginationIdx } = useContext(PaginationContext);
    const generateHourRange = (offset) => {
        const sum = startHour + (HOURS_PER_PAGE * paginationIdx) + offset;
        const hour = sum >= 24 ? sum - 24 : sum;
        return hour + ':00';
    }

    const handleNext = () => {
        if (paginationIdx === MAX_PAGINATION - 1)
            setpaginationIdx(0);
        else setpaginationIdx(paginationIdx + 1);
    }

    const handlePrev = () => {
        if (paginationIdx === 0)
            setpaginationIdx(MAX_PAGINATION);
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