<template lang="pug">
  v-container.blue.pt-12
    v-row(justify="center" no-gutters)
      v-col(cols="11" sm="4")
        v-row.mt-12
          v-col
            h2.white--text
              | Join at,
              br
              | room number
        v-row
          v-col
            v-card(tile align="center")
              v-card-title {{roomNo}}
        v-row
          v-col(align="center")
            h3.white--text
              | in
              br
              | sleeve-it.netlify.com
        v-row.mt-6(justify="center")
          v-col(cols="10")
            v-btn(color="black" @click="copy" :block="true")
              span.white--text Copy
        v-row.mt-6(justify="center")
          v-col(cols="10")
            v-btn(to="/host" color="grey" :block="true" nuxt)
              span.white--text Top
</template>

<script>
export default {
  data() {
    return {
      roomNo: 123456
    }
  },
  methods: {
    copy() {
      alert('copied!')
    }
  }
}
</script>
