<template>
    <div   class="auth" >
        <div class="inner-block reg">
            <div class="exit-cross">
                <a href="https://yellowimages.com/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path d="M14.25 4.8075L13.1925 3.75L9 7.9425L4.8075 3.75L3.75 4.8075L7.9425 9L3.75 13.1925L4.8075 14.25L9 10.0575L13.1925 14.25L14.25 13.1925L10.0575 9L14.25 4.8075Z" fill="black"/>
                        <mask id="mask0_0_64210" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="3" y="3" width="12" height="12">
                            <path d="M14.25 4.8075L13.1925 3.75L9 7.9425L4.8075 3.75L3.75 4.8075L7.9425 9L3.75 13.1925L4.8075 14.25L9 10.0575L13.1925 14.25L14.25 13.1925L10.0575 9L14.25 4.8075Z" fill="white"/>
                        </mask>
                        <g mask="url(#mask0_0_64210)">
                            <rect width="18" height="18" fill="black"/>
                        </g>
                    </svg>
                </a>
            </div>
            <h3>Create your free account</h3>
            <p :class="{ success: !success }">Already have an Account? <span style="text-decoration: underline; cursor: pointer" @click="relocate()">Login</span></p>
            <form @submit.prevent="submit">
                <transition name="fade">
                    <div v-if="!success" class="text-danger">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM13 13V7H11V13H13ZM13 17V15H11V17H13ZM4 12C4 16.42 7.58 20 12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4C7.58 4 4 7.58 4 12Z"/><mask id="mask0_0_63631" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="2" y="2" width="20" height="20"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM13 13V7H11V13H13ZM13 17V15H11V17H13ZM4 12C4 16.42 7.58 20 12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4C7.58 4 4 7.58 4 12Z" fill="white"/></mask><g mask="url(#mask0_0_63631)"><rect width="24" height="24" fill="#DC3545"/></g></svg>
                        <div>
                            <span>Sorry, something went wrong.</span>
                            Please try again later or contact our <a href="https://help.yellowimages.com/hc/en-us">Support team.</a>
                        </div>
                    </div>
                </transition>
                <transition name="fade">
                    <div v-if="errorEmail" class="text-danger">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM13 13V7H11V13H13ZM13 17V15H11V17H13ZM4 12C4 16.42 7.58 20 12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4C7.58 4 4 7.58 4 12Z"/><mask id="mask0_0_63631" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="2" y="2" width="20" height="20"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM13 13V7H11V13H13ZM13 17V15H11V17H13ZM4 12C4 16.42 7.58 20 12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4C7.58 4 4 7.58 4 12Z" fill="white"/></mask><g mask="url(#mask0_0_63631)"><rect width="24" height="24" fill="#DC3545"/></g></svg>
                        <div>
                            <span>Sorry.</span>
                            An account is already registered with your email address. <span style="text-decoration: underline; cursor: pointer" @click="relocate()">Sing In</span>
                        </div>
                    </div>
                </transition>
                <div class="form-group  field">
                    <input type="text" placeholder="First name" :class="{ errors: errorFisrt }" @keyup="nameValidation(fields.first_Name)" v-model="fields.first_Name"/>
                    <input type="text" placeholder="Last name" :class="{ errors: errorSecond }" @keyup="secondNameValidation(fields.last_Name)"  v-model="fields.last_Name"/>
                    <input type="text"  placeholder="Email"  :class="{ errors: errorEmail }" v-model="fields.email"/>
                    <div class="password-input" :class="{ errors: !errorPass }">
                        <input :type="this.type"  placeholder="Choose password"  v-model="fields.password"/>
                        <span :class="type" @click="showPassword"></span>
                    </div>
                    <div class="password-input" :class="{ errors: !errorPass }">
                        <input :type="this.type"  placeholder="Confirm password" @keyup="checkPass()"  v-model="checkPassword"/>
                        <span :class="type" @click="showPassword"></span>
                    </div>
                </div>
                <div class="error-message">
                    <span v-if=" !errorPass || errors || errorMessage" class="error">{{errorMessage}} {{errors}}</span>
                </div>
                <button type="submit" :disabled='isDisabled' @onkeydown="validateEmail(fields.email)" class="btn"><span v-if="this.loaded">Create Your Free Account</span>
                    <div v-if="!this.loaded" class="load">
                        <span>Please wait a sec:</span>
                        <div  class="loading">
                            <div class="spinner">
                                <div class="mask">
                                    <div class="maskedCircle"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </button>
                <div class="social-icons">
                    <div class="title-line">
                        <div class="line"></div>
                        <p>Or continue with</p>
                        <div class="line"></div>
                    </div>
                    <ul>
                        <li>
                            <a :href="this.google">
                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M23.52 12.2729C23.52 11.4219 23.444 10.6039 23.302 9.81787H12V14.4599H18.458C18.18 15.9599 17.335 17.2309 16.064 18.0819V21.0929H19.942C22.211 19.0039 23.52 15.9269 23.52 12.2729Z" fill="#4285F4"/><path fill-rule="evenodd" clip-rule="evenodd" d="M11.999 23.9998C15.239 23.9998 17.955 22.9258 19.941 21.0928L16.063 18.0818C14.988 18.8018 13.614 19.2278 11.999 19.2278C8.87402 19.2278 6.22802 17.1168 5.28402 14.2798H1.27502V17.3888C3.25002 21.3108 7.30802 23.9998 11.999 23.9998Z" fill="#34A853"/><path fill-rule="evenodd" clip-rule="evenodd" d="M5.285 14.2798C5.045 13.5598 4.909 12.7908 4.909 11.9998C4.909 11.2088 5.045 10.4398 5.285 9.71984V6.61084H1.276C0.464 8.23084 0 10.0638 0 11.9998C0 13.9358 0.464 15.7688 1.276 17.3888L5.285 14.2798Z" fill="#FBBC05"/><path fill-rule="evenodd" clip-rule="evenodd" d="M11.999 4.773C13.761 4.773 15.343 5.378 16.586 6.567L20.028 3.125C17.95 1.189 15.234 0 11.999 0C7.30802 0 3.25002 2.689 1.27502 6.611L5.28402 9.72C6.22802 6.884 8.87402 4.773 11.999 4.773Z" fill="#EA4335"/></svg>
                            </a>
                        </li>
                        <li>
                            <a :href="this.facebook">
                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none"><circle cx="13" cy="13" r="13" fill="#1777F2"/><path d="M17.2271 3.99023H14.3473C12.6383 3.99023 10.7374 4.70901 10.7374 7.18625C10.7458 8.04941 10.7374 8.87607 10.7374 9.80642H8.76038V12.9525H10.7986V22.0096H14.544V12.8927H17.0161L17.2397 9.79759H14.4794C14.4794 9.79759 14.4856 8.42074 14.4794 8.0209C14.4794 7.04195 15.4981 7.09801 15.5594 7.09801C16.0441 7.09801 16.9866 7.09942 17.2285 7.09801V3.99023H17.2271Z" fill="white"/></svg>
                            </a>
                        </li>
                        <li>
                            <a :href="this.apple">
                                <svg class="apple" xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.1164 0.0153894C15.1604 0.596081 15.2791 2.16404 13.8293 3.88463C12.7791 5.11164 11.5039 5.82963 10.1054 5.72247C9.98753 4.24363 10.5394 2.93089 11.4771 1.86998C12.329 0.878731 13.8239 0.0750136 15.1152 0L15.1164 0.0153894ZM19.5411 8.13898C17.7407 9.23204 16.8513 10.7162 16.862 12.6827C16.862 12.6855 16.8619 12.6906 16.8617 12.6979C16.8545 12.9575 16.7702 16.0069 20.168 17.6068C19.5143 19.5786 17.2746 23.9615 14.6705 23.999C13.941 23.999 13.3574 23.7738 12.7557 23.5417C12.1157 23.2947 11.4552 23.0399 10.5769 23.0399C9.6262 23.0399 8.91068 23.3112 8.24035 23.5653C7.67154 23.7809 7.13528 23.9842 6.51547 23.999C3.93286 24.0794 1.45741 19.2571 0.771569 17.2906C0.25719 15.7939 0 14.3437 0 12.9399C0 8.1872 3.17736 5.85106 6.16719 5.80284C6.99607 5.80284 7.95511 6.14935 8.77423 6.4453C9.38477 6.66589 9.91757 6.85839 10.2608 6.85839C10.5383 6.85839 10.9912 6.69086 11.5469 6.4853C12.5147 6.12731 13.7944 5.65396 15.0027 5.74926C17.012 5.90465 18.5337 6.69765 19.5411 8.13898Z" fill="black"/></svg>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="policy-link">All fields are required. By creating an account you agree <a href="https://yellowimages.com/terms/">Terms & Conditions</a> and our <a href="https://yellowimages.com/privacy-policy/"> Privacy Policy.</a></div>
            </form>
        </div>
    </div>
