import { Outlet } from 'react-router-dom';

function AboutMe () {
  return (
    <>
      <h1>About Me Page</h1>
      <Outlet >

      </Outlet>
    </>
  );
}

export default AboutMe;
