import React, { useState, useEffect } from "react";
import "../sell_sidebar/Sidebar.css";
import SidebarS from "../sell_sidebar/Sidebar";
import HeaderS from "../sell_header/Header";
import "./Items.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import MaterialTable from "material-table";
import TableIcons from "../../../Utilities/Tables/ReactTableIcons";

import { getItems,addItem,removeItem,updateItem } from "../../../../services/ItemService";
import Button from "../../../Utilities/Form/Button";

export default function Trainers() {
  useEffect(() => {
    checkValidate();
    getSellingItem();
  }, []);

  const checkValidate = async () => {
    const y = localStorage.getItem("USER_KEY");
    if (!y) {
      window.location.href = "/";
    }
  };
  const getSellingItem = async () => {
    const res = await getItems();
    setOrderDetails(res.data);
    console.log(res.data);
  };

  const [selectededit, setSelectededit] = useState(false);
  const [selectednew, setSelectednew] = useState(false);

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
    <div className="main-container">
      <SidebarS />
      <div className="body-container">
        <HeaderS title="Items" />
        <div className="content-container items">
          <div className="table-container">
            <button
              type="button"
              className="btn mt-0"
              style={{
                backgroundColor: "blue",
                color: "#fff",
                border: "none",
              }}
              onClick={() => setSelectednew(true)}
            >
              ADD
            </button>
            <MaterialTable
              title="Items"
              columns={[
                { title: "Item ID", field: "itemid", hidden: true },
                { title: "Item Name", field: "itemName" },
                { title: "Item Description", field: "itemDescription" },
                { title: "Price", field: "price" },
              ]}
              icons={TableIcons}
              data={orderDetails}
              actions={[
                {
                  icon: () => {
                    return (
                      <button
                        type="button"
                        className="btn mt-0"
                        style={{
                          backgroundColor: "#bf0603",
                          color: "#fff",
                          border: "none",
                        }}
                      >
                        Remove
                      </button>
                    );
                  },
                  onClick: (event, rowData) => {
                    console.log(rowData.itemName+" removed!");
                    removeItem(rowData.itemId);
                    window.location.href = "/Sitems";

                  },
                },
                {
                  icon: () => {
                    return (
                      <button
                        type="button"
                        className="btn mt-0"
                        style={{
                          backgroundColor: "#ffbe0b",
                          border: "none",
                        }}
                      >
                        Update
                      </button>
                    );
                  },
                  onClick: (event, rowData) => {
                    console.log(rowData);
                    setSelectededit(true);
                    setSelectedItem({
                        itemId:rowData.itemId,
                        itemName: rowData.itemName,
                        itemDescription: rowData.itemDescription,
                        price:rowData.price
                    });

                  },
                },
              ]}
              options={{
                headerStyle: {
                  backgroundColor: "#1F0106",
                  color: "#FFF",
                  hover: "#FFF",
                },
              }}
            />
          </div>
          {selectededit && (
            <div className="item-form-container">
              <div className="form-inputs item-form-inputs">
                <div style={{ marginBottom: "50px" }}>
                  <h5>Edit Item</h5>
                  <button
                    type="button"
                    className="btn mt-0"
                    style={{
                      backgroundColor: "blue",
                      color: "#fff",
                      border: "none",
                    }}
                    onClick={() => {
                      setSelectededit(false);
                      setSelectedItem({});
                    }}
                  >
                    Close
                  </button>
                  <hr />
                </div>
                <form>
                  <div class="form-group item-form-input-field ">
                    <label for="exampleInputEmail1">Item Name</label>
                    <input
                      type="text"
                      class="form-control"
                      id=""
                      placeholder="Enter Item Name"
                      value={selectedItem.itemName}
                      name="itemName"
                      onChange={handleChange}
                    ></input>
                    <small id="emailHelp" class="form-text text-muted"></small>
                  </div>
                  <div class="form-group item-form-input-field">
                    <label for="exampleInputEmail1">Item Description</label>
                    <input
                      type="text"
                      class="form-control"
                      id=""
                      placeholder="Enter Item Description"
                      value={selectedItem.itemDescription}
                      name="itemDescription"
                      onChange={handleChange}
                    ></input>
                  </div>
                  <div class="form-group item-form-input-field">
                    <label for="exampleInputEmail1">Price</label>
                    <input
                      type="text"
                      class="form-control"
                      id=""
                      placeholder="Enter Price"
                      value={selectedItem.price}
                      
                      name="price"
                      onChange={handleChange}
                    ></input>
                  </div>
                  <div class="form-group item-form-input-field">
                    <label for="exampleInputEmail1">Image</label>
                    <input
                      type="file"
                      class="form-control"
                      id=""
                      placeholder="Upload Image"
                      value={selectedItem.itemImage}
                      name="itemImage"
                      onChange={handleChange}
                    ></input>
                  </div>
                  <button class="btn btn-primary"
                  onClick={()=>{
                    updateItem(selectedItem);
                    window.location.href = "/Sitems";
                  }}>
                    Submit
                  </button>
                </form>
              </div>
            </div>
          )}

          {selectednew && (
            <div className="item-form-container">
              <div className="form-inputs item-form-inputs">
                <div style={{ marginBottom: "50px" }}>
                  <h5>New Item</h5>
                  <button
                    type="button"
                    className="btn mt-0"
                    style={{
                      backgroundColor: "blue",
                      color: "#fff",
                      border: "none",
                    }}
                    onClick={() => {
                      setSelectednew(false);
                    }}
                  >
                    Close
                  </button>
                  <hr />
                </div>
                
                  <div class="form-group item-form-input-field ">
                    <label for="exampleInputEmail1">Item Name</label>
                    <input
                      type="text"
                      class="form-control"
                      id=""
                      placeholder="Enter Item Name"
                      value={selectedItem.name}
                      name="itemName"
                      onChange={handleChange}
                    ></input>
                    <small id="emailHelp" class="form-text text-muted"></small>
                  </div>
                  <div class="form-group item-form-input-field">
                    <label for="exampleInputEmail1">Item Description</label>
                    <input
                      type="text"
                      class="form-control"
                      id=""
                      placeholder="Enter Item Description"
                      value={selectedItem.description}
                      name="itemDescription"
                      onChange={handleChange}
                    ></input>
                  </div>
                  <div class="form-group item-form-input-field">
                    <label for="exampleInputEmail1">Price</label>
                    <input
                      type="text"
                      class="form-control"
                      id=""
                      placeholder="Enter Price"
                      value={selectedItem.price}
                      
                      name="price"
                      onChange={handleChange}
                    ></input>
                  </div>
                  <div class="form-group item-form-input-field">
                    <label for="exampleInputEmail1">Image</label>
                    <input
                      type="file"
                      class="form-control"
                      id=""
                      placeholder="Upload Image"
                      value={selectedItem.file}
                      name="itemImage"
                      onChange={handleChange}
                    ></input>
                  </div>
                  <div class="form-group item-form-input-field">
                    <label for="exampleInputEmail1">Type</label>
            
                    <select
                    type="text"
                    class="form-control"
                    id=""
                    placeholder="Select Type"
                    value={selectedItem.itemType}
                    name="itemType"
                    onChange={handleChange}
                    >
                    <option>Select Type</option>
                    <option>Food</option>
                    <option>Electronics</option>
                  </select>
                  </div>
                  
                  <button class="btn btn-primary" 
                  onClick={()=>{
                    addItem(selectedItem,1);
                    window.location.href = "/Sitems";
                  }}
                  >
                    Submit
                  </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
