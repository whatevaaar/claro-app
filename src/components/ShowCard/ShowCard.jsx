const ShowCard = ({ showData }) => {
    const { name } = showData;
    return <div className="show-card">
        {name}
    </div>
}
export default ShowCard