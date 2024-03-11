import "./App.css";
import { useEffect, useState } from "react";
import PaginationContext from "./controller/PaginationContext";
import ChannelRow from "./components/ChannelRow/ChannelRow";
import TopBar from "./components/TopBar/TopBar";
import { API_URL } from "./constants/constants";

function App() {
  const [data, setData] = useState([]);
  const [paginationIdx, setpaginationIdx] = useState(0);

  useEffect(() => {
    const dataFetch = async () => {
      const fetchedData = await (await fetch(API_URL)).json();
      setData(fetchedData.response.channels);
    };
    dataFetch();
  }, []);

  return (
    <PaginationContext.Provider value={{ paginationIdx, setpaginationIdx }}>
      <TopBar />
      <div className="channels-container">
        {data.map((d, idx) => (
          <ChannelRow channelData={d} key={idx} />
        ))}
      </div>
    </PaginationContext.Provider>
  );
}

export default App;
