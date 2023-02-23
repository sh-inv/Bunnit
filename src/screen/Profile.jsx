import {Text} from 'react-native';
import styled from 'styled-components';

const Profile = () => {
  return (
    <ProfileContainer>
      <Text>Profile</Text>
    </ProfileContainer>
  );
};

const ProfileContainer = styled.View`
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export default Profile;
