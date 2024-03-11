import { useContext } from "react";
import ShowCard from "../ShowCard/ShowCard";
import PaginationContext from "../../controller/PaginationContext";
const ShowsSection = ({ sectionPaginationPostion, sectionShows }) => {
    const { paginationIdx } = useContext(PaginationContext);
    const conditionalStyle = { display: sectionPaginationPostion === paginationIdx ? 'block' : 'none' };
    return <div style={conditionalStyle}>
        <section className="show-section">
            {sectionShows.map(show => <ShowCard showData={show} />)}
        </section>
    </div>
}
export default ShowsSection
