<template lang="pug">
  v-container.sleeve-bg
    v-row(justify="center" no-gutters)
      v-col(cols="10" sm="4")
        v-row.mt-12(justify="center")
          v-col(align="center")
            v-img(src="/logo.png" width="254" height="170")
        v-row.mt-12(justify="center")
          v-col(cols="10" align="center")
            v-text-field(v-model="nickName" solo label="Nickname")
        v-row(justify="center")
          v-col(cols="10")
            v-btn(color="black" :block="true" @click="submit")
              span.white--text Ready
        v-row(justify="center")
          v-col(cols="10")
            v-btn(to="/guest" color="grey" :block="true" nuxt)
              span.white--text Back
</template>

<script>
export default {
  data () {
    return {
      nickName: ''
    }
  },
  methods: {
    submit (category) {
      this.$router.push({
        path: '/guest/picture',
        query: {
          nickName: this.nickName,
          roomId: this.$route.query.roomId,
          category: this.$route.query.category
        }
      })
    }
  }
}
</script>
