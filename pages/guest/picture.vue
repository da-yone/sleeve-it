<template lang="pug">
  v-container.blue.pt-12
    v-row(justify="center" no-gutters)
      v-col(cols="11" sm="4")
        v-row.mt-6
          v-col
            h2.white--text
              | This picture
              br
              | depicts how I feel
        v-row.mt-6
          v-col(cols="4" v-for="avatar in avatars" :key="avatar")
            v-card.filtered(
              :class="{ picked: isSelected(avatar) }"
              align="center"
              @click="selectAvatar(avatar)")
              v-img(:src="getPicture(avatar)")
        v-row.mt-6(justify="center")
          v-col(cols="10")
            v-btn(color="black" :block="true" @click="submit")
              span.white--text Pick
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
      return '/images/avatars/' + avatar + '.jpg'
    },
    selectAvatar (avatar) {
      this.selected = avatar
    },
    isSelected (avatar) {
      return avatar == this.selected
    },
    submit () {
      if (!this.selected) {
        alert('Select the picture.')
        return false
      }
      this.$router.push({
        path: '/guest/sleeveit',
        query: {
          roomId: this.$route.query.roomId,
          nickName: this.$route.query.nickName,
          avatarId: this.selected
        }
      })
    }
  }
}
</script>

<style lang="scss">
.v-card.filtered::after{
  content: '';
  width: 100%;
  height: 100%;
  background-color: grey;
  opacity: 0.6;
  position: absolute;
  top: 0;
  left: 0;
}
.v-card.filtered.picked::after {
  opacity: 0;
}
</style>
