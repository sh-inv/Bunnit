import {Text} from 'react-native';
import styled from 'styled-components';

const Home = () => {
  return (
    <HomeContainer>
      <Text>Home</Text>
    </HomeContainer>
  );
};

const HomeContainer = styled.View`
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export default Home;
