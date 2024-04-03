import React, { useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { useApp } from '../../hooks/AppContext';

import Button from '../../components/Button';

import { Container, Title } from './styles';

const Home: React.FC<RouteComponentProps> = ({ history }) => {
  const { isLoading, getYourMaster, location } = useApp();

  useEffect(() => {
    if (location !== '/') {
      history.push(location);
    }
  }, [location, history]);

  return (
    <Container>
      <div>
        <Title>
          Welcome to <strong>AgroDirecta AI</strong>
        </Title>

        <h5>Designed with love by Script Debuggers</h5>
      </div>

      <Button onClick={() => getYourMaster()} loading={isLoading} type="button">
        Start
      </Button>
    </Container>
  );
};

export default Home;
