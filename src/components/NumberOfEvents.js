import { useState } from "react";
import PropTypes from 'prop-types'

const NumberOfEvents = ({setCurrentNOE, setErrorAlert }) => {
    const [number, setNumber] = useState(32);
    
    const handleInputChanged = (event) => {
        const value = event.target.value;
        setNumber(value)
    let errorText;
    if(value === isNaN || value.length <= 0) { 
      errorText = <div>
      <p>'Please enter a valid number'</p>
    </div>;
    } else {
      errorText = ''
    }
    setCurrentNOE(value)
    setErrorAlert(errorText) 
    };

    return (
        <div id="number-of-events">
            <label>
                Number of Events:
            <input 
                type="text"
                value={number}
                onChange={handleInputChanged}
                data-testid="numberOfEventsInput"
            />
            </label>
        </div>
    )
};

export default NumberOfEvents;
NumberOfEvents.propTypes = {
  setCurrentNOE: PropTypes.func.isRequired,
  setErrorAlert: PropTypes.func.isRequired
}