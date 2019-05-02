import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Staff from '../views/staff/staff';
import Planning from '../views/planning/planning';
import Reports from '../views/reports/reports';
//import Imports from '../views/imports/imports';
import Settings from '../views/settings/settings';
import Application from '../views/application/application';

import NotFound from '../views/notFound/notFound';
import StaffEdit from '../views/staffEdit/staffEdit';
import PlanningEdit from '../views/planningEdit/planningEdit';
import NotificationEdit from '../views/settings/notification/notificationEdit';
import KeywordsEdit from '../views/settings/keywords/keywordsEdit';
import NewNotification from '../views/settings/notification/notificationEdit';
import NewKeyword from '../views/settings/keywords/keywordsEdit';
import Positions from '../views/new/positions';
const Routes = () => (
    <div className="container"> 
        <Switch>
            <Route path="/" exact component={() => <Redirect to="/staff" />} />
            <Route exact path="/staff" component={Staff} />
            <Route exact path="/staff/:id" render={(props) => <StaffEdit {...props} ignoreThis={true} />} />
            <Route exact path="/planning" component={Planning} />
            <Route exact path="/planning/:mplid" render={(props) => <PlanningEdit {...props} ignoreThis={true} />} />
            <Route exact path="/newNotification" render={(props) => <NewNotification {...props} ignoreThis={true} />} />
            <Route exact path="/newKeyword" render={(props) => <NewKeyword {...props} ignoreThis={true} />} />
            <Route path="/reports" component={Reports} />
            <Route path="/application" component={Application} />
            <Route path="/settings" component={Settings} />
      
            <Route exact path="/notification/:templatename" render={(props) => <NotificationEdit {...props} ignoreThis={true} />} />
            <Route exact path="/keywords/:keywordname" render={(props) => <KeywordsEdit {...props} ignoreThis={true} />} />
            <Route component={NotFound} />
        </Switch>
    </div>
);

export default Routes; 