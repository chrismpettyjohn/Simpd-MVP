import { Select } from '../select/Select';
import { UserSelectProps } from './UserSelect.types';
import React from 'react';

export function UserSelect({ userID, isClearable, onChange }: UserSelectProps) {
  return (
    <Select options={[]} />
  )
}