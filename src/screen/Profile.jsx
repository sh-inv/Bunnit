import {Text} from 'react-native';
import styled from 'styled-components/native';

const Profile = () => {
  return (
    <Container>
      <Text>Profile</Text>
    </Container>
  );
};

const Container = styled.View`
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export default Profile;
