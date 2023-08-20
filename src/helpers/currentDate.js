import moment from 'moment';
import localization from 'moment/locale/uk'

const currentDate = () => {
	const date = moment().locale("uk", localization).utcOffset('+03:00')
	.format('D MMMM YYYY | hh:mm');
	return date;
}

export default currentDate;