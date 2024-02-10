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
    ></input>
  );
}