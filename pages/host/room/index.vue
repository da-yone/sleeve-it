<template lang="pug">
  v-container.blue-gradient
    v-row(justify="center" no-gutters)
      v-col(cols="11")
        v-row.mt-6
          v-col
            h2.white--text
              | Select ONE category
              br
              | you'll ask about
        v-row.mt-6
          v-divider
        template(v-for="(category, i) in categories")
          v-row(align="center" @click="select(i)")
            v-col(cols="5")
              v-card(align="center" width="150")
                v-img(:src="getPicture(i)" width="150")
            v-col
              h3.white--text {{ category }}
          v-row
            v-divider
        v-row.mt-6(justify="center")
          v-col(cols="10")
            v-btn(to="/host" color="grey" :block="true" nuxt)
              span.white--text Back
</template>

<script>
export default {
  data () {
    return {
      categories: ['Jungle Book', 'Run Run Go Run!', 'Going Viral']
    }
  },
  methods: {
    getPicture (category) {
      return '/images/categories/' + (category + 1) + '.jpg'
    },
    select (category) {
      this.$router.push({ path: '/host/room/confirm', query: { category: category + 1 } })
    }
  }
}
</script>
