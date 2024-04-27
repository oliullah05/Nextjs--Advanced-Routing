"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import path from 'path';
 
export default function NotFound() {
    const pathname = usePathname()
  return (
    <div className='h-screen w-screen flex justify-center items-center'>
    <div>
    <h2 className='font-bold text-xl '>Page Not Found <span className='text-xl text-red-400'>{pathname}</span></h2>
      <p className='mt-10'>Could not find requested resource</p>
      <Link className='p-5' href="/">Return Home</Link>
    </div>
    </div>
  )
}