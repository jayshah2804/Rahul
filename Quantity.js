import { Fragment, useState } from "react"
import classes from "./Quantity.module.css"

const Quantity = (props) =>{
    
    const [inputValue, setInputValue] = useState(0);

    const valueOfButton = (e)=>{
        if(e.target.id == `plus`)
        {
            setInputValue(prevValue => prevValue + 1)
            props.totalCount(inputValue+1, props.price, props.id);
        }
        else
        {
            if(inputValue == 0 || inputValue < 0)
            {
                setInputValue(0);    
            }
            else{
                setInputValue(prevValue => prevValue - 1)
                props.totalCount(inputValue-1, props.price, props.id);
            }
        }
        console.log(inputValue);
        
    }

    return (
    <Fragment>
        <div style={{marginTop: '10px'}}>
        <button onClick={valueOfButton} id="plus">+</button>
        <input type='number' value={inputValue} min='0'/>
        <button onClick={valueOfButton} id="minus">-</button>
        </div>
    </Fragment>
    )
}
export default Quantity
