import React, { useEffect, useState } from 'react';
import { Calendar } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './../assets/scss/components/calendar.scss';

const CalendarCard = () => {
	const [date, setDate] = useState(new Date());
	const [month, setMonth] = useState('');

	useEffect(() => {
		setMonth(date.toLocaleString('default', { month: 'long' }));
	}, [date]);

	return (
		<div className='calendarCard'>
			<h5 className='text-center'>{month}</h5>
			<Calendar
				className='bg-slate-400'
				onChange={setDate}
				value={date}
				showNavigation={false}
				showNeighboringMonth={false}
			/>
		</div>
	);
};

export default CalendarCard;
