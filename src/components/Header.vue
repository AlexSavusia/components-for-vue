<template>
  <header class="header d-flex align-items-stretch" id="header">
    <div class="container header__container d-flex align-items-center"><a class="header__logo" href="https://yellowimages.com/">
      <svg viewBox="0 0 200 200" class="svg-icon svg-fill" data-v-ca22ec14="" style="width: 42px; height: 42px;"><path fill="currentColor" stroke="none" pid="0" _fill="currentColor" d="M186.1 101.1c0 37.3-16.5 64.2-36.7 85.9-7.4 4.2-15.4 7.5-23.8 9.7-5-2.8-10.9-1.6-19.1 3.1-2.2.1-4.4.2-6.6.2-4.5 0-9-.3-13.4-.9-3.4-6.4-8-13.2-26.6-7.4-4.8-2.1-9.3-4.5-13.7-7.3 4.8-12.7-29.4-47.3-29.4-82.8 0-55.2 48.7-93.1 83.1-91.8 23.2.9 39.2 12.6 61.4 11.3 1.8 1.4 3.6 2.8 5.3 4.4 6.5 24.9 19.5 46 19.5 75.6z"></path><path pid="1" d="M46.3 184.4c21.4-18.9 46-33.3 66.6-39.8 6.9-18.3 12.9-37.3 17.7-54-15.3 30.2-37.2 55.8-50.7 55.6-4.2 0-13.2-8.8-13.4-23.5 2.9-27.4 33.8-70 38-88.5-15.2 6.7-54 43.8-61.9 81.4-.5 2.4 3.6 5.5 5.7 6.4-2 3-7.6 1.3-11-.5-6.7-3.6-11.7-13.9-10.9-22.5 9.2-34 46.1-74.5 73.1-76 6.9-.2 18.5 11.6 18.2 19.1 0 15.6-38.1 79.2-35.4 87.5 14-5.6 40-36.6 54.7-67.7 1.2-3.7 6.9-22.8 9.8-28.4 4.8-9.1 10.4-11.7 14.6-12.2C144.5 7.9 123.2 0 100 0 44.8 0 0 44.8 0 100c0 35.5 18.5 66.6 46.3 84.4zm80.3-26.7c-6.1 15.8-12.9 30.4-20 42.1 6.6-.4 12.9-1.5 19.1-3.1 9.5-17.9 16.6-33.4 18.6-40.7-3.7-1.1-9.9-.5-17.7 1.7zm-40 41.4c6.2-9.5 12-20.8 17.5-33-13.2 6-28.3 14.6-44.1 25.5 8.3 3.7 17.3 6.3 26.6 7.5z"></path><path pid="2" d="M166.6 25.5c-6.4 15.4-17.5 60.2-24.8 86.1-2.7 9.6-5.8 19.5-9.1 29.2 1.6-.1 3.1-.1 4.6 0 14 1.7 23.5 17.1 13.3 43.1l-1.2 3c30.2-17.2 50.6-49.7 50.6-86.9 0-29.6-12.9-56.2-33.4-74.5z"></path></svg>
      <span>GetYellow</span>
    </a>
      <div class="header__center header__browse align-items-center">
        <dropdown  class="header__browse">
          Browse
        </dropdown>
      </div>
      <div class="header__right d-flex align-items-center">
        <a v-if="this.role === 'Author'" href=" https://yellowimages.com/yin/products/form"  class="header__login off">
          Upload Items
        </a>
        <a v-if="this.plan" href="https://yellowimages.com/yellow-ticket"  class="header__login off">
          Make a Deposit
        </a>
        <a v-if="!auth" href="https://yellowimages.com/yellow-ticket"  class="header__login off">
          Get 90% — OFF
        </a>
        <button v-if="!auth" @click="logIn()" class="header__login">
          Sign In
        </button>
        <div v-else class="header__item" id="header-user" data-ticketer="">
          <div id="header-avatar" class="header__avatar" data-uid="156">
            <dropdownUser :user="user" :name="this.name" :src="this.img">
            </dropdownUser>
          </div>
          <div class="header__item">
            <a href="https://yellowimages.com/my-account/edit-account#message" id="header-messages" class="header__messages">
              <svg width="24" height="24"><path fill="currentColor" d="M20 4H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5-8-5V6l8 5 8-5v2Z"></path></svg>
              <div class="header__led"></div>
            </a>
          </div>
        </div>
        <dropdownDotted></dropdownDotted>
      </div>
    </div>
  </header>
