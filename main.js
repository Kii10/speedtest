var app = new Vue({
  el: "#app",
  data: {
    msg: "測定開始",
    g: null,
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
        .post(this.select, { withCredentials: true })
        .then(
          function (response) {
            var end = new Date().getTime();
            var sec = (end - start) / 1000;
            var speed = (50 * 8) / sec;
            console.log(speed);
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
      max: 100,
      title: "回線速度[Mbps]",
    });
  },
});
