<template lang="pug">
  div(v-if="loading")
    v-overlay(color="#F8F9FA" opacity="0.7" z-index="9999")
      ring-loader(color="#00A040")
</template>

<script>
import RingLoader from 'vue-spinner/src/RingLoader.vue'

export default {
  components: {
    RingLoader
  },
  data () {
    return {
      loading: false
    }
  },
  methods: {
    start () {
      this.loading = true
    },
    finish () {
      this.loading = false
    }
  }
}
</script>
