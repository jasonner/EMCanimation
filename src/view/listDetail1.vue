<template>
  <div class="listDetail1-page">
    <div id="particles-js">
      <canvas
        class="particles-js-canvas-el"
        width="1920"
        height="1080"
        style="width: 100%; height: 100%"
      ></canvas>
      <div class="middle-star1">
        <img src="@/assets/img/index/01.png" alt="" srcset="">
      </div>
      <div class="middle-star2">
        <img src="@/assets/img/index/01.png" alt="" srcset="">
      </div>

      <!-- 流星 -->
      <div class="meteor-star"></div>
      <div class="meteor-star meteor-star-pink"></div>
      <div class="meteor-star meteor-star-blue"></div>


      <!-- 大球 -->
      <div class="Big-star1"></div>
      <div class="Big-star2"></div>
      <div class="Big-star3"></div>
    </div>
    <div class="text-slogan">
      <img src="@/assets/img/listDetail1/text-slogan.png" alt="">
    </div>
    <div class="slogan-box">
      <img src="@/assets/img/listDetail1/slogan.png" alt="" srcset="">
    </div>
    <div class="list-user-box">
      <img src="@/assets/img/listPage/list1.png" alt="" srcset="">
    </div>
    <div class="help-free-box">
      <img src="@/assets/img/listDetail1/help-free.png" alt="" srcset="">
    </div>
    <div class="Accept-btn animate__animated animate__backInUp" @click="goPage()">
          <img src="@/assets/img/index/btn.png" alt="" srcset="">
      </div>
  </div>
</template>

<script>
export default {
  name:'',
  data(){
    return{

    }
  },
  created(){
    setTimeout(() => {
      this.initChange();
    }, 1000);
  },
  mounted() {
    
  },
  
  methods:{
    initChange(){
      console.log(111)
      particlesJS("particles-js", {
        particles: {
          number: {
            value: 200, //数量
            density: {
              enable: true, //启用粒子的稀密程度
              value_area: 800, //区域散布密度大小
            },
          },
          color: {
            value: ["#fff",'#ff4792'], //原子的颜色
          },
          shape: {
            type: "circle", //原子的形状 "circle" ,"edge" ,"triangle" ,"polygon" ,"star" ,"image" ,["circle", "triangle", "image"]
            stroke: {
              width: 0, //原子的宽度
              color: "#fff", //原子颜色
            },
            polygon: {
              nb_sides: 5, // 原子的多边形边数
            },
            image: {
              src: "img/github.svg", // 原子的图片可以使用自定义图片 "assets/img/yop.svg" , "http://mywebsite.com/assets/img/yop.png"
              width: 100, //图片宽度
              height: 100, //图片高度
            },
          },
          opacity: {
            value: 1, //不透明度
            random: true, //随机不透明度
            anim: {
              enable: true, //渐变动画
              speed: 1, // 渐变动画速度
              opacity_min: 0, //渐变动画不透明度
              sync: true,
            },
          },
          size: {
            value: 3, //原子大小
            random: true, // 原子大小随机
            anim: {
              enable: false, // 原子渐变
              speed: 4, //原子渐变速度
              size_min: 0.3,
              sync: false,
            },
          },
          line_linked: {
            enable: false, //连接线
            distance: 150, //连接线距离
            color: "#ffffff", //连接线颜色
            opacity: 0.4, //连接线不透明度
            width: 1, //连接线的宽度
          },
          move: {
            enable: true, //原子移动
            speed: 1, //原子移动速度
            direction: "none", //原子移动方向   "none" ,"top" ,"top-right" ,"right" ,"bottom-right" ,"bottom" ,"bottom-left" ,"left" ,"top-left"
            random: true, //移动随机方向
            straight: false, //直接移动
            out_mode: "out", //是否移动出画布
            bounce: false, //是否跳动移动
            attract: {
              enable: false, // 原子之间吸引
              rotateX: 600, //原子之间吸引X水平距离
              rotateY: 600, //原子之间吸引Y水平距离
            },
          },
        },
        interactivity: {
          detect_on: "canvas", //原子之间互动检测 "canvas", "window"
          events: {
            onhover: {
              enable: true, //悬停
              mode: "bubble", //悬停模式      "grab"抓取临近的,"bubble"泡沫球效果,"repulse"击退效果,["grab", "bubble"]
            },
            onclick: {
              enable: false, //点击效果
              mode: "repulse", //点击效果模式   "push" ,"remove" ,"bubble" ,"repulse" ,["push", "repulse"]
            },
            resize: true, // 互动事件调整
          },
          modes: {
            grab: {
              distance: 100, //原子互动抓取距离
              line_linked: {
                opacity: 0.8, //原子互动抓取距离连线不透明度
              },
            },
            bubble: {
              distance: 250, //原子抓取泡沫效果之间的距离
              size: 4, // 原子抓取泡沫效果之间的大小
              duration: 2, //原子抓取泡沫效果之间的持续事件
              opacity: 1, //原子抓取泡沫效果透明度
              speed: 3,
            },
            repulse: {
              distance: 400, //击退效果距离
              duration: 0.4, //击退效果持续事件
            },
            push: {
              particles_nb: 4, //粒子推出的数量
            },
            remove: {
              particles_nb: 2,
            },
          },
        },
        retina_detect: true,
      });
    },
    goPage(){
      this.$router.replace('/list')
    }
  }
};
</script>
<style scoped>
.listDetail1-page{
  width: 100%;
  height: 100%;
  background: url('../assets/img/listPage/bg.png') center no-repeat;
  background-size: 100% 100%;
  position: relative;
}
.listDetail1-page #particles-js {
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
}
.listDetail1-page .middle-star1{
  position: absolute;
  top: 0;
  left: 0;
  color: #fff;
  width: 9.2%;
  height: 9.2%;
  animation: horizontal1 10s linear 0s infinite alternate, vertical1 6s linear 0s infinite alternate;
}
.listDetail1-page .middle-star1 img,.middle-star2 img{
  width: 100%;
  object-fit: fill;
}
.middle-star2{
  position: absolute;
  top: 484px;
  left: 56%;
  color: #fff;
  width: 9.2%;
  height: 9.2%;
  animation: horizontal2 10s linear 0s infinite alternate, vertical2 6s linear 0s infinite alternate;
}
@keyframes horizontal1 {
    0% {
        left: 0;
    }
    100% {
        /* 运动最大距离为盒子长度减去球的长度 */
        left: calc(600px - 20px);
    }
}
@keyframes vertical1 {
  0% {
    top: 0;
  }
  100% {
    /* 运动最大距离为盒子高度减去球的高度 */
    top: calc(400px - 20px);
  }
}

