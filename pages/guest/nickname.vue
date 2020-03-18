<template lang="pug">
  v-container.orange.pt-12
    v-row(justify="center" no-gutters)
      v-col(cols="10" sm="4")
        v-row.mt-12(justify="center")
          v-col(cols="10" align="center")
            h2.white--text SLEEVE IT
        v-row.mt-12(justify="center")
          v-col(cols="10" align="center")
            v-text-field(v-model="nickName" solo label="Nickname")
        v-row(justify="center")
          v-col(cols="10")
            v-btn(color="black" :block="true" @click="submit")
              span.white--text Ready
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
        query: { nickName: this.nickName, roomId: this.$route.query.roomId }
      })
    }
  }
}
</script>
