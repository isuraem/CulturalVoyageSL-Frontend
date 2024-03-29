import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import EventDashboard from "../views/eventDashboard";
import EventSingleView from "../views/eventSingleView";
import Events from "../views/Events";
import EventsCalendar from "../views/eventsCalendar";
import AddEvents from "../views/addEvents";
import EventsManage from "../views/eventsManage";
import AddEventForm from "../views/AddEventForm";
import CommunityDashboard from "../views/communitypost/communityDashboard";
import SearchDashBoard from "../views/communitypost/searchDashBoard";
import CommunityMap from "../views/communitypost/communityMap"

export const PublicRoutes = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/event" exact component={EventDashboard} />
          <Route path="/eventSingle" exact component={EventSingleView} />
          <Route path="/eventAll" exact component={Events} />
          <Route path="/eventCalendar" exact component={EventsCalendar} />
          <Route path="/addEvent" exact component={AddEvents} />
          <Route path="/manage" exact component={EventsManage} />
          <Route path="/Add" exact component={AddEventForm} />
          <Route path="/community" exact component={CommunityDashboard}/>
          <Route path="/communitySearch" exact component={SearchDashBoard}/>
          <Route path="/communityMap" exact component={CommunityMap}/>
        </Switch>
      </Router>
    </div>
  );
};
