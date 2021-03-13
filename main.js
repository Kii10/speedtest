var app = new Vue({
  el: "#app",
  data: {
    msg: "測定開始",
    g: null,
    speed: 1000,
    select: "20MB",
    btn: [
      { id: "btn1", value: "20MB" },
      { id: "btn2", value: "50MB" },
      { id: "btn3", value: "80MB" },
    ],
  },
  methods: {
    speedtest() {
      var start = new Date().getTime();
      axios
        .post("file/" + this.select, {})
        .then(
          function (response) {
            var end = new Date().getTime();
            var sec = (end - start) / 1000;
            var speed = (50 * 8) / sec;
            this.g.refresh(speed);
          }.bind(this)
        )
        .catch(function (error) {
          console.log(error);
        });
    },
    onClick() {
      this.speedtest();
    },
  },
  mounted() {
    this.g = new JustGage({
      id: "gauge",
      value: 0,
      min: 0,
      max: 1000,
      title: "回線速度[Mbps]",
    });
  },
});
