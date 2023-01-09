<template>
  <div id="counter" class="black-bg">
    <h1>
      Spin the Fortune Wheel!
      <br> Once the ticker lands on a prize, it's yours!
    </h1>
    <section class="container" >
      <div class="block gradient  scrollable" >
        <div class="column oneGradient-background" >
          <div class="inner-block ">
            <div class="section">
              <h3 class="title">How to get more spins</h3>
              <div class="content">Every product you purchase on Yellow Images until January 15th gives you one token. Tokens can be redeemed to spin the wheel and win amazing prizes! More spins, more wins.
              </div>
            </div>
            <div class="footer" >
              <a @click="rules" class="button">Official rules</a>
            </div>
          </div>
        </div>
        <div id="timer" class="column twoGradient-background" >
          <div class="inner-block ">
            <div class="section">
              <h3 class="title">Spin for FREE once a day</h3>
              <div class="content">The limit is one free spin per registered user every 24 hours. <b>Next free spin in:</b>
              </div>
            </div>
            <Timer :spin="spin"/>
            <div class="footer" >
              <p>Attempts to gain more than one free spin will result in disqualification. </p>
            </div>
          </div>
        </div>
        <div id="get_free" class="column twoGradient-background">
          <div class="inner-block ">
            <div class="section">
              <h3 class="title">Spin for FREE once a day</h3>
              <div class="content">The limit is one free spin per registered user every 24 hours.
              </div>
            </div>

            <div class="footer" >
              <div class="button" >
                <a @click="freeSpins" class="button">Get my FREE SPIN</a>
              </div>
              <p>Attempts to gain more than one free spin will result in disqualification. </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="container">
      <div class="block mini">
        <div class="inner-block">
          <div class="column">
            <div class="items">
              <h3  class="title">Earn one spin per each item in your order</h3>
              <div class="content">Registered users will receive one token with each paid (non-free) product purchased on our website. All markets are in the game. </div>
              <div class="footer">
                <a href="https://yellowimages.com/all/objects">Shop now to earn spins</a>
              </div>
            </div>
          </div>
          <div class="column">
            <div class="items">
              <h3  class="title">Earn one spin for every On-Demand Pack</h3>
              <div class="content">Get one token per order, no matter which On-Demand pack you choose.</div>
              <div class="footer">
                <a href="https://yellowimages.com/on-demand">Buy On-Demand Pack</a>
              </div>
            </div>
          </div>
          <div class="column">
            <div class="items">
              <h3 class="title">Earn one spin for the purchased Yellow Ticket</h3>
              <div class="content">Premium Members get 90% OFF (almost) all stock items. Boost your spin farming for buying products with a huge discount!</div>
              <div class="footer">
                <a href="https://yellowimages.com/yellow-ticket">Become Elite Member</a>
              </div>
            </div>
          </div>
          <div class="column">
            <div class="items">
              <h3  class="title">Earn one spin for each pre-paid Custom Job</h3>
              <div class="content">Receive one spin with each payment for Custom Job service during Holiday Contest time.</div>
              <div class="footer">
                <a href="https://yellowimages.com/if-you-cannot-find-the-image-needed">Send Job Brief</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="container" >
      <div class="block big gradient " >
        <div class="column gradient-background" >
          <div class="inner-block ">
            <div class="section">
              <h3 class="title">
                Good luck,
                <br>win big!
              </h3>
              <button @click="scrollTo">Spin to win!</button>
            </div>
          </div>
          <img class="santa one floating" src="https://cdn.yellowimages.com/images/xmas2022/Santa_in_VR_1.4a6b5fb7.png">
          <img class="santa two floating" src="https://cdn.yellowimages.com/images/xmas2022/Santa_in_VR_2.8b345cc1.png">
          <img class="santa third floating" src="https://cdn.yellowimages.com/images/xmas2022/Santa_in_VR_3.e8e9935c.png">
        </div>
      </div>

      <div @click="close" id="popup" class="popup">
        <div class="popup__content">
          <div class="popup__body">
            <button class="popup__close" @click="close" type="button" ></button>
            <h1>Official Contest Rules</h1>
            <div class="popup__text">
              <p>Contest void where prohibited. No purchase necessary - receive a free entry daily by clicking the "Get one free spin" button on the contest information page. Registered users will receive one token with each paid (non-free) product purchased on yellowimages.com from December 24th, 2022 until January 15th, 2023. Deposit purchases do not apply.
              </p>
              <p>Any potential winner who does not claim their prize within two weeks (14 calendar days) of first notification will forfeit their prize. The prizes are non-exchangeable, non-transferable, and non-redeemable for cash or other prizes. Yellow Images reserves the right to alter, nullify, or amend any contest rules or prizes at anytime at its sole discretion without prior notice.
              </p>
              <p>All prizes must be verified with purchase confirmation numbers, and any entries found to be invalid will be disqualified. Yellow Images is not responsible for prizes unavailable for redemption due to technical malfunction, computer error, or any other reason.
              </p>
              <p>By participating in this contest, you affirm acknowledgement and agreement to these Official Rules, and our Terms of Use and Privacy Policy .
              </p>
              <p>Got questions on this contest or prizes? Get in touch with our support team! Good luck, and win big!
              </p>
            </div>
            <button @click="close" class="close" type="button">Got It</button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

