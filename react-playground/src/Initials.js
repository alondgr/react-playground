export default function Initials(props) {

    const splitInitials = props.name.split(' ');
    const Initials = splitInitials[0][0] + '.' + splitInitials[1][0];

    return <div>{Initials}</div>;
}
