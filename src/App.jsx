import UserCard from "./components/userCard/index";

function App() {
    const user = {
      userImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrQtqi8wQTytBhnCU5o8SazhfyYpn9DPBWhw&s',
      lastName: 'Taylor',
      firstName: 'Swift',
      userName: '@Taylor123',
      gender: 'Female',
      followers: 21,
      likes: 5,
    }
  return <UserCard user={user}/>;
}

export default App;
