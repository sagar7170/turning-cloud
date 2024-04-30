import React from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ZoomInMapOutlinedIcon from '@mui/icons-material/ZoomInMapOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import SystemUpdateAltOutlinedIcon from '@mui/icons-material/SystemUpdateAltOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { Badge } from '@mui/material';

function Header() {
  return (
    <div className=" bg-white">
      <div className='flex justify-between border border-b-gray-100 p-2 '>
        <form className='relative' action="">
          <input className='pl-8 p-1.5 border-gray-400  border-2 text-sm w-[30rem] rounded-sm' type="text" placeholder='Search POs ASNs & pages etc' />
          <div className="absolute left-2 top-1 text-gray-400">
            <SearchOutlinedIcon />
          </div>
          <div className="bg-gray-100 pl-1 pr-1 text-sm rounded-sm absolute right-2 top-1.5">
            <ZoomInMapOutlinedIcon fontSize='small' />+K /  <ZoomInMapOutlinedIcon fontSize='small' />Shift+K
          </div>
        </form>
        <div className="flex justify-items-center">
          <div className="icons inline-flex gap-4 text-gray-500">
            <HelpOutlineOutlinedIcon />
            <SystemUpdateAltOutlinedIcon />
            <Badge badgeContent={4} color="primary">
              <NotificationsOutlinedIcon />
            </Badge>
            <Badge badgeContent={4} color="primary">
              <ArticleOutlinedIcon />
            </Badge>
          </div>
          <div className="h-5 w-0.5 bg-gray-500 mx-5"></div>
          <div className="account flex justify-items-center">
            <AccountCircleIcon fontSize='large' />
            <div className="user ms-3">
              <h5 className='capitalize font-semibold text-lg leading-none'>vmart procurement team</h5>
              <h6 className='capitalize text-gray-700'>ashish kumar singhla</h6>
            </div>
          </div>
        </div>
      </div>
      <div className="text-gray-700 capitalize mt-2 pb-4">
        <HomeOutlinedIcon />  Home / <span className=' border border-gray-300 p-1 rounded-md'>sales order</span> / <span className='font-semibold'>product dialoge</span>
        <a href="#"><button className='uppercase bg-blue-600 py-1 font-semibold text-white float-end px-5'>Place Order</button></a>
      </div>
    </div>
  )
}

export default Header
