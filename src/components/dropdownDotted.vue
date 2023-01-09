<template>
  <div class="dropdown dropdots header__markets"
       @click.stop="shouldToggleDropdown">
    <div class="dropdots__activator" :class="computedClasses">
      <div class="header__dot"></div>
      <div class="header__dot"></div>
      <div class="header__dot"></div>
      <div class="header__dot"></div>
      <div class="header__dot"></div>
      <div class="header__dot"></div>
      <div class="header__dot"></div>
      <div class="header__dot"></div>
      <div class="header__dot"></div>
    </div>

    <div 	:class="computedClasses" class="options">
      <div class="markets">
        <a class="markets__item" v-for="market in markets" :key="market.key" :href="market.url">
          <div class="markets__icon market-icon" :class="'market-icon_' + market.key">
          </div>
          <div class="markets__title" v-html="market.titleHtml"></div>
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
      markets: [
        {
          key: 'vis3d',
          titleHtml: '3D <br>Visualizer',
          title: '3D Visualizer',
          url: 'https://duck.yellowimages.com'
        },
        {
          key: 'om',
          titleHtml: 'Object <br>Mockups',
          title: 'Object Mockups',
          url: 'https://yellowimages.com/all/objects'
        },
        {
          key: 'cs',
          titleHtml: 'Creative <br>Store',
          title: 'Creative Store',
          url: 'https://yellowimages.com/all/store'
        },
        {
          key: 'png',
          titleHtml: 'PNG <br>Images',
          title: 'PNG Images',
          url: 'https://yellowimages.com/images-360'
        },
        {
          key: 'cf',
          titleHtml: 'Handcrafted <br>fonts',
          title: 'Handcrafted fonts',
          url: 'https://yellowimages.com/creative-fonts/all'
        },
        {
          key: 'yt',
          titleHtml: 'Pricing <br>90% OFF',
          url: 'https://yellowimages.com/yellow-ticket'
        },
        {
          key: 'deposit',
          titleHtml: 'Make <br>a Deposit',
          url: 'https://yellowimages.com/make-a-deposit'
        },
        {
          key: 'jobs',
          titleHtml: 'Custom Job <br>service',
          title: 'Custom Job & Wishlist',
          url: 'https://yellowimages.com/if-you-cannot-find-the-image-needed'
        }
      ]
    };
  },
  components: {},
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
    padding: 26px 24px;
    font-weight: 700;
    width: 165px;
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
      width: 165px;
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
  &__item {
    display: flex;
    align-items: center;
    margin: 0 0 18px;
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
    height: 32px;
    width: 32px;
    cursor: pointer;
    white-space: normal;
    font-size: 0;
    padding: 8px 4px 4px 8px;
    border-radius: 6px;
    background: #fffb1f;
    transition: background 0.2s ease;
    &:hover:not(.expanded  ) {
      .header__dot:nth-child(odd):not(:nth-child(5)) {
        background: $yellow;
      }
    }
    &.expanded {
      background: $black;

      .header__dot:nth-child(odd) {
        background: $white;
      }
    }
  }
}
.header {
  &__markets {
    margin: 0 0 0 12px;
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
// Smartphones - Landscape + Portrait
@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
}
</style>
