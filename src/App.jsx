import UserCard from "./components/userCard/index";

function App() {
    const user = {
      userImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDwmG52pVI5JZfn04j9gdtsd8pAGbqjjLswg&s',
      lastName: 'Test',
      firstName: 'Testovych',
      userName: 'UserTest',
      gender: 'male',
      followers: 21,
    }
  return <UserCard user={user}/>;
}

export default App;
