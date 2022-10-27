import { StarIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import React from 'react'
import Currency from 'react-currency-formatter'
import {useDispatch} from 'react-redux'
import basketSlice, { addToBasket, removeFromBasket } from '../slices/basketSlice'

function CheckoutProduct({ id, title, price, rating, description, category, image, hasPrime }) {
    const dispatch = useDispatch();
    
    const addItemtoBasket = () => { 
        const item = {
            id, title, price, rating, description, category, image, hasPrime
        }
        dispatch(addToBasket(item));
    }

    const removeItemFromBasket = () => { 
        dispatch(removeFromBasket({id}))   
    }
    return (
    <div className="grid grid-cols-5">
          <Image className="col-span-1" src={image} width={200} height={200} objectFit='contain' />
          {/*middle*/}
          <div className="col-span-3">
              <p className="font-semibold">{title}</p>
              <div className="flex">   
              {
                  Array(rating).fill().map((_, i) => (
                  <StarIcon className="h-5 w-5 text-yellow-500"/>
              ))
              }
              </div>
              <p className="text-xs line-clamp-3 font-semibold">{description}</p>
              <div className="text-sm font-semibold my-2">     
                <Currency quantity={price} currency="usd" />
              </div>
          </div>
          <div className='flex flex-col space-y-2 my-auto justify-self-end'>
              <button onClick={addItemtoBasket} className='button'>Add to Basket</button>
              <button onClick={removeItemFromBasket} className='button'>Remove from Basket</button>
          </div>
    </div>
  )
}

export default CheckoutProduct