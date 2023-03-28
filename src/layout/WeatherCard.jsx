import { useSelector } from 'react-redux';
import Loader from '../components/Loader';
import bgImg from '../assets/images/background/bg-wethear.webp';
function WeatherCard() {
	const weekDays = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
	const months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	];
	const days = [
		'Sunday',
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday',
	];
	const { weatherData, loading, error } = useSelector(
		(store) => store.weatherReducer
	);
	if (loading) {
		return <Loader />;
	}
	if (error) {
		return error;
	}
	return (
		<section className='m-4'>
			<div
				className='rounded-md p-4 bg-no-repeat'
				style={{
					backgroundImage: `url(${bgImg})`,
					backgroundSize: '100% 100%',
				}}
			>
				<div className='flex items-center justify-center'>
					<div className='weather_icon'>
						<div className='grid grid-cols-2 weather_icon_condition items-center'>
							<p className='text-white text-5xl'>
								{Math.floor(weatherData?.current?.temp_f)}°
								{/* {weatherData?.current?.condition?.text} */}
							</p>
							<div className='w[5rem] h-[5rem]'>
								<img
									className='w-full h-full'
									src={weatherData?.current?.condition?.icon}
									alt='weather-icon'
								/>
							</div>
						</div>
					</div>
				</div>
				<div className='weather_temperature_condition flex justify-center'>
					<p className='text-white text-md mb-1 text-xl'>
						{weatherData?.current?.condition.text}
					</p>
				</div>

				<div className='future_temperature grid grid-cols-7 gap-1 mt-10 mb-3 justify-center'>
					{weatherData?.forecast?.forecastday?.map((day, index) => (
						<div className='text-xs col-span-1' key={index}>
							<p className='text-white text-center font-bold'>
								{weekDays[new Date(day.date).getDay()]}
							</p>
							<img src={day.day.condition.icon} alt='condition_icon' />
							<p className='text-white text-xs my-4 text-center font-bold'>
								{Math.floor(day.day.avgtemp_f)}°
							</p>
						</div>
					))}
				</div>
				<div className='flex-col justify-center text-center'>
					<p className='text-white text-md mb-1 text-lg'>
						{
							days[
								new Date(weatherData?.forecast?.forecastday[0].date).getDay()
							]
						}
						,
						{`

							${months[new Date(weatherData?.forecast?.forecastday[0].date).getMonth()]}
						`}
						{new Date(weatherData?.forecast?.forecastday[0].date).getDate()}th
					</p>
					<p className='text-white text-center text-xs'>
						{weatherData?.location?.name} , {weatherData?.location?.country}
					</p>
				</div>
			</div>
		</section>
	);
}

export default WeatherCard;
