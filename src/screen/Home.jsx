import {Text} from 'react-native';
import styled from 'styled-components/native';

const Home = () => {
  return (
    <Container>
      <Text>Home</Text>
    </Container>
  );
};

const Container = styled.View`
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export default Home;
