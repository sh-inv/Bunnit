import React, {useState} from 'react';
import {Dimensions} from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  padding: 20px;
`;

const CalendarGrid = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const CalendarDay = styled.TouchableOpacity`
  width: ${props => props.cellSize}px;
  height: ${props => props.cellSize}px;
  align-items: center;
  justify-content: center;
  border-radius: ${props => props.cellSize / 2}px;
  margin-bottom: 15px;
  background-color: ${props => (props.isSelected ? '#FF0000' : '#FFFFFF')};
`;

const CalendarDayText = styled.Text`
  color: ${props => (props.isSelected ? '#FFFFFF' : '#000000')};
  font-size: 16px;
`;

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  // 현재 연도와 월을 구합니다.
  const year = new Date().getFullYear();
  const month = new Date().getMonth();

  // 현재 월의 첫 날짜와 마지막 날짜를 구합니다.
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const lastDayOfMonth = new Date(year, month + 1, 0).getDate();

  // 셀의 크기를 계산합니다.
  const cellSize = (Dimensions.get('window').width - 40 - 6 * 10) / 7;

  // 첫 번째 날짜가 속한 주의 일요일을 구합니다.
  const firstSundayOfMonth = new Date(year, month, 1 - firstDayOfMonth);

  // 달력의 모든 날짜를 포함하는 배열을 생성합니다.
  const calendarDates = [];
  for (let i = 0; i < 42; i++) {
    const date = new Date(
      firstSundayOfMonth.getFullYear(),
      firstSundayOfMonth.getMonth(),
      firstSundayOfMonth.getDate() + i,
    );
    calendarDates.push(date);
  }

  // 캘린더의 날짜를 클릭할 때 실행되는 함수입니다.
  const handleCalendarDayPress = date => {
    setSelectedDate(date);
  };

  return (
    <Container>
      <CalendarGrid>
        {calendarDates.map(date => (
          <CalendarDay
            key={date.toISOString()}
            cellSize={cellSize}
            isSelected={
              selectedDate && date.toISOString() === selectedDate.toISOString()
            }
            onPress={() => handleCalendarDayPress(date)}>
            <CalendarDayText
              isSelected={
                selectedDate &&
                date.toISOString() === selectedDate.toISOString()
              }>
              {date.getDate()}
            </CalendarDayText>
          </CalendarDay>
        ))}
      </CalendarGrid>
    </Container>
  );
};

export default Calendar;
