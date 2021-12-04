<template>
    
    <v-hover v-slot="{ hover }">
    <v-card
      class="mx-auto"
      color="grey lighten-4"
      max-width="600"
    >
      <v-img
        :aspect-ratio="16/9"
        :src="headline.urlToImage"
      >
        <v-expand-transition>
          <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out black darken-2 v-card--reveal white--text"
            style="height: 100%;"
          >
            {{headline.title}}
          </div>
        </v-expand-transition>
      </v-img>
    </v-card>
  </v-hover>
</template>
<script>

export default {
    props: {
    headline: {
      type: Object,
      required: true,
    },
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
  opacity: 0.7;
  position: absolute;
  width: 100%;
}
</style>