import { Dispatch, SetStateAction } from 'react';

interface ControlledInputProps {
  value: string, 
  setValue: Dispatch<SetStateAction<string>>,
  ariaLabel: string,
  labelText:string
}
  
export function ControlledInput({value, setValue, ariaLabel, labelText}: ControlledInputProps) {
  return (
    <input type="text"
    id='email-input'
        value={value} 
        placeholder={labelText}
        onChange={(ev) => setValue(ev.target.value)}
        aria-label={ariaLabel}
        style={{width:"25vw", alignContent:"center", alignItems:"center"}}
    ></input>
  );
}