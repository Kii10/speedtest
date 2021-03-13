var app = new Vue({
  el: "#app",
  data: {
    msg: "測定開始",
    g: null,
    speed: 1000,
    select: "20MB",
    btn: [
      {
        id: "btn1",
        value:
          "https://drive.google.com/uc?export=download&id=1AUBA2kqnM5iZ2fhIk20MuH022h6Y_4Tz",
      },
      {
        id: "btn2",
        value:
          "https://drive.google.com/uc?export=download&id=1wrQZ8jBIry55nXjVAc7AgO-h4zXizmP7",
      },
      {
        id: "btn3",
        value:
          "https://drive.google.com/uc?export=download&id=1zu7Ap01UQIXm7ZLf8gl_ToYFjeC3Bb3J",
      },
    ],
  },
  methods: {
    speedtest() {
      var start = new Date().getTime();
      axios
        .post(this.select, {})
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
