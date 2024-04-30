import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
function ProductCard() {
    const options = {
        loop: true,
        margin: 0,
        nav: true,
        autoplay:true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    }

    return (
        <div className='w-[15.5rem] m-2 bg-white'>
            < OwlCarousel className="owl-carousel owl-theme relative" {...options}>
                <div class="item"> <img className='w-full h-52 object-cover' src="https://data.mascheronistore.com/imgprodotto/t-shirt-green-lightning-on-front-kids-black-green_107962_zoom.jpg" alt="" /></div>
                <div class="item"> <img className='w-full h-52 object-cover' src="https://misterfab.in/cdn/shop/products/mister_fab_royalblue_plain_t-shirt.jpg?v=1611603525" alt="" /></div>
                <div class="item"> <img className='w-full h-52 object-cover' src="https://ih1.redbubble.net/image.1214000480.1979/ssrco,slim_fit_t_shirt,mens,101010:01c5ca27c6,front,square_product,600x600.jpg" alt="" /></div>
            </OwlCarousel>
            <div className="p-2">
                <div className="text-semibold ">
                    <span className='capitalize border-2 rounded-sm text-xs p-0.5 border-yellow-600 me-2'>murtard yellow</span> <span className='capitalize text-xs'>multiplier:5</span>
                    <h6 className='capitalize text-xs text-gray-500 mt-2'>item name</h6>
                    <p className='text-sm text-bold capitalize'>mens black plane t-shirt regular fit</p>
                    <h6 className='capitalize text-xs text-gray-500 mt-2'>designer name</h6>
                    <h5 className='uppercase text-sm'>dno998919493</h5>
                    <div className="mt-2">
                        <span className='text-xs capitalize bg-gray-200'>xl </span><span className='ms-1 bg-gray-200 text-xs'>instock:100</span>
                    </div>
                    <div className="mt-2">
                        <span className='font-semibold text-sm current-price'>₹ 736.7</span>
                        <span className='font-semibold text-sm text-gray-400 ms-5 actual-price'>₹ 1299.67</span>
                    </div>
                    <div className="flex justify-items-center gap-2 mt-3">
                        <div className='border-2  border-gray-400  text-gray-500 text-lg'>
                        <DeleteOutlineOutlinedIcon fontSize='small'/>
                        </div>
                        <div className="bg-gray-200 p-1 text-sm w-full">
                           XL <span className='bg-white rounded-lg m-3'>+5 More</span> <CreateOutlinedIcon/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard
