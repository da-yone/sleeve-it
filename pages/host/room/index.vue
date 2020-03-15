<template lang="pug">
  v-container.blue(fill-height)
    v-row(justify="center" no-gutters)
      v-col(cols="11" sm="4")
        v-row
          v-col
            h2.white--text
              | Select ONE category
              br
              | you'll ask about
        v-row
          v-divider
        template(v-for="category in categories")
          v-row(align="center" @click="select(category)")
            v-col
              v-avatar(tile color="grey" width="100" height="100")
                span 100
            v-col
              h3.white--text {{category.toUpperCase()}}
          v-row
            v-divider
        v-row(justify="center")
          v-col(cols="10")
            v-btn(to="/host" color="grey" :block="true" nuxt)
              span.white--text Back

</template>

<script>
export default {
  data() {
    return {
      categories: ['textile', 'wildlife', 'transport']
    }
  },
  methods: {
    select(category) {
      this.$router.push({ path: '/host/room/confirm', query: { category } })
    }
  }
}
</script>
