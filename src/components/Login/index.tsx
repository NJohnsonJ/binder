import React, { useState } from 'react';
import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import SignIn from './SignIn';
import ForgotPassword from './ForgotPassword';

const FloatingCard = styled(Card)`
  position: absolute;
  margin: auto;
  top: 10%;
  left: 40%;
  width: 20%;
  padding: 2em;

  .button {
    position: fixed;
    margin: auto;
    right: 25%;
  }
`;

interface Props {
  onClose: () => void;
}

enum LoginAction {
  LOGIN, FORGOT_PASSWORD
}

const Login: React.FC<Props> = ({ onClose }) => {

  const [action, setAction] = useState<LoginAction>(LoginAction.LOGIN);

  return (
    <FloatingCard>
      <IconButton onClick={onClose}>
        <CloseIcon />
      </IconButton>

      {action === LoginAction.LOGIN ? (
        <SignIn onSuccess={onClose} onForgot={() => setAction(LoginAction.FORGOT_PASSWORD)} />
      ) : null}

      {action === LoginAction.FORGOT_PASSWORD? (
        <ForgotPassword />
      ) : null}

    </FloatingCard>
  )
}

export default Login;
