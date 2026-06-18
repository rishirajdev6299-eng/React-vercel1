import React from 'react';

import { Link } from 'react-router-dom';
//import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function Dashboard() {
    return (
        <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Wildhome</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link  className="nav-link" to={"/product"}>Products</Link>
        </li>
        <li className="nav-item">
          <Link  className="nav-link" to={"/contact"}>Contact</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"></hr></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
<div className="container text-center" style={{marginTop:"50px"}}>
  <div className="row align-items-center">
    <div className="col">
      <div className="card" style={{ width: '18rem' }}>
  <img src="assests/download (2).jpg" className="card-img-top" alt="Apartment" style={{height:"200px", objectFit:"cover"}} />
  <div className="card-body">
    <h5 className="card-title">Apartment</h5>
    <p className="card-text">Small and cozy apartment in the city center</p>
    <a href="#" className="btn btn-primary">Check Details</a>
  </div>
</div>
    </div>
    <div className="col">
      <div className="card" style={{ width: '18rem' }}>
  <img src="assests/download3.jpg" className="card-img-top" alt="House" style={{height:"200px", objectFit:"cover"}} />

  <div className="card-body">
    <h5 className="card-title">House</h5>
    <p className="card-text">Spacious house in the suburbs</p>
    <a href="#" className="btn btn-primary">Check Details</a>
  </div>
</div>
    </div>
    <div className="col">
      <div className="card" style={{ width: '18rem' }}>
  <img src="assests/download (4).jpg" className="card-img-top" alt="Villa" style={{height:"200px", objectFit:"cover"}} />
  <div className="card-body">
    <h5 className="card-title">Villa</h5>
    <p className="card-text">Modern villa in the downtown area</p>
    <a href="#" className="btn btn-primary">Check Details</a>
  </div>
</div>
    </div>
  </div>
</div>
<div className="container text-center" style={{marginTop:"50px"}}>
    <table className="table">
  <thead>
    <tr>
      <th scope="col">No</th>
      <th scope="col">Types</th>
      <th scope="col">Price</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Apartment</td>
      <td>$1000</td>
      <td>Beautiful apartment in the city center</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>House</td>
      <td>$2000</td>
      <td>Spacious house in the suburbs</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td> Villa</td>
      <td>$1500</td>
      <td>Modern villa in the downtown area</td>
    </tr>
  </tbody>
</table>
    </div>
    {/* <Router>
      <Routes>
        <Route path="/product" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router> */}
</>
    );
}   
export default Dashboard;