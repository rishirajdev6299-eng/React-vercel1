import React from 'react';
import usePhone from './hook/usePhone';
function Product() {
    const contacts = usePhone();
    return (
        <>
     <nav class="navbar bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand">Products</a>
    <form class="d-flex" role="search">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>
        <div>
            <h1>Products</h1>
            <p>Check out our amazing products!</p>
            <p>We offer a wide range of products to suit your needs. From home decor to outdoor furniture, we have something for everyone.</p>
            <table className="table">
  <thead>
    <tr>    
        <th scope="col">#</th>
        <th scope="col">Product Name</th>
        <th scope="col">Price</th>
        <th scope="col">Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <th scope="row">1</th>
        <td>Modern Sofa</td>
        <td>$499</td>
        <td>A sleek and comfortable sofa that will elevate your living room.</td>
    </tr>
        
    <tr>
        <th scope="row">2</th>
        <td>Outdoor Dining Set</td>     
        <td>$899</td>

        <td>Enjoy meals al fresco with this stylish and durable dining set.</td>
    </tr>
    <tr>
        <th scope="row">3</th>
        <td>Decorative Throw Pillows</td>
        <td>$59</td>
        <td>Add a pop of color and comfort to your space with these decorative throw pillows.</td>
    </tr>
    </tbody>
</table>
        </div>
          <div>
      <h1>Contact List</h1>

      {contacts.map((contact) => (
        <div key={contact.id}>
          <h3>{contact.name}</h3>
          <p>{contact.phone}</p>
          <hr />
        </div>
      ))}
    </div>
        </>
    );
}
export default Product;