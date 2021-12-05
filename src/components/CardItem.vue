<template>
  <v-card
    class="mx-auto overflow-hidden"
    max-width="344"
    height="275"
    elevation="24"
    shaped
  >
    <v-img
      :src="headline.urlToImage" v-on:error="onImgError"
    ></v-img>

    <v-card-text >
      {{headline.title}}
    </v-card-text>
  </v-card>
</template>
<script>

export default {
    data(){
        return {
            failed_image: false
        }
    },
    props: {
    headline: {
      type: Object,
      required: true,
    },
  },
  computed: {
    newsImage: function() {
      return this.headline.urlToImage !== null ?  this.headline.urlToImage :"@/assets/defaultNews.png"
        }
    },
    methods: {
      onImgError: function(event) {

         this.failed_image = true;

      }
   },
  created(){
      console.log(this.headline)
  }
}
</script>

<style>
.v-card--reveal {
  align-items: center;
  justify-content: center;
  opacity: 0.8;
  position: absolute;
  width: 100%;
}
</style>