<template>
<v-app-bar
      app
    >
      <v-app-bar-nav-icon @click="$emit('drawerr',1)"></v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>
</template>
<script>


</script>