/** @format */
import React from 'react';
import styles from '../css/auth.module.scss';
import { withRouter } from 'next/router';
import PageLoading from '../components/PageLoading';
import Link from 'next/link';
import { withSanctum } from "react-sanctum";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      email: "",
      password: "",
    };
  }

  onChangeEmail(value) {
    this.setState({
      email: value
    });
  }

  onChangePassword(value) {
    this.setState({
      password: value
    });
  }

  onSubmitLogin() {
    const { setLoading } = this;
    const { signIn, router } = this.props;
    const { email, password } = this.state;
    const rememberMe = true;

    setLoading(true);

    signIn(email, password, rememberMe)
      .then(() => {
        router.push('/');
      })
      .catch(() => {
        window.alert("Invalid login credentials");
      })
      .finally(() => {
        setLoading(false);
      });
  }

  setLoading(value) {
    this.setState(() => ({ loading: value }));
  }

  render() {
    const { loading } = this.state;

    return (
      <>
        {loading && <PageLoading message='Welcome! TripTime is logging you in 🙂' />}

        <div className={styles.formContainer}>
          <form className={styles.loginForm}>
            <label>
              Email <input type='email' onChange={(e) => this.onChangeEmail(e.target.value)} />
            </label>
            <label>
              Password
              <input type='password' onChange={(e) => this.onChangePassword(e.target.value)} />
            </label>

            <button type='button'
                    className={styles.loginSubmit}
                    onClick={() => this.onSubmitLogin()}>Login</button>

            <Link href='/signup'>
              <a className={styles.registerLink}>Create New Account</a>
            </Link>
          </form>
        </div>
      </>
    );
  }
}

export default withSanctum(withRouter(Login));