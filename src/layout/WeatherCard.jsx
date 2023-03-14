import '../assets/scss/layout/WeatherCard.scss';
import { useSelector } from 'react-redux';
import Loader from '../components/Loader';
function WeatherCard() {
	const weekDays = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

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
		<section className='w-[35rem] m-4'>
			<div className='rounded-md p-4' id='weatherapi-weather-widget'>
				<h2 className='text-white text-center'>
					{weatherData?.location?.name}
				</h2>
				<div className='flex items-center justify-center'>
					<div className='weather_icon w-3/6'>
						<div className='flex items-center weather_icon_condition'>
							<div className='w[5rem] h-[5rem]'>
								<img
									className='w-full h-full'
									src={weatherData?.current?.condition?.icon}
									alt='weather-icon'
								/>
							</div>
							<p className='text-white text-2xl'>
								{weatherData?.current?.condition?.text}
							</p>
						</div>
					</div>
					<div className='weather_temperature w-2/6'>
						<p className='text-white text-md mb-1'>
							Wind: {weatherData?.current?.wind_mph} mph
						</p>
						<p className='text-white text-md mb-1'>
							Precip: {weatherData?.current?.precip_in} in
						</p>
						<p className='text-white text-md mb-3'>
							Pressure: {weatherData?.current?.pressure_in} in
						</p>
						<p className='text-white text-5xl'>
							{weatherData?.current?.temp_f} °f
						</p>
					</div>
				</div>
				<div className='future_temperature flex my-10 justify-center'>
					{weatherData?.forecast?.forecastday?.map((day, index) => (
						<div className='mx-5 text-xs' key={index}>
							<p className='text-white text-center'>
								{weekDays[new Date(day.date).getDay()]}
							</p>
							<img src={day.day.condition.icon} alt='condition_icon' />
							<p className='text-white text-sm my-4 text-center'>
								{day.day.avgtemp_f} °f
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default WeatherCard;
