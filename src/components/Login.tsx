import React, { useState, ChangeEvent } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import CloseIcon from '@material-ui/icons/Close'
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) => 
  createStyles({
    card: {
      margin: 'auto',
      top: '10%',
      left: '30%',
      width: '20%',
    }
  })
);

interface Props {
  onClose: () => void;
}

const Login: React.FC<Props> = ({ onClose }) => {

  const classes = useStyles();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <Card className={classes.card}>
      <IconButton onClick={onClose}>
        <CloseIcon />
      </IconButton>
      <form>
        <Grid container justify="left" direction="column">
          <Typography variant="h4" align="center">
            Login
          </Typography>
          <TextField
            label="Email"
            value={email}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
          />
          <TextField
            label="Password"
            value={password}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
          />

          <Link to="/i-forgot">Forgot password?</Link>
        </Grid>
      </form>
    </Card>
  )
}

export default Login;
