import React, { Component } from 'react';
import styles from './UsersLoader.module.scss';
import classNames from 'classnames';

class UsersLoader extends Component {
  constructor (props) {
    super(props);
    this.state = {
      users: [],
      isFetching: false,
      error: null,
      currentPage: 1,
    };
  }
  loadUser = () => {
    const { currentPage } = this.state;
    this.setState({ isFetching: true });
    fetch(
      `https://randomuser.me/api?results=14&seed=pe2025&page=${currentPage}`
    )
      .then(response => response.json())
      .then(data => this.setState({ users: data.results }))
      .catch(e => this.setState({ error: e }))
      .finally(() => this.setState({ isFetching: false }));
  };
  componentDidMount () {
    this.loadUser();
  }
  componentDidUpdate (prevProps, prevState) {
    const { currentPage } = this.state;
    if (currentPage !== prevState.currentPage) {
      this.loadUser();
    }
  }
  nextPage = () => {
    const { currentPage } = this.state;
    this.setState({ currentPage: currentPage + 1 });
  };
  prevPage = () => {
    const { currentPage } = this.state;
    if (currentPage > 1) {
      this.setState({ currentPage: currentPage - 1 });
    }
  };
  handlerGender = e => {
    this.setState({
      gender: e.target.value || null,
      currentPage: 1,
    });
  };
  render () {
    const { users, isFetching, error } = this.state;
    console.log(this.state.users);
    return (
      <>
        <button onClick={this.prevPage} disabled={isFetching}>
          {'<'}
        </button>
        <button onClick={this.nextPage} disabled={isFetching}>
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
}
export default UsersLoader;
