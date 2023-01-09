<template>
  <div class="dropdown dropdots"
       @click.stop="shouldToggleDropdown">
    <div class="dropdots__activator" :class="computedClasses">
      <img :alt="this.name" :src="this.src" class="header-avatar__image" height="44" width="44">
    </div>

    <div 	:class="computedClasses" class="options">
      <div class="markets">
        <a :href="' https://yellowimages.com' + user.author_url" class="user-name ">
          {{user.display_name}}
        </a>
        <div class="balance dotted">
          <p>${{user.balance}}</p>
          <a href="https://yellowimages.com/make-a-deposit" class="user-name ">
            Add funds
          </a>
        </div>
        <a class="markets__item" href="https://yellowimages.com/my-account/edit-account">
          <span>My Account</span>
        </a>
        <a class="markets__item" v-for="market in user.menu" :key="market.key" :href="'https://yellowimages.com' + market.url">
          <span>{{market.name}}</span>
        </a>
        <a class="log-out dotted" href="#" @click="logOut">
          <span>Sign out</span>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "dropdown",
  data() {
    return {
      isBottomSectionToggled: false,
      optionsHeight: 0,
      optionHeight: 35,
      backgroundColor: "#ffffff",
      backgroundExpandedColor: "#ffffff",
      hoverBackgroundColor: "#ffffff",
      disabledBackgroundColor: "#ccc",
      disabledTextColor: "#000000",
      isExpanded: false,
      placeholder: "Placeholder",
      textColor: "black",
      borderRadius: "1.5em",
      border: "1px solid gray",
      config: {
        disabled: false,
        length: 8
      },
    };
  },
  components: {},
  props: {
    name: String,
    src: String,
    user: String
  },
  computed: {
    computedStyles: function () {
      return [
        {"--main-el-border-radius": this.borderRadius},
        {"--dropdown-expanded-color": this.backgroundExpandedColor},
        {"--dropdown-hover-background-color": this.hoverBackgroundColor}
      ];
    },
    computedClasses: function() {
      return {
        'expanded': this.isExpanded,
        'disabled': false
      }
    }
  },
  methods: {
    logOut() {
      axios.get('/logout',{}, { headers: {
          'X-Requested-With' : 'XMLHttpRequest',
          "Access-Control-Allow-Origin": "*",
          'Access-Control-Allow-Credentials': 'true',
          "Access-Control-Allow-Methods": "HEAD, OPTIONS, GET, POST, PUT, DELETE",
          "Access-Control-Allow-Headers": ", X-Requested-With, Content-Type, Accept, Authorization, X-Auth-Token",
        }
      }).then(response => {
        window.location = response.request.responseURL
      }).catch(error => {
        console.log(error)
      });
    },
    setOptionsHeight() {
      this.optionsHeight = this.optionHeight * this.config.length;
    },
    documentClicked() {
      if (this.isExpanded) {
        this.isExpanded = false
      }
    },
    shouldToggleDropdown() {
      if (!this.config.disabled) {
        this.isExpanded = !this.isExpanded;
      }
    },
  },
  created() {
    document.addEventListener('click', this.documentClicked);
    this.setOptionsHeight();
  },
  destroyed() {
    document.removeEventListener('click', this.documentClicked);
  }
};
</script>

<style lang="scss" scoped>
@import 'resources/js/assets/styles/_variables.scss';
// * * * Variables * * *
$default-text-hover-color: black;
$default-hover-color: #cde4f5;
$default-text-color: #fff;
$option-padding: 4px 10px;

