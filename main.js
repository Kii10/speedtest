var app = new Vue({
  el: "#app",
  data: {
    msg: "測定開始",
    g: null,
    isPush: false,
    btn: [
      {
        id: "btn1",
        name: "10MB",
        value: "https://daruma-st.sakura.ne.jp/file/speedtest/10MB",
      },
      {
        id: "btn2",
        name: "20MB",
        value: "https://daruma-st.sakura.ne.jp/file/speedtest/20MB",
      },
      {
        id: "btn3",
        name: "50MB",
        value: "https://daruma-st.sakura.ne.jp/file/speedtest/50MB",
      },
      {
        id: "btn4",
        name: "80MB",
        value: "https://daruma-st.sakura.ne.jp/file/speedtest/80MB",
      },
    ],
    select: "https://daruma-st.sakura.ne.jp/file/speedtest/50MB",
  },
  methods: {
    speedtest() {
      var start = new Date().getTime();
      axios
        .post("https://cors.io/?" + this.select, {})
        .then(
          function (response) {
            this.isPush = true;
            var end = new Date().getTime();
            var sec = (end - start) / 1000;
            var speed = (50 * 8) / sec;
            console.log(speed);
            this.g.refresh(speed);
            this.isPush = false;
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
      max: 100,
      title: "回線速度[Mbps]",
    });
  },
});
