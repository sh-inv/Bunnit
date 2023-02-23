import {Text} from 'react-native';
import styled from 'styled-components';

const Calendar = () => {
  return (
    <CalenderContainer>
      <Text>Calendar</Text>
    </CalenderContainer>
  );
};

const CalenderContainer = styled.View`
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export default Calendar;
