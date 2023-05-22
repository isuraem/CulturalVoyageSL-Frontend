import {EventRouters} from "./components/routes/eventRoutes";
import {CommunityRouters} from "./components/routes/communityRoutes"
import './App.css';

function App() {
  return (
    <div className="App">
      <CommunityRouters/>
      {/* <EventRouters/> */}
    </div>
  );
}

export default App;
