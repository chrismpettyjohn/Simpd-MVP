import React, { SyntheticEvent, useState } from 'react';
import { CreateUserFormProps } from './CreateUserForm.types';
import { UserCreateInput } from 'graphql';

export function CreateUserForm({ loading, onSave }: CreateUserFormProps) {
  const [userDTO, setUserDTO] = useState<UserCreateInput>({
    email,
    password: '',
  })

  const onSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    if (loading) {
      return;
    }
    if ()
  }

  return (
    <form style={{ width: '100%', overflow: 'hidden' }} onSubmit={onSubmit}>
      <label className="landing-page-text1">Email</label>
      <input
        type="email"
        placeholder="Email Address"
        className="landing-page-textinput input"
      />
      <br />
      <br />
      <label className="landing-page-text2">Password</label>
      <input
        type="password"
        placeholder="Password"
        className="landing-page-textinput1 input"
      />
      <br />
      <br />
      <label className="landing-page-text2">Password Again</label>
      <input
        type="password"
        placeholder="Password Again"
        className="landing-page-textinput1 input"
      />
      <div className="landing-page-container4">
        <Link to="/sign-in">
          <button className="landing-page-button button">
            Sign in
          </button>
        </Link>
        <button disabled className="landing-page-button1 button">
          Create account
        </button>
      </div>
    </form>
  )
}