.dropdown {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  width: var(--dropdown-width);
  position: relative;
  border-radius: var(--main-el-border-radius);
  cursor: pointer;
  color: var(--dropdown-default-text-color);
  background: var(--dropdown-background-color);
  user-select: none;
  transition: all 0.7s linear;
  .dropdown-label-container {
    display: flex;
    width: 100%;
    .dropdown-label {
      display: flex;
      justify-content: space-between;
      flex: 1 1 auto;
      align-items: center;
      height: var(--option-height);
      padding: $option-padding;
      .text {
        font-size: 14px;
      }
      .angle-down {
        display: flex;
        justify-content: center;
        align-items: center;
        border: solid $default-text-color;
        background: transparent;
        border-width: 0 2px 2px 0;
        padding: 4px;
        width: 1px;
        height: 1px;
        margin: -3px 5px 0 0;
        border-color: var(--dropdown-default-text-color);
        transform: rotate(45deg);
        transition: all 0.7s;
      }
      .toggled {
        margin-bottom: -12px;
        transform: rotate(-135deg);
        transition: all 0.7s;
        color: $blue;
        fill: $blue;
      }
    }
  }
  .options {
    display: none;
    overflow: hidden;
    transition-property: height;
    font-weight: 700;
    width: 174px;
    transition-duration: 0.4s; // Durations can be changed without touching JS
    transition-timing-function: cubic-bezier(
            0.175,
            0.885,
            0.32,
            1.275); // Timing functions also!

    &[aria-expanded="false"] {
      height: 0 !important;
      transition-timing-function: cubic-bezier(
              0.6,
              -0.28,
              0.735,
              0.045
      ); // Timing function can be different for each direction
    }
    &.expanded {
      display: block;
      right: 0;
      width: 174px;
      z-index: 99999;
      top: 100%;
      margin: 20px 0 0 0;
      max-height: calc(100vh - 114px);
      border-radius: 26px;
      background: white;
      position: absolute;
      overscroll-behavior: none;
      overflow-y: auto;
      overflow-x: hidden;
    }
    .option {
      display: flex;
      align-items: center;
      padding: $option-padding;
      height: 35px;
      font-size: 18px;
    }
    .option:hover {
      color: $default-text-hover-color;
      background: $default-hover-color;
      transition: all 0.7s;
    }
    .option:last-child {
      border-radius: 0 0 var(--main-el-border-radius)
      var(--main-el-border-radius);
    }
    .option:last-child:hover {
      border-radius: 0 0 var(--main-el-border-radius)
      var(--main-el-border-radius);
    }
  }

  &.disabled {
    cursor: not-allowed;
  }
}
.dropdown.expanded {
  background: var(--dropdown-expanded-color);
  border: var(--dropdown-border);
  transition: all 0.7s linear;
}
.d-flex {
  display: flex!important;
}
.market-icon {
  display: inline-block;
  vertical-align: middle;
  background-size: 100% auto;
  background-repeat: no-repeat;
}
.market-icon_vis3d {
  background-image: url(https://cdn.yellowimages.com/images/markets/3d.svg);
}
.market-icon_om {
  background-image: url(https://cdn.yellowimages.com/images/markets/om.svg);
}
.market-icon_cs {
  background-image: url(https://cdn.yellowimages.com/images/markets/cs.svg);
}
.market-icon_png {
  background-image: url(https://cdn.yellowimages.com/images/markets/png.svg);
}
.market-icon_cf {
  background-image: url(https://cdn.yellowimages.com/images/markets/cf.svg);
}
.market-icon_yt {
  background-image: url(https://cdn.yellowimages.com/images/markets/yt.svg);
}
.market-icon_deposit {
  background-image: url(https://cdn.yellowimages.com/images/markets/deposit.svg);
}
.market-icon_jobs {
  background-image: url(https://cdn.yellowimages.com/images/markets/jobs.svg);
}
.markets {
  font-weight: 700;
  max-height: calc(100vh - 114px);
  height: 100%;
  padding: 14px 27px;
  &__item {
    align-items: flex-start;
    background: #fff;
    border-radius: 6px;
    color: #656565;
    display: flex;
    line-height: 1.2;
    margin: 0 -8px;
    padding: 8px 8px;
    white-space: nowrap;
    span {
      font-weight: lighter;
    }
    svg {
      margin: 0 8px 0 0;
    }
  }
  .balance {
    display: inline-flex;
    gap:3px;
    white-space: nowrap;
    width: 130px;
    &.dotted {
      border-bottom: 2px dotted #dedede;
    }

    p {
      color: #656565;
      line-height: 1.6;
      letter-spacing: -0.4px;
      margin: 0 ;
      font-size: 14px;
      font-weight: 400;
    }
    a {
      color: #4040FF;
      line-height: 1.6;
      letter-spacing: -0.4px;
      font-size: 14px;
      font-weight: 400;
      outline: none;
      text-decoration: none;
      margin: 0;
    }
  }
  .user-name {
    white-space: normal;
    word-break: break-all;
    display: flex;
    gap: 1px;
    font-size: 16px;
    font-weight: 700;
    line-height: 1.3;
    margin: 0 0 12px 0;
    padding-bottom: 10px;
    &.dotted {
      border-bottom: 2px dotted #dedede;
    }
    p {
      color: #656565;
      line-height: 1.6;
      letter-spacing: -0.4px;
      margin: 0 auto;
      font-size: 14px;
      font-weight: 400;
    }
  }
  .log-out {
    align-items: flex-start;
    background: #fff;
    border-radius: 6px;
    color: #656565;
    display: flex;
    line-height: 1.2;
    margin: 0 -8px;
    padding: 8px;
    white-space: nowrap;
    font-weight: 400;
    &.dotted {
      border-top: 2px dotted #dedede;
    }
  }
  &__icon {
    flex: 0 0 42px;
    width: 42px;
    height: 42px;
    margin: 0 20px 0 0;
  }
  &__title {
    font-size: 12px;
    line-height: 1.3;
    letter-spacing: -.46px;
  }
}
.dropdots {
  position: relative;
  height: 100%;
  width: 100px;
  display: flex;
  align-items: center;
  &__activator {
    position: relative;
    border-radius: 100%;
    cursor: pointer;
    height: 42px;
    overflow: hidden;
    width: 42px;
    white-space: normal;
    font-size: 0;
    transition: background 0.2s ease;
  }
}

.header__dot {
  display: inline-block;
  vertical-align: top;
  width: 7px;
  height: 7px;
  margin: 0 3px 3px 0;
  border-radius: 100%;
  transition: background 0.2s ease;
  background: #000;
}

</style>
