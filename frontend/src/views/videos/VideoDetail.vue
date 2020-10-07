<template>
  <div class="p-5" style>
    <div class="d-flex flex-row" style="border:3px solid blue;">
      <video controls :src="videoResult.video_file"></video>
      <div
        class="ml-5 d-flex flex-column justify-content-between"
        style="padding-top:3px;width:100%;"
      >
        <div style>
          <div class="d-flex justify-content-between">
            <h4>{{ videoResult.title }}</h4>
            <div class="dropdown dropleft mr-5 pr-5">
              <button
                type="button"
                class="mr-5 pr-5 basic-btn"
                data-toggle="dropdown"
              >
                <i class="fas fa-ellipsis-v"></i>
              </button>
              <div class="dropdown-menu">
                <a
                  class="dropdown-item"
                  style="color:black;"
                  @click="deleteVideo(videoResult.id)"
                  >삭제</a
                >
              </div>
            </div>
          </div>
          <h6 style="color:gray;font-size:14.5px;">
            {{ cutDate(videoResult.created_at) }}
          </h6>
          <!--질문 뽑아와야 됨-->
          <h5 class="mt-5" style="font-size:x-large;">
            질문: {{ videoResult.question }}
          </h5>
          <div
            v-for="tag in cutTag(videoResult.tag)"
            :key="tag"
            style="display:inline; font-size:large;"
          >
            {{ tag }}
          </div>
          <br />
        </div>
        <div class="mr-5" style>
          <div class="d-flex justify-content-end">
            <router-link class="text-decoration-none" to="/videos/list">
              <v-btn class="basic-btn" medium color="warning" dark
                >목록으로</v-btn
              >
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <!--감정-->
    <div
      v-if="videoResult.result"
      class="pt-5 d-flex justify-content-around"
      style="margin-top:65px;width:100%; height:220px;"
    >
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img
              src="@/assets/aboutUs/angry.png"
              alt="Avatar"
              style="width:130px;height:120px;"
            />
            <div class="pt-2" style="font-size:x-large;">
              분노: {{ videoResult.result.emotions.angry }}
            </div>
          </div>
          <div class="flip-card-back ">
            <!-- <h4 class="pt-2">분노</h4> -->
            <div class="mt-3" style="font-size:18.5px;">
              <small>- 양 눈썹이 함께 내려간다.</small><br />
              <small>- 노려보는 눈이 된다.</small><br />
              <small>- 입술이 얇아진다.</small>
            </div>
          </div>
        </div>
      </div>
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img
              src="@/assets/aboutUs/happy.png"
              alt="Avatar"
              style="width:130px;height:120px;"
            />
            <div class="pt-2" style="font-size:x-large;">
              행복: {{ videoResult.result.emotions.happy }}
            </div>
          </div>
          <div class="flip-card-back ">
            <!-- <h4 class="pt-2">행복</h4> -->
            <div class="mt-3" style="font-size:18.5px;">
              <small>- 눈가에 주름이 생긴다.</small><br />
              <small>- 두 뺨이 올라간다.</small><br />
              <small>- 눈 주위를 돌고 있는 근육의 움직임이 생긴다.</small>
            </div>
          </div>
        </div>
      </div>
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img
              src="@/assets/aboutUs/neutral.png"
              alt="Avatar"
              style="width:130px;height:120px;"
            />
            <div class="pt-2" style="font-size:x-large;">
              무표정: {{ videoResult.result.emotions.neutral }}
            </div>
          </div>
          <div class="flip-card-back ">
            <!-- <h4 class="pt-2">무표정</h4> -->
            <div class="mt-3" style="font-size:18.5px;">
              <small>- 입술의 끝이 당겨지고 한쪽 얼굴만 올라간다.</small>
            </div>
          </div>
        </div>
      </div>
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img
              src="@/assets/aboutUs/sad.png"
              alt="Avatar"
              style="width:130px;height:120px;"
            />
            <div class="pt-2" style="font-size:x-large;">
              슬픔: {{ videoResult.result.emotions.sad }}
            </div>
          </div>
          <div class="flip-card-back ">
            <!-- <h4 class="pt-2">슬픔</h4> -->
            <div class="mt-3" style="font-size:18.5px;">
              <small>- 눈꺼풀 위가 내려간다.</small><br />
              <small>- 눈이 초점을 잃는다.</small><br />
              <small>- 입 주위가 살짝 아래로 당겨진다.</small>
            </div>
          </div>
        </div>
      </div>
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img
              src="@/assets/aboutUs/disgusted.png"
              alt="Avatar"
              style="width:130px;height:120px;"
            />
            <div class="pt-2" style="font-size:x-large;">
              역겨움: {{ videoResult.result.emotions.disgusted }}
            </div>
          </div>
          <div class="flip-card-back ">
            <!-- <h4 class="pt-2">역겨움</h4> -->
            <div class="mt-3" style="font-size:18.5px;">
              <small>- 코를 찡긋거린다.</small><br />
              <small>- 윗입술이 올라간다.</small>
            </div>
          </div>
        </div>
      </div>
      <div class="flip-card ">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img
              src="@/assets/aboutUs/surprised.png"
              alt="Avatar"
              style="width:130px;height:120px;"
            />
            <div class="pt-2" style="font-size:x-large;">
              놀람: {{ videoResult.result.emotions.surprised }}
            </div>
          </div>
          <div class="flip-card-back">
            <!-- <h4 class="pt-2">놀람</h4> -->
            <div class="mt-3" style="font-size:18.5px;">
              <small>- 양 눈썹이 올라간다.</small><br />
              <small>- 눈을 크게 뜬다.</small><br />
              <small>- 입이 벌어진다.</small>
            </div>
          </div>
        </div>
      </div>
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img
              src="@/assets/aboutUs/fearful.png"
              alt="Avatar"
              style="width:130px;height:120px;"
            />
            <div class="pt-2" style="font-size:x-large;">
              두려움: {{ videoResult.result.emotions.fearful }}
            </div>
          </div>
          <div class="flip-card-back">
            <!-- <h4 class="pt-2">두려움</h4> -->
            <div class="mt-3" style="font-size:18.5px;">
              <small>- 눈썹이 올라가고, 가운데로 당겨진다.</small><br />
              <small>- 눈꺼풀 위가 올라간다.</small><br />
              <small>- 눈꺼풀 아래가 긴장한다.</small>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--시선-->
    <div
      class="d-flex justify-content-center"
      style="font-size:x-large;margin-top:50px;"
    >
      <div>눈 깜빡임: {{ videoResult.result.gaze.blinking }}</div>
    </div>
    <div class="d-flex justify-content-around" style="margin-top:50px;">
      <div class="" style="margin-top:80px;font-size:x-large;">
        왼쪽:{{ videoResult.result.gaze.left }}
      </div>
      <div class="catHolder" style="">
        <span class="head">
          <span class="face">
            <span class="socket">
              <span class="eye">
                <span class="lidT"></span>
                <span class="pup"></span>
                <span class="lidB"></span>
              </span>
            </span>
            <span class="socket">
              <span class="eye">
                <span class="lidT"></span>
                <span class="pup"></span>
                <span class="lidB"></span>
              </span>
            </span>
            <span class="smile">
              <span class="hC"
                ><span class="teethLine"></span><span class="tL"></span
                ><span class="tL"></span> <span class="tL"></span
                ><span class="tL"></span><span class="tL"></span
              ></span>
            </span>
          </span>
        </span>
        <!-- <div class="controls clearfix">
        <div ref="blinkkk" class="blink face-control" @click="blink">
          Click to blink
        </div>
        <span class="clearfix"></span>

        <div class="look face-control">Click to Look</div>
        <div class="both face-control">Click for Both</div>
        <input type="radio" id="loop" />
      </div> -->
      </div>
      <div style="margin-top:80px;font-size:x-large;">
        오른쪽:{{ videoResult.result.gaze.right }}
      </div>
    </div>
    <div
      class="d-flex justify-content-center"
      style="font-size:x-large;margin-top:80px;"
    >
      <div class="mr-5">가운데: {{ videoResult.result.gaze.center }}</div>
    </div>

    <!--움직임-->
    <div
      class=""
      style="border:3px solid red;margin-top:90px; width:100%; height:200px;"
    >
      {{ videoResult.result.head }}
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import { mapState, mapActions } from "vuex";

