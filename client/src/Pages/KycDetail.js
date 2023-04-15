import React, { useState } from 'react'
import axios from 'axios'

export default function KycDetail() {
    const [name, setname] = useState('')
    const [Image, setImage] = useState(null)
    const [PAN_number, setPAN_number] = useState('')
    const [govID, setgovID] = useState('aadhar_card')

    const submitClick = (e) => {
        e.preventDefault()
        let formData = new FormData()
        formData.append('name', name)
        formData.append('govID', govID)
        formData.append('image', Image)
        console.log(formData)
        console.log([...formData])
        axios.post("/api/admin/add-new-radioCat", formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdG5hbWUiOiJTdXBlciIsImxhc3RuYW1lIjoiQWRtaW4iLCJlbWFpbCI6InN1cGVyYWRtaW5AYWdyaXBhbC5jb20iLCJpYXQiOjE2NjE5NTY4Nzl9.AIEwmCFJkySVinJMIPSWs2PjibQkkPgG-AX3fHtHHSA'
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
        <div id='main'>
            <div class="container loginContaine">
                <div class="title">KYC Details</div>
                <form action="#">
                    <div class="user_details login_details">

                        <div class="input_pox">
                            <span class="datails">PAN Card Number</span>
                            <input type="text" placeholder="enter your PAN number" value={PAN_number} onChange={(e) => { setPAN_number(e.target.value) }} required />
                        </div>
                        <div class="input_pox">
                            <span class="datails">Name{'(as on PAN card)'}</span>
                            <input type="text" placeholder="enter your Password" value={name} onChange={(e) => { setname(e.target.value) }} required />
                        </div>
                        <div class="Remember_input_pox">
                            <div class="col-12">
                                <div class="form-group has-icon-left">
                                    <label for="first-name-icon">PAN card photo</label>
                                    <div class="position-relative">
                                        <input type="file" class="basic-filepond" name='image' onChange={(e) => { setImage(e.target.files[0]) }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="input_pox">
                            <span class="datails">Select Government ID</span>
                            <input type="text" placeholder="enter your PAN number" value='Aadhar card' disabled={true} />
                        </div>
                        <div class="Remember_input_pox">
                            <div class="col-12">
                                <div class="form-group has-icon-left">
                                    <label for="first-name-icon">Aadhar front photo</label>
                                    <div class="position-relative">
                                        <input type="file" class="basic-filepond" name='image' onChange={(e) => { setImage(e.target.files[1]) }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="Remember_input_pox">
                            <div class="col-12">
                                <div class="form-group has-icon-left">
                                    <label for="first-name-icon">Aadhar Back photo</label>
                                    <div class="position-relative">
                                        <input type="file" class="basic-filepond" name='image' onChange={(e) => { setImage(e.target.files[2]) }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="button">
                        <input type="submit" value="Submit" />
                    </div>

                </form>
            </div>
        </div>
    )
}




