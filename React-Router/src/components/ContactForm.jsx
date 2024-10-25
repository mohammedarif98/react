import React from 'react'


const ContactForm = () => {
  return (
    <div >
        <form className='flex gap-1'>
          <input className=' bg-slate-100 p-2' type="text" placeholder='Enter the Name' />
          <br />
          <input className=' bg-slate-100 p-2' type="email" placeholder='Enter the Email' />
          <br />
          <input className=' bg-slate-100 p-2' type="text" placeholder='Message' />
          <br />
          <button type='submit' className='px-1 min-w-32 bg-black text-slate-50'>submit</button>
        </form>
    </div>
  )
}

export default ContactForm