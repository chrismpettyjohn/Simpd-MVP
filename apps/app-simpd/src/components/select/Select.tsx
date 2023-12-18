import React from 'react';
import BaseSelect from 'react-select';
import { SelectProps } from './Select.types'
import { BASE_SELECT_STYLES } from './Select.const';

export function Select({ ...props }: SelectProps) {
  return (
    <BaseSelect
      {...props}
      styles={BASE_SELECT_STYLES}
    />
  )
}