<template>
  <v-card
    class="mx-auto overflow-hidden vcard"
    max-width="344"
    height="275"
    elevation="24"
    @click="goToUrl(headline.url)"
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

      },
      goToUrl(url){
        window.open(url,'_blank')
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
.vcard{
  transition: transform .2s;
  cursor: pointer;
}
.vcard:hover{
  transform: scale(1.25);
  z-index: 9999;
}
</style>