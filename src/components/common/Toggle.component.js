import { useState} from 'react';
import classes from './Toggle.module.css';


const Toggle = props => {

    const [isToggleOn, setToggleOn] = useState(props.initVal);

    function handleClick() {
        setToggleOn(!isToggleOn);
        if (isToggleOn){
            props.onUncheck();
        }else{
            props.onCheck();
        }
    }

    return (
        <a onClick={handleClick}  className={ isToggleOn ? classes.checked : classes.unchecked } >
            {/* {isToggleOn ? 'WŁĄCZONY' : 'WYŁĄCZONY'} */}
            <img src={props.imgScr} alt={isToggleOn ? 'WŁĄCZONY' : 'WYŁĄCZONY'}/>
        </a>
      );
};

export default Toggle;