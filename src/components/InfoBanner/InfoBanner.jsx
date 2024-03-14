import { useContext } from "react";
import SelectedShowContext from "../../controller/SelectedShowContext";
const InfoBanner = () => {
    const { selectedShow } = useContext(SelectedShowContext);
    const { name, date_begin, date_end, duration } = selectedShow;
    const getFormattedDate = (date) => date.split(' ')[1].slice(0, -3) + 'hrs ';
    const getCleanDuration = (duration) => {
        const splitDuration = duration.split(':');
        const hour = parseInt(splitDuration[0]) + 'hr';
        const min = parseInt(splitDuration[1]) + 'mn';
        return hour + ' ' + min;
    }

    return <section className="info-banner">
        <div>
            <h1>{name}</h1>
            <div className="info-banner-body">
                <p>{getFormattedDate(date_begin)} a {getFormattedDate(date_end)}
                    {getCleanDuration(duration)}</p>
            </div>
        </div>
    </section>
}
export default InfoBanner