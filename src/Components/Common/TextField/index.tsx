import React from 'react';
import { FieldProps } from 'formik';
import TextField from '@material-ui/core/TextField';

interface Props extends FieldProps {
  placeholder: string;
  label: string;
  type: string;
}

export const MyTextField: React.FC<Props> = ({
  label,
  placeholder,
  field,
  type,
}) => {
  return (
    <TextField
      fullWidth
      variant="outlined"
      label={label}
      type={type}
      placeholder={placeholder}
      {...field}
    />
  );
};
