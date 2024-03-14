import "./App.css";
import { useEffect, useState } from "react";
import PaginationContext from "./controller/PaginationContext";
import ChannelRow from "./components/ChannelRow/ChannelRow";
import TopBar from "./components/TopBar/TopBar";
import { API_URL } from "./constants/constants";
import SelectedShowContext from "./controller/SelectedShowContext";

function App() {
  const [data, setData] = useState([]);
  const [paginationIdx, setpaginationIdx] = useState(0);
  const [selectedShow, setSelectedShow] = useState(null);

  useEffect(() => {
    const dataFetch = async () => {
      const fetchedData = await (await fetch(API_URL)).json();
      setData(fetchedData.response.channels);
    };
    dataFetch();
  }, []);

  return (
    <SelectedShowContext.Provider value={{ selectedShow, setSelectedShow }}>
      <PaginationContext.Provider value={{ paginationIdx, setpaginationIdx }}>
        <TopBar />
        <div className="channels-container">
          {data.map((d, idx) => (
            <ChannelRow channelData={d} key={idx} />
          ))}
        </div>
      </PaginationContext.Provider>
    </SelectedShowContext.Provider>
  );
}

export default App;
