import styles from "./userCard.module.css";
import React, { Component } from "react";

class UserCard extends Component {
  render() {
    const { user } = this.props;
    const { userImg, firstName, lastName, userName, gender, followers, likes } = user;
    return (
      <main className={styles.main}>
        <article className={styles.article}>
          <p className={styles.userName}>{userName}</p>
          <div className={styles.bio}>
            <img className={styles.userImg} src={userImg} alt={firstName} />
            <button className={styles.btn}>+</button>
          </div>
          <div className={styles.fullName}>
            <p className={styles.lastName}>{lastName} </p>
            <p className={styles.firstName}>{firstName}</p>
          </div>
          <p className={styles.gender}>Gender: {gender}</p>
          <div className={styles.divFooter}>
            <p className={styles.followers}>Followers: {followers}</p>
            <p className={styles.userLike}>like: {likes}</p>
          </div>
        </article>
      </main>
    );
  }
}

export default UserCard;
