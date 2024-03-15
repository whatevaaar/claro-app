import { useContext, useEffect, useState } from "react";
import { API_URL } from "../../constants/constants";
import ChannelRow from "../ChannelRow/ChannelRow";
import HoverContext from "../../controller/HoverContext";

const ChannelContainer = () => {
    const [data, setData] = useState([]);
    const { isHoveringOnShow } = useContext(HoverContext);
    useEffect(() => {
        const dataFetch = async () => {
            const fetchedData = await (await fetch(API_URL)).json();
            setData(fetchedData.response.channels);
        };
        dataFetch();
    }, []);
    return <div className="channels-container" style={{ marginTop: isHoveringOnShow ? "3rem" : "1em" }}>
        {data.map((d, idx) => (
            <ChannelRow channelData={d} key={idx} />
        ))}
    </div>
}
export default ChannelContainer