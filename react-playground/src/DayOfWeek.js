export default function DayOfWeek(props) {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    return <div>{days[props.day]}</div>
}