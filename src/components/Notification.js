import React from 'react';
import { Alert } from '@mui/material';

const Notification = ({ message, type }) => {
  if (message === '') {
    return null;
  }
  return (
    <Alert variant='filled' severity={type}>
      {message}
    </Alert>
  );
};

export default Notification;
