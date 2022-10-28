import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { Stopwatch } from '../Views/Stopwatch/Index'


export const Router= () => {
  return (
    <Switch>
        <Route path='/' component={() => {<Stopwatch/>}} />
        <Route path='/historic' component={() => {}} />
    </Switch>    
  )
}
