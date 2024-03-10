import "./App.css";
import { useEffect, useState } from "react";
import ChannelRow from "./components/ChannelRow/ChannelRow";

function App() {
  const url =
    "https://mfwkweb-api.clarovideo.net/services/epg/channel?device_id=web&device_category=web&device_model=web&device_type=web&device_so=Chrome&format=json&device_manufacturer=generic&authpn=webclient&authpt=tfg1h3j4k6fd7&api_version=v5.93&region=guatemala&HKS=web61144bb49d549&user_id=54343080&date_from=20210812200256&date_to=20210813200256&quantity=200";
  const [data, setData] = useState([]);
  useEffect(() => {
    const dataFetch = async () => {
      const fetchedData = await (await fetch(url)).json();
      setData(fetchedData.response.channels);
    };
    dataFetch();
  }, []);

  return (
    <div>
      {data.map((d) => (
        <ChannelRow channelData={d} />
      ))}
    </div>
  );
}

export default App;
