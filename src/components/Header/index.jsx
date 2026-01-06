import { Outlet, Link } from 'react-router-dom';
import styles from './Header.module.scss';

function Header () {
  return (
    <>
      <header className={styles.headerHome}>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
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
            <li>
              <Link to='/sigformik'>SignUpFormik</Link>
            </li>
            <li>
              <Link to='/weather'>CurrentWeather</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet></Outlet>
    </>
  );
}

export default Header;
