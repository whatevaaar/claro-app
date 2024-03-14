import { useContext } from "react";
import SelectedShowContext from "../../controller/SelectedShowContext";

const ShowCard = ({ showData }) => {
    const { name, date_begin, date_end } = showData;
    const { setSelectedShow } = useContext(SelectedShowContext);
    const cleanDate = (date) => date.split(' ')[1].slice(0, -3);
    let timeout;
    const handleMouseEnter = () => {
        timeout = setTimeout(() => {
            setSelectedShow(showData);
        }, 1000); // Espera 1 segundo antes de cambiar el estado a 'hovered'
    };

    const handleMouseLeave = () => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            setSelectedShow(null);
        }, 1000); // Espera 1 segundo antes de cambiar el estado a 'hovered'
    };
    return <div className="show-card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <h2>{name}</h2>
        <p>{cleanDate(date_begin)} - {cleanDate(date_end)}</p>
    </div>
}
export default ShowCard