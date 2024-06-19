import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Navbar from '../components/Navbar'

function Products(){ 
     const [users, setUsers] = useState([])
     useEffect(() => {
        axios.get('http://localhost:3001/products')
        .then(result => setUsers(result.data))
        .catch(err => console.log(err))
     }, [])

     const handleDelete = (id) => {
      axios.delete('http://localhost:3001/delete/' + id)
          .then(res => {
              console.log(res);
              setUsers(users.filter(user => user._id !== id));
          })
          .catch(err => console.log(err));
  }


    return (

      <div>
      <Header />
      <div className="container-fluid">
          <div className="row">
              
              <div className="col-md-2">
                  <Navbar />
              </div>
             
              <div className="col-md-10">
               <div className='d-flex vh-100 bg-secondary justify-content-center align-items-center'>
                      <div className="w-50 bg-white rounded p-3">
                      <h3 className=' justify-content-center align-items-center pb-5'>Products information and dates they were assured in</h3>
               
                          <Link to="/create" className='btn btn-success'>Add +</Link>
                          <table className="table">
                              <thead>
                                  <tr>
                                      <th>Product</th>
                                      <th>Price</th>
                                      <th>Date</th>
                                      <th>Action</th>
                                  </tr>
                              </thead>
                              <tbody>
                                  {users.map((user) => (
                                      <tr key={user._id}>
                                          <td>{user.product}</td>
                                          <td>{user.price}</td>
                                          <td>{user.date}</td>
                                          <td>
                                              <Link to={`/update/${user._id}`} className='btn btn-success'>Update</Link>
                                              <button className='btn btn-danger' onClick={() => handleDelete(user._id)}>Delete</button>
                                          </td>
                                      </tr>
                                  ))}
                              </tbody>
                          </table>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
    )
}

export default Products