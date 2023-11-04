import React from 'react'

export default function Button({value,styles}) {
  return (
    <button className={`w-fit rounded-md p-3 font-bold ${styles}`} >{value}</button>
  )
}
