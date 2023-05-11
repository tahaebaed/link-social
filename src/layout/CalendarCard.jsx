import dayjs from 'dayjs';
import React from 'react';
import { Calendar } from 'react-calendar';

import 'react-calendar/dist/Calendar.css';
import './../assets/scss/components/calendar.scss';

function CalendarCard() {
	const today = new Date();

	return (
		<div className='calendarCard'>
			<h5 className='text-center'>{dayjs(today).format('MMMM')}</h5>
			<Calendar
				showNavigation={false}
				showNeighboringMonth={false}
				value={today}
			/>
		</div>
	);
}

export default CalendarCard;
