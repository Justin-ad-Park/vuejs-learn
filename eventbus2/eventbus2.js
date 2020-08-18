// eventBus 전달용 뷰 인스턴스
var eventBus = new Vue();

  // 글로벌 컴포넌트에 child-component 등록
  Vue.component('left-component', {
    props: ['leftdata'],
    template: '<p>Left value : {{ leftValue }} : {{ rightvalue }}<button v-on:click="addLeft">AddLeft</button></p>',
    data:function() {
      return {
        leftValue: 0,
        rightvalue: 0,
      }
    },

    methods: {
      addLeft: function() {
        this.leftValue++;
        eventBus.$emit('triggerLeftValue', this.leftValue); // 이벤트 전달
      }
    },

    beforeUpdate: function() {

      eventBus.$on('triggerRightValue', function(value) {
        this.rightValue = value;
        console.log("Right 이벤트를 전달받음. 전달받은 값 :", value);
      });
    }
  });

  Vue.component('right-component', {
    props: ['rightdata'],
    template: '<p>Right value : {{ leftValue }} : {{ rightValue }}<button v-on:click="addRight">AddRight</button></p>',
    data:function() {
      return {
        leftValue:0,
        rightValue: 0
      }
    },
    methods: {
      addRight: function() {
        this.rightValue++;
        eventBus.$emit('triggerRightValue', this.rightValue); // 이벤트 전달
      }
    },


    beforeUpdate: function() {

      eventBus.$on('triggerLeftValue', function(value) {
        this.leftValue = value;
        console.log("Left 이벤트를 전달받음. 전달받은 값 :", this.leftValue, this.rightValue);
      });
    }

  });


  var app = new Vue({
      el: '#app',
      data : {
        message: 'EventBus Test',
        leftValue: 1 ,
        rightValue: 1 ,
      },



  });
