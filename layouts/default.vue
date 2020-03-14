<template lang="pug">
  v-app
    v-app-bar(fixed app flat color="#ff6a00")
      v-row(justify="center" align="center")
        v-toolbar-title
          span.title SLEEVE IT
    v-content
      v-container
        nuxt
    v-footer(app)
      span &copy; 2020 SLEEVE-IT
</template>

<script>
export default {
  data() {
    return {
      fixed: false
    }
  }
}
</script>

<style lang="scss" scoped>
.title {
  font-weight: bold;
  color: #e2e4e7;
}
</style>
