import React from 'react'
import SpaceDashboardOutlinedIcon from '@mui/icons-material/SpaceDashboardOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import CheckroomOutlinedIcon from '@mui/icons-material/CheckroomOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import ViewInArOutlinedIcon from '@mui/icons-material/ViewInArOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import StorageOutlinedIcon from '@mui/icons-material/StorageOutlined';
function Navigation() {
  return (
    <div className='h-screen flex justify-evenly w-14 flex-col gap-4 pl-2 bg-white'>
      <SpaceDashboardOutlinedIcon fontSize='large'/>
      <HomeOutlinedIcon fontSize='large'/>
      <CheckroomOutlinedIcon fontSize='large'/>
      <LocalShippingOutlinedIcon fontSize='large'/>
      <CalendarTodayOutlinedIcon fontSize='large'/>
      <ShoppingCartOutlinedIcon fontSize='large'/>
      <ViewInArOutlinedIcon fontSize='large'/>
      <StorageOutlinedIcon fontSize='large'/>
      <Person2OutlinedIcon fontSize='large'/>
      <ReceiptLongOutlinedIcon fontSize='large'/>
      <AssignmentOutlinedIcon fontSize='large'/>
      <SpaceDashboardOutlinedIcon fontSize='large'/>
    </div>
  )
}

export default Navigation
