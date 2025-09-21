import React, { Component } from "react";
import styles from "./reactLists.module.scss";
import { FaTrash } from "react-icons/fa";

class ReactList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          id: 1,
          firstName: "Ivan",
          lastName: "Petrenko",
          age: 25,
          imgSrc: "https://cdn-icons-png.flaticon.com/128/3607/3607444.png",
        },
        {
          id: 2,
          firstName: "Olena",
          lastName: "Kovalenko",
          age: 19,
          imgSrc: "https://cdn-icons-png.flaticon.com/128/17360/17360409.png",
        },
        {
          id: 3,
          firstName: "Sofiia",
          lastName: "Bondarenko",
          age: 22,
          imgSrc: "https://cdn-icons-png.flaticon.com/128/13126/13126995.png",
        },
        {
          id: 4,
          firstName: "Dmytro",
          lastName: "Horobets",
          age: 27,
          imgSrc: "https://cdn-icons-png.flaticon.com/128/1177/1177568.png  ",
        },
      ],
    };
  }


  handlerDelete() {

  }
  render() {
    const { users } = this.state;
    const {handlerDelete} = this.props;
    return (
      <main>
        {users.map((user) => (
          <section key={user.id} className={styles.section}>
            <div className={styles.infoUser}>
              <img className={styles.userAvatar} src={user.imgSrc} />
              <div className={styles.FullName}>
                <p className={styles.firstName}>{user.firstName}</p>
                <p className={styles.lastName}>{user.lastName}</p>
                <p>{user.age} years</p>
                {/* <p>{user.id}</p> */}
              </div>
            </div>
            <FaTrash className={styles.deleteButton} onClick={handlerDelete} />
          </section>
        ))}
      </main>
    );
  }
}

export default ReactList;
