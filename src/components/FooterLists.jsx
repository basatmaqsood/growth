import React from 'react'

export default function FooterLists({heading,items}) {
  return (
    <div className='mb-3'>
    <h6 className="font-medium text-xl text-green ">{heading}</h6>
    <ul className="flex flex-col gap-2 mt-3">
        <li>{items[0]}</li>
        <li>{items[1]}</li>
        <li>{items[2]}</li>
        <li>{items[3]}</li>
    </ul>
</div>
  )
}
