import { Link } from 'wouter';
import { UserCreateInput } from '@simpd/lib-web';
import React, { SyntheticEvent, useState } from 'react';
import { CreateUserFormProps } from './CreateUserForm.types';

export function CreateUserForm({ loading, onSave }: CreateUserFormProps) {
  const [userDTO, setUserDTO] = useState<UserCreateInput>({
    email: '',
    password: '',
  })

  const onChanges = (changes: Partial<UserCreateInput>) => {
    setUserDTO(_ => ({
      ..._,
      ...changes,
    }))
  }

  const onSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    if (loading) {
      return;
    }
    if (!userDTO.email || !userDTO.password) {
      return;
    }

    onSave(userDTO);
  }

  return (
    <form style={{ width: '100%', overflow: 'hidden' }} onSubmit={onSubmit}>
      <label className="landing-page-text1">Email</label>
      <input
        type="email"
        placeholder="Email Address"
        className="landing-page-textinput input"
        value={userDTO.email}
        onChange={e => onChanges({ email: e.target.value ?? '' })}
      />
      <br />
      <br />
      <label className="landing-page-text2">Password</label>
      <input
        type="password"
        placeholder="Password"
        className="landing-page-textinput1 input"
        value={userDTO.password}
        onChange={e => onChanges({ password: e.target.value ?? '' })}
      />
      <br />
      <br />
      <div className="landing-page-container4">
        <Link to="/sign-in">
          <button className="landing-page-button button" type="button">
            Sign in
          </button>
        </Link>
        <button disabled={loading} className="landing-page-button1 button" type="submit">
          Create account
        </button>
      </div>
    </form>
  )
}