import "./Card.css";

const Card = (props) => {
    const classesList = "card " + props.className;
    return (
        <div className = {classesList} >{props.children}</div>
    )
};

export default Card;