$(window).ready(function() {
  blinkNlook();
  // $(".catHolder").on("click", function() {
  //   $(".lidT")
  //     .animate(
  //       {
  //         top: "-40",
  //       },
  //       500
  //     )
  //     .delay(200)
  //     .animate({
  //       top: "-80",
  //     });
  //   $(".lidB")
  //     .animate(
  //       {
  //         bottom: "-40",
  //       },
  //       500
  //     )
  //     .delay(200)
  //     .animate({
  //       bottom: "-80",
  //     });
  //   $(".pup")
  //     .delay(900)
  //     .animate(
  //       {
  //         left: "80",
  //       },
  //       500
  //     )
  //     .delay(200)
  //     .animate(
  //       {
  //         left: "0",
  //       },
  //       700
  //     )
  //     .delay(200)
  //     .animate({
  //       left: 40,
  //     });
  // });
});

function blinkNlook() {
  $(".lidT")
    .animate(
      {
        top: "-40",
      },
      500
    )
    .delay(200)
    .animate({
      top: "-80",
    });
  $(".lidB")
    .animate(
      {
        bottom: "-40",
      },
      500
    )
    .delay(200)
    .animate({
      bottom: "-80",
    });
  $(".pup")
    .delay(900)
    .animate(
      {
        left: "80",
      },
      500
    )
    .delay(200)
    .animate(
      {
        left: "0",
      },
      700
    )
    .delay(200)
    .animate({
      left: 40,
    });
}

