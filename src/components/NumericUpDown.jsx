import "../styles/Input.css"; 

export default function NumericUpDown({ 
    value = 0, 
    onChange,
    min = 0, 
    max, step = 1 
}) 
{ 
    return ( 
        <input 
            className="numeric-up-down" 
            type="number" 
            value={value} 
            onChange={onChange} 
            onKeyDown={(event) => {
                if (event.key === "." || event.key === ",") {
                    event.preventDefault();
                }
            }}
            min={min} 
            max={max} 
            step={step} 
        /> 
    ); 
}