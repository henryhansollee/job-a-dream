<template>
  <v-app id="inspire">
    <!-- 사이드바 -->
    <v-navigation-drawer v-model="drawer" :clipped="$vuetify.breakpoint.lgAndUp" app>
      <v-list dense>
        <!-- 영상 분석 -->
        <v-list-item link href="/video/list">
          <v-list-item-action>
            <v-icon>아이콘</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              영상분석
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <!-- 음성분석 -->
        <v-list-item link href="/audio/list">
          <v-list-item-action>
            <v-icon>아이콘</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              음성분석
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <!-- 자소서분석 -->
        <v-list-item link href="/coverletter/list">
          <v-list-item-action>
            <v-icon>아이콘</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              자소서분석
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <!-- 풀코스 분석 -->
        <v-list-item link href="/fullcourse/list">
          <v-list-item-action>
            <v-icon>아이콘</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              풀코스분석
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <!-- 면접 참고 영상 -->
        <v-list-item link href="/youtube/list">
          <v-list-item-action>
            <v-icon>아이콘</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              면접 참고 영상
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <!-- 네브바 -->
    <v-app-bar :clipped-left="$vuetify.breakpoint.lgAndUp" app color="blue darken-3" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title style="width: 300px" class="ml-0 pl-4">
        <span class="hidden-sm-and-down">잡아드림</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <a href="#">로그아웃</a>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
  export default {
    data() {
      return {
        drawer: null,
      }
    },
  }
</script>