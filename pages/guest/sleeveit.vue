<template lang="pug">
  v-container.blue.pt-12
    v-row(justify="center" no-gutters)
      v-col(cols="11" sm="4")
        v-row.mt-12
          v-col
            h2.white--text
              | Today, I identify
              br
              | with...
        v-row.mt-12
          v-col
            v-card(tile align="center")
              v-avatar(tile color="grey" width="300" height="300")
                span 300
        v-row.mt-12(justify="center")
          v-col(cols="10")
            v-btn(color="black" :block="true" @click="submit")
              span.white--text Sleeve It!
        v-row(justify="center")
          v-col(cols="10")
            v-btn(to="/guest/nickname" color="grey" :block="true" nuxt)
              span.white--text Back
</template>

<script>
export default {
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
