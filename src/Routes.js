import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Example from './includes/Home'

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Example} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes