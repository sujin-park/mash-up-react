import './App.css';
import Users from './Users';
import { Route, Link } from 'react-router-dom';
import { UsersProvider } from './UsersContext';
import Home from './Home';
import About from './About';

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
        </ul>
        <hr />
      </div>
      <Route path="/" component={Home} exact />
      <Route path="/about" component={About} />
      <Users />
    </UsersProvider>
  );
}

export default App;
