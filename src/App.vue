<template>
  <v-app>
    <Header />
    <SideBar />
    <router-view/>
  </v-app>
</template>

<script>
import Header from "@/components/Header";
import SideBar from "@/components/Sidebar";
export default {
  components: {
    Header,
    SideBar
  }
};

</script>


