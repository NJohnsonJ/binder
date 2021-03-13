import React, { useState, useRef, ChangeEvent } from 'react';
import { Auth } from 'aws-amplify';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

interface SignInProps {
  onForgot: () => void;
  onSuccess: () => void;
}

const SignIn: React.FC<SignInProps> = ({ onForgot, onSuccess }) => {

  const [loading, setLoading] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      setLoading(true);
      await Auth.signIn(email, password);
      onSuccess();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }
 
  console.log(formRef.current?.checkValidity())

  return (
    <form onSubmit={handleSubmit} ref={formRef}>
      <Typography variant="h4" align="center">
        Welcome Back
       </Typography>
      <TextField
        label="Email"
        variant="filled"
        value={email}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
        required
      />
      <TextField
        label="Password"
        variant="filled"
        value={password}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
        type="password"
        required
      />

      <Button onClick={onForgot}>
        Forgot password?
      </Button>

      <Button type="submit" variant="filled" color="primary" disabled={!formRef.current?.checkValidity()}>
        {loading ? (
          <CircularProgress />
        ) : 'Login'}
      </Button>

    </form>
  )
}

export default SignIn;
