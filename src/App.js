import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import { useSelector, useDispatch } from "react-redux";
import { userAuthActions } from "./store/user-auth-slice";

function App() {
  const dispatchFunction = useDispatch();
  // Нужно вообще получать данные из формы на сейчас я делаю регистрацию для того чтобы попрактиковаться с redux поэтому просто будет смена состояния
  const isUserLoggedIn = useSelector(state => state.userAuth.isUserLoggedIn);

  const logInHandler = event => {
    event.preventDefault();
    dispatchFunction(userAuthActions.logIn());
  };
  const signOutHandler = event => {
    event.preventDefault();
    dispatchFunction(userAuthActions.signOut());
  };
  return (
    <div>
      <Header onSignOut={signOutHandler} isUserLoggedIn={isUserLoggedIn} />
      {!isUserLoggedIn && <Auth onLogIn={logInHandler} />}
      <Counter />
    </div>
  );
}

export default App;
