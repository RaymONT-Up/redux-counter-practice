import classes from "./Auth.module.css";

const Auth = props => {
  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={props.onLogIn}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Пароль</label>
            <input type="password" id="password" />
          </div>
          <button type="submit">Войти</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
