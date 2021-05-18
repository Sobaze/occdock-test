import React from 'react'
import { Route } from 'react-router-dom'

const generateRoutes = (routes) => {
    return routes.map((prop, key) =>  {
      return (
        <Route
          path={prop.path}
          exact
          component={prop.component}
          key={key}
        />
      )
    })
}

export default generateRoutes
