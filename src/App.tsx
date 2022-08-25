import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Routes } from '@/routing/routes';

function App() {
  return (
    <BrowserRouter>
      <React.Suspense fallback={null}>
        <Switch>
          {Object.values(Routes).map(({ path, component }) => (
            <Route key={path} exact path={path} component={component}></Route>
          ))}
        </Switch>
      </React.Suspense>
    </BrowserRouter>
  );
}

export default App;
