import { FoodBrowsingRoutes } from '@/food-browsing/routes';
import { MainLayout } from '@/layout/MainLayout';
import { Routes } from '@/routing/routes';
import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <React.Suspense fallback={<MainLayout />}>
        <Switch>
          {Object.values(Routes).map(({ path, component }) => (
            <Route key={path} exact path={path} component={component}></Route>
          ))}
          <Redirect to={FoodBrowsingRoutes.FoodBrowsing.path} />
        </Switch>
      </React.Suspense>
    </BrowserRouter>
  );
}

export default App;
