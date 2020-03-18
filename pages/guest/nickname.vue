<template lang="pug">
  v-container.orange.pt-12
    v-row(justify="center" no-gutters)
      v-col(cols="10" sm="4")
        v-row.mt-12(justify="center")
          v-col(cols="10" align="center")
            h2.white--text SLEEVE IT
        v-row.mt-12(justify="center")
          v-col(cols="10" align="center")
            v-text-field(v-model="nickname" solo label="Nickname")
        v-row(justify="center")
          v-col(cols="10")
            v-btn(to="/guest/picture" color="black" :block="true" nuxt)
              span.white--text Ready
</template>

<script>
export default {
  data () {
    return {
      nickname: ''
    }
  },
  methods: {
    select (category) {
      this.$router.push({ path: '/host/room/confirm', query: { category } })
    }
  }
}
</script>
