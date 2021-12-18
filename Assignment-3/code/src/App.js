import React from 'react';
import './App.css';
// import './components/Header'
import Header from './components/Header'
import CustomerInfo from './components/CustomerInfo'
import OrderInfo from './components/OrderInfo';
import ProductList from './components/ProductList';

const obj = {
  Name:"Alan ford",
  EmployeeID:"00005152",
  Appointment:" 9:00 (24-05-2016)",
  Email:"alan.form@gmail.com",
  phone:"+31123456789",
  Status:"In progress",
  Door:"Mark",
  Time:"10:30",
  date:"(25-05-2016)",
  arrow:"<",
  arrow1:">"
}
function App() {
  return (
    <div className="site-container">
    {/* Start Your code here */}
    <Header Name = {obj.Name} EmployeeID={obj.EmployeeID} arrow={obj.arrow}/>
    <CustomerInfo Appointment={obj.Appointment} Email={obj.Email} phone={obj.phone} />
    <OrderInfo  Status={obj.Status} Door={obj.Door} Time={obj.Time} date={obj.date}/>
    <ProductList arrow1 = {obj.arrow1}/>
    </div>
  );
}

export default App;