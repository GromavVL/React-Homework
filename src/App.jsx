import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from 'react-router-dom';
import UsersLoader from './components/UsersLoader';
import ReactList from './components/ReactLists';
import SignUpForm from './components/SignUpForm';
import AboutMe from './components/aboutMe';
import NotFoundPage from './components/notFound';

function App () {
  return (
    <>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to='/'>AboutMe</Link>
            </li>
            <li>
              <Link to='/userloader'>UserLoader</Link>
            </li>
            <li>
              <Link to='/list'>ReactList</Link>
            </li>
            <li>
              <Link to='/signup'>SignUpForm</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path='/' element={<AboutMe />}>
            <Route path='/userloader' element={<UsersLoader />} />
            <Route path='/list' element={<ReactList />} />
            <Route path='/signup' element={<SignUpForm />} />
            <Route path='*' element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
