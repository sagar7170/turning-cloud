import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import LinearScaleIcon from '@mui/icons-material/LinearScale';
function OrderDetails() {
    return (
        <div className='bg-white m-2 p-2 gap-2 flex flex-col flex-grow'>
            <div className="flex bg-gray-200  w-full gap-2 p-1">
                <PersonIcon /><p className='text-gray-500 text-sm'> Customer <br /> <span className='text-semibold text-black'>SRG India Pvt Ltd</span></p>
            </div>
            <div className="flex bg-gray-200  w-full gap-2 p-1 ">
                <LinearScaleIcon /><p className='text-gray-500 text-sm'> Dilevery Location <br /> <span className='text-semibold text-black'>Gurgoan-0011</span></p>
            </div>
            <div className="flex bg-gray-200  w-full gap-2 p-1 ">
                <LinearScaleIcon /><p className='text-gray-500 text-sm'> Dispatch Location <br /> <span className='text-semibold text-black'>Gurgoan-0011</span></p>
            </div>
            <div className="flex bg-gray-200 text-gray-500 justify-center w-full gap-2 p-1 ">
                Show More
            </div>
            <hr />
            <div className="">
                <h6 className='font-semi-bold'>Summary</h6>
                <p className='font-bold uppercase p-1 bg-gray-200 text-sm'>#so_draft_00000071_2024</p>
                 <div className="flex justify-between text-sm capitalize text-gray-500 mt-3">
                    <h5>total quality</h5><h6 className=''>21</h6>
                 </div>
                 <div className="flex justify-between text-sm capitalize text-gray-500 mt-3">
                    <h5>total item</h5><h6 className=''>7</h6>
                 </div>
                 <div className="flex justify-between text-sm capitalize text-gray-500 mt-3">
                    <h5>order quality</h5><h6 className=''>21</h6>
                 </div>
                 <div className="flex justify-between text-sm capitalize text-gray-500 mt-3 p-2 rounded-md bg-gray-100">
                    <h5>order quality</h5><h6 className='font-bold text-black'>₹ 23032.98</h6>
                 </div>
            </div>
            <hr />
            <div className="">
                <h6 className='font-semi-bold text-sm'>PRICE BREAKUP</h6>
                 <div className="flex justify-between text-sm uppercase text-gray-500 mt-3">
                    <h5>igst</h5><h6 className=''>₹201</h6>
                 </div>
                 <div className="flex justify-between text-sm uppercase text-gray-500 mt-3">
                    <h5>cgst</h5><h6 className=''>₹70</h6>
                 </div>
                 <div className="flex justify-between text-sm uppercase text-gray-500 mt-3">
                    <h5>sgst</h5><h6 className=''>₹201</h6>
                 </div>
                 <div className="flex justify-between text-sm uppercase text-gray-500 mt-3">
                    <h5>cess</h5><h6 className=''>₹0.00</h6>
                 </div>
                 <div className="flex justify-between text-sm capitalize text-green-500 mt-3 p-2 rounded-md bg-gray-100">
                    <h5>Discount</h5><h6 className='font-bold'>₹ 690.00</h6>
                 </div>
                 <div className="flex justify-between text-sm capitalize text-gray-500 mt-3 p-2 rounded-md bg-gray-100">
                    <h5>Total Amount</h5><h6 className='font-bold text-black'>₹ 23032.98</h6>
                 </div>
            </div>

        </div>
    )
}

export default OrderDetails
