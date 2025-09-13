import styles from "./userCard.module.css";
import React, { Component } from "react";

class UserCard extends Component {
  render() {
    const {user} = this.props;
    const {userImg, firstName, lastName, userName, gender, followers} = user;
    return (
      <>
        <main className={styles.main}>
          <article className={styles.aticle}>
            <img className={styles.userImg} src={userImg} alt={firstName}/>
            <p className={styles.firstName}>{firstName}</p>
            <p className={styles.lastName}>{lastName}</p>
            <p className={styles.userName}>{userName}</p>
            <p className={styles.gender}>{gender}</p>
            <p className={styles.followers}>{followers}</p>
            <button>+</button>
          </article>
        </main>
      </>
    );
  }
}

export default UserCard;
