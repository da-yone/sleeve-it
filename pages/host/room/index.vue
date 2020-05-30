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
        template(v-for="category in randoms")
          v-row(align="center" @click="select(category.id)")
            v-col(cols="5")
              v-card(align="center" width="150")
                v-img(:src="getPicture(category.id)" width="150")
            v-col
              h3.white--text {{ category.name }}
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
      categories: [
        { id: 1, name: 'Jungle Book' },
        { id: 2, name: 'Run Run Go Run!' },
        { id: 3, name: 'Going Viral' },
        { id: 4, name: 'Adventure Time!' },
        { id: 5, name: 'Are You Saving That Dessert For Me' },
        { id: 6, name: 'Careful What You Wish For' },
        { id: 7, name: 'Cats Are Cute Too I Guess...' },
        { id: 8, name: 'DOGGO!' },
        { id: 9, name: 'Etched In Stone' },
        { id: 10, name: 'GAME ON!' },
        { id: 11, name: 'Living My Best Life' },
        { id: 12, name: 'Music for the Soul' },
        { id: 13, name: 'Oh Baby' },
        { id: 14, name: 'Take Me To Wonderland' },
        { id: 15, name: 'Wait... I did that Last Night' },
        { id: 16, name: 'Walk In My Shoes' },
        { id: 17, name: 'Weather Report' },
        { id: 18, name: 'Werk Werk Werk!' },
        { id: 19, name: 'When the Relatives Come Over' },
        { id: 20, name: 'Yeah... Me Neither' }
      ]
    }
  },
  computed: {
    randoms () {
      const categories = this.categories
      return categories.sort(() => Math.random() - 0.5)
    }
  },
  methods: {
    getPicture (category) {
      return '/images/categories/' + category + '.jpg'
    },
    select (category) {
      this.$router.push({ path: '/host/room/confirm', query: { category } })
    }
  }
}
</script>
