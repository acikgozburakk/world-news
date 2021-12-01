<template>
  <v-app>
    <SideBar />
    <v-main>
      <v-container>
        <Carousel />
        <CardList />
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
import SideBar from "@/components/Sidebar";
import Carousel from "@/components/Carousel";
import CardList from "@/components/CardList";
export default {
  components: {
    SideBar,
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
      slides: ["First", "Second", "Third", "Fourth", "Fifth"],
      drawer: true,
    };
  },
};
</script>


