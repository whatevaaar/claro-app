import { useContext } from "react";
import SelectedShowContext from "../../controller/SelectedShowContext";
import HoverContext from "../../controller/HoverContext";
const InfoBanner = () => {
    const { selectedShow } = useContext(SelectedShowContext);
    const { name, date_begin, date_end, duration } = selectedShow;
    const { setIsHoveringOnShow } = useContext(HoverContext);
    const getFormattedDate = (date) => date.split(' ')[1].slice(0, -3) + 'hrs ';
    let timeout;
    const getCleanDuration = (duration) => {
        const splitDuration = duration.split(':');
        const hour = parseInt(splitDuration[0]) + 'hr';
        const min = parseInt(splitDuration[1]) + 'mn';
        return hour + ' ' + min;
    }

    const handleMouseEnter = () => {
        clearTimeout(timeout);
        setIsHoveringOnShow(true);
        console.log("mouseenterr");
    };

    const handleMouseLeave = () => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            setIsHoveringOnShow(false);
        }, 1000); // Espera 1 segundo antes de cambiar el estado a 'hovered'
    };

    return <section onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="info-banner">
        <div className="info-banner-body">
            <h1>{name}</h1>
            <div>
                <p>{getFormattedDate(date_begin)} a {getFormattedDate(date_end)}
                    {getCleanDuration(duration)}</p>
            </div>
        </div>
    </section>
}
export default InfoBanner