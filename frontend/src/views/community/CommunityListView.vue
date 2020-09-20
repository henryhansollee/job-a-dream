<template>
  <div>
    <Header />
    <h1>CommunityListView</h1>
    <router-link to="/community/create">글 쓰기</router-link>
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">번호</th>
          <th scope="col">제목</th>
          <th scope="col">내용</th>
          <th scope="col">태그</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="community in communitys" :key="community.id">
          <th scope="row">{{ community.id }}</th>
          <td><router-link :to="`/community/detail/${community.id}`">{{ community.title }}</router-link></td>
          <td>{{ community.content }}</td>
          <td>{{ community.update_tag }}</td>
        </tr>
      </tbody>
    </table>
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