import React from 'react';
import { Route } from 'react-router';
import Navigation from './presentational/navigation.component';

export default (
    <Route path='/' component={Navigation}>
    <IndexRoute component={Home}/>
        <Route path='contact' component={Contact}/>
        <Route path='*' component={NotFound}/>
    </Route>
);