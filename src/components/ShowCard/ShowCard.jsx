const ShowCard = ({ showData }) => {
    const { name, date_begin, date_end } = showData;
    const cleanDate = (date) => date.split(' ')[1].slice(0, -3);
    return <div className="show-card">
        <h2>{name}</h2>
        <p>{cleanDate(date_begin)} - {cleanDate(date_end)}</p>
    </div>
}
export default ShowCard