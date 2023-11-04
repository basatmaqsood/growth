import React from 'react'
import Button from './Button';

export default function Newsletter() {
  return (
    <div className='w-full py-16 text-white'>
        <div className="mx-auto max-w-[1240px] grid md:grid-cols-2">
          <div className='px-3 my-auto'>
            <h1 className='text-xl sm:text-2xl md:text-3xl font-bold py-2'>Want tips and tricks to Optimize your Flow?</h1>
            <p>Sign up to our Newsletter and stay up-to-date</p>
          </div>
          <div className='my-4 px-3'>
            <div className='flex gap-2 flex-col'>
              <input className='p-3  w-full max-w-[480px] rounded-md text-black outline-0' type="email" placeholder='Enter your Email'/>
              <Button styles={'bg-green text-black hover:bg-green-dark'} value={'Notify Me'}/>
            </div>
            <p className='pt-2'>We care about the protection of your data. Read our <a href="#" className='text-green underline'>Privacy Policy.</a></p>
          </div>
        </div>
    </div>
  )
}