</template>
<script>
import axios from "axios";

export default {
    data() {
        return {
            response:'',
            cookies: [],
            fields: {},
            errorFisrt: false,
            errorSecond: false,
            errorEmail: false,
            errors: '',
            errorPass: true,
            errorMessage:'',
            success: true,
            loaded: true,
            isDisabled: false,
            type: 'password',
            checkPassword:'',
            csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
        }
    },
    props: {
        google: String,
        facebook: String,
        apple: String,
        token: String
    },
    methods: {
        checkPass() {
            if (this.fields.password === this.checkPassword) {
                this.errorPass = true
                this.errorMessage = '';
            } else {
                this.errorPass = false
                this.errorMessage = 'Passwords do not match';
            }
        },
        submit() {
            this.validateEmail(this.fields.email)
            if (this.loaded && !this.isDisabled) {
                this.loaded = false;
                this.errors = '';
                axios.post('/registration', {
                    _token: this.csrf,
                    email: this.fields.email,
                    first_name: this.fields.first_Name,
                    last_name: this.fields.last_Name,
                    password: this.fields.password,
                }, {
                    headers: {
                        'X-Requested-With' : 'XMLHttpRequest',
                        'X-CSRF-TOKEN': this.token,
                        "Access-Control-Allow-Origin": "*",
                        'Access-Control-Allow-Credentials': 'true',
                        "Access-Control-Allow-Methods": "HEAD, OPTIONS, GET, POST, PUT, DELETE",
                        "Access-Control-Allow-Headers": ", X-Requested-With, Content-Type, Accept, Authorization, X-Auth-Token",
                    }
                }).then(response => {
                    if (response.data.message) {
                        this.fields = {}; //Clear input fields.
                        this.loaded = true;
                        this.errors = response.data.message || '';
                        if (!response.data.errors)  {
                            this.success = false;
                        } else {
                            this.loaded = true;
                            this.success = true;
                        }
                        if ( response.data.errors.email) {
                            this.errorMessage = response.data.errors.email
                            this.errorEmail = true
                        }
                        if ( response.data.errors.first_name) {
                            this.errorMessage =  response.data.errors.first_name
                            this.errorFisrt = true
                        }
                        if ( response.data.errors.last_name) {
                            this.errorMessage =  response.data.errors.last_name
                            this.errorSecond = true
                        }
                        if ( response.data.errors.password) {
                            this.errorMessage =  response.data.errors.password
                            this.errorPass = false
                        }
                    } else if (response.data.redirect.original) {
                        if (response.data.redirect.original.cookies) {
                            for (let i in response.data.redirect.original.cookies) {
                                if (response.data.redirect.original.cookies.hasOwnProperty(i)) {
                                    document.cookie = "cookie"+ i + ";" + response.data.redirect.original.cookies[i].name + "=" + response.data.redirect.original.cookies[i].value + "; minutes=" + response.data.redirect.original.cookies[i].time + "; path=" + response.data.redirect.original.cookies[i].path + "; domain=" +  response.data.redirect.original.cookies[i].domain
                                }
                            }
                        }
                        window.location = response.data.redirect.original.redirect
                    } else {
                        window.location =  response.request.responseURL
                    }
                }).catch(error => {
                    console.log(error)
                    this.success = false;
                    this.loaded = true;
                });
            }
        },
        showPassword() {
            if(this.type === "password") {
                this.type = "text"
            } else {
                this.type = "password"
            }
        },
        relocate() {
            window.location = '/auth/login'
        },
        validateEmail(value){
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value))
            {
                this.errorEmail = false
                this.errorMessage = '';
                this.isDisabled = false
            } else{
                this.errorEmail = true
                this.errorMessage = 'The name of the mail must have an @ sign';
                this.isDisabled = true
                setTimeout(function () {  this.isDisabled = false }.bind(this), 100)
            }
        },
        nameValidation(value){
            if(/^[a-zA-Z]+(?:-[a-zA-Z]+)*$/.test(value) || value === ""){
                this.errorFisrt = false
                this.errorMessage = '';
                this.isDisabled = false
            }else{
                this.errorFisrt = true
                this.errorMessage = 'This field can only contain characters';
                this.isDisabled = true
                setTimeout(function () {  this.isDisabled = false }.bind(this), 100)
            }
        },
        secondNameValidation(value){
            if(/^[a-zA-Z]+(?:-[a-zA-Z]+)*$/.test(value) || value === ""){
                this.errorSecond = false
                this.errorMessage = '';
                this.isDisabled = false
            }else{
                this.errorSecond = true
                this.errorMessage = 'This field can only contain characters';
                this.isDisabled = true
                setTimeout(function () {  this.isDisabled = false }.bind(this), 100)
            }
        }
    }
}
</script>
