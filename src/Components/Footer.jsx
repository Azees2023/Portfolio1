import React from 'react'
import {Instagram ,Facebook,LinkedIn ,GitHub } from '@mui/icons-material/';
import { Typography } from '@mui/material'; 
const Footer = () => {
  return (
    <div className='text-white '>
      <footer className="flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 py-6 text-center md:justify-between">
      <Typography color="blue-gray" className="font-normal xl:translate-y-32">
        &copy; 2023 copyRights Dheen.com
      </Typography>
      <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            About Us
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            License
          </Typography>
        </li>
        <li>
          <Typography
            // as="a"
            href="#"
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            Contribute
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            Contact Us
          </Typography>
        </li>
      </ul>
    </footer>
    <div className='text-white md:justify-between space-x-8'>
      <Facebook />
      <Instagram />
      <GitHub />
      <LinkedIn />
      </div>
      <div class="relative mb-7 mt-5">
        <form action="">
          <div class="grid grid-cols-1 md:grid-cols-3 items-center justify-center gap-5 mb-6">
            <div class="md:ml-auto">
              <p class="font-bold">Sign up </p>
            </div>

            <div>
              <input
                type="email"
                id="inputSignUp"
                placeholder="Your address"
                class="w-full block rounded-lg border dark:border-none  dark:bg-slate-200 py-[9px] px-3 pr-4 text-sm focus:border-blue-400 focus:ring-1 focus:ring-blue-400 focus:outline-none"
              />
            </div>
            <div class="md:mr-auto">
              <button
                type="submit"
                class="inline-block rounded bg-indigo-500  text-gray-400 shadow-[0_4px_9px_-4px_rgba(51,45,45,0.7)] hover:bg-indigo-600 hover:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:bg-indigo-800 focus:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] active:bg-indigo-700 active:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal transition duration-150 ease-in-out focus:outline-none focus:ring-0"
              >
                Subscribe
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Footer
