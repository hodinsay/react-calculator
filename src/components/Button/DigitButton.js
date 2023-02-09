import ACTIONS from "../Actions/Actions";

const DigitButton = ({ dispatch, digit}) => {
    return <button onClick={() => dispatch( {type: ACTIONS.ADD_DIGIT, payload: { digit} } )}>{digit}</button>
}

export default DigitButton;