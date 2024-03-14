import { useContext } from "react";
import SelectedShowContext from "../../controller/SelectedShowContext";
const InfoBanner = () => {
    const { selectedShow } = useContext(SelectedShowContext);
    const { name, date_begin, date_end, duration } = selectedShow;
    return <section className="info-banner">
        <div>
            <h1>{name}</h1>
            <div className="info-banner-body">
                <p>{date_begin} a {date_end} {duration}</p>
            </div>
        </div>
    </section>
}
export default InfoBanner