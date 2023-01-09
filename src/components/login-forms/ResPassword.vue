<template>
    <div   class="auth" >
        <div class="inner-block">
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
      <h3>Reset password</h3>
  <form @submit.prevent="submit()">
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
          <div v-if="success && message" class="text-success">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM16.59 7.58L10 14.17L6.41 10.59L5 12L10 17L18 9L16.59 7.58ZM4 12C4 16.42 7.58 20 12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4C7.58 4 4 7.58 4 12Z" fill="black"/><mask id="mask0_0_62609" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="2" y="2" width="20" height="20"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM16.59 7.58L10 14.17L6.41 10.59L5 12L10 17L18 9L16.59 7.58ZM4 12C4 16.42 7.58 20 12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4C7.58 4 4 7.58 4 12Z" fill="white"/></mask><g mask="url(#mask0_0_62609)"><rect width="24" height="24" fill="#09825D"/></g></svg>
              <div>
                  <span>A password reset</span>
              </div>
          </div>
      </transition>
      <transition name="fade">
          <div v-if="!success" class="text-danger">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM13 13V7H11V13H13ZM13 17V15H11V17H13ZM4 12C4 16.42 7.58 20 12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4C7.58 4 4 7.58 4 12Z"/><mask id="mask0_0_63631" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="2" y="2" width="20" height="20"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM13 13V7H11V13H13ZM13 17V15H11V17H13ZM4 12C4 16.42 7.58 20 12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4C7.58 4 4 7.58 4 12Z" fill="white"/></mask><g mask="url(#mask0_0_63631)"><rect width="24" height="24" fill="#DC3545"/></g></svg>
              <div>
                  <span>Sorry, something went wrong.</span>
                  Please try again later or contact our Support team.
              </div>
          </div>
      </transition>
    <div class="form-group reset">
        <input type="hidden" name="token" value="{{ token }}">
        <input type="text"  placeholder="Email"  :class="{ errors: error || errorEmail }" v-model="fields.email"/>
        <div class="password-input" :class="{ errors: !errorPass }">
            <input :type="this.type"  placeholder="New password"  v-model="fields.password"/>
            <span :class="type" @click="showPassword"></span>
        </div>
        <div class="password-input" :class="{ errors: !errorPass }">
            <input :type="this.type"  placeholder="Re-enter new password" @keyup="checkPass()"  v-model="checkPassword"/>
            <span :class="type" @click="showPassword"></span>
        </div>
        <div class="error-message">
        <span v-if="error || errors || errorMessage" class="error">{{error}} {{errors}}</span>
        </div>
    </div>
      <button type="submit" :disabled='isDisabled' @onkeydown="validateEmail(fields.email)" class="btn"><span v-if="this.loaded">Send recover</span>
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
      <div class="policy-link">All fields are required. By creating an account you agree <a href="https://yellowimages.com/terms/">Terms & Conditions</a> and our <a href="https://yellowimages.com/privacy-policy/"> Privacy Policy.</a></div>
  </form>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            fields: {},
            errors: '',
            error: '',
            errorEmail: false,
            errorMessage: '',
            success: true,
            loaded: true,
            errorPass:true,
            isDisabled: false,
            message:false,
            type: 'password',
            checkPassword:'',
            csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
        }
    },
    props: {
        token: String,
    },
    methods: {
        checkPass() {
            if (this.fields.password === this.checkPassword) {
                this.errorPass = true
                this.errorMessage = '';
            } else {
                this.errorPass = false
                this.errorMessage = 'Password must be the same';
            }
        },
        showPassword() {
            if(this.type === "password") {
                this.type = "text"
            } else {
                this.type = "password"
            }
        },
        submit() {
            this.validateEmail(this.fields.email)
            if (this.loaded && !this.isDisabled) {
                this.loaded = false;
                this.error = '';
                this.errors = '';
                axios.post('password/reset', {
                    token: this.token,
                    email: this.fields.email,
                    password: this.fields.password,
                }, {
                    headers: {
                        'X-Requested-With' : 'XMLHttpRequest',
                        'X-CSRF-TOKEN': this.token,
                        "Access-Control-Allow-Origin": "*",
                        'Access-Control-Allow-Credentials': 'true',
                        "Access-Control-Allow-Methods": "HEAD, OPTIONS, GET, POST, PUT, DELETE",
                        "Access-Control-Allow-Headers": ", X-Requested-With, Content-Type, Accept, Authorization, X-Auth-Token"
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
                        if ( response.data.errors.password) {
                            this.errorMessage = response.data.errors.password
                            this.errorPass = true
                        }
                    } else {
                        this.loaded = true;
                        this.success = true;
                        this.message = true;
                        setTimeout(function () {   window.location = response.request.responseURL }.bind(this), 4000)
                    }
                }).catch(error => {
                    console.log(error)
                    this.success = false;
                    this.loaded = true;
                });
            }
        },
        validateEmail(value){
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value))
            {
                this.error = false;
                this.errorMessage = '';
                this.isDisabled = false
            } else{
                this.error = true
                this.errorMessage = 'The name of the mail must have an @ sign';
                this.isDisabled = true
                setTimeout(function () {  this.isDisabled = false }.bind(this), 100)
            }
        }
    }
}
</script>