export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["videoResult", "tags"]),
  },
  methods: {
    ...mapActions(["getVideoResult", "deleteVideo", "EditTag"]),
    cutDate(date) {
      let CD = date + "";
      const year = CD.substring(0, 4) + ".";
      const month = CD.substring(5, 7) + ".";
      const day = CD.substring(8, 10) + "  ";
      const hour = CD.substring(11, 13) + ":";
      const minute = CD.substring(14, 16) + "";
      const res = year + month + day + hour + minute;
      return res;
    },
    cutTag(tags) {
      if (this.videoResult.tag) {
        let result = [];
        let arr = tags[0].split(",");
        for (let tag of arr) {
          let res = "#" + tag;
          result.push(res);
        }
        return result;
      }
    },
    blink() {
      this.$refs.blinkkk;
    },
  },
  created() {
    this.getVideoResult(this.$route.params.id);
    // this.EditTag(this.videoResult.tag);
  },
  mounted() {
    $(".catHolder").hover(function() {
      $(".lidT")
        .animate(
          {
            top: "-40",
          },
          500
        )
        .delay(200)
        .animate({
          top: "-80",
        });
      $(".lidB")
        .animate(
          {
            bottom: "-40",
          },
          500
        )
        .delay(200)
        .animate({
          bottom: "-80",
        });
      $(".pup")
        .delay(900)
        .animate(
          {
            left: "80",
          },
          500
        )
        .delay(200)
        .animate(
          {
            left: "0",
          },
          700
        )
        .delay(200)
        .animate({
          left: 40,
        });
    });

    $(".blink").on("click", function() {
      $(".lidT")
        .animate(
          {
            top: "-40",
          },
          500
        )
        .delay(200)
        .animate({
          top: "-80",
        });
      $(".lidB")
        .animate(
          {
            bottom: "-40",
          },
          500
        )
        .delay(200)
        .animate({
          bottom: "-80",
        });
    });

    $(".look").on("click", function() {
      $(".pup")
        .animate(
          {
            left: "80",
          },
          500
        )
        .delay(200)
        .animate(
          {
            left: "0",
          },
          700
        )
        .delay(200)
        .animate({
          left: 40,
        });
    });

    $(".both").on("click", function() {
      $(".lidT")
        .animate(
          {
            top: "-40",
          },
          500
        )
        .delay(200)
        .animate({
          top: "-80",
        });
      $(".lidB")
        .animate(
          {
            bottom: "-40",
          },
          500
        )
        .delay(200)
        .animate({
          bottom: "-80",
        });
      $(".pup")
        .delay(900)
        .animate(
          {
            left: "80",
          },
          500
        )
        .delay(200)
        .animate(
          {
            left: "0",
          },
          700
        )
        .delay(200)
        .animate({
          left: 40,
        });
    });
  },
};
</script>

