import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Auth } from 'aws-amplify';

const ForgotPassword = () => {

  const [username, setUsername] = useState<string>('');
  const [verificationCode, setVerificationCode] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      await Auth.forgotPassword(username)
    } catch (error) {

    } finally {

    }
  }

  async function verifyCode() {
    try {
      await Auth.forgotPasswordSubmit(username, verificationCode, password);
    } catch (error) {

    }
  }

  function isReadyToSubmit() {
    return password === confirmPassword && verificationCode && username;
  }

  const SendEmailForm = () => (
      <form onSubmit={handleSubmit}>
        <Typography variant='h6'>
          We all forget sometimes.
        </Typography>
        <TextField 
          label='Email Address'
          value={username}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
        />
      </form>
  )

  const ConfirmationCodeForm = () => (
    <form>
      <Typography>
        You should receive an email containing a confirmation code in a few minutes.
      </Typography>
        <TextField
          label='Verification Code'
          value={verificationCode}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setVerificationCode(e.target.value)}
        />
        <Button
          type='submit'
        >
          Submit
        </Button>
    </form>
  )

  return (
    <div>
        <TextField
          label='Password'
          type='password'
          value={password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
          required
        />
        <TextField
          label='Confirm Password'
          type='password'
          value={confirmPassword}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setConfirmPassword(e.target.value)}
          required
        />
        <Button type='submit' variant='filled'>Submit</Button>
    </div>
  )
}

export default ForgotPassword;
