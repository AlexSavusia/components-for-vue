<template>
  <div class="holiday-bg ">
    <div class="conffeti">
      <div class="container">
        <img src="https://cdn.yellowimages.com/images/xmas2022/Holiday.a7ed284d.png">
        <h1>2022 Holiday Contest</h1>
        <h3>
          This season, the prizes are insane. Once they're gone, they're gone. From Premium Memberships to $1,000 store credits!
          The Contest ends on January 15th, 2023.
        </h3>
        <button @click="scrollTo()">Spin to win!</button>
      </div>
    </div>
    <div id="spinning-circle">
      <img class="borders" src="https://cdn.yellowimages.com/images/xmas2022/borders.41c4f729.png">
      <img class="out" src="https://cdn.yellowimages.com/images/xmas2022/spinWheel.342630a4.png">
      <img class="center" src="https://cdn.yellowimages.com/images/xmas2022/spinCenter.614b423f.png">
    </div>
    <div class="right-hand floating">
      <img src="https://cdn.yellowimages.com/images/xmas2022/right-hand.9d7ae2de.png">
    </div>
    <div class="left-hand floating">
      <img src="https://cdn.yellowimages.com/images/xmas2022/left-hand.0646a514.png">
    </div>
  </div>
</template>
<script>
export default {
  name: "TopBanner",
  props: ['user', 'spin'],
  methods: {
    scrollTo() {
      const el = document.querySelector('#counter')
      console.log('this.spin.attempts_count', this.spin.attempts_count)
      if (this.user) {
        if(this.spin.attempts_count == 0) {
          window.scrollTo({
            top: el.offsetTop - 50,
            left: 0,
            behavior: 'smooth'
          })
        } else {
          window.location = '/spin'
        }
      } else {
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
    },
  },
}
</script>

<style lang="scss" scoped>
@import 'resources/js/assets/styles/_variables.scss';
.conffeti {
  background: url("https://cdn.yellowimages.com/images/xmas2022/Confetti.png");
  background-size: 1850px 2000px;
  background-position: center top;
  background-repeat: no-repeat;
  height: 100%;
  width: 100%;
}
.holiday-bg {
  background: linear-gradient(0deg, rgba(255,1,249,1) 1%, rgba(38,0,37,1) 47%, rgba(0,0,0,1) 100%);

  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 35px;
  padding-top: 64px;

  img {
    display: block;
    margin: 0 auto;
    align-self: center;
    width: 70%;
  }
  h1 {
    font-style: normal;
    font-weight: 700;
    font-size: 120px;
    text-align: center;
    background: -webkit-linear-gradient(213.97deg, #FF0000 63.92%, #FF00F8 120.7%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    @include media-breakpoint-down(lg) {
      font-size: 60px;
    }

  }
  h3 {
    margin-top: 40px;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    text-align: center;
    color: #FFFFFF;
    width: 50%;
  }
  button {
    display: block;
    border-radius: 69.72px;
    margin: 60px auto 90px;
    align-self: center;
    max-width: 432px;
    height: 100px;
    font-weight: 700;
    font-size: 38px;
    &:hover {
      background: #FF0E00;
      color: white;
    }
  }
  .right-hand {
    float: right;
    right: 0%;
    top: 105%;
    position: absolute;
    z-index: 9999;
    width: 30%;
    img {
      width: 100%;
    }
    @include media-breakpoint-down(lg) {
      right: 0%;
      top: 80%;
    }
  }

  .left-hand {
    float: left;
    left: 0%;
    top: 90%;
    position: absolute;
    z-index: 9999;
    width: 30%;
    img {
      width: 100%;
    }
    @include media-breakpoint-down(lg) {
      left: 0%;
      top: 75%;
    }
  }
}
#spinning-circle {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  overflow: hidden;
  img {
    &.borders {
      width: 1590px;
      height: 1300px;
      position: absolute;
      top: 0;
      z-index: 998;
      @include media-breakpoint-down(xl) {
        width: 1010px;
        height: 850px;
      }
    }
    &.out {
      animation: spinning-circle 35s infinite linear;
      margin-top: 190px;
      width: 1100px;
      height: 1100px;
      @include media-breakpoint-down(xl) {
        margin-top: 120px;
        width: 700px;
        height: 700px;
      }
    }
    &.center {
      animation: outspinning-circle 25s infinite linear;
      position: absolute;
      top: 205px;
      width: 1000px;
      height: 1000px;
      @include media-breakpoint-down(xl) {
        top: 40px;
        width: 850px;
        height: 850px;
      }
    }
  }
}
@-webkit-keyframes outspinning-circle {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
    transform-origin: center;
  }
  100% {
    -webkit-transform: rotate(-360deg);
    transform: rotate(-360deg);
    transform-origin: center;
  }
}
@-webkit-keyframes spinning-circle {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
    transform-origin: center;
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
    transform-origin: center;
  }
}

</style>
