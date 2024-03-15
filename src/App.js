import "./App.css";
import { useState } from "react";
import PaginationContext from "./controller/PaginationContext";
import TopBar from "./components/TopBar/TopBar";
import SelectedShowContext from "./controller/SelectedShowContext";
import ChannelContainer from "./components/ChannelContainer/ChannelContainer";
import HoverContext from "./controller/HoverContext";

function App() {
  const [paginationIdx, setPaginationIdx] = useState(0);
  const [selectedShow, setSelectedShow] = useState(null);
  const [isHoveringOnShow, setIsHoveringOnShow] = useState(false);
  const [epgIsActive, setEpgIsActive] = useState(false);
  const activateEPG = () => setEpgIsActive(true);
  if (epgIsActive) {
    return (
      <SelectedShowContext.Provider value={{ selectedShow, setSelectedShow }}>
        <PaginationContext.Provider value={{ paginationIdx, setPaginationIdx }}>
          <HoverContext.Provider
            value={{ isHoveringOnShow, setIsHoveringOnShow }}
          >
            <TopBar />
            <ChannelContainer />
          </HoverContext.Provider>
        </PaginationContext.Provider>
      </SelectedShowContext.Provider>
    );
  } else {
    return (
      <section>
        <button onClick={activateEPG}>Activar</button>
      </section>
    );
  }
}

export default App;
