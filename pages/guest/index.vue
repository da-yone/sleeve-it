<template lang="pug">
  v-container.orange.pt-12
    v-row(justify="center" no-gutters)
      v-col(cols="10" sm="4")
        v-row.mt-12(justify="center")
          v-col(cols="10" align="center")
            h2.white--text SLEEVE IT
        v-row.mt-12(justify="center")
          v-col(cols="10" align="center")
            v-text-field(v-model="roomNo" solo label="Room Number")
        v-row(justify="center")
          v-col(cols="10")
            v-btn(to="/guest/nickname" color="black" :block="true" nuxt)
              span.white--text Enter
</template>

<script>
export default {
  data() {
    return {
      roomNo: ''
    }
  },
  methods: {
    select(category) {
      this.$router.push({ path: '/host/room/confirm', query: { category } })
    }
  }
}
</script>