import Timer from './Timer.vue'
export default {
  name: "BottomBaner",
  components: {
    Timer
  },
  props: ['user', 'spin', 'token'],
  mounted() {
    // console.log('user', this.user)
    if (this.user) {
      if(this.spin.free_attempt_available_time_at !== null) {
        document.getElementById('get_free').style.display = 'none'
        document.getElementById('timer').style.display = 'inline-block'
        console.log('display timer')
      } else if (this.spin.attempts_count > 0) {
        document.getElementById('get_free').style.display = 'inline-block'
        document.getElementById('timer').style.display = 'none'
        console.log('display buttom')
      } else if (this.spin.free_attempt_available_time_at == null) {
        document.getElementById('get_free').style.display = 'inline-block'
        document.getElementById('timer').style.display = 'none'
        console.log('display buttom')
      } else {
        document.getElementById('get_free').style.display = 'inline-block'
        document.getElementById('timer').style.display = 'none'
        console.log('display else buttom')
      }
    } else {
      document.getElementById('get_free').style.display = 'inline-block'
      document.getElementById('timer').style.display = 'none'
      console.log('display 2 else buttom')
    }
  },
  methods: {
    freeSpins() {
      if(this.user) {
        axios.post('/accrual-attempt-count-free',{
          token: this.token,
          user_id: Number(this.user.id),
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
          window.location = '/spin'
        }).catch(error => {
          console.log('spin - count error', error)
        });
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
    scrollTo() {
      const el = document.querySelector('#counter')
      if (this.user) {
        if(this.spin.attempts_count === 0) {
          window.scrollTo({
            top: el.offsetTop - 50,
            left: 0,
            behavior: 'smooth'
          })
        } else {
          window.location = '/spin'
        }
      }
    },
    rules() {
      const el = document.querySelector('#popup')
      el.classList.add('show')
      document.body.style.cssText = `overflow: hidden;`;
    },
    close() {
      const el = document.querySelector('#popup')
      el.classList.remove('show')
      document.body.style.cssText = '';
    }
  },
}
</script>

<style lang="scss" scoped>
@import 'resources/js/assets/styles/_variables.scss';
.popup {
  position: fixed;
  inset: 0;
  z-index: 100;
  width: 100%;
  height: 100%;
  padding: 30px 15px;
  color: #000;
  visibility: hidden;
  transition: visibility 0.8s ease 0s;
  align-items: center;

  &::before {
    content: "";
    position: fixed;
    inset: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.9);
    opacity: 0;
    transition: opacity 0.8s ease 0s;
  }

  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1 1 auto;
    width: 100%;
    min-height: 100%;
  }

  &__body {
    width: 100%;
    height: 100%;
    max-width: 516px;
    max-height: 740px;
    padding: 50px 40px;
    background-color: #fff;
    border-radius: 16px;
    transform: scale(0);
    transition: all 0.3s ease 0s;
    h1 {
      color: black;
      font-weight: 700;
      font-size: 36px;
      line-height: 44px;
      letter-spacing: -0.72px;
      padding: 0;
      margin: 10px auto;
    }
    .close {
      margin: 0 auto;
      width: 100%;
      height: 56px;
      background: black;
      color: white;
      font-size: 16px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border: 0;
      border-radius: 999px;
      font-weight: 700;
      line-height: 1;
      letter-spacing: -.62px;
      text-align: center;
      padding: 10px 20px;
      transition: color .2s,background .2s;
      cursor: pointer;
      text-decoration: none;
      &:hover {
        background: white;
        color: black;
      }
    }
  }

  &__close {
    position: absolute;
    top: 20px;
    right: 20px;
    z-index: 30;
    width: 20px;
    height: 20px;
    background-color: transparent;
    border: none;
    cursor: pointer;

    &::after,
    &::before {
      content: "";
      position: absolute;
      right: 0;
      width: 100%;
      height: 0.125rem;
      background-color: #000;
      transition: all 0.3s ease 0s;
    }

    &::after {
      bottom: calc(50% - 0.0625rem);
      transform: rotate(45deg);
    }

    &::before {
      top: calc(50% - 0.0625rem);
      transform: rotate(-45deg);
    }
  }

  &__text {
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
  }

  &.show {
    visibility: visible;
    overflow: auto;

    &::before {
      opacity: 1;
    }

    .popup__body {
      transform: scale(1);
      transition: all 0.3s ease 0.2s;
    }
  }
}
.black-bg {
  background: black;
  margin-top: -480px;
  z-index: 998;
  height: 100%;
  position: relative;
  @include media-breakpoint-down(xl) {
    margin-top: -350px;
  }
  h1 {
    margin: 70px auto;
    font-weight: 700;
    font-size: 48px;
    line-height: 59px;
    text-align: center;
    color: #FFFFFF;
    width: 80%;
    padding-top: 120px;
    padding-bottom: 50px;
    @include media-breakpoint-down(xl) {
      width: 80%;
      font-size: 34px;
      margin: 30px auto;
    }
  }
}

