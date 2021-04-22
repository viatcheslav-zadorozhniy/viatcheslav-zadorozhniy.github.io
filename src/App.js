import { lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import MainNav from './common/main-nav/main-nav.component';

const Home = lazy(() => import('./pages/home/home.component'));
const CssLayouts = lazy(() => import('./pages/css-layouts/css-layouts.component'));

export default function App() {
  return (
    <Router>
      <header>
        <MainNav />
      </header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path="/css/layouts" component={CssLayouts}/>
            <Route exact path="/" component={Home}/>
          </Switch>
          </Suspense>
      </main>
    </Router>
  );
}
