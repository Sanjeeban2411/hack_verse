import React from 'react'

export default function LoginForm() {
    return (
        <div>
            <div class="container loginContaine">
                <div class="title">Login</div>
                <form action="#">
                    <div class="user_details login_details">

                        <div class="input_pox">
                            <span class="datails">Username/phone/email</span>
                            <input type="text" placeholder="enter your details" required />
                        </div>
                        <div class="input_pox">
                            <span class="datails">Password</span>
                            <input type="text" placeholder="enter your Password" required />
                        </div>
                        <div class="Remember_input_pox">
                            <input type="checkbox" name="remember" id="remember" />
                            <label for="remember">Remember me</label>
                        </div>
                    </div>
                    <div class="button">
                        <input type="submit" value="Login" />
                    </div>
                </form>
            </div>
        </div>
    )
}
