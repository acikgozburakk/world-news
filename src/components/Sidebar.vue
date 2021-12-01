 <template>
  <v-navigation-drawer v-model="drawer" app>
    <v-sheet>
      <v-img
        lazy-src="https://picsum.photos/id/11/10/6"
        src="../assets/newslogo.jpg"
      ></v-img>
    </v-sheet>

    <v-divider></v-divider>

    <v-list>
      <v-list-item link v-for="([name, flag], i) in country" :key="i">
        <v-list-item-avatar>
          <v-avatar >
            <v-img :src="flag"></v-img>
          </v-avatar>
        </v-list-item-avatar>
        <v-list-item-title>{{ name }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
export default {
  data() {
    return {
      admins: [
        ["Management", "mdi-account-multiple-outline"],
        ["Settings", "mdi-cog-outline"],
      ],
      cruds: [
        ["Create", "mdi-plus-outline"],
        ["Read", "mdi-file-outline"],
        ["Update", "mdi-update"],
        ["Delete", "mdi-delete"],
      ],
      country: [
        ["Turkey", "../assets/tr_flag.svg"],
        ["United State", "../assets/us_flag.svg"],
        ["United Kingdom", "../assets/uk_flag.svg"],
        ["Germany", "../assets/de_flag.svg"],
      ],
    };
  },
};
</script>