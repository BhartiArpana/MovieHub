import React from 'react'

const Input = ({type,value,onChange,placeholder,autoComplete}) => {
  return (
    <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            autoComplete={autoComplete}
          />
  )
}

export default Input