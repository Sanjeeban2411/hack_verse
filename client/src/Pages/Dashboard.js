import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import Loading from '../components/Loading';

export default function Dashboard() {

    const [Count, setCount] = useState({})
    const [loading, setloading] = useState(false)
    const [groupLoan, setgroupLoan] = useState([{
        loan_id:"60RxU393keSh3939",
        name:"Car Loan",
        loan_amount:"1200",
        issueing_date:"01/04/2025",
        loan_status:1
    }])
    const [loanData, setloanData] = useState([{
        loan_id:"60RxU393keSh3939",
        name:"Kisan boy",
        loan_amount:"1200",
        issueing_date:"01/04/2023",
        loan_status:1
    },
    {
        loan_id:"60RHJKkvJF6409W",
        name:"Chandan gogoi",
        loan_amount:"16500",
        issueing_date:"15/03/2023",
        loan_status:0
    }
])




    return (
        <>
            <div id="main">


                <div class="page-heading">
                    <h3>Application Statistics</h3>
                </div>
                {loading ? (<div className='text-center my-4'><Loading /></div>) : (
                    <div>
                        <div class="page-content">
                            <section class="row">
                                <div class="col-12 col-lg-9">
                                    <div class="row">
                                        <div class="col-6 col-lg-3 col-md-6">
                                            <div class="card">
                                                <div class="card-body px-3 py-4-5">
                                                    <div class="row">
                                                        <div class="col-md-4">
                                                            <div class="stats-icon purple">
                                                                <i class="iconly-boldChart"></i>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-8 text-center">
                                                            <h6 class="text-muted font-semibold">&nbsp;Issued &nbsp;Loans</h6>
                                                            <h6 class="font-extrabold mb-0">4</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-6 col-lg-3 col-md-6">
                                            <div class="card">
                                                <div class="card-body px-3 py-4-5">
                                                    <div class="row">
                                                        <div class="col-md-4">
                                                            <div class="stats-icon blue">
                                                                <i class="iconly-boldShield-Done"></i>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-8 text-center">
                                                            <h6 class="text-muted font-semibold">Issued Amount</h6>
                                                            <h6 class="font-extrabold mb-0">$5600</h6>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-6 col-lg-3 col-md-6">
                                            <div class="card">
                                                <div class="card-body px-3 py-4-5">
                                                    <div class="row">
                                                        <div class="col-md-4">
                                                            <div class="stats-icon green">
                                                                <i class="iconly-boldCategory"></i>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-8 text-center">
                                                            <h6 class="text-muted font-semibold">Ongoing Loans</h6>
                                                            <h6 class="font-extrabold mb-0">2</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-6 col-lg-3 col-md-6">
                                            <div class="card">
                                                <div class="card-body px-3 py-4-5">
                                                    <div class="row">
                                                        <div class="col-md-4">
                                                            <div class="stats-icon red">
                                                                <i class="iconly-boldInfo-Square"></i>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-8 text-center">
                                                            <h6 class="text-muted font-semibold">Repayed Amount</h6>
                                                            <h6 class="font-extrabold mb-0">$1000</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                                <div class="col-12 col-lg-3">
                                    <div class="card">
                                        <div class="card-body py-4 px-3">
                                            <div class="d-flex align-items-center">
                                                <div class="avatar avatar-xl">
                                                    <img src="assets/images/faces/1.jpg" alt="Face 1" />
                                                </div>
                                                <div class="ms-3 name">
                                                    <h5 class="font-bold">Piyaz Kisan</h5>
                                                    <h6 class="text-muted mb-0">@hacker132</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div class="card">
                            <div class="card-header">
                                <h4>Recent loanData</h4>
                            </div>
                            <div class="card-content pb-4">
                                <div class="recent-message d-flex px-4 py-3">
                                    <div class="avatar avatar-lg">
                                        <img src="assets/images/faces/4.jpg"/>
                                    </div>
                                    <div class="name ms-4">
                                        <h5 class="mb-1">Hank Schrader</h5>
                                        <h6 class="text-muted mb-0">@johnducky</h6>
                                    </div>
                                </div>
                                <div class="recent-message d-flex px-4 py-3">
                                    <div class="avatar avatar-lg">
                                        <img src="assets/images/faces/5.jpg"/>
                                    </div>
                                    <div class="name ms-4">
                                        <h5 class="mb-1">Dean Winchester</h5>
                                        <h6 class="text-muted mb-0">@imdean</h6>
                                    </div>
                                </div>
                                <div class="recent-message d-flex px-4 py-3">
                                    <div class="avatar avatar-lg">
                                        <img src="assets/images/faces/1.jpg"/>
                                    </div>
                                    <div class="name ms-4">
                                        <h5 class="mb-1">John Dodol</h5>
                                        <h6 class="text-muted mb-0">@dodoljohn</h6>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                                </div>
                            </section>
                        </div>

                        <div>

                            <section class="section">
                                <div class="row" id="table-bordered">
                                    <div class="col-12">
                                        <div class="card">
                                            <div class="card-header">
                                                <h4 class="card-title">Your Loans</h4>
                                            </div>
                                            {loading ? (<div className='text-center my-4'><Loading /></div>) :
                                                groupLoan.length == 0 ? (<div className='text-center my-4'>No Result</div>) :
                                                    (<div class="card-content">
                                                        <div class="table-responsive">
                                                            <table class="table table-bordered mb-0">
                                                                <thead>
                                                                    <tr>
                                                                        <th>ID</th>
                                                                        <th>Name</th>
                                                                        <th>Amount($)</th>
                                                                        <th>Issued Date</th>
                                                                        <th>STATUS</th>
                                                                        <th>ACTION</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    {loading ? (<div></div>) : (loanData.map(data =>
                                                                        <tr>
                                                                            <td class="text-bold-500"><Link to={`/loan-data?id=${data._id}`}>{data.loan_id}</Link></td>
                                                                            <td>{data.name}</td>
                                                                            <td class="text-bold-500">{data.loan_amount}</td>
                                                                            <td>{data.issueing_date}</td>
                                                                            <td>{data.loan_status == 0 ? (<span class="badge bg-warning">Pending</span>) :
                                                                                (<span class="badge bg-success">Active</span>)}</td>
                                                                            <td><button class="btn btn-primary">View</button></td>
                                                                        </tr>
                                                                    ))}
                                                                </tbody>
                                                            </table>
                                                            {loanData.length == 0 ? (<div className='text-center my-4'>No Result</div>) : (<div></div>)}
                                                            <div className='text-center my-10'><button className='btn btn-primary'>View more</button></div>
                                                        </div>
                                                    </div>)}
                                            
                                        </div>
                                    </div>
                                </div>
                            </section>

                        </div>
                    </div>
                )}

            </div>
        </>
    )
}
