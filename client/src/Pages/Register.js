import React from 'react'

export default function Register() {
    return (
        <div>
            <div class="container">
                <div class="title">Registation</div>
                <form action="#">
                    <div class="user_details">
                        <div class="input_pox">
                            <span class="datails">First Name</span>
                            <input type="text" placeholder="enter your First name" required />
                        </div>
                        <div class="input_pox">
                            <span class="datails">Middle Name</span>
                            <input type="text" placeholder="enter your middle name"  />
                        </div>
                        <div class="input_pox">
                            <span class="datails">Last Name</span>
                            <input type="text" placeholder="enter your Last name" required />
                        </div>
                        <div class="input_pox">
                            <span class="datails">Username</span>
                            <input type="text" placeholder="enter your Username" required />
                        </div>
                        <div class="input_pox">
                            <span class="datails">Email</span>
                            <input type="text" placeholder="enter your Email" required />
                        </div>
                        <div class="input_pox">
                            <span class="datails">Phone Number</span>
                            <input type="text" placeholder="enter your Phone" required />
                        </div>
                        <div class="input_pox">
                            <span class="datails">Password</span>
                            <input type="text" placeholder="enter your Password" required />
                        </div>
                        <div class="input_pox">
                            <span class="datails">Confirm Password</span>
                            <input type="text" placeholder="Confirm your Password" required />
                        </div>

                        {/* Address */}
                        <div class="input_pox">
                            <span class="datails"><h3>Address</h3></span>
                        </div>
                        <div class="input_pox">
                            <span class="datails"></span>
                        </div>
                        <div class="input_pox">
                            <span class="datails">Street</span>
                            <input type="text" placeholder="enter your Street" required />
                        </div>
                        <div class="input_pox">
                            <span class="datails">Locality</span>
                            <input type="text" placeholder="enter your Locality" required />
                        </div>
                        <div class="input_pox">
                            <span class="datails">district</span>
                            <input type="text" placeholder="enter district name" required />
                        </div>
                        <div class="input_pox">
                            <span class="datails">Pin code</span>
                            <input type="text" placeholder="enter Pin code" required />
                        </div>

                        {/* Account Address */}
                        <div class="input_pox">
                            <span class="datails"><h3>Wallet Address</h3></span>
                        </div>
                        <div class="input_pox">
                            <span class="datails"></span>
                        </div>
                        <div class="input_pox">
                            <span class="datails">Address {'(eg. 0x9...)'}</span>
                            <input type="text" placeholder="enter your Wallet address" required />
                        </div>
                    </div>
                    <div class="gender_details">
                        <input type="radio" name="gender" id="dot-1" />
                        <input type="radio" name="gender" id="dot-2" />
                        <input type="radio" name="gender" id="dot-3" />
                        <span class="gender_title"> Gender</span>
                        <div class="category">
                            <label for="dot-1">
                                <span class="dot one"></span>
                                <span class="gender">Mail</span>
                            </label>
                            <label for="dot-2">
                                <span class="dot two"></span>
                                <span class="gender">Femail</span>
                            </label>
                            <label for="dot-3">
                                <span class="dot three"></span>
                                <span class="gender">Perer not to say</span>
                            </label>
                        </div>
                    </div>
                    <div class="button">
                        <input type="submit" value="Register" />
                    </div>
                </form>
            </div>
        </div>
    )
}
