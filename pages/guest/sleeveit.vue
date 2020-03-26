<template lang="pug">
  v-container.blue-gradient
    v-row(justify="center" no-gutters)
      v-col(cols="11" sm="4")
        v-row.mt-6
          v-col
            h2.white--text
              | Today, I identify
              br
              | with...
        v-row.mt-6
          v-col(align="center")
            v-img(:src="picture" width="350" height="350")
        v-row.mt-12(justify="center")
          v-col(cols="10")
            v-btn(color="black" :block="true" @click="submit")
              span.white--text Sleeve It!
        v-row(justify="center")
          v-col(cols="10")
            v-btn(:to="{ path: '/guest/picture', query: this.$route.query }" color="grey" :block="true" nuxt)
              span.white--text Back
</template>

<script>
export default {
  computed: {
    picture () {
      return `/images/avatars/${this.$route.query.category}/${this.$route.query.avatarId}.jpg`
    }
  },
  methods: {
    submit () {
      this.$axios.$patch('/sleeves/' + this.$route.query.roomId, {
        nickName: this.$route.query.nickName,
        avatarId: this.$route.query.avatarId
      })
      .then((data) => {
        this.$router.push('/guest/complete')
      })
      .catch((error) => {
        alert('Sorry something\'s wrong.')
      })
    }
  }
}
</script>
