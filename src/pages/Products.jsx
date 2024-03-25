import React from 'react'
import {products} from '../components/Data'

function Products() {
  return (
    <main className='main-container'>
        <div className='main-title'>
            <h3>PRODUCT DESIGN</h3>
        </div>

        <div className='other-cards'>
           {
            products.slice(0, 3).map((item) =>
              <div className='card'>
                <div className='card-inner'>
                    <h3>{item.name}</h3>
                </div>
                <h1>{item.grade}</h1>
              </div>   
            )
           }        
        </div>


        <div>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>INTERN NAMES</th>
                <th>TASK1 (10)</th>
                <th>TASK2 (10)</th>
                <th>TASK3 (10)</th>
                <th>GRADES</th>
              </tr>
            </thead>
            <tbody>
              {
                products.map((item) =>
                  <tr>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.task1}</td>
                    <td>{item.task2}</td>
                    <td>{item.task3}</td>
                    <td>{item.grade}</td>
                  </tr>  
                )
              }                          
            </tbody>
          </table>
        </div>
       
    </main>
    
  )
}

export default Products