</template>
<script>
import dropdown from './dropdown.vue'
import dropdownUser from './dropdownUser.vue'
import dropdownDotted from './dropdownDotted.vue'
export default {
  name: "Header",
  components: {
    dropdown,
    dropdownDotted,
    dropdownUser
  },
  data() {
    return {
      auth: false,
      role: '',
      img: '',
      name: '',
      plan:'',
    }
  },
  props: ['user'],
  mounted() {
    if (this.user) {
      this.auth = true
      this.img = this.user.ava
      this.name = this.user.display_name
      if (this.user.plan) {
        this.plan = true
      }
      if(this.user.type) {
        this.role = this.user.type
      }
    }

    // const user =  JSON.parse(JSON.stringify(this.user))
  },
  methods: {
    logIn() {
      axios.get('/sso',{}, { headers: {
          'X-Requested-With' : 'XMLHttpRequest',
          "Access-Control-Allow-Origin": "*",
          'Access-Control-Allow-Credentials': 'true',
          "Access-Control-Allow-Methods": "HEAD, OPTIONS, GET, POST, PUT, DELETE",
          "Access-Control-Allow-Headers": ", X-Requested-With, Content-Type, Accept, Authorization, X-Auth-Token",
        }
      }).then(response => {
        window.location = response.data.redirect_url
      }).catch(error => {
        console.log(error)
      });
    }
  }
}
</script>
<style lang="scss" scoped>
@import 'resources/js/assets/styles/_variables.scss';
.header {
  flex: 0 0 auto;
  background: $white;
  margin: 0;
  height: 62px;
  border-bottom: 1px solid #e2e5e9;

  font-size: 14px;
  line-height: 1.2;
  white-space: nowrap;
  position: fixed;
  left: 0;
  width: 100%;
  top: 0;
  z-index: 10000;

  @include media-breakpoint-down(md) {
    border: 0;
    height: 58px;
  }

  &__container {
    max-width: 100%;
    padding: 0 60px;
    @include media-breakpoint-down(xxl) {
      padding: 0 20px;
    }
  }

  // Main logo with sitename
  &__logo {
    align-self: stretch;
    display: flex;
    align-items: center;
    font-weight: 700;
    font-size: 19px;
    letter-spacing: -1.05px;
    color: $black;

    &:hover {
      color: $black;
    }

    span {
      margin: 0 0 -2px;
    }
    span {
      @include media-breakpoint-down(md) {
      display: none;
      }
    }
    .svg-icon {
      color: $black;
      fill: $yellow;
      margin: 0 15px 0 0;


      &:hover {
        fill: $black;
        color: $yellow;
      }
    }
  }

  // Center
  &__center {
    white-space: normal;
    position: relative;
    margin: 0 0 0 110px;
    display: flex;

    @include media-breakpoint-down(xl) {
      margin: 0 0 0 100px;
    }
    @include media-breakpoint-down(lg) {
      margin: 0 0 0 50px;
    }
  }
  &__browse {
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    cursor: pointer;
    @include media-breakpoint-down(md) {
      display: none;
    }
    &:hover {
      transition: all 150ms linear;
      color: $blue;
      fill: $blue;
    }
  }
  // Right part
  &__right {
    white-space: normal;
    margin: 0 0 0 auto;
  }

  &__link {
    display: flex;
    align-items: center;
    font-weight: $font-weight-bold;
    position: relative;

    .svg-icon {
      margin: -1px 6px 0 0;
    }
  }
  &__item {
    align-items: center;
    display: flex;
    margin: 0 0 0 12px;
    position: relative;
    a {
      display: inline-flex;
      justify-content: center;
      letter-spacing: 0;
      position: relative;
      padding: 0 16px;
      svg {
        color: inherit;
        flex: 0 0 24px;
        margin: 0;
      }
    }
  }
  &__login {
    display: block;
    margin: 8px 0 8px 12px;
    height: 42px;
    padding: 0 15px;
    cursor: pointer;
    transition: all 150ms linear;
    text-align: center;
    background: #000;
    width: 85px;
    color: $white;
    border: none;
    border-radius: 28px;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: -.4px;
    &.off {
      width: 120px;
      background-color: #fffb1f;
      border-color: #fffb1f;
      color: black;
      display: flex;
      justify-content: space-around;
      align-items: center;
      &:hover {
        transition: all 150ms linear;
        background: $black;
        color: white;
      }
    }
    &:hover {
      transition: all 150ms linear;
      background: $yellow;
      color: $black;
    }
  }
  &__badge {
    position: absolute;
    top: -6px;
    left: 100%;
    background: $yellow;
    color: $black;

    font-size: 8px;
    padding: 2px 5px;
    border-radius: 999px;
  }

  &__select {
    margin: 0 60px 0 0;
    transition: color .2s;

    &:last-child {
      margin: 0;
    }
  }

  .dropdown {
    position: relative;
    height: 100%;
    width: 42px;
    display: flex;
    align-items: center;
  }
  // Markets dropdown & burger
  &__markets {
    margin: 0 0 0 12px;
    .dropdown__activator {
      position: relative;
      height: 32px;
      width: 32px;
      cursor: pointer;
      white-space: normal;
      font-size: 0;
      padding: 8px 4px 4px 8px;
      border-radius: 6px;
      background: #fffb1f;
      transition: background .2s ease;
      &:hover:not(.is-opened  ) {
        .header__dot:nth-child(odd):not(:nth-child(5)) {
          background: $yellow;
        }
      }
      &.is-opened {
        background: $black;

        .header__dot:nth-child(odd) {
          background: $white;
        }
      }
    }
  }

  &__dot {
    display: inline-block;
    vertical-align: top;

    width: 7px;
    height: 7px;
    margin: 0 3px 3px 0;
    border-radius: 100%;

    transition: background .2s ease;
    background: $black;
  }
}
</style>
