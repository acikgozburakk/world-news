 <template>
  <v-navigation-drawer  app>
    <v-sheet>
      <v-img
        lazy-src="https://picsum.photos/id/11/10/6"
        src="../assets/newslogo.jpg"
      ></v-img>
    </v-sheet>

    <v-divider></v-divider>

    <v-list shaped>
      <v-subheader>Category</v-subheader>
      <v-list-item-group
        v-model="selectedItem"
        color="primary"
      >
        <v-list-item
          v-for="(item, i) in category"
          :key="i"
          @click="changeRoute(item.link)"
        >
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
export default {
  data() {
    return {
      selectedItem: 0,
      category: [
        { text: 'Home', icon: 'mdi-home' , link:'home' },
        { text: 'Business', icon: 'mdi-domain', link:'business' },
        { text: 'Entertainment', icon: 'mdi-television', link:'entertainment' },
        { text: 'Health', icon: 'mdi-bottle-tonic-plus-outline', link:'health' },
        { text: 'Science', icon: 'mdi-chemical-weapon', link:'science' },
        { text: 'Sports', icon: 'mdi-basketball', link:'sports' },
        { text: 'Technology', icon: 'mdi-cellphone-link', link:'technology' }
      ],
    };
  },
  methods:{
    changeRoute(categoryName){
      if (categoryName == 'home') {
        this.$router.push('/')
      }else{
        this.$router.push({ path: `/category/${categoryName}` })
      }
      
    }
  }
};
</script>