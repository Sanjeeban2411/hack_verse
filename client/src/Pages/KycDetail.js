import React, { useState } from 'react'
import axios from 'axios'
export default function KycDetail() {
    const [category, setcategory] = useState('')
    const [Image, setImage] = useState(null)

    const submitClick = (e) => {
        e.preventDefault()
        let formData = new FormData()
        formData.append('category', category)
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
            <section id="basic-vertical-layouts">
                <div class="row match-height">
                    <div class="col-md-6 col-12">
                        <div class="card">
                            <div class="card-header">
                                <h4 class="card-title">Add Radio Category</h4>
                            </div>
                            <div class="card-content">
                                <div class="card-body">
                                    <form class="form form-vertical" onSubmit={e => { e.preventDefault(); }}>
                                        <div class="form-body">
                                            <div class="row">
                                                <div class="col-12">
                                                    <div class="form-group has-icon-left">
                                                        <label for="first-name-icon">Category Name</label>
                                                        <div class="position-relative">
                                                            <input type="text" class="form-control"
                                                                placeholder="Input with icon left"
                                                                id="first-name-icon" value={category} onChange={(e) => { setcategory(e.target.value) }} />
                                                            <div class="form-control-icon">
                                                                <i class="bi bi-pen"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-12">
                                                    <div class="form-group has-icon-left">
                                                        <label for="first-name-icon">Select Image</label>
                                                        <div class="position-relative">
                                                            <input type="file" class="basic-filepond" name='image' onChange={(e) => { setImage(e.target.files[0]) }} />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="col-12 d-flex justify-content-end">
                                                    <button onClick={(e) => { submitClick(e) }}
                                                        class="btn btn-primary me-1 mb-1">Submit</button>
                                                    <button type="reset"
                                                        class="btn btn-light-secondary me-1 mb-1">Reset</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}




