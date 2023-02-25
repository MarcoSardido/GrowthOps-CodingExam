import './App.css'

import React, { useEffect, useRef, useState } from 'react'

import User from './Components/User/User'
import axios from 'axios'
import mainLogo from './assets/logo.png'

type TAddress = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
}

export type TUserData = {
  id: number;
  name: string;
  email: string;
  phone: string;
  company: string;
  address: TAddress;
  website: string;
  age: number;
}

function App() {
  
  // Hooks
  const [userData, setUserData] = useState<TUserData[]>([])
  const [filteredAge, setFilteredAge] = useState<TUserData[]>([])
  const dateRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    
    const getUserAPI = async () => {
      try {
        const result = await axios('http://www.mocky.io/v2/5d73bf3d3300003733081869')
        setUserData(result.data)
      } catch (error) {
        console.error(`Error fetching data: ${error}`)
      }
    }

    getUserAPI();
  }, [])
  

  //Functions
  const handleFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const option = e.currentTarget.value;

    switch(option) {
      case 'all': {
        return setFilteredAge([])
      }

      case 'teen': {
        return  setFilteredAge(userData.filter(limit => limit.age <= 20))
      }

      case 'adult': {
        return  setFilteredAge(userData.filter(limit => limit.age > 20 && limit.age < 40))
      }

      case 'old': {
        return  setFilteredAge(userData.filter(limit => limit.age >= 40))
      }

      default: return null
    }
  }

/**
 * @params convertDateFormat
 * This function alerts the date value in the input
*/
  const convertDateFormat = () => {
    if (dateRef.current) {
      alert(dateRef.current.value)
    }
  }

/**
 * @params countMe
 * Create a function named countMe that prints from 1 to 100 on the console, with the following conditions:
 * When the number is a multiple of 3, print “Foo” instead
 * When the number is a multiple of 5, print “Bar” instead
 */
  const countMe = () => {
    // TODO: Create a Loop from 1 to 100
    //       Check if each value is multitple of 3 then print "Foo"
    //       If each value is multitple of 5 then print "Bar"
    //       Otherwise print the value
    
    for (let index = 1; index <= 10; index++) {
      const result = index % 3 == 0 ? 'Foo' : index % 5 == 0 ? "Bar" : index
     console.log(result)
    }
  }

  // countMe();

  return (
    <div className="App">
      
      <nav className=" bg-rose-500 px-2 sm:px-4 py-2.5 sm:w-full md:w-full">
        <div className="container flex flex-wrap items-center max-md:justify-between mx-auto">
          <a href="/" className="flex items-center md:pr-20">
              <img src={mainLogo} className="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
          </a>
          <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-white rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-rose" aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path>
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto uppercase" id="navbar-default">
            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent">
              <li>
                <a href="#" className="block w-16 py-2 pl-3 pr-4 text-white rounded hover:bg-slate-500 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">our products</a>
              </li>
              <li>
                <a href="#" className="block w-16 py-2 pl-3 pr-4 text-white rounded hover:bg-slate-500 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">about us</a>
              </li>
              <li>
                <a href="#" className="block w-16 py-2 pl-3 pr-4 text-white rounded hover:bg-slate-500 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">live better</a>
              </li>
              <li>
                <a href="#" className="block w-16 py-2 pl-3 pr-4 text-white rounded hover:bg-slate-500 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">claims & support</a>
              </li>
              <li>
                <a href="#" className="block w-16 py-2 pl-3 pr-4 text-white rounded hover:bg-slate-500 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">my account</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
      <div className="py-4 bg-[#eeee] text-2xl font-bold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl uppercase text-center">district manager</div>
      
      <div className="container w-full p-[5%] my-10">
        
        <label htmlFor='lblFilterAge' className="block mb-2 text-sm font-medium text-gray-900">Filter By Age:</label>
        <select id='lblFilterAge' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-rose-500 focus:border-rose-500 block w-full md:w-[18rem] lg:w-[20rem] p-2.5'
         onChange={(e) => handleFilter(e)}>
          <option value="all">All</option>
          <option value="teen">20 and below</option>
          <option value="adult">21 to 39</option>
          <option value="old">40 and above</option>
        </select>

        <hr className="h-1 my-8 mx-auto bg-[#eeee] border-0 rounded"></hr>

        {/* grid grid-rows-4 grid-flow-col gap-4 */}
        <div className="flex flex-wrap gap-3 justify-center">
          {filteredAge.length > 0 ? 
            (filteredAge.map((user, idx) => (
              <User key={idx} dataProp={user} />
            ))) :
            (userData.map((user, idx) => (
              <User key={idx} dataProp={user} />
            )))
          }
        </div>

        <hr className="h-1  my-8 mx-auto bg-[#eeee] border-0 rounded"></hr>

        <label htmlFor='lblDate' className="block mb-2 text-sm font-medium text-gray-900">Filter By Age:</label>
        <input id='lblDate' type='date' ref={dateRef}  />
        <button onClick={convertDateFormat}>convert</button>
      </div>
      
    </div>
  )
}

export default App
