import StarFC from "./StarFC";

const StarsFC = ({count = 0}) => {
    let stars = [];
    if (count > 0 && count <= 5) {
        for (let i = 1; i <= count; i++) {
            stars.push(<StarFC/>);
        }
    }

    return (
        <ul className="card-body-stars u-clearfix">
            {stars}
        </ul>
    )
}

export default StarsFC;
