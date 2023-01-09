<template>
  <div id="timer" class="timer">
    <div>
      <div>
        <div class="day">
          <span class="number">{{ days }}</span>
          <div class="format">Day</div>
        </div>
        <div class="hour">
          <span class="number">{{ hours }}</span>
          <div class="format">Hours</div>
        </div>
        <div class="min">
          <span class="number">{{ minutes }}</span>
          <div class="format">Minutes</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Timer",
  data: function(){
    return{
      timer:"",
      wordString: {},
      start: "",
      end: "",
      interval: "",
      days:"",
      minutes:"",
      hours:"",
      now: "",
      todayIso: ""
    };
  },
  props: ['spin'],
  mounted(){
    this.now = new Date();
// JavaScript only outputs ISO format as UTC,
//   so a timezone adjust trick is needed.
    this.todayIso = new Date(this.now.getTime() - this.now.getTimezoneOffset() * 60000).toISOString().substr(0, 10);
    this.start = new Date(this.todayIso + 'T00:00');
    if(this.spin.free_attempt_available_time_at !== null) {
      this.end = new Date(this.spin.free_attempt_available_time_at);
      console.log('avialable')
    } else {
      console.log('Notavialable')
      this.end = new Date(this.todayIso + 'T23:59:59.999');
    }
    // this.start = new Date(this.starttime).getTime();
    // this.end = new Date(this.endtime).getTime();
    // Update the count down every 1 second
    this.timerCount(this.start,this.end);
    this.interval = setInterval(() => {
      this.timerCount(this.start,this.end);
    }, 1000);
  },
  methods: {
    timerCount: function(start,end){
      // Get todays date and time
      let now = new Date().getTime();

      // Find the distance between now an the count down date
      let distance = start - now;
      let passTime =  end - now;

      if(distance < 0 && passTime < 0){
        clearInterval(this.interval);

      }else if(distance < 0 && passTime > 0){
        this.calcTime(passTime);
      } else if( distance > 0 && passTime > 0 ){
        this.calcTime(distance);
      }
    },
    calcTime: function(dist){
      // Time calculations for days, hours, minutes
      this.days = Math.floor(dist / (1000 * 60 * 60 * 24));
      this.hours = Math.floor((dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.minutes = Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60));
    }

  }
}
</script>

<style lang="scss" scoped>
@import 'resources/js/assets/styles/_variables.scss';
.timer {
  font-size: 20px;
  color: black;
  text-align:center;
  margin: 0;
  @include media-breakpoint-down(md) {
    font-size: 12px;
  }
  div {
    display: flex;
    flex-direction: row;
    justify-content: center;

  }
  .day, .hour, .min, .sec {
    width: 114px;
    height: 125px;
    background: white;
    padding: 17px 15px;
    border-radius: 15px;
    font-size: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-weight: 500;
    text-align: center;
    margin: 0 5px;
    gap: 20px;
    @include media-breakpoint-down(xxl) {
      width: 72px;
      height: 75px;
      gap: 0;
      padding: 15px 6px;
    }
    @include media-breakpoint-down(md) {
      width: 62px;
      height: 65px;
      gap: 0;
      padding: 12px 5px;
    }
    .format {
      font-weight: 500;
      font-size: 14px;
      line-height: 17px;
      text-align: center;
      letter-spacing: -0.533333px;
      width: 60px;
      margin: 0 auto;
      @include media-breakpoint-down(md) {
        width: 40px;
        font-size: 12px;
      }
    }
  }
  .number{
    display: inline-block;
    width: 60px;
    text-align: center;
    font-weight: 700;
    font-size: 48px;
    line-height: 59px;
    margin: 0 auto;
    @include media-breakpoint-down(md) {
      width: 40px;
      font-size: 30px;
    }
  }
  .message {
    font-size: 14px;
    font-weight: 400;
    margin-top: 5px;
  }
  .status-tag{
    width: 270px;
    margin: 10px auto;
    padding: 8px 0;
    font-weight: 500;
    color: #000;
    text-align: center;
    border-radius: 15px;
    &.upcoming{
      background-color: lightGreen;
    }
    &.running{
      background-color: gold;
    }
    &.expired{
      background-color: silver;
    }
  }
}
</style>