@keyframes horizontal2 {
    0% {
        top: 500px;
    }
    100% {
        /* 运动最大距离为盒子长度减去球的长度 */
        left: calc(800px - 20px);
    }
}
@keyframes vertical2 {
  0% {
    top: 500px;
  }
  100% {
    /* 运动最大距离为盒子高度减去球的高度 */
    top: calc(400px - 20px);
  }
}


/* 流星 */
.meteor-star {
    display: block;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #ff89cb;
    top: 100px;
    left: 500px;
    position: relative;
    transform-origin: 40% 10%;
    animation: star-ani 2s linear infinite;
    -webkit-animation:star-ani 2s linear infinite;
    box-shadow: 0 0 5px 5px rgba(255, 255, 255, .3);
    opacity: 0;
    z-index: 2;
}
.meteor-star:after {
    content: '';
    display: block;
    top: 0px;
    left: 4px;
    border: 10px solid #40154f;
    border-width: 0px 0px 35px 300px;
    border-color: transparent transparent transparent #ff89cb;
    transform: rotate(-45deg) translate3d(10px, 22px, 0);
    box-shadow: 0 0 1px 0 rgba(255, 255, 255, .1);
    transform-origin: 0% 100%;
}
.meteor-star-pink {
    top: 100px;
    left: 800px;
    background: #ff94cf;
    animation-delay: 3s;
    -webkit-animation-delay: 3s;
    -moz-animation-delay: 3s;
}
.meteor-star-pink:after {
    animation-delay: 3s;
    -webkit-animation-delay: 3s;
    -moz-animation-delay: 3s;

}
.meteor-star-blue {
    top: 120px;
    left: 1200px;
    background: #ff94cf;
    animation-delay: 7s;
    -webkit-animation-delay: 7s;
    -moz-animation-delay: 7s;
}
.meteor-star-blue:after {
    -webkit-animation-delay: 7s;
    -moz-animation-delay: 7s;
    animation-delay: 7s;

}
@keyframes star-ani {
  0% {
      opacity: 0;
      transform: scale(0) translate3d(0, 0, 0);
  }
  20%{
      opacity: 0.8;
      transform: scale(0.2) translate3d(-200px, 200px, 0);
  }
  40% {
      opacity: 0.8;
      transform: scale(0.4) translate3d(-400px, 400px, 0);
  }
  60% {
      opacity: 0.8;
      transform: scale(0.6) translate3d(-600px, 600px, 0);
  }
  80% {
      opacity: 1;
      transform: scale(1) translate3d(-800px, 800px, 0);
  }
  100% {
      opacity: 1;
      transform: scale(1.2) translate3d(-900px, 900px, 0);
  }
}

