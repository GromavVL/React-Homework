import styles from "./userCard.module.css";
import React, { Component } from "react";

class UserCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      followers: props.user.followers,
      isSubscribed: false,
    };
  }
  addFollowers = () => {
    this.setState((prev) => ({
      followers: prev.followers + 1,
      isSubscribed: true,
    }));
  };

  render() {
    const { user } = this.props;
    const { userImg, firstName, lastName, userName, gender, likes } = user;
    const { followers, isSubscribed } = this.state;

    const genderStyle = {
      color: gender === "Male" ? "blue" : "palevioletred",
    };
    return (
      <main className={styles.main}>
        <article className={styles.article}>
          <p className={styles.userName}>{userName}</p>
          <div className={styles.bio}>
            <img className={styles.userImg} src={userImg} alt={firstName} />
            {!isSubscribed && (
              <button onClick={this.addFollowers} className={styles.btn}>
                +
              </button>
            )}
          </div>
          <div className={styles.fullName}>
            <p className={styles.lastName}>{lastName} </p>
            <p className={styles.firstName}>{firstName}</p>
          </div>

          <p className={gender} style={genderStyle}>Gender: {gender}</p>
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