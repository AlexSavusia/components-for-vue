<template>
  <div
      class="dropdown"
      @click.stop="shouldToggleDropdown"
      :class="computedClasses"
      :style="computedStyles"
  >
    <div class="dropdown-label-container">
      <div class="dropdown-label">
				<span class="text">
				More Yellow
				</span>
        <svg viewBox="0 0 18 18" class="angle-down header__browse svg-icon svg-fill" :class="{ toggled: isExpanded }"  data-v-ca22ec14="" style="width: 18px; height: 18px;"><path pid="0" _fill="currentColor" d="M5.6 6.4L9 9.8l3.4-3.4 1.1 1.1L9 12 4.5 7.5z"></path></svg>
      </div>
    </div>

    <div 	:class="computedClasses" class="options">
      <div class="browse d-flex flex-wap">
        <div class="col">
          <div class="list">
            <a class="item" v-for="market in moreLinks" :href="market.url">
              {{ market.title }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "dropdown",
  data() {
    return {
      isBottomSe1tionToggled: false,
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
      moreLinks: [
        {
          title: 'Object Mockups',
          url: 'https://yellowimages.com/all/objects'
        },
        {
          title: 'Creative Store',
          url: 'https://yellowimages.com/all/store'
        },
        {
          title: 'PNG Images',
          url: 'https://yellowimages.com/images-360'
        },
        {
          title: 'Creative Fonts',
          url: 'https://yellowimages.com/creative-fonts/all'
        },
        {
          title: 'Custom Job',
          url: 'https://yellowimages.com/if-you-cannot-find-the-image-needed'
        },
        {
          title: 'Membership',
          url: 'https://yellowimages.com/yellow-ticket'
        },
        {
          title: 'Become an author',
          url: 'https://yellowimages.com/become-an-author'
        }
      ],
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
  position: relative;
  cursor: pointer;
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
      padding: 6px 10px;
      gap: 9px;
      .text {
        color: #fff;
        font-size: 12px;
        letter-spacing: -0.4px;
        display: flex;
        align-items: center;
        line-height: 1.4;
        z-index: 0;
      }
      .angle-down {
        color: $white;
        fill: white;
        display: flex;
        justify-content: center;
        align-items: center;
        transform: rotate(0deg);
        transition: all 0.4s linear;
      }
      .toggled {
        transition: all 0.4s linear;
        transform: rotate(-180deg);
        color: $blue;
        fill: $blue;
      }
    }
  }
  .options {
    height: 0;
    visibility: hidden;
    opacity: 0;
    overflow: hidden;
    transition: height 0.2s linear, opacity 0.3s linear;
    bottom: 160%;
    left: 0;
    right: auto;
    position: absolute;
    &.expanded {
      min-height: 255px;
      height: 100%;
      left: 0;
      right: auto;
      width: 160px;
      display: block;
      z-index: 99999;
      bottom: 160%;
      padding: 11px 10px;
      border-radius: 26px;
      position: absolute;
      transition: height 0.2s linear, opacity 0.3s linear;
      visibility: visible;
      opacity: 1;
      box-shadow: 0 10px 20px 0 rgb(0 0 0 / 10%);
      margin: 20px 0 0;
      overflow: hidden;
      background: white;
    }
    .browse {
      padding: 10px 0;
      max-height: calc(100vh - 114px);
      overflow-x: hidden;
      overflow-y: auto;
      overscroll-behavior: none;
      color: #000;
      font-size: 14px;
      line-height: 1.2;
      font-weight: 400;

      .col {
        min-height: 1px;
        padding: 0 6px;
        flex: 1 1 auto;
        white-space: normal;
        max-width: 190px;

        .list {
          margin: 31px 0 0 0;
        }
        .list:first-child {
          margin: 0;
        }
      }
      .item {
        display: flex;
        align-items: center;
        padding: 10px 9px;
        border-radius: 6px;
        color: #000;
        font-size: 12px;
        font-weight: 700;
        white-space: nowrap;
        text-decoration: none;
        transition: color .2s;
        letter-spacing: -.46px;
        &:hover {
          color: $blue;
        }
      }
      .header {
        font-weight: 700;
        letter-spacing: -.7px;
        margin: 0 0 20px;
        line-height: 1.4;
        padding: 9px 9px 0;
      }
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
  transition: all 0.7s linear;
}
.market-icon {
  display: inline-block;
  vertical-align: middle;
  background-size: 100% auto;
  background-repeat: no-repeat;
}
.d-flex {
  display: flex!important;
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

// Smartphones - Landscape + Portrait
@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
}
</style>
