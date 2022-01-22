<template>
    <div>
        {{categoryNews}}
</div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: 'Category',
  computed: {
    ...mapGetters({
      categoryNews: "categoryNews"
    }),
  },
  mounted(){
    this.$store.dispatch("getCategoryNews",this.$route.params.categoryname);
  }
}
</script>
