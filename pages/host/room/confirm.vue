<template lang="pug">
  v-container.blue-gradient
    v-row(justify="center" no-gutters)
      v-col(cols="11" sm="4")
        v-row.mt-6
          v-col
            h2.white--text
              | In the category,
              br
              | there are...
        v-row.mt-6
          v-col(cols="4" v-for="avatar in avatars" :key="avatar")
            v-card(align="center")
              v-img(:src="getPicture(avatar)" width="100" height="100")
        v-row.mt-6(justify="center")
          v-col(cols="10")
            v-btn(color="black" :block="true" @click="submit")
              span.white--text Fine! Create a room
        v-row(justify="center")
          v-col(cols="10")
            v-btn(to="/host/room" color="grey" :block="true" nuxt)
              span.white--text Back
</template>

<script>
export default {
  data () {
    return {
      category: this.$route.query.category,
      avatars: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
      selected: ''
    }
  },
  methods: {
    getPicture (avatar) {
      return `/images/avatars/${this.category}/${avatar}.jpg`
    },
    selectAvatar (avatar) {
      this.selected = avatar
    },
    isSelected (avatar) {
      return avatar == this.selected
    },
    async submit () {
      await this.$axios.$post('/sleeves', { category: this.category })
        .then((data) => {
          this.$router.push({ path: '/host/room/complete', query: { roomId: data.roomId } })
        })
    }
  }
}
</script>
