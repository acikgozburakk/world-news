<template>
  <v-app>
    <v-main>
      <v-container>
        <Carousel :technologyNews="technologyNews" />
        <CardList :headlineList="headlineList"/>
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
import Carousel from "@/components/Carousel";
import CardList from "@/components/CardList";
import { mapGetters } from "vuex";
export default {
  components: {
    Carousel,
    CardList,
  },
  data() {
    return {
      colors: [
        "indigo",
        "warning",
        "pink darken-2",
        "red lighten-1",
        "deep-purple accent-4",
      ],
      slides: ["First", "Second", "Third", "Fourth", "Fifth"]
    };
  },
  computed: {
    ...mapGetters({
      headlineList: "headlinesList",
      technologyNews: "technologyNews"
    }),

  },
  created(){
    this.$store.dispatch("getHeadlines","tr");
    this.$store.dispatch("getTechnologyNews");
  }
};
</script>


