<template>
  <footer class="footer" id="footer">
    <div class="container inner">
      <div class="column">
        <div class="dropdown"  aria-label="Search for option">
          <dropdownFooter  class="header__browse">
            Browse
          </dropdownFooter>
        </div>
        <div class="footer__links d-md-block d-none">
          <a class="footer__link" v-for="(link, linkIndex) in links" :href="link.to">{{ link.title }}</a></div>
      </div>
      <div class="footer__logo">
        <svg viewBox="0 0 200 200" class="svg-icon svg-fill footer__icon" data-v-6c8cbadf="" style="width: 27px; height: 27px;"><path fill="currentColor" stroke="none" pid="0" _fill="currentColor" d="M186.1 101.1c0 37.3-16.5 64.2-36.7 85.9-7.4 4.2-15.4 7.5-23.8 9.7-5-2.8-10.9-1.6-19.1 3.1-2.2.1-4.4.2-6.6.2-4.5 0-9-.3-13.4-.9-3.4-6.4-8-13.2-26.6-7.4-4.8-2.1-9.3-4.5-13.7-7.3 4.8-12.7-29.4-47.3-29.4-82.8 0-55.2 48.7-93.1 83.1-91.8 23.2.9 39.2 12.6 61.4 11.3 1.8 1.4 3.6 2.8 5.3 4.4 6.5 24.9 19.5 46 19.5 75.6z"></path><path pid="1" d="M46.3 184.4c21.4-18.9 46-33.3 66.6-39.8 6.9-18.3 12.9-37.3 17.7-54-15.3 30.2-37.2 55.8-50.7 55.6-4.2 0-13.2-8.8-13.4-23.5 2.9-27.4 33.8-70 38-88.5-15.2 6.7-54 43.8-61.9 81.4-.5 2.4 3.6 5.5 5.7 6.4-2 3-7.6 1.3-11-.5-6.7-3.6-11.7-13.9-10.9-22.5 9.2-34 46.1-74.5 73.1-76 6.9-.2 18.5 11.6 18.2 19.1 0 15.6-38.1 79.2-35.4 87.5 14-5.6 40-36.6 54.7-67.7 1.2-3.7 6.9-22.8 9.8-28.4 4.8-9.1 10.4-11.7 14.6-12.2C144.5 7.9 123.2 0 100 0 44.8 0 0 44.8 0 100c0 35.5 18.5 66.6 46.3 84.4zm80.3-26.7c-6.1 15.8-12.9 30.4-20 42.1 6.6-.4 12.9-1.5 19.1-3.1 9.5-17.9 16.6-33.4 18.6-40.7-3.7-1.1-9.9-.5-17.7 1.7zm-40 41.4c6.2-9.5 12-20.8 17.5-33-13.2 6-28.3 14.6-44.1 25.5 8.3 3.7 17.3 6.3 26.6 7.5z"></path><path pid="2" d="M166.6 25.5c-6.4 15.4-17.5 60.2-24.8 86.1-2.7 9.6-5.8 19.5-9.1 29.2 1.6-.1 3.1-.1 4.6 0 14 1.7 23.5 17.1 13.3 43.1l-1.2 3c30.2-17.2 50.6-49.7 50.6-86.9 0-29.6-12.9-56.2-33.4-74.5z"></path></svg>
       <p>GetYellow</p>
      </div>
    </div>
  </footer>
</template>

<script>
import dropdownFooter from './dropdownFooter.vue'

export default {
  name: "Footer",
  components: {
    dropdownFooter
  },
  data: () => ({
    selectedLink: null,
    links: [
      {
        title: 'Help',
        to: 'https://yellowimages.com/contact-us',
      },
      {
        title: 'Terms',
        to: 'https://yellowimages.com/terms'
      },
      {
        title: 'Privacy',
        to: 'https://yellowimages.com/privacy-policy'
      },
    ]
  }),
}
</script>
<style lang="scss" scoped>
@import 'resources/js/assets/styles/_variables.scss';
.footer {
  display: flex;
  align-items: center;
  flex: 0 0 auto;
  height: 42px;
  font-size: 12px;
  font-weight: 700;
  white-space: nowrap;
  position: relative;
  left: 0;
  bottom: 0;
  width: 100%;
  z-index: 10000;
  background-color: #201f22!important;

  .inner {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    .column {
      display: flex;
      align-items: center;
      flex-direction: row;
    }
    .dropdown {
      background: hsla(0,0%,100%,.1);
      border: 0 solid #fff;
      border-radius: 8px;
      display: flex;
      align-items: center;
      flex-direction: row;
      gap: 10px;
    }
  }
  .v-select {
    margin: 0 12px 0 0;
    display: inline-flex;
    position: relative;
    font-weight: 700;
    font-size: 12px;
    line-height: 1.2;
    letter-spacing: -.46px;
    color: white;
    @include media-breakpoint-down(md) {
      margin: 0 8px 0 0;
    }
  }
  &__links {
    letter-spacing: -0.45px;
    margin: 0 10px 0 5px;
  }
  &__link {
    color: $white;
    margin: 0 17px;
    &:hover {
      color: $blue!important;
    }
  }

  &__logo {
    display: inline-flex;
    letter-spacing: -0.71px;
    color: #000;
    fill:  white;
    padding: 2px 0 0 0;
    gap: 5px;
    p {
      color: white;
      margin: 5px auto;
    }

    @include media-breakpoint-down(md) {
      margin: 0 0 0 auto;
    }
  }


  &_dark {
    background: #201F22 !important;
  }

  &_dark &__link {
    color: $white;
    &:hover {
      color: $blue
    }
  }

  &_dark &__logo {
    color: $white;
  }
}
</style>
