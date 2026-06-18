import React from 'react';
//import usePhone from './hook/usePhone';
function Contact() {
   // const contacts = usePhone();
    return ( 
        <>
    <nav class="navbar bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand">Contact</a>
    <form class="d-flex" role="search">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>
        <div>

            <h1>Contact Us</h1>
            <p>For inquiries, please email us at info@wildhome.com</p>
            <p>Or call us at (123) 456-7890</p>
        </div>

         {/* <div>
      <h1>Contact List</h1>

      {contacts.map((contact) => (
        <div key={contact.id}>
          <h3>{contact.name}</h3>
          <p>{contact.phone}</p>
          <hr />
        </div>
      ))}
    </div> */}
        </>
    );
}
export default Contact;