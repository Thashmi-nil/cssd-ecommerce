import React, { useState, useEffect } from 'react'
import '../cus_sidebar/Sidebar.css'
import SidebarO from '../cus_sidebar/Sidebar'
import HeaderO from '../cus_header/header'
import './Payment.css'
import {getAmount,makePayment } from "../../../../services/PaymentService";


const OAnnouncements = () => {

  useEffect(() => {
    checkValidate();
    getAmountValue();
  }, []);

  const checkValidate = async () => {
    const y = localStorage.getItem("USER_KEY");
    if (!y) {
      window.location.href = "/";
    }
  };
  const getAmountValue = async () => {
    const res = await getAmount(5);
    setAmount(res.data);
    console.log(res.data);
  };


  const [orderDetails, setOrderDetails] = useState([]);
  const [selectedItem, setSelectedItem] = useState({
    itemName: "",
    itemDescription: "",
    price:"",
    file:"",
    itemImage:"",
    itemType:"",
    sellerId:"",
  });
  const [amount,setAmount]=useState(0)

  const handleChange = (e) => {
    e.persist();
    console.log(selectedItem);
    console.log(e.target.name + "-" + e.target.value);
    setSelectedItem((selectedItem) => ({
      ...selectedItem,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <div className='main-container'>
      <SidebarO />
      <div className='body-container'>
        <div className='content-container'>
        <HeaderO title="Payment" />
        <div className="own-announcement-content-container" >
        <div className="item-form-container" >
        <div class="accordion" id="accordionExample">
                    
                    <div class="card">
                      <div class="card-header p-0" id="headingTwo">
                        <h2 class="mb-0">
                          <button class="btn btn-light btn-block text-left collapsed p-3 rounded-0 border-bottom-custom" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <div class="d-flex align-items-center justify-content-between">

                              <span>Paypal</span>
                              <img src="https://i.imgur.com/7kQEsHU.png" width="30"/>
                              
                            </div>
                          </button>
                        </h2>
                      </div>
                      <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                        <div class="card-body">
                          <input type="text" class="form-control" placeholder="Paypal email"/>
                        </div>
                      </div>
                    </div>

                    <div class="card">
                      <div class="card-header p-0">
                        <h2 class="mb-0">
                          <button class="btn btn-light btn-block text-left p-3 rounded-0" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <div class="d-flex align-items-center justify-content-between">
                              
                              <span>Credit card</span>
                              <div class="icons">
                                <img src="https://i.imgur.com/2ISgYja.png" width="30"/>
                                <img src="https://i.imgur.com/W1vtnOV.png" width="30"/>
                                <img src="https://i.imgur.com/35tC99g.png" width="30"/>
                              </div>
                            </div>                              <h4>{amount} Rs</h4>
``
                          </button>
                        </h2>
                      </div>

                      <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                        <div class="card-body payment-card-body">
                          
                          <span class="font-weight-normal card-text">Card Number</span>
                          <div class="input">

                            <i class="fa fa-credit-card"></i>
                            <input type="text" class="form-control" placeholder="0000 0000 0000 0000"/>
                            
                          </div> 

                          <div class="row mt-3 mb-3">

                            <div class="col-md-6">

                              <span class="font-weight-normal card-text">Expiry Date</span>
                              <div class="input">

                                <i class="fa fa-calendar"></i>
                                <input type="text" class="form-control" placeholder="MM/YY"/>
                                
                              </div> 
                              
                            </div>


                            <div class="col-md-6">

                              <span class="font-weight-normal card-text">CVC/CVV</span>
                              <div class="input">

                                <i class="fa fa-lock"></i>
                                <input type="text" class="form-control" placeholder="000"/>
                                
                              </div> 
                              
                            </div>

                            <div class="col-md-6">

                              <span class="font-weight-normal card-text">Delivery Method</span>
                              <div class="input">

                                <i class="fa fa-lock"></i>
                                <select class="form-control">
                                  <option>Speed Post</option>
                                  <option>Registerd Post</option>
                                </select>
                                
                              </div> 
                              
                            </div>

                            <div class="col-md-6">

                              <span class="font-weight-normal card-text">Address</span>
                              <div class="input">

                                <i class="fa fa-lock"></i>
                                <input type="text" class="form-control" placeholder="enter your address"/>
                                
                              </div> 
                              
                            </div>
                            

                          </div>
                          <button type="submit" class="btn btn-primary" style={{width:"100px"}}
                          onClick={()=>{
                            console.log(amount+" paid success!");
                            makePayment(5,amount,2);
                            window.location.href = "/Cpayment";
                          }}
                          
                          >Pay</button>

                         
                        </div>
                      </div>
                    </div>
                    
                  </div>
            </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default OAnnouncements
