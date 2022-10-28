import React from 'react'
import { Route, Switch } from 'react-router-dom'


export const Router= () => {
  return (
    <Switch>
        <Route path='/' component={() => {}} />
        <Route path='/historic' component={() => {}} />
    </Switch>    
  )
}
