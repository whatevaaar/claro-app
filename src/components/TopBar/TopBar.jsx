import { useContext } from "react";
import PaginationContext from "../../controller/PaginationContext";
import { HOURS_PER_PAGE, MAX_PAGINATION } from "../../constants/constants";
import InfoBanner from "../InfoBanner/InfoBanner";
import SelectedShowContext from "../../controller/SelectedShowContext";
const TopBar = () => {
    const startHour = 20;
    const { paginationIdx, setpaginationIdx } = useContext(PaginationContext);
    const { selectedShow } = useContext(SelectedShowContext);
    const generateHourRange = (offset) => {
        let hour = startHour + (HOURS_PER_PAGE * paginationIdx) + offset;
        let postfix = 'a.m';
        if (hour >= 24) {
            hour -= 24;
            postfix = 'p.m'
        }
        return hour + ':00 ' + postfix;
    }

    const handleNext = () => {
        if (paginationIdx === MAX_PAGINATION - 1)
            setpaginationIdx(0);
        else setpaginationIdx(paginationIdx + 1);
    }

    const handlePrev = () => {
        if (paginationIdx === 0)
            setpaginationIdx(MAX_PAGINATION - 1);
        else setpaginationIdx(paginationIdx - 1);
    }

    return <div className="topbar">
        <div>
            {selectedShow ? <InfoBanner /> : null}
        </div>
        <div className="topbar-row">
            <div className="topbar-today">Hoy</div>
            <div className="topbar-dates">
                <p>{generateHourRange(0)}</p>
                <p>{generateHourRange(1)}</p>
                <p>{generateHourRange(2)}</p>
            </div>
            <button className="pagination-button" onClick={handlePrev}>{"<"}</button>
            <button className="pagination-button" onClick={handleNext}>{">"}</button>
        </div>
    </div>
}
export default TopBar