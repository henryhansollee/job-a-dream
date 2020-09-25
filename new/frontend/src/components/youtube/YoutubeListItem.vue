<template>
  <div class="container mt-5" @click="goDetail">
    <!-- <router-link
      :to="`/${video.id.videoId}`"
      style="text-decoration:none; color: black;"
    > -->
    <div class="play-video">
      <img :src="video.snippet.thumbnails.medium.url" alt="" class="videoImg" />
      <div class="play">
        <div
          style="
            border-radius: 15px;
            background-color: green;
            color: white;
            padding: 10px 15px;
          "
        >
          <i class="fas fa-play"></i> 재생
        </div>
      </div>
    </div>

    <div>
      <h5>{{ video.snippet.title }}</h5>
    </div>
    <!-- </router-link> -->
  </div>
</template>
