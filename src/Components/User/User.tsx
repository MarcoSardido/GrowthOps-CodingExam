import React from 'react'
import {TUserData} from '../../App'
import avatar from '../../assets/userphoto.png'

type userProps = {
    dataProp: TUserData
}

const User = ({dataProp}: userProps) => {
  return (
    <div className="flex flex-col lg:flex-row rounded-lg px-4 py-16 md:w-[18rem] lg:w-[25rem]  bg-white border border-gray-200 shadow-lg md:max-w-xl hover:bg-gray-100">
          <img className="w-24 h-24 md:w-28 md:h-28 lg:w-28 lg:h-28 rounded-full" src={avatar} alt={dataProp.name} />
          <div className="flex flex-col w-2/3 justify-between pl-4 ">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{dataProp.name}</h5>
              <p className="text-gray-700 md:text-sm lg:text-sm xl:text-sm">Email: <span className='font-bold'>{dataProp.email}</span></p>
              <p className="text-gray-700 md:text-sm lg:text-sm xl:text-sm">Mobile: <span className='font-bold'>{dataProp.phone}</span></p>
              <p className="text-gray-700 md:text-sm lg:text-sm xl:text-sm">Company: <span className='font-bold'>{dataProp.company}</span></p>
              <p className="text-gray-700 md:text-sm lg:text-sm xl:text-sm">Address: <span className='font-bold'>{dataProp.address.street}</span></p>
              <p className="text-gray-700 md:text-sm lg:text-sm xl:text-sm">Website: <span className='font-bold'>{dataProp.website}</span></p>
              <p className="text-gray-700 md:text-sm lg:text-sm xl:text-sm">Age: <span className='font-bold'>{dataProp.age}</span></p>
          </div>
      </div>
  )
}

export default User