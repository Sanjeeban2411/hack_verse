import React, { useState } from 'react'
import axios from 'axios'

export default function ApplyLoan() {

  const [reciever, setreciever] = useState('')
  const [occupation, setoccupation] = useState('')
  const [product_name, setproduct_name] = useState('')
  const [product_price, setproduct_price] = useState('')
  const [purchaser_gst, setpurchaser_gst] = useState('')
  const [purchaser_wallet, setpurchaser_wallet] = useState('')

  const submitClick = (e) => {
    e.preventDefault()
    let formData = new FormData()
    formData.append('reciever', reciever)
    formData.append('occupation', occupation)
    formData.append('product_name', product_name)
    formData.append('product_price', product_price)
    formData.append('purchaser_wallet', purchaser_wallet)
    console.log(formData)
    console.table([...formData])
    axios.post("http://localhost:8000/add-loan", formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      }
    }).then(
      (response) => {
        console.log(response.data)
      },
      (error) => {
        if (error.response.status == 401) {
        }
      }
    );
  }

  return (
    <div>
      <div className="container loginContaine">
        <div className="title">Apply Loan</div>
        <form action="#" onSubmit={e =>{e.preventDefault()}}>
          <div className="user_details login_details">
            <div className="input_pox">
              <span className="datails">Reciever</span>
              <input
                type="text"
                placeholder="enter your details"
                required
                value={reciever}
                onChange={(e) => setreciever(e.target.value)}
              />
            </div>
            <div className="input_pox">
              <span className="datails">Occupation</span>
              <input
                type="text"
                placeholder="enter your Occupation"
                required
                value={occupation}
                onChange={(e) => setoccupation(e.target.value)}
              />
            </div>
            <div className="input_pox">
              <span className="datails">Product Name</span>
              <input
                type="text"
                placeholder="enter your Product Name<"
                required
                value={product_name}
                onChange={(e) => setproduct_name(e.target.value)}
              />
            </div>
            <div className="input_pox">
              <span className="datails">Product Price</span>
              <input
                type="text"
                placeholder="enter your Product Price"
                required
                value={product_price}
                onChange={(e) => setproduct_price(e.target.value)}
              />
            </div>
            <div className="input_pox">
              <span className="datails">Purchaser GST</span>
              <input
                type="text"
                placeholder="enter your Purchaser GST"
                required
                value={purchaser_gst}
                onChange={(e) => setpurchaser_gst(e.target.value)}
              />
            </div>
            <div className="input_pox">
              <span className="datails">Purchaser Wallet</span>
              <input
                type="text"
                placeholder="enter your Purchaser Wallet"
                required
                value={purchaser_wallet}
                onChange={(e) => setpurchaser_wallet(e.target.value)}
              />
            </div>'
            {/* <div className="Remember_input_pox">
                          <input type="checkbox" name="remember" id="remember" />
                          <label for="remember">Remember me</label>
                      </div> */}
          </div>
          <div className="button">
            <input type="submit" value="Login" onClick={(e) => { submitClick(e) }} />
          </div>
        </form>
      </div>
    </div>
  )
}
