<template lang="pug">
  v-container.blue.pt-12
    v-row(justify="center" no-gutters)
      v-col(cols="11" sm="4")
        v-row.mt-12
          v-col
            h2.white--text
              | This picture
              br
              | depicts how I feel
        v-row.mt-12
          v-col(cols="4" v-for="avatar in avatars" :key="avatar")
            v-card(tile align="center" @click="select(avatar)")
              v-avatar(tile color="grey" width="100" height="100")
                span 100
        v-row.mt-12(justify="center")
          v-col(cols="10")
            v-btn(color="black" :block="true" @click="submit")
              span.white--text Pick
        v-row(justify="center")
          v-col(cols="10")
            v-btn(to="/guest/nickname" color="grey" :block="true" nuxt)
              span.white--text Back
</template>

<script>
export default {
  data () {
    return {
      category: this.$route.query.category,
      avatars: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
      avatar: ''
    }
  },
  methods: {
    select(avatar) {
      this.avatar = avatar
    },
    submit () {
      if (!this.avatar) {
        alert('Select the picture.')
        return false
      }
      this.$router.push({
        path: '/guest/sleeveit',
        query: {
          roomId: this.$route.query.roomId,
          nickName: this.$route.query.nickName,
          avatarId: this.avatar
        }
      })
    }
  }
}
</script>
