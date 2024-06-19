import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import Navbar from '../components/Navbar'

function Create(){

    const [product, setProduct] = useState("")
    const [price, setPrice] = useState("")
    const [date, setDate] = useState("")
    const navigate = useNavigate()

    const Submit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/create", {product, price, date})
        .then(result => {
            console.log(result)
            navigate('/products')
        })
        .catch(err => console.log(err))
    } 

    return (
        <div>
            <Header/>
            <div className='container-fluid'>
                <div className='row'> 
                <div className="col-md-2">
                  <Navbar />
              </div>
              <div className='col-md-10'>
        <div className='d-flex vh-100 bg-secondary justify-content-center align-items-center'>
        <div className='w-50 bg-white rounded p-3'>
         <form onSubmit={Submit}>
             <h2>    Add a product </h2>
             <div className='mb-2'>
                 <label htmlFor="">Product</label>
                 <input type="text" placeholder='Enter product' required className='form-control' onChange={(e) => setProduct(e.target.value)}/>
             </div>
             <div className='mb-2'>
                 <label htmlFor="">Price</label>
                 <input type="text" placeholder='Enter price' className='form-control'required onChange={(e) => setPrice(e.target.value)} />
             </div>
             <div className='mb-2'>
                 <label htmlFor="">Date</label>
                 <input type="date" className='form-control' required onChange={(e) => setDate(e.target.value)}/>
             </div>
             <button className='btn btn-success'>Submit</button>
         </form>
         </div>
        </div>
        </div>
        </div>
        </div>
        </div>
    )

}

export default Create