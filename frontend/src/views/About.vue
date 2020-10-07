<template>
  <div>
    <div class="m-5">
      <!--About us-->
      <!-- <div class="d-flex justify-content-start ml-3" style="height:10px; ">
        <div class="d-flex flex-column ml-5 mt-5 " style="font-size:xx-large;">
          <div class="ml-5 mt-5 pt-5">
            About 'Job, A Dream'
          </div>
        </div>
      </div> -->
      <!--전체적인 소개-->
      <div
        class="ml-5 pt-5"
        style="margin-top:55px;padding-left:40px;font-size:xxx-large"
      >
        구직 과정의 혁명, 잡아드림
      </div>
      <div
        class="d-flex justify-content-around"
        style="margin-top:35px;height:350px; "
      >
        <div class="d-flex flex-column mt-5 pt-5" style="font-size:xx-large;">
          <div class="mt-5 mb-5 pt-5">
            면접이 부담스러워 긴장감이 높아진다면,
            <br /><br />
            취업 준비 과정을 기록하고 싶다면,
          </div>
          <div class="mt-5" style="font-size:xxx-large;">
            잡아드림이 다 봐드릴게요!
          </div>
        </div>
        <div class="ml-5" style>
          <img
            src="@/assets/aboutUs/target.png"
            alt
            style="width:400px; height:350px;"
          />
        </div>
      </div>

      <!--영상분석-->
      <div
        class="p-5 mr-5 d-flex justify-content-around"
        style="margin-top:100px;height:300px;"
      >
        <div class="mt-4 mr-5 " style="padding-top:80px;font-size:x-large;">
          표정관리, 시선처리가 고민이라면?
        </div>
        <div class="pt-5" style="">
          <div class="mt-5" style="padding-top:40px;font-size:xxx-large;">
            영상 분석
          </div>
        </div>
        <img
          class="mb-3 mr-5 "
          style="margin-top:25px;width:150px;height:125px;"
          src="@/assets/menus/video.png"
          alt
        />
        <div class="ml-5 mt-2 mr-5">
          <div style="font-size:x-large;">면접 영상을 올리면</div>
          <ul class="mt-1 mr-5" style="font-size:xx-large;">
            <li>움직임 포착</li>
            <li class="mt-2">시선 추적</li>
            <li class="mt-2">감정 분석</li>
          </ul>
        </div>
      </div>

      <!--음성분석-->
      <div
        class="p-5 mr-5 d-flex justify-content-around"
        style="margin-top:40px;height:300px;"
      >
        <div class="ml-5 mt-2 mr-5">
          <div style="font-size:x-large;">면접 답변을 녹음하면</div>
          <ul class="mt-1 mr-5" style="font-size:xx-large;">
            <li>대본 추출</li>
            <li class="mt-2">워드 클라우드</li>
            <li class="mt-2">발음 정확성</li>
          </ul>
        </div>
        <div class="mt-4 mr-5 " style="padding-top:80px;font-size:x-large;">
          부정확한 발음이 고민이라면?
        </div>
        <div class="pt-5" style="">
          <div class="mt-5" style="padding-top:40px;font-size:xxx-large;">
            음성 분석
          </div>
        </div>
        <img
          class="mb-3 mr-5"
          style="margin-top:55px;width:150px;height:125px;"
          src="@/assets/menus/audio.png"
          alt
        />
      </div>

      <!--자소서분석-->
      <div
        class="p-5 mr-5 d-flex justify-content-around"
        style="margin-top:40px;height:300px;"
      >
        <div class="mt-4 mr-5 " style="padding-top:80px;font-size:x-large;">
          표정관리, 시선처리가 고민이라면?
        </div>
        <div class="pt-5" style="">
          <div class="mt-5" style="padding-top:40px;font-size:xxx-large;">
            자소서 분석
          </div>
        </div>
        <img
          class="mb-3 mr-5"
          style="margin-top:55px;width:150px;height:125px;"
          src="@/assets/menus/coverletter.png"
          alt
        />
        <div class="ml-5 mt-2 mr-5">
          <div style="font-size:x-large;">자소서 항목과 내용을 등록하면</div>
          <ul class="mt-1 mr-5" style="font-size:xx-large;">
            <li>맞춤법 검사</li>
            <li class="mt-2">AI 기반 질문 추출</li>
          </ul>
        </div>
      </div>
      <!--풀코스분석-->
      <div
        class="p-5 mr-5 d-flex justify-content-around"
        style="margin-top:40px;height:300px;"
      >
        <div class="ml-5 mt-2 mr-5">
          <div style="font-size:x-large;">이 모든 과정을 한번에!</div>
          <ul class="mt-1 mr-5" style="font-size:xx-large;">
            <li>영상 분석</li>
            <li class="mt-2">음성 분석</li>
            <li class="mt-2">자소서 분석</li>
          </ul>
        </div>
        <div class="mt-4 mr-5 " style="padding-top:80px;font-size:x-large;">
          취업에 한걸음 더 가까워지는 길,
        </div>
        <div class="pt-5" style="">
          <div class="mt-5" style="padding-top:40px;font-size:xxx-large;">
            풀코스 분석
          </div>
        </div>
        <img
          class="mb-3 mr-5"
          style="margin-top:55px;width:150px;height:125px;"
          src="@/assets/menus/fullcourse.png"
          alt
        />
      </div>
      <!--이미지 새로 만들기-->
      <!-- <div>
      <div class="d-flex flex-column align-items-center mb-5">
        <div style="font-size:35px">구직자들이 제일 어려워하는 전형</div>
        <div class="mb-5 ml-5" style="font-size:30px; padding-left:150px;">
          취업준비생 574명 대상
        </div>
      </div>
      <div
        class="mt-5 mr-5 pr-5 d-flex justify-content-around"
        style="height:320px; "
      >
        <div class="pie-chart pie-chart1">
          <span class="center">43.4%</span>
        </div>
        <div class="pie-chart pie-chart2">
          <span class="center">24.4%</span>
        </div>
        <div class="pie-chart pie-chart3">
          <span class="center">19.5%</span>
        </div>
      </div>
      <div
        class="d-flex justify-content-around mr-5 ml-4"
        style="font-size:x-large"
      >
        <div class="pl-5">면접</div>
        <div class>인적성 및 필기시험</div>
        <div>서류전형</div>
      </div>
      <div class="d-flex justify-content-end mr-5" style="font-size:x-large;">
        <div class="mr-5 mb-5" style="padding-right:50px;">
          조사 기관: 취업포털 커리어
        </div>
      </div>
    </div> -->
      <div
        style="margin-top:60px;height:300px;width:100%;border:3px solid orange;"
      >
        사진 들어갈 공간
      </div>
      <!--면접 통계-->
      <div
        class="d-flex justify-content-around"
        style="height:400px;margin-top:90px;"
      >
        <!-- <div class="second circle">
        <strong></strong>
      </div>-->
        <!-- <div class="progress_circle circle"></div> -->
        <div class="d-flex flex-column justify-center align-items-center">
          <Progress
            class="circle-progress"
            :transitionDuration="3000"
            :radius="125"
            :strokeWidth="15"
            strokeColor="#043566"
            value="77"
          >
            <div
              class="content pl-2"
              style="font-size:xx-large;color: #043566;"
            >
              77%
            </div>
            <template v-slot:footer></template>
          </Progress>
          <div class="mt-2" style="font-size:xx-large;">
            구직자의 약 80%, 면접 보고 후회
          </div>
        </div>
        <div class="d-flex flex-column align-items-center" style>
          <div class="align-self-start" style="font-size:30px;">
            면접을 보고 후회한 이유 (복수 응답)
          </div>
          <div class="align-self-start" style="font-size:23px;">
            구직자 302명 응답
          </div>

          <div class="mt-4">
            <div
              class="d-flex justify-content-between"
              style="font-size:28px;border:2px solid grey;border-radius:5px;"
            >
              <div class="p-2">준비한 답변을 제대로 하지 못해서</div>
              <div
                style="width:100px;padding-top:6px;padding-left:4px;font-size:28px;background-color:#DCE224;border:2px solid #DCE224;border-radius:0 5px 5px 0;"
              >
                44.2%
              </div>
            </div>

            <div
              class="d-flex mt-2 justify-content-between"
              style="border:2px solid grey;border-radius:5px;"
            >
              <div class="p-2" style="font-size:28px;">
                긴장으로 말을 더듬어서
              </div>
              <div
                style="width:90px;padding-top:6px;padding-left:13px;font-size:28px;background-color:#DCE224;border:2px solid #DCE224;border-radius:0 5px 5px 0;"
              >
                39%
              </div>
            </div>

            <div
              class="d-flex mt-2 justify-content-between"
              style="border:2px solid grey;border-radius:5px;"
            >
              <div class="p-2" style="font-size:27px;">
                사전 준비를 철저하게 하지 못해서
              </div>
              <div
                style="padding-top:6px;font-size:27px;background-color:#DCE224;border:2px solid #DCE224;border-radius:0 5px 5px 0;"
              >
                31.2%
              </div>
            </div>

            <div
              class="d-flex mt-2 justify-content-between"
              style="border:2px solid grey;border-radius:5px;"
            >
              <div class="p-2" style="font-size:26px;">
                끝난 후에야 질문에 대한 답이 생각나서
              </div>
              <div
                style="width:68px;padding-top:6px;padding-left:4px;font-size:26px;background-color:#DCE224;border:2px solid #DCE224;border-radius:0 5px 5px 0;"
              >
                29%
              </div>
            </div>
          </div>
          <div class="align-self-end mr-3 mt-2" style="font-size:x-large;">
            자료 제공: 사람인
          </div>
        </div>
      </div>
    </div>
    <!--마무리-->
    <div
      class="d-flex flex-column justify-content-center align-items-center"
      style="margin-top:70px;font-size:xx-large;width100%; height:130px; background-color:#043566;color:#fff;"
    >
      <div>
        고민많았던 습관들, 이제는 잡아드림이 다 잡아드릴게요!
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import Progress from "easy-circular-progress";

