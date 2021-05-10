import './App.css';
import Users from './Users';
import { Route, Link, Switch } from 'react-router-dom';
import { UsersProvider } from './UsersContext';
import Home from './Home';
import About from './About';
import Profiles from './Profiles';
import HistorySample from './HistorySample';

function App() {
  return (
    <UsersProvider>
      <div>
        <ul>
          <li>
            <Link to="/">홈</Link>
          </li>
          <li>
            <Link to="/about">소개</Link>
          </li>
          <li>
            <Link to="/profiles">프로필 목록</Link>
          </li>
          <li>
            <Link to="/history">예제</Link>
          </li>
        </ul>
        <hr />
      </div>
      <Switch>
      <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route path="/profiles" component={Profiles} />
        <Route path="/history" component={HistorySample} />
        <Route render={({ location }) => (
          <>
            <div>이 페이지는 존재하지 않습니다.</div>
            <p>{location.pathname}</p>
          </>
          )}
        />
        <Users />
      </Switch>
    </UsersProvider>
  );
}

export default App;
