import React from 'react'
import { IButton } from "./ButtonTypes";
const Button = (props: IButton) => {
  const { buttonText,buttonStyles,onClick} = props;

  return (
    <button className={buttonStyles} onClick={onClick}>{buttonText}</button>
  )
}

export default Button;