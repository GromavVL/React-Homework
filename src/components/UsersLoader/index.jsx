import React, { Component } from 'react';

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
      `https://randomuser.me/api?results=10&seed=pe2025&page=${currentPage}`
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
  render () {
    const { users, isFetching, error } = this.state;
    return (
      <>
        <button onClick={this.prevPage}>{'<'}</button>
        <button onClick={this.nextPage}>{'>'}</button>

        {error && <div>ERRRORR!!!!</div>}
        {isFetching && <div>Loading. Please waite....</div>}
        {!error && !isFetching && (
          <ul>
            {users.map(u => (
              <li key={u.login.uuid}>{JSON.stringify(u)}</li>
            ))}
          </ul>
        )}
      </>
    );
  }
}
export default UsersLoader;
