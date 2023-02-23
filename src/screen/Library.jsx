import {Text} from 'react-native';
import styled from 'styled-components';

const Library = () => {
  return (
    <LibraryContainer>
      <Text>Library</Text>
    </LibraryContainer>
  );
};

const LibraryContainer = styled.View`
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export default Library;
