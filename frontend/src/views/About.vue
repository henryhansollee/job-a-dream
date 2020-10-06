<template>
  <div class="m-5">
    <div class="d-flex justify-content-around" style="height:400px; ">
      <div class="d-flex flex-column mt-5" style="font-size:x-large;">
        <div class="mt-5 mb-5">
          면접이 부담스러워 긴장감이 높아진다면,
          <br />
          <br />과도한 움직임이나 시선 처리가 산만해서 지적을 받았다면,
          <br />
          <br />발음이 부정확해서 고민이 많다면,
        </div>
        <div class="mt-5" style="font-size:xx-large;">잡아드림이 다 봐드릴게요!</div>
      </div>
      <div class="ml-5" style>
        <img src="@/assets/aboutUs/6.png" alt style="width:450px" />
      </div>
    </div>
    <div class="d-flex flex-column align-items-center mb-5">
      <div style="font-size:35px">구직자들이 제일 어려워하는 전형</div>
      <div class="mb-5 ml-5" style="font-size:30px; padding-left:150px;">취업준비생 574명 대상</div>
    </div>

    <div class="mt-5 mr-5 pr-5 d-flex justify-content-around" style="height:320px; ">
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

    <div class="d-flex justify-content-around mr-5 ml-4" style="font-size:x-large">
      <div class="pl-5">면접</div>
      <div class>인적성 및 필기시험</div>
      <div>서류전형</div>
    </div>
    <div class="d-flex justify-content-end mr-5" style="font-size:x-large;">
      <div class="mr-5 mb-5" style="padding-right:50px;">조사 기관: 취업포털 커리어</div>
    </div>

    <div class="d-flex justify-content-around" style="height:400px;margin-top:50px;">
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
          <div class="content pl-2" style="font-size:xx-large;color: #043566;">77%</div>
          <template v-slot:footer></template>
        </Progress>
        <div class="mt-2" style="font-size:xx-large;">구직자의 약 80%, 면접 보고 후회</div>
      </div>
      <div class="d-flex flex-column align-items-center" style>
        <div class="align-self-start" style="font-size:30px;">면접을 보고 후회한 이유 (복수 응답)</div>
        <div class="align-self-start" style="font-size:23px;">구직자 302명 응답</div>

        <div class="mt-4">
          <div
            class="d-flex justify-content-between"
            style="font-size:28px;border:2px solid grey;border-radius:5px;"
          >
            <div class="p-2">준비한 답변을 제대로 하지 못해서</div>
            <div
              style="width:100px;padding-top:6px;padding-left:4px;font-size:28px;background-color:#DCE224;border:2px solid #DCE224;border-radius:0 5px 5px 0;"
            >44.2%</div>
          </div>

          <div
            class="d-flex mt-2 justify-content-between"
            style="border:2px solid grey;border-radius:5px;"
          >
            <div class="p-2" style="font-size:28px;">긴장으로 말을 더듬어서</div>
            <div
              style="width:90px;padding-top:6px;padding-left:13px;font-size:28px;background-color:#DCE224;border:2px solid #DCE224;border-radius:0 5px 5px 0;"
            >39%</div>
          </div>

          <div
            class="d-flex mt-2 justify-content-between"
            style="border:2px solid grey;border-radius:5px;"
          >
            <div class="p-2" style="font-size:27px;">사전 준비를 철저하게 하지 못해서</div>
            <div
              style="padding-top:6px;font-size:27px;background-color:#DCE224;border:2px solid #DCE224;border-radius:0 5px 5px 0;"
            >31.2%</div>
          </div>

          <div
            class="d-flex mt-2 justify-content-between"
            style="border:2px solid grey;border-radius:5px;"
          >
            <div class="p-2" style="font-size:26px;">끝난 후에야 질문에 대한 답이 생각나서</div>
            <div
              style="width:68px;padding-top:6px;padding-left:4px;font-size:26px;background-color:#DCE224;border:2px solid #DCE224;border-radius:0 5px 5px 0;"
            >29%</div>
          </div>
        </div>
        <div class="align-self-end mr-3 mt-2" style="font-size:x-large;">자료 제공: 사람인</div>
      </div>
    </div>

    <div class="mt-5 p-5" style="height:300px;">
      <div style="font-size:xx-large;">영상 분석</div>
      <div style="font-size:x-large;">면접 연습 연상을 올리면 비언어적인 요소들을 분석해드려요!</div>
      <ul class="mt-4" style="font-size:x-large;">
        <li>움직임 포착</li>
        <li>시선 추적</li>
        <li>감정 분석</li>
      </ul>
    </div>
    <div class="mt-5 p-5" style="height:300px;">
      <div style="font-size:xx-large;">음성 분석</div>
      <div style="font-size:x-large;">면접 답변을 녹음하면 언어적 요소를 분석해드려요!</div>
      <ul class="mt-4" style="font-size:x-large;">
        <li>대본 추출</li>
        <li>워드 클라우드</li>
        <li>발음 정확성</li>
      </ul>
    </div>
    <div class="mt-5 p-5" style="height:300px;">
      <div style="font-size:xx-large;">자소서 분석</div>
      <div style="font-size:x-large;">
        자소서 항목과 내용을 등록하면 맞춤법 검사는 물론, 면접에서 나올만한
        질문을 볼 수 있어요!
      </div>
      <ul class="mt-4" style="font-size:x-large;">
        <li>맞춤법 검사</li>
        <li>AI 기반 질문 추출</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>