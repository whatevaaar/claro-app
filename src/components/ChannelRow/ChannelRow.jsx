import ShowCard from "../ShowCard/ShowCard";

const ChannelRow = ({ channelData }) => {
    const { name, id, image, events, number } = channelData;
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
            {events.map(evt => <ShowCard showData={evt} />)}
        </div>
    </article >
}

export default ChannelRow