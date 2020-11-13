/** @format */

import React from 'react';
import styles from '../css/auth.module.scss';
import PageLoading from '../components/PageLoading';
import { DebounceInput } from 'react-debounce-input';
import { withRouter } from 'next/router';
import { withSanctum } from 'react-sanctum';
import axios from '../app/axios';

class SignUp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      email: "",
      name: "",
      password: "",
      confirmPassword: "",
      errors: {
        emailTaken: false,
        nameTaken: false,
        passwordMismatch: false,
      },
      errorMessage: "",
    };
  }

  setLoading(value) {
    this.setState(() => ({ loading: value }));
  }

  onChangeEmail(e) {
    const val = e.target.value;
    this.setState(() => ({ email: val }));
  }
  onChangeName(e) {
    const val = e.target.value;
    this.setState(() => ({ name: val }));
  }
  onChangePassword(e) {
    const val = e.target.value;
    this.setState(() => ({ password: val }));
  }
  onChangeConfirmPassword(e) {
    const val = e.target.value;
    this.setState(() => ({ confirmPassword: val }));
  }

  onSubmitSignUp(e) {
    e.preventDefault();

    const { router } = this.props;
    const { email, name, password, confirmPassword } = this.state;

    if (password != confirmPassword) {
      this.setState(s => ({
        errors: {
          ...s.errors,
          passwordMismatch: true
        }
      }));
      return;
    }

    this.setLoading(true);
    const requestBody = {
      name: name,
      email: email,
      password: password,
      password_confirmation: confirmPassword,
    };
    axios.post('/register', requestBody)
      .then(() => router.push('/'))
      .catch(err => {
        const errRes = err.response.data;

        if (errRes.errors.name) {
          this.setState(() => ({ errorMessage: errRes.errors.name[0] }));
        } else if (errRes.errors.email) {
          this.setState(() => ({ errorMessage: errRes.errors.email[0] }));
        } else if (errRes.errors.password) {
          this.setState(() => ({ errorMessage: errRes.errors.password[0] }));
        } else if (errRes.message) {
          this.setState(() => ({ errorMessage: errRes.message }));
        } else {
          this.setState(() => ({ errorMessage: 'Could not complete the sign up' }));
        }
      })
      .finally(() => {
        this.setLoading(false);
      });
  }

  componentDidMount() {
    const { authenticated, router } = this.props;

    if (!authenticated) router.push('/');
  }

  render() {
    const { loading, errors, errorMessage } = this.state;
    const debounceTimeout = 400;

    return (
      <>
        {loading && <PageLoading message='TripTime is creating an account for you :)' />}

        <div className={styles.regFormContainer}>
          {errorMessage ? (
            <div className='failed'>
              <p>Sorry, we failed to create an account for you because:</p>
              <p>{errorMessage}</p>
              <p>Please try again:</p>
            </div>
          ) : (
            <h1 className='form-title'>
              <img src='/img/logo.svg' alt='' />
              Hey, nice to have you joining us :)
            </h1>
          )}

          <form className={styles.regForm}>
            <label>
              Enter your Email Address:
              <DebounceInput
                type='email'
                name='email'
                required={true}
                debounceTimeout={debounceTimeout}
                onChange={e => this.onChangeEmail(e)}
              />
            </label>

            {errors.emailTaken && (
              <div className={styles.invalidAlert}>
                Sorry, this email address has been occupied. Try another one?`
              </div>
            )}

            <label>
              Enter your Nickname:
              <DebounceInput
                type='name'
                required={true}
                minLength={3}
                maxLength={14}
                name='nickname'
                debounceTimeout={debounceTimeout}
                onChange={e => this.onChangeName(e)}
              />
            </label>

            {errors.nameTaken && (
              <div className={styles.invalidAlert}>Sorry, this nickname has been occupied. Try another one?</div>
            )}

            <label>
              Create your Password:
              <input
                type='password'
                required={true}
                minLength={6}
                maxLength={20}
                name='password'
                onChange={e => this.onChangePassword(e)}
              />
            </label>
            <label>
              Confirm your Password:
              <input
                type='password'
                required={true}
                minLength={6}
                maxLength={20}
                name='confirm-password'
                onChange={e => this.onChangeConfirmPassword(e)}
              />
            </label>

            {errors.passwordMismatch && (
              <div className={styles.invalidAlert}>Sorry, the two passwords you entered do not match!</div>
            )}

            <input
              value='Register'
              type='submit'
              disabled={!Object.values(errors).every(k => k === false)}
              className={styles.regSubmit}
              onClick={e => this.onSubmitSignUp(e)}
            />
          </form>
        </div>
      </>
    );
  }
}

export default withRouter(withSanctum(SignUp));