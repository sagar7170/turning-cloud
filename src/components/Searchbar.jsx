import React from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import DashboardIcon from '@mui/icons-material/Dashboard';
import WidthNormalIcon from '@mui/icons-material/WidthNormal';
import WindowIcon from '@mui/icons-material/Window';
import CropFreeIcon from '@mui/icons-material/CropFree';
import SettingsIcon from '@mui/icons-material/Settings';
function Searchbar() {
    return (
        <div className='m-2 h-14 flex '>
            <div className="flex bg-white gap-56 p-2">
                <form className='relative' action="">
                    <input className='pl-8 p-1 border-gray-400  border-2 text-sm w-56    rounded-sm' type="text" placeholder='Search Products' />
                    <div className="absolute left-2 top-1 text-gray-400">
                        <SearchOutlinedIcon />
                    </div>
                    <div className="inline bg-gray-200 p-1.5">
                        <DashboardIcon />
                        <WidthNormalIcon />
                        <WindowIcon />
                    </div>
                </form>

                <div className=" flex gap-1">
                    <div className="flex gap-2">
                        <span className='border border-gray-200 p-1 text-sm text-gray-400 '>Add Remark</span>
                        <p className='border border-gray-200 p-1 text-sm'>Show by: <span className='font-semibold'>Sizes</span></p>
                        <button className='border border-gray-200 text-xl w-9 h-9 font-semibold  '>+</button>
                    </div>
                </div>
            </div>

            <div className='relative ms-2 bg-white p-2' action="">
                <input className='pl-8 p-1.5 border-gray-400  border-2 text-sm w-72 rounded-sm' type="text" placeholder='Scan Product by..' />
                <div className="absolute left-4 top-3 text-gray-400">
                    <CropFreeIcon />
                </div>
                <div className="bg-gray-200 pl-1 pr-1 text-sm rounded-sm absolute right-4 top-4">
                    Design No
                </div>
            </div>
            <div className="p-2 bg-white ms-2 text-gray-400">
                <SettingsIcon fontSize='large'/>
            </div>
        </div>
    )
}

export default Searchbar
