import { TextareaElement } from 'components/textarea/Textarea.styled';
import { TextareaProps } from 'components/textarea/Textarea.types';
import React from 'react';

export function Textarea({ ...props }: TextareaProps) {
  return <TextareaElement {...props} />
}