<style>
/* // .flip-box {
//   display: flex;
//   align-content: stretch;
//   min-height: 250px;
//   min-width: 200px;
//   flex-wrap: wrap;
//   position: relative;
//   border: 10px solid transparent;
//   padding: 0;
//   border-top: 0;
//   -webkit-perspective: 1000;
//   perspective: 1000;

//   &:hover {
//     .back {
//       transform: rotateY(0deg);
//       z-index: 10;
//     }

//     .front {
//       transform: rotateY(180deg);
//       z-index: -1;
//     }
//   }

//   .back,
//   .front {
//     position: relative;
//     background-color: #1b2d61;
//     color: white;
//     display: flex;
//     justify-content: center;
//     align-content: center;
//     flex: 0 0 100%;
//     -webkit-transition: all 1s cubic-bezier(0.5, 1, 0.5, 1);
//     transition: all 1s cubic-bezier(0.5, 1.3, 0.5, 1.3);
//     transform-style: preserve-3d;
//     background-size: cover;
//     background-position: center;
//   }

//   .back {
//     background-color: #cecece;
//     position: absolute;
//     left: 0;
//     top: 0;
//     bottom: 0;
//     width: 100%;
//     z-index: -1;
//     transform: rotateY(-180deg);

//     &:after {
//       content: "";
//       position: absolute;
//       bottom: 0;
//       left: 0;
//       width: 30px;
//       height: 30px;
//       border: 15px solid transparent;
//       border-bottom-color: white;
//       border-left-color: white;
//     }
//   }

//   .front {
//     z-index: 10;

//     .content {
//       font-size: 2rem;
//     }

//     &:after {
//       content: "";
//       position: absolute;
//       bottom: 0;
//       right: 0;
//       width: 20px;
//       height: 20px;
//       border: 15px solid #cecece;
//       border-bottom-color: white;
//       border-right-color: white;
//     }
//   }

//   .content {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     flex-direction: column;
//     -webkit-transform: translateZ(50px);
//     transform: translateZ(50px);
//     text-shadow: 0px 0px 2px black;
//   }
// }
// */
.flip-card {
  background-color: transparent;
  width: 140px;
  height: 180px;
  perspective: 1000px;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.flip-card-front {
  background-color: #043566;
  color: #ffffff;
}
.flip-card-back {
  background-color: #dce224;
  color: #043566;
  transform: rotateY(180deg);
}

.catHolder {
  width: 300px;
  /* margin: 0 auto; */
  /* position: relative; */
  top: 10em;
}
.head {
  display: block;
  position: relative;
  background: #821067;
  border-radius: 100px 100px 0 0;
  height: 200px;
  width: 300px;
}
.head:after,
.head:before {
  content: "";
  display: block;
  border-bottom: 130px solid #821067;
  position: absolute;
  top: -20px;
}
.head:before {
  left: 0;
  border-left: 0 solid transparent;
  border-right: 120px solid transparent;
}
.head:after {
  right: 0;
  border-right: 0 solid transparent;
  border-left: 120px solid transparent;
}
.face {
  width: 210px;
  margin: 0 auto;
  display: block;
}
.socket {
  border-radius: 50%;
  height: 102px;
  width: 102px;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  overflow: hidden;
  position: relative;
  top: -1px;
  left: -1px;
  display: inline-block;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.4);
  z-index: 100;
}
.eye {
  border-radius: 50%;
  height: 100px;
  width: 100px;
  background: #fad73f;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  position: relative;
  top: 1px;
  left: 1px;
  display: inline-block;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.4);
  z-index: 100;
}
.pup {
  border-radius: 50%;
  height: 20px;
  width: 20px;
  background: #2b2b2b;
  display: block;
  position: absolute;
  top: 40px;
  left: 40px;
}
.lidT {
  display: block;
  width: 101px;
  height: 101px;
  background: #821067;
  position: absolute;
  top: -80px;
  z-index: 20;
}
.lidB {
  display: block;
  width: 100px;
  height: 100px;
  background: #821067;
  position: absolute;
  bottom: -80px;
  z-index: 20;
}
.smile {
  width: 200px;
  height: 80px;
  overflow: hidden;
  position: relative;
  border-top: 2px solid brown;
  top: 50px;
  left: 2px;
  display: block;
}
.hC {
  display: block;
  height: 200px;
  width: 200px;
  background: #f7f7f7;
  border-radius: 50%;
  position: absolute;
  bottom: 5px;
  box-shadow: 0 5px 0 brown;
  overflow: hidden;
}
.teethLine {
  height: 1px;
  width: 200px;
  background: rgba(0, 0, 0, 0.6);
  position: absolute;
  bottom: 40px;
  display: block;
}
.tL {
  width: 1px;
  height: 200px;
  background: rgba(0, 0, 0, 0.6);
  float: left;
  bottom: 45px;
  display: block;
  margin-left: 40px;
}
.controls {
  float: right;
  width: 300px;
}
.face-control {
  display: block;
  text-align: center;
  width: auto;
  background: brown;
  padding: 15px;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  font-size: 22px;
  color: #fff;
  font-family: "century gothic";
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.8);
  border-radius: 30px 0 0 30px;
  cursor: pointer;
  margin-bottom: 20px;
  box-shadow: 0 1px 0 rgba(255, 255, 255, 0.6) inset;
}
#loop {
  float: right;
}
.rotate {
  -webkit-transform: rotate(180deg);
  -moz-transform: rotate(180deg);
  -o-transform: rotate(180deg);
  transform: rotate(180deg);
}
</style>
