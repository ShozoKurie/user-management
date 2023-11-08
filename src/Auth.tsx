import React, { Fragment, useState } from 'react';
import { auth } from './firebase';
import {
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import { useHistory } from 'react-router-dom';
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
} from '@mui/material';

export interface AuthProps {
  isOpen: boolean;
  onClose: () => void;
  signUpDate: Date;
}

const Auth: React.FC<AuthProps> = ({ isOpen, onClose, signUpDate }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [formState, setFormState] = useState<AuthProps | null>(null)
  const history = useHistory();

  const Register = (event: React.FormEvent) => {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log(userCredential);
      history.push('/post'); // 登録成功後のリダイレクトページ
    })
    .catch((error) => {
      alert(error.message);
      console.error(error);
    });
  };

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.currentTarget.value);
  };
  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value);
  };
  const handleChangeSignUpDate = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormState(event.currentTarget.value);

  
  return (
    <Fragment>
      <Container>
        <Grid container>
          <Grid item md={4}></Grid>
          <Grid item md={4}>
            <Grid item md={4}>
              ログイン
            </Grid>
            <Box component="form">
              <TextField
                style={{ marginTop: '0.5em', marginBottom: '0.5em' }}
                name="email"
                label="E-mail"
                fullWidth
                variant="outlined"
                value={email}
                onChange={handleChangeEmail}
              />
              <TextField
                style={{ marginTop: '0.5em', marginBottom: '0.5em' }}
                name="password"
                label="Password"
                fullWidth
                variant="outlined"
                type="password"
                value={password}
                onChange={handleChangePassword}
              />
              <TextField
                style={{ marginTop: '0.5em', marginBottom: '0.5em' }}
                name="signUpDate"
                label="signUpDate"
                fullWidth
                variant="outlined"
                type="date"
                value={password}
                onChange={handleChangePassword}
              />
              <Button
                fullWidth
                style={{ marginTop: '0.5em', marginBottom: '0.5em' }}
                onClick={Register}
              >
                新規登録
              </Button>
            </Box>
          </Grid>
          <Grid item md={4}></Grid>
        </Grid>
      </Container>
    </Fragment>
  );
};

export default Auth;