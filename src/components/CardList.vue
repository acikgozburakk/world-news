<template>
<v-row>
    <v-col v-for="(headline,index) in headlineList" :key="index" cols="3">
      <CardItem  :headline="headline"/>
  </v-col>
</v-row>
  
</template>

<script>
import CardItem from "@/components/CardItem";
export default {
  components: {
    CardItem
  },
  props: {
    headlineList: {
      type: Array,
      required: true,
    },
  },
};
</script>

