import React from 'react';
import BaseSelect from 'react-select';
import { SelectProps } from './Select.types'

export function Select({ ...props }: SelectProps) {
  return (
    <BaseSelect
      {...props}
      styles={{
        control: (baseStyles, state) => ({
          ...baseStyles,
          borderColor: state.isFocused ? 'grey' : 'red',
        }),
      }}
    />
  )
}