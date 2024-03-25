import React from 'react'
import {products, frontend, backend,web3} from '../components/Data'
import 
{  BsPeopleFill}
 from 'react-icons/bs'


function Home() {

  return (
    <main className='main-container'>
        <div className='main-title'>
            <h3>DASHBOARD</h3>
        </div>

        <div className='main-cards'>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Product Design Track</h3>
                    <BsPeopleFill className='card_icon'/>
                </div>
                <h1>{Object.getOwnPropertyNames(products).length-1}</h1>
            </div>

            <div className='card'>
                <div className='card-inner'>
                    <h3>Frontend Track </h3>
                    <BsPeopleFill className='card_icon'/>
                </div>
                <h1>{Object.getOwnPropertyNames(frontend).length-1}</h1>
            </div>

            <div className='card'>
                <div className='card-inner'>
                    <h3>Backend Track</h3>
                    <BsPeopleFill className='card_icon'/>
                </div>
                <h1>{Object.getOwnPropertyNames(backend).length-1}</h1>
            </div>

            <div className='card'>
                <div className='card-inner'>
                    <h3>web3 Track</h3>
                    <BsPeopleFill className='card_icon'/>
                </div>
                <h1>{Object.getOwnPropertyNames(web3).length-1}</h1>
            </div>
        </div>

       
    </main>
  )
}

export default Home