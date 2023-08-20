import React from 'react'

type Props = {
  title: string
}

const ButtonWrapper: React.FunctionComponent<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > & { title: string }
> = ({ title, ...props }: Props) => {
  return <button {...props}>{title}</button>
}

export default ButtonWrapper
