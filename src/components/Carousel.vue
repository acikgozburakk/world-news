<template>
  <v-carousel>
    <v-carousel-item
      v-for="(item,i) in technologyNews"
      :key="i"
      :src="imageSource(item.urlToImage)"
      reverse-transition="fade-transition"
      class="carousel"
      transition="fade-transition"
      @click="goToUrl(item.url)"
    >
    <v-row
    class="fill-height"
    align="center"
    justify="start">
    <v-card
    class="ml-15"
    max-width="344"
  >
    <v-card-text>
      <div>{{item.author}}</div>
      <p class="text-h4 text--primary">
        {{item.title}}
      </p>
    </v-card-text>
  </v-card></v-row>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  props: {
    technologyNews: {
      type: Array,
      required: true,
    },
  },
  methods:{
    goToUrl(url){
      window.open(url,'_blank')
    },
    
    imageSource(url){
      return url || 'https://www.havelsan.com.tr/content/images/uploads/HVLYLDZ_Ekip,1637_big.png'
    }
  },
};
</script>

<style scoped>
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
.carousel{
  cursor: pointer;
}
</style>