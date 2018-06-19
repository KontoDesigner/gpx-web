import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Staff from '../views/staff/staff';
import Planning from '../views/planning/planning';
import Reports from '../views/reports/reports';
import Settings from '../views/settings/settings';
import NotFound from '../views/notFound/notFound';
import StaffEdit from '../views/staff/edit/edit';

const Routes = () => (
    <div className="container">
        <Switch>
            <Route path="/" exact component={() => <Redirect to="/staff" />} />
            <Route exact path="/staff" component={Staff} />
            <Route exact path="/staff/:id" component={StaffEdit} />
            <Route path="/planning" component={Planning} />
            <Route path="/reports" component={Reports} />
            <Route path="/Settings" component={Settings} />
            <Route component={NotFound} />
        </Switch>
    </div>
);

export default Routes;