<template>
  <div>
    <Header />
    <div class="d-flex">
      <Sidebar />

      <!-- 이력서 -->
      <div class="m-auto">
        <!-- 첫 번째 섹션 - 기본 정보 -->
        <section>
          <hr>
          <h3>기본 정보</h3>
          <div class="d-flex">

            <!-- 사진 -->
            <div>
              <img src="@/assets/temp-profile.png" alt="" style="width: 170px;">
            </div>

            <!-- 기본정보 -->
            <div>
              <table class="table table-bordered">
                <tbody class="d-flex">
                  <tr>
                    <th scope="row">이름</th>
                    <td>Mark</td>
                  </tr>
                  <tr>
                    <th scope="row">생년월일</th>
                    <td>Jacob</td>
                  </tr>
                  <tr>
                    <th scope="row">성별</th>
                    <td>Larry</td>
                  </tr>
                </tbody>
              </table>
              <table class="table table-bordered">
                <tbody class="">
                  <tr>
                    <th scope="row">이메일</th>
                    <td>Mark</td>
                  </tr>
                  <tr>
                    <th scope="row">주소</th>
                    <td>Jacob</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <!-- 두 번째 섹션 - 교육 -->
        <section>
          <hr>
          <h3>교육</h3>
          <!-- 고등 학교 -->
          <div>
            <h6>고등학교</h6>
            <table class="table table-bordered">
              <tbody class="">
                <tr>
                  <th scope="row">기간</th>
                  <td>Mark</td>
                </tr>
                <tr>
                  <th scope="row">학교명</th>
                  <td>Jacob</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <!-- 대학교 -->
          <div>
            <h6>대학교</h6>
            <table class="table table-bordered">
              <tbody class="">
                <tr>
                  <th scope="row">기간</th>
                  <td>Mark</td>
                </tr>
                <tr>
                  <th scope="row">학교명</th>
                  <td>Jacob</td>
                </tr>
                <tr>
                  <th scope="row">전공</th>
                  <td>Jacob</td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- 대학원 -->
          <div>
            <h6>대학원</h6>
            <table class="table table-bordered">
              <tbody class="">
                <tr>
                  <th scope="row">기간</th>
                  <td>Mark</td>
                </tr>
                <tr>
                  <th scope="row">학교명</th>
                  <td>Jacob</td>
                </tr>
                <tr>
                  <th scope="row">전공</th>
                  <td>Jacob</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <!-- 세 번째 섹션 - 자격/면허 -->
        <section>
          <hr>
          <h3>자격/면허</h3>
            <table class="table table-bordered">
              <tbody class="">
                <tr>
                  <th scope="row">이름</th>
                  <td>Mark</td>
                </tr>
                <tr>
                  <th scope="row">발행처/기관</th>
                  <td>Jacob</td>
                </tr>
              </tbody>
            </table>
        </section>

        <!-- 네 번째 섹션 - 경력 사항 -->
        <section>
          <hr>
          <h3>경력 사항</h3>
            <table class="table table-bordered">
              <tbody class="">
                <tr>
                  <th scope="row">회사명</th>
                  <td>Mark</td>
                </tr>
                <tr>
                  <th scope="row">기간</th>
                  <td>Jacob</td>
                </tr>
                <tr>
                  <th scope="row">담당업무</th>
                  <td>Jacob</td>
                </tr>
              </tbody>
            </table>

        </section>

        <!-- 다섯 번째 섹션 - 기타활동 및 사회경험 -->
        <section>
          <hr>
          <h3>기타활동 및 사회경험</h3>
          <table class="table table-bordered">
            <tbody class="">
              <tr>
                <th scope="row">활동명</th>
                <td>Mark</td>
              </tr>
              <tr>
                <th scope="row">기간</th>
                <td>Jacob</td>
              </tr>
              <tr>
                <th scope="row">내용</th>
                <td>Jacob</td>
              </tr>
            </tbody>
          </table>
          <hr>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'

export default {
  name: "ResumeDetailView",
  components: {
    Header,
    Sidebar,
  },
  data() {
    return {
      resumeData: {

      }
    }

  }

}
</script>

<style>

</style>