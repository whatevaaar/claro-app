import { useContext } from "react";
import PaginationContext from "../../controller/PaginationContext";
import { HOURS_PER_PAGE, MAX_PAGINATION } from "../../constants/constants";
import InfoBanner from "../InfoBanner/InfoBanner";
import SelectedShowContext from "../../controller/SelectedShowContext";
import HoverContext from "../../controller/HoverContext";
const TopBar = () => {
    const startHour = 20;
    const { paginationIdx, setPaginationIdx } = useContext(PaginationContext);
    const { selectedShow } = useContext(SelectedShowContext);
    const { isHoveringOnShow } = useContext(HoverContext);
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
            setPaginationIdx(0);
        else setPaginationIdx(paginationIdx + 1);
    }

    const handlePrev = () => {
        if (paginationIdx === 0)
            setPaginationIdx(MAX_PAGINATION - 1);
        else setPaginationIdx(paginationIdx - 1);
    }

    return <div className="topbar">
        <div>
            {(isHoveringOnShow) ? <InfoBanner /> : null}
        </div>
        <div className="topbar-row">
            <div className="topbar-today">Hoy</div>
            <div className="topbar-dates">
                <p>{generateHourRange(0)}</p>
                <p>{generateHourRange(1)}</p>
                <p>{generateHourRange(2)}</p>
            </div>
            <div className="topbar-button">
                <button className="pagination-button" onClick={handlePrev}>{"<"}</button>
                <button className="pagination-button" onClick={handleNext}>{">"}</button>
            </div>
        </div>
    </div>
}
export default TopBar