import React from 'react';

export function NavBar({ isDark }) {
  return (
    <>
    <div 
      className={`flex pt-3 pb-2 mx-10 justify-center text-lg border-b-2 ${isDark ? 'text-white border-white' : 'text-[#182E2E]'}`}
    >
      <h1 className='tracking-wide pr-[45%]'>
        WOODSWORTH
      </h1>
      <div className='flex justify-end gap-10'>
        <a href={'/'}><h1 className='hover:cursor-pointer'>home</h1></a>
        <a href={'/tickets'}><h1 className='hover:cursor-pointer'>tickets</h1></a>
        <a href={'/schedule'}><h1 className='hover:cursor-pointer'>schedule</h1></a>
        <a href={'/team'}><h1 className='hover:cursor-pointer'>team</h1></a>
        <a href={'/sponsors'}><h1 className='hover:cursor-pointer'>sponsors</h1></a>
        <a href={'/faq'}><h1 className='hover:cursor-pointer'>FAQ</h1></a>
      </div>
    </div>
    </>
  );
}
