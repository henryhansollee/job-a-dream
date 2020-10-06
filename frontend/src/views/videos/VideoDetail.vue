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
    <div
      class="mt-5 pt-5 d-flex justify-content-around"
      style="width:100%; height:220px;"
    >
      <!-- {{ videoResult.result.emotions }} -->
      <!-- <div class="row flip-boxes">
        <div class="col-md-3 col-sm-4 col-8 flip-box">
          <div
            class="front"
            style="background-image: url(https://images.pexels.com/photos/39811/pexels-photo-39811.jpeg?auto=compress&cs=tinysrgb&h=350);"
          >
            <div class="content text-center">
              angry<br />
              <span class="click-for-more"> </span>
            </div>
          </div>
          <div class="back">
            <div class="content">
              First Back
            </div>
          </div>
        </div>
        <div class="col-md-3 col-sm-4 col-8 flip-box">
          <div
            class="front"
            style="background-image: url(https://images.pexels.com/photos/39811/pexels-photo-39811.jpeg?auto=compress&cs=tinysrgb&h=350);"
          >
            <div class="content text-center">
              disgusted<br />
              <span class="click-for-more"> </span>
            </div>
          </div>
          <div class="back">
            <div class="content">
              First Back
            </div>
          </div>
        </div>
        <div class="col-md-3 col-sm-4 col-8 flip-box">
          <div
            class="front"
            style="background-image: url(https://images.pexels.com/photos/39811/pexels-photo-39811.jpeg?auto=compress&cs=tinysrgb&h=350);"
          >
            <div class="content text-center">
              fearful<br />
              <span class="click-for-more"> </span>
            </div>
          </div>
          <div class="back">
            <div class="content">
              First Back
            </div>
          </div>
        </div>
        <div class="col-md-3 col-sm-4 col-8 flip-box">
          <div
            class="front"
            style="background-image: url(https://images.pexels.com/photos/39811/pexels-photo-39811.jpeg?auto=compress&cs=tinysrgb&h=350);"
          >
            <div class="content text-center">
              happy<br />
              <span class="click-for-more"> </span>
            </div>
          </div>
          <div class="back">
            <div class="content">
              First Back
            </div>
          </div>
        </div>
        <div class="col-md-3 col-sm-4 col-8 flip-box">
          <div
            class="front"
            style="background-image: url(https://images.pexels.com/photos/39811/pexels-photo-39811.jpeg?auto=compress&cs=tinysrgb&h=350);"
          >
            <div class="content text-center">
              newtral<br />
              <span class="click-for-more"> </span>
            </div>
          </div>
          <div class="back">
            <div class="content">
              First Back
            </div>
          </div>
        </div>
        <div class="col-md-3 col-sm-4 col-8 flip-box">
          <div
            class="front"
            style="background-image: url(https://images.pexels.com/photos/39811/pexels-photo-39811.jpeg?auto=compress&cs=tinysrgb&h=350);"
          >
            <div class="content text-center">
              sad<br />
              <span class="click-for-more"> </span>
            </div>
          </div>
          <div class="back">
            <div class="content">
              First Back
            </div>
          </div>
        </div>
        <div class="col-md-3 col-sm-4 col-8 flip-box">
          <div
            class="front"
            style="background-image: url(https://images.pexels.com/photos/39811/pexels-photo-39811.jpeg?auto=compress&cs=tinysrgb&h=350);"
          >
            <div class="content text-center">
              surprised<br />
              <span class="click-for-more"> </span>
            </div>
          </div>
          <div class="back">
            <div class="content">
              First Back
            </div>
          </div>
        </div>
      </div> -->
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

    <div
      class="mt-5 pt-5"
      style="border:3px solid blue; width:100%; height:200px;"
    >
      {{ videoResult.result.gaze }}
    </div>
    <div
      class="mt-5 pt-5"
      style="border:3px solid red; width:100%; height:200px;"
    >
      {{ videoResult.result.head }}
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
// import { TagList } from "../../plugins/editTag";

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
  },
  created() {
    this.getVideoResult(this.$route.params.id);
    // this.EditTag(this.videoResult.tag);
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
</style>
