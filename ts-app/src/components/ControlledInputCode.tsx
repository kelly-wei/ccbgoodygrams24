import { Dispatch, SetStateAction } from 'react';

interface ControlledInputProps {
  value: string, 
  setValue: Dispatch<SetStateAction<string>>,
  ariaLabel: string,
  labelText:string
}
  
export function ControlledInputCode({value, setValue, ariaLabel, labelText}: ControlledInputProps) {
  return (
    <input type="text"
    id='code-input'
        value={value} 
        placeholder={labelText}
        onChange={(ev) => setValue(ev.target.value)}
        aria-label={ariaLabel}
        style={{width:"5vw"}}
    ></input>
  );
}