.block {
  color: white;
  &.gradient {
    display: flex;
    margin-bottom: 80px!important;
    margin-left: auto;
    margin-right: auto;
    margin-top: 0!important;
    padding-bottom: 25px!important;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0!important;
    justify-content: space-between;
    @include media-breakpoint-down(xl) {
      width: 100%;
      gap: 10px;
    }
    @include media-breakpoint-down(xxl) {
      flex-direction: column;
      gap: 30px;
      margin: 50px auto!important;
      padding: 0!important;
    }
    &.scrollable {
      overflow: auto;
      white-space: nowrap;
      max-width: 1920px;
      position: relative;
      flex-direction: row;
      display: block;
      scrollbar-width: none;
      &::-webkit-scrollbar {
        display: none;
      }
      .column {
        display: inline-block;
        &:first-child {
          margin-right: 25px;
          margin-left: 20px;
        }
        &#timer {
          margin-left: 20px;
          margin-right: 20px;
        }
        &#get_free {
          margin-left: 20px;
          margin-right: 20px;
        }
        @include media-breakpoint-down(xl) {
          width: 60%;
        }

      }
    }

    .column {
      width: 46%;
      padding: 10px;
      border-radius: 26px;


      .inner-block {
        white-space: break-spaces;
        padding: 30px;
        width: 100%;
        max-width: 555px;
        height: 396px;
        margin: 0;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
        @include media-breakpoint-down(xl) {
          height: 280px;
          width: auto;
          padding: 10px;
        }
        .section {
          color: white;
          .title {
            font-size: 36px;
            margin-bottom: 24px;
            font-weight: 700;
            @include media-breakpoint-down(xl) {
              font-size: 20px;
              margin-bottom: 10px;
            }
          }
          .content {
            font-size: 21px;
            font-weight: 500;
            line-height: 40px;
            @include media-breakpoint-down(xl) {
              font-size: 11px;
              line-height: 30px;
            }
          }
        }
        .footer {
          flex-direction: column;
          padding: 0;
          flex-grow: 0;
          display: flex;
          width: 100%;
          align-items: baseline;
          p {
            font-size: 14px;
            margin-top: 50px;
          }
          a {
            width: 174px;
            height: 42px;
            font-weight: 700;
            font-style: normal;
            font-size: 16px;
            line-height: 20px;
            border-radius: 28px;
            margin: 0;
            background: black;
            color: white;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border: 0;
            letter-spacing: -.62px;
            text-align: center;
            padding: 10px 20px;
            transition: color .2s,background .2s;
            cursor: pointer;
            text-decoration: none;
            &:hover {
              background: white;
              color: black;
            }
          }
          p {
            @include media-breakpoint-down(xl) {
              font-size: 12px;
            }
          }
        }
      }
    }
    &.big {
      margin-top: 140px!important;
      margin-bottom: 0px!important;
      .column {
        width: 100%;
        height: 800px;
        align-items: center;
        position: relative;
        margin: 0 20px;
        @include media-breakpoint-down(xxl) {
          margin: 60px auto;
          width: 100%;
          max-width: 1220px;
        }
        @include media-breakpoint-down(xl) {
          width: 100%;
          max-width: 990px;
          height: 500px;
        }
        @include media-breakpoint-down(lg) {
          width: 100%;
          max-width: 775px;
          height: 500px;
        }
        @include media-breakpoint-down(md) {
          margin: 20px auto;
          width: 100%;
          max-width: 630px;
        }
        .santa {
          position: absolute;
          &.one {
            width: 550px;
            height: 550px;
            bottom: 0%;
            left: -10%;
            &.floating {
              animation-name: floating-one;
              animation-duration: 3s;
              animation-iteration-count: infinite;
              animation-timing-function: ease-in-out;
              margin-right: 30px;
              margin-top: 5px;
            }
            @include media-breakpoint-down(xxl) {
              width: 350px;
              height: 350px;
              bottom: 0;
              left: 0;
            }
            @include media-breakpoint-down(xl) {
              width: 280px;
              height: 280px;
              bottom: 0;
              left: 0%;
            }
            @include media-breakpoint-down(md) {
              width: 150px;
              height: 150px;
              bottom: 0;
              left: 0;
            }
          }
          &.two {
            width: 440px;
            height: 400px;
            top: -20%;
            left: 0%;
            z-index: 9999;
            &.floating {
              animation-name: floating-two;
              animation-duration: 3s;
              animation-iteration-count: infinite;
              animation-timing-function: ease-in-out;
            }
            @include media-breakpoint-down(xxl) {
              width: 320px;
              height: 290px;
              top: 0%;
              left: 0%;
            } @include media-breakpoint-down(xl) {
                width: 220px;
                height: 190px;
                top: 0%;
                left: 0%;
              }
            @include media-breakpoint-down(md) {
              width: 100px;
              height: 100px;
              top: 0;
              left: 0;
            }
          }
          &.third {
            width: 800px;
            height: 850px;
            top: -30%;
            right: -10%;
            z-index: 99999;
            &.floating {
              animation-name: floating-third;
              animation-duration: 3s;
              animation-iteration-count: infinite;
              animation-timing-function: ease-in-out;
              margin-left: 30px;
              margin-top: 5px;
            }
            @media only screen and (max-width: 1900px) {
              width: 600px;
              height: 650px;
              top: -30%;
              right: 0%;
              z-index: 99999;
            }
            @include media-breakpoint-down(xxl) {
              width: 390px;
              height: 390px;
              top: -20%;
              right: 0%;
            }
            @include media-breakpoint-down(md) {
              width: 150px;
              height: 150px;
              top: -10%;
              right:  0%;
            }
          }
        }
        .inner-block {
          width: 100%;
          justify-content: center;
          height: 700px;
          padding: 0;
          margin: 0 auto;
          max-width: 700px;
          @include media-breakpoint-down(xl) {
            height: 440px;
          }
          .section {
            margin: 0 auto;
            align-items: center;
            .title {
              max-width: 700px;
              font-weight: 700;
              font-size: 110px;
              line-height: 110px;
              text-align: center;

              @include media-breakpoint-down(xl) {
                font-size: 50px;
                line-height: 60px;
              }
            }
            button {
              width: 100%;
              height: 100%;
              max-width:260px;
              max-height: 84px;
              margin: 0 auto;
              border-radius: 42px;
              font-weight: 700;
              font-size: 24px;
              line-height: 27px;
              text-align: center;
              letter-spacing: -1.06667px;
            }



          }
        }

      }
    }
    .oneGradient-background {
      background: linear-gradient(300deg,#eb00e5,#eb00e5,#00a2ff,#00a2ff);
      background-size: 240% 240%;
      animation: gradient-animation 24s ease infinite;
    }
    .twoGradient-background {
      background: linear-gradient(300deg,#ff0000,#ff0000,#eb00e5,#eb00e5);
      background-size: 240% 240%;
      animation: gradient-animation 24s ease infinite;
    }
  }
  &.mini {
    height: 100%;
    padding: 0 20px;
    display: flex;
    flex-direction: row;
    color: white;

    .inner-block {
      overflow: auto;
      white-space: nowrap;
      display: flex;
      justify-content: center;
      position: relative;
      flex-direction: row;
      z-index: 1;
      padding: 0;
      margin: 0;
      max-width: 100%;
      width: 100%;
      flex-wrap: wrap;
      flex-shrink: 0;
      scrollbar-width: none;
      &::-webkit-scrollbar {
        display: none;
      }
      @include media-breakpoint-down(xxl) {
        display: block;
        overflow-x: auto;
        white-space: nowrap;
      }
      .column {
        white-space: break-spaces;
        margin: 0 auto;
        width: 20%;
        height: 400px;
        border: 2px solid #fff;
        border-radius: 26px;
        padding: 30px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        text-align: left;
        @include media-breakpoint-down(xxl) {
          padding: 15px;
          height: 412px;
          width: 328px;
          display: inline-flex;
          margin: 15px 0;
          margin-right: 20px;
        }
        @include media-breakpoint-down(md) {
          height: 200px;
          width: 50%;
        }
        .items {
          height: 100%;
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: flex-start;
          text-align: left;
          .title {
            font-size: 36px;
            font-weight: 700;
            max-width: 295px;
            margin: 0;
          }
          .content {
            margin: 0;
            font-weight: 500;
            font-size: 14px;
            color: #a6a6a6;
            line-height: 1.5;
          }
          .footer {
            margin: 0;
            display: flex;
            align-items: center;
            padding-top: 20px;
            a {
              font-weight: 700;
              font-size: 12px;
              line-height: 16px;
              letter-spacing: -0.4px;
              height: 20px;
              background: #003FFF;
              color: #fff;
              display: inline-flex;
              align-items: center;
              justify-content: center;
              border: 0;
              border-radius: 999px;
              text-align: center;
              padding: 10px 20px;
              transition: color .2s,background .2s;
              cursor: pointer;
              text-decoration: none;
              &:hover {
                background: #FF0E00;
                color: #fff;
              }
            }
          }

        }
      }
    }
  }
}

.gradient-background {
  background: linear-gradient(300deg,#ff0000,#ff0000,#eb00e5,#eb00e5,#00a2ff,#00a2ff);
  background-size: 360% 360%;
  animation: gradient-animation 24s ease infinite;
}
@keyframes floating-one {
  0% { transform: translate(0,  0px); }
  50%  { transform: translate(0, 15px); }
  100%   { transform: translate(0, -0px); }
}
@keyframes floating-two {
  0% { transform: translate(0,  0px); }
  50%  { transform: translate(0, -15px); }
  100%   { transform: translate(0, -0px); }
}
@keyframes floating-third {
  0% { transform: translate(0,  0px); }
  50%  { transform: translate(0, -14px); }
  100%   { transform: translate(0, -0px); }
}
@keyframes gradient-animation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
