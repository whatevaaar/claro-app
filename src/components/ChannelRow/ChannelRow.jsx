import ShowCard from "../ShowCard/ShowCard";

const ChannelRow = ({ channelData }) => {
    const { name, id, image, events } = channelData;
    return <article id={id}>
        <div>
            <img src={image} alt={name} />
        </div>
        <div>
            {events.map(evt => <ShowCard showData={evt} />)}
        </div>
    </article>
}

export default ChannelRow