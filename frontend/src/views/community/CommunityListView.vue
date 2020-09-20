<template>
  <div>
    <Header />
    <div class="container mt-5">
      <router-link class="btn btn-dark mb-2" to="/community/create">글 쓰기</router-link>
      <table class="table">
        <thead class="thead-light">
          <tr>
            <th scope="col" class="text-center">번호</th>
            <th scope="col" class="text-center">제목</th>
            <th scope="col" class="text-center">내용</th>
            <th scope="col" class="text-center">태그</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="community in communitys" :key="community.id">
            <th scope="row" class="text-center">{{ community.id }}</th>
            <td class="text-center"><router-link :to="`/community/detail/${community.id}`">{{ community.title }}</router-link></td>
            <td class="text-center">{{ community.content }}</td>
            <td class="text-center">{{ community.update_tag }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import Header from '../../components/Header'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'CommunityListView',
  components: {
    Header,
  },
  computed: {
    ...mapState(['communitys'])
  },
  methods: {
    ...mapActions(['getCommunitys']),
  },
  created() {
    this.getCommunitys()
  }
}
</script>

<style>

</style>