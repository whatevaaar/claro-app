import { useContext } from "react";
import SelectedShowContext from "../../controller/SelectedShowContext";
import HoverContext from "../../controller/HoverContext";

const ShowCard = ({ showData }) => {
    const { name, date_begin, date_end } = showData;
    const { setSelectedShow } = useContext(SelectedShowContext);
    const { setIsHoveringOnShow } = useContext(HoverContext);
    const cleanDate = (date) => date.split(' ')[1].slice(0, -3);
    let timer;
    const handleMouseLeave = () => {
        clearTimeout(timer);
        setIsHoveringOnShow(false);
    }
    const handleMouseEnter = () => {
        timer = setTimeout(() => {
            setIsHoveringOnShow(true);
            setSelectedShow(showData);
        }, 2000); // Espera 1 segundo antes de cambiar el estado a 'hovered'
    };

    return <div className="show-card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <h2>{name}</h2>
        <p>{cleanDate(date_begin)} - {cleanDate(date_end)}</p>
    </div>
}
export default ShowCard