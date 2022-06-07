import { useEffect, useState } from 'react';
import DataCard from '../../../DataCard/DataCard';
import styles from './AirQuality.module.css';
import axios from 'axios';

const AirQuality = () => {
	const [covidData, setCovidData] = useState(null);

	useEffect(() => {
		const getAirData = async () => {
			try {
				const data = await axios.get('https://api.covid19api.com/summary', {
					responseType: 'json',
				});

				setCovidData(data.data.Countries);
			} catch (error) {
				console.error(error.message);
			}
		};

		getAirData();
	}, []);

	const output =
		covidData &&
		covidData.map((country) => {
			return (
				<li key={country.CountryCode}>
					<p>{country.Country}</p>
					<p>{country.TotalConfirmed}</p>
					<p>{country.TotalDeaths}</p>
				</li>
			);
		});

	return (
		<DataCard dataSource='https://covid19api.com/'>
			<ul>{output && output}</ul>
		</DataCard>
	);
};

export default AirQuality;
