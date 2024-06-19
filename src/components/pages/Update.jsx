import React, {useState, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Header from '../components/Header'
import Navbar from '../components/Navbar'

function Update() {

    const {id} = useParams()
    const [product, setProduct] = useState("")
    const [price, setPrice] = useState("")
    const [date, setDate] = useState("")
    const navigate = useNavigate()


    useEffect(() => {
        axios.get('http://localhost:3001/getproduct/' + id)
            .then(result => {
                const product = result.data;
                setProduct(product.product);
                setPrice(product.price);
                setDate(product.Date);
            })
            .catch(err => console.log(err));
    }, [id]);

    const Update = (e) => {
        e.preventDefault();
        axios.put("http://localhost:3001/update/"+id, {product, price, date})
            .then(result => {console.log(result)
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
              <div className="col-md-10">
        <div className='d-flex vh-100 bg-secondary justify-content-center align-items-center'>
        <div className='w-50 bg-white rounded p-3'>
         <form onSubmit={Update}>
             <h2>Update Product</h2>
             <div className='mb-2'>
                 <label htmlFor="">Product</label>
                 <input type="text" placeholder='Enter name' className='form-control' value={product} onChange={(e) => setProduct(e.target.value)}/>
             </div>
             <div className='mb-2'>
                 <label htmlFor="">Price</label>
                 <input type="text" placeholder='Enter price' className='form-control' value={price} onChange={(e) => setPrice(e.target.value)}/>
             </div>
             <div className='mb-2'>
                 <label htmlFor="">Date</label>
                 <input type="date" placeholder='' className='form-control' value={date} onChange={(e) => setDate(e.target.value)}/>
             </div>
             <button className='btn btn-success'>Update</button>
         </form>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
    )

}

export default Update