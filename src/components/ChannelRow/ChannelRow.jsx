import { HOURS_PER_PAGE, MAX_PAGINATION } from "../../constants/constants";
import ShowsSection from "../ShowsSection/ShowsSection";

const ChannelRow = ({ channelData }) => {
    const { name, id, image, events, number } = channelData;
    const sections = [];
    for (let index = 0; index < MAX_PAGINATION; index++) {
        const sectionShows = events.slice(index * HOURS_PER_PAGE, HOURS_PER_PAGE + (HOURS_PER_PAGE * index))
        const newSection = <ShowsSection sectionPaginationPostion={index} sectionShows={sectionShows} />
        sections.push(newSection);
    }
    return <article id={id} className="channel-row">
        <div className="channel-header">
            <div className="channel-number" >
                <p>{number}</p>
            </div>
            <div className="channel-logo" >
                <img src={image} alt={name} />
            </div>
        </div>
        <div className="channel-wrapper">
            {sections}
        </div>
    </article >
}

export default ChannelRow