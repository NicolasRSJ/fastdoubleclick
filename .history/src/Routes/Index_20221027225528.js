import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { Stopwatch } from '../Views/Stopwatch/Index'


export const Router= () => {
  return (
      <React.Fragment>
        <Route path='/' component={() => {<Stopwatch/>}} />
        <Route path='/historic' component={() => {}} />
      </React.Fragment>
  )
}