$(window).ready(function() {
  draw(43, ".pie-chart1", "#DCE224");
  draw(24, ".pie-chart2", "#8CDDC6");
  draw(19, ".pie-chart3", "#81CED6");
});

function draw(max, classname, colorname) {
  var i = 1;
  var func1 = setInterval(function() {
    if (i < max) {
      color1(i, classname, colorname);
      i++;
    } else {
      clearInterval(func1);
    }
  }, 35);
}
function color1(i, classname, colorname) {
  $(classname).css({
    background:
      "conic-gradient(" +
      colorname +
      " 0% " +
      i +
      "%, #ffffff " +
      i +
      "% 100%)",
  });
}

export default {
  components: {
    Progress,
  },
};
</script>

<style>
.circle {
  min-width: 200px;
  display: inline-block;
}

.pie-chart {
  position: relative;
  display: inline-block;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  transition: 0.3s;
  border: 3px solid #043566;
}
span.center {
  background: #fff;
  border: 3px solid #043566;
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  text-align: center;
  line-height: 200px;
  font-size: 30px;
  color: #043566;
  transform: translate(-50%, -50%);
}
.second {
  position: relative;
  padding: 20px;
  width: 400px;
  border: 3px solid red;
}
.second > strong {
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -50px 0 0 -55px;
  font-size: 4rem;
}
</style>
