import {useState} from 'react';
import {Text, View} from 'react-native';
import styled from 'styled-components/native';

const weekTitle = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const Calendar = () => {
  // const [week, setWeek] = useState();
  const dateData = {
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    date: new Date().getDate(),
  };

  const [selectedYear, setSelectedYear] = useState(dateData.year); //현재 선택된 연도
  const [selectedMonth, setSelectedMonth] = useState(dateData.month); //현재 선택된 달
  const dateTotalCount = new Date(selectedYear, selectedMonth, 0).getDate();

  console.log(dateTotalCount);

  return (
    <Container>
      <Text>Calendar</Text>
      <Week>
        {weekTitle.map((el, index) => {
          return (
            <Text
              key={el}
              style={[
                index === 0 && {color: 'red'},
                index === weekTitle.length - 1 && {color: 'blue'},
              ]}>
              {el}
            </Text>
          );
        })}
      </Week>
    </Container>
  );
};

const Container = styled.View`
  align-items: center;
  height: 100%;
  margin-top: 20px;
`;

const Week = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
`;

export default Calendar;