/* 大星星一 */
.Big-star1{
  width: 24vw;
  height: 24vw;
  position: absolute;
  right: 30px;
  top: -100px;
  background: url('../assets/img/index/02.png') repeat;
  background-size:100% 100%;
  border-radius: 100%;
  transform-style: preserve-3d;
  animation: horizontal3 10s linear 0s infinite alternate, vertical3 6s linear 0s infinite alternate,starrotate 20s linear 0s infinite alternate;
}

@keyframes horizontal3 {
    0% {
        right: -100px;
    }
    100% {
        /* 运动最大距离为盒子长度减去球的长度 */
        right: calc(100px - 20px);
    }
}
@keyframes vertical3 {
  0% {
    top: -100px;
  }
  100% {
    /* 运动最大距离为盒子高度减去球的高度 */
    top: calc(100px - 20px);
  }
}
@keyframes starrotate{
  0% {
    transform: rotateZ(0deg);
  }
  20%{
     transform: rotateZ(90deg);
  }
  40% {
      transform: rotateZ(180deg);
  }
  60% {
     transform: rotateZ(270deg);
  }
  80% {
     transform: rotateZ(360deg);
  }
  100% {
     transform: rotateZ(0deg);
  }
}

/* 大星星二 */
.Big-star2{
  width: 30vw;
  height: 30vw;
  position: absolute;
  left: -130px;
  bottom: 266px;
  background: url('../assets/img/index/04.png') repeat;
  background-size:100% 100%;
  border-radius: 100%;
  transform-style: preserve-3d;
  z-index: 5;
  animation: horizontal4 10s linear 0s infinite alternate, vertical4 6s linear 0s infinite alternate,starrotate 20s linear 0s infinite alternate;
}

@keyframes horizontal4 {
    0% {
      left: -100px;
    }
    100% {
        /* 运动最大距离为盒子长度减去球的长度 */
      left: calc(80px - 20px);
    }
}
@keyframes vertical4 {
  0% {
    bottom: 266px;
  }
  100% {
    /* 运动最大距离为盒子高度减去球的高度 */
    bottom: calc(100px - 20px);
  }
}

/* 大星星三 */
.Big-star3{
  width: 30vw;
  height: 30vw;
  position: absolute;
  right: -130px;
  bottom: -266px;
  background: url('../assets/img/index/07.png') repeat;
  background-size:100% 100%;
  border-radius: 100%;
  transform-style: preserve-3d;
  z-index: 5;
  animation: horizontal5 10s linear 0s infinite alternate, vertical5 6s linear 0s infinite alternate,starrotate 20s linear 0s infinite alternate;
}

@keyframes horizontal5 {
    0% {
      right: -100px;
    }
    100% {
        /* 运动最大距离为盒子长度减去球的长度 */
      right: calc(80px - 20px);
    }
}
@keyframes vertical5 {
  0% {
    bottom: -266px;
  }
  100% {
    /* 运动最大距离为盒子高度减去球的高度 */
    bottom: calc(100px - 20px);
  }
}

/* 文提示 */
.text-tip{
  width: 80%;
  position: absolute;
  left: 10vw;
  top: 62vh;
}

.Accept-btn{
  width: 36%;
  position: absolute;
  left: 32%;
  bottom: 220px;
}

.text-slogan{
  width: 87%;
  position: absolute;
  top: 15vh;
  left:6.5%;

}
.slogan-box{
  width: 87%;
  position: absolute;
  top:27vh;
  left: 6.5%;
}
.list-user-box{
  width: 40%;
  position: absolute;
  left: 30%;
  top: 48vh;
}
.help-free-box{
  width: 85%;
  position: absolute;
  top:67vh;
  left: 7.5%;
}
</style>
