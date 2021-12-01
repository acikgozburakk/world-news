<template>
  <v-carousel cycle height="400" hide-delimiter-background show-arrows-on-hover>
    <v-carousel-item v-for="(slide, i) in slides" :key="i">
      <v-sheet :color="colors[i]" height="100%">
        <v-row class="fill-height" justify="start" align="center">
          <div class="ml-15">
            <v-card width="400">
              <v-card-text>
                <div>Word of the Day</div>
                <p class="text-h4 text--primary">be•nev•o•lent</p>
                <p>adjective</p>
                <div class="text--primary">
                  well meaning and kindly.<br />
                  "a benevolent smile"
                </div>
              </v-card-text>
              <v-card-actions>
                <v-btn text color="deep-purple accent-4"> Learn More </v-btn>
              </v-card-actions>
            </v-card>
          </div>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
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
    };
  },
};
</script>