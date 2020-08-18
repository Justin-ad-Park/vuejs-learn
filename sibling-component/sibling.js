// eventBus 전달용 뷰 인스턴스
var eventBus = new Vue();

  // 글로벌 컴포넌트에 child-component 등록
  Vue.component('sibling-component', {
    props: ['sbdata'],
    template: '<p>SB Props-data : {{ sbdata }}</p>',
    
  });

  Vue.component('child-component', {
    props: ['propsdata'],
    template: '<p>Propsdata : {{ propsdata }}</p>',
    /*
    methods: {
      showLog: function() {
        eventBus.$emit('triggerEventBus', 100); // 이벤트 전달
      }
    }
    */
  });


  var app = new Vue({
      el: '#app',
      data : {
        message: 'Hello Vue! passed from Parent Component',
        anotherMessage: 'This prop message is from Parents' ,
      }

      /*
      created: function() {

        // 이벤트 수신
        eventBus.$on('triggerEventBus', function(value) {
          console.log("이벤트를 전달받음. 전달받은 값 :", value);
        });
      }
      */

  });
