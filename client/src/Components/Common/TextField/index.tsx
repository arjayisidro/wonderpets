import React from 'react';
import { FieldProps } from 'formik';
import TextField from '@material-ui/core/TextField';
import { Typography } from '@material-ui/core';

interface Props extends FieldProps {
  placeholder: string;
  label: string;
  type: string;
  error: boolean;
}

export const MyTextField: React.FC<Props> = ({
  label,
  placeholder,
  field,
  type,
  error,
}) => {
  return (
    <React.Fragment>
      <TextField
        fullWidth
        variant="outlined"
        label={label}
        type={type}
        placeholder={placeholder}
        error={error}
        {...field}
      />
      {error && (
        <Typography color="secondary" variant="body1">
          {error}
        </Typography>
      )}
    </React.Fragment>
  );
};
