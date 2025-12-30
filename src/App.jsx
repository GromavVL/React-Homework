import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UsersLoader from './components/UsersLoader';
import ReactList from './components/ReactLists';
import SignUpForm from './components/SignUpForm';
import Header from './components/Header';
import NotFoundPage from './components/notFound';
import SignUpFormik from './components/SignUpFormik';

function App () {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Header />}>
            <Route path='/userloader' element={<UsersLoader />} />
            <Route path='/list' element={<ReactList />} />
            <Route path='/signup' element={<SignUpForm />} />
            <Route path='/sigformik' element={<SignUpFormik />} />
            <Route path='*' element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
