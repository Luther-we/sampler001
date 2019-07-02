import React from 'react'
import { Route, Switch } from 'react-router-dom'

export const RouteWithSubRoutes = (route, b, c) => {
  console.log('ROUTE COMPONENT reçoit ===>', route, b, c)
  return (
    <Route
      path={route.path}
      render={props => (
        <route.component {...props}>
          <Switch>
            {route.routes && route.routes.map((subRoute, i) => (
              <RouteWithSubRoutes
                key={i}
                {...subRoute}
                path={route.path + subRoute.path}
              />
            ))}
          </Switch>
        </route.component>
      )}
    />
  )
}
