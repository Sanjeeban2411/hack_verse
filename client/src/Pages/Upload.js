import React, {useState} from 'react'

const Upload = () => {
    const [term, setterm] = useState('')
    const [PDF, setPDF] = useState(null)
    const [loan_amount, setLoanAmount] = useState('')
    const [govID, setgovID] = useState('aadhar_card')
  return (
    <div id='main'>
            <div class="container loginContaine">
                <div class="title">Upload Details</div>
                <form action="#">
                    <div class="user_details login_details">

                        <div class="input_pox">
                            <span class="datails">Loan Amount</span>
                            <input type="number" placeholder="Enter Loan Amount" value={loan_amount} onChange={(e) => { setLoanAmount(e.target.value) }} required />
                        </div>
                        <div class="input_pox">
                            <span class="datails">Term</span>
                            <input type="text" placeholder="Enter Term Details" value={term} onChange={(e) => { setterm(e.target.value) }} required />
                        </div>
                        <div class="Remember_input_pox">
                            <div class="col-12">
                                <div class="form-group has-icon-left">
                                    <label for="first-name-icon">Upload PDF</label>
                                    <div class="position-relative">
                                        <input type="file" class="basic-filepond" name='pdf' onChange={(e) => { setPDF(e.target.files[0]) }} />
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

export default Upload