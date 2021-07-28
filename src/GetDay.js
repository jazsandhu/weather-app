import moment from 'moment';

function GetDay(date) {
    const d = moment(date.date).format('dddd');   ;
    return d;
}

export default GetDay
