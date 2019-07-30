var app = new Vue({
  el: "#app",
  data: {
    message: "Hello Vue!",
    guess1: 0
  },
  methods: {
    compareAnswer: function() {
      console.log('i am a guess');
      console.log("guess1");
      console.log(parseInt(this.guess1));
    }
  }
});

