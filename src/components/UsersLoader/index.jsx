import React, { Component, useEffect, useState } from 'react';
import styles from './UsersLoader.module.scss';
import classNames from 'classnames';
import { loading } from '../../api/index';

function UsersLoader () {
  const [users, setUsers] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const loadUser = async () => {
    setError(null);
    setIsFetching(true);
    try {
      const users = await loading(currentPage);
      setUsers(users);
    } catch (error) {
      setError(error);
    } finally {
      setIsFetching(false);
    }
  };
  useEffect(() => {
    loadUser();
  }, [currentPage]);

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  
  return (
    <>
      <button onClick={prevPage} disabled={isFetching}>
        {'<'}
      </button>
      <button onClick={nextPage} disabled={isFetching}>
        {'>'}
      </button>
      {error && <div>ERRRORR!!!!</div>}
      {isFetching && <div>Loading. Please waite....</div>}
      {!error && !isFetching && (
        <main className={styles.home}>
          {users.map(u => {
            const genderClassNames = classNames(styles.userCard, {
              [styles.male]: u.gender === 'male',
              [styles.female]: u.gender === 'female',
            });

            return (
              <article className={genderClassNames} key={u.login.uuid}>
                <img
                  className={styles.imagesUser}
                  src={u.picture.medium}
                  alt={u.name.first}
                />
                <h3 className={styles.fullName}>
                  {u.name.first} {u.name.last}
                </h3>
                <p className={styles.userMeta}>
                  {u.gender} {u.dob.age} year
                </p>
                <p className={styles.userContact}>{u.email}</p>
                <p className={styles.userLocation}>
                  {u.location.city}, {u.location.country}
                </p>
              </article>
            );
          })}
        </main>
      )}
    </>
  );
}

// class UsersLoader extends Component {
//   constructor (props) {
//     super(props);
//     this.state = {
//       users: [],
//       isFetching: false,
//       error: null,
//       currentPage: 1,
//     };
//   }
//   loadUser = async () => {
//     const { currentPage } = this.state;
//     this.setState({ isFetching: true, error: null });
//     try {
//       const users = await loading(currentPage);
//       this.setState({ users });
//     } catch ({ error }) {
//       setState({ error });
//     } finally {
//       this.setState({ isFetching: false });
//     }
//   };
//   componentDidMount () {
//     this.loadUser();
//   }
//   componentDidUpdate (prevProps, prevState) {
//     const { currentPage } = this.state;
//     if (currentPage !== prevState.currentPage) {
//       this.loadUser();
//     }
//   }
//   nextPage = () => {
//     const { currentPage } = this.state;
//     this.setState({ currentPage: currentPage + 1 });
//   };
//   prevPage = () => {
//     const { currentPage } = this.state;
//     if (currentPage > 1) {
//       this.setState({ currentPage: currentPage - 1 });
//     }
//   };
//   handlerGender = e => {
//     this.setState({
//       gender: e.target.value || null,
//       currentPage: 1,
//     });
//   };
//   render () {
//     const { users, isFetching, error } = this.state;

//     return (
//       <>
//         <button onClick={this.prevPage} disabled={isFetching}>
//           {'<'}
//         </button>
//         <button onClick={this.nextPage} disabled={isFetching}>
//           {'>'}
//         </button>
//         {error && <div>ERRRORR!!!!</div>}
//         {isFetching && <div>Loading. Please waite....</div>}
//         {!error && !isFetching && (
//           <main className={styles.home}>
//             {users.map(u => {
//               const genderClassNames = classNames(styles.userCard, {
//                 [styles.male]: u.gender === 'male',
//                 [styles.female]: u.gender === 'female',
//               });

//               return (
//                 <article className={genderClassNames} key={u.login.uuid}>
//                   <img
//                     className={styles.imagesUser}
//                     src={u.picture.medium}
//                     alt={u.name.first}
//                   />
//                   <h3 className={styles.fullName}>
//                     {u.name.first} {u.name.last}
//                   </h3>
//                   <p className={styles.userMeta}>
//                     {u.gender} {u.dob.age} year
//                   </p>
//                   <p className={styles.userContact}>{u.email}</p>
//                   <p className={styles.userLocation}>
//                     {u.location.city}, {u.location.country}
//                   </p>
//                 </article>
//               );
//             })}
//           </main>
//         )}
//       </>
//     );
//   }
// }
export default UsersLoader;
