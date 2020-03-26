<template lang="pug">
  v-container.blue-gradient
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
            v-card(
              :class="{ filtered: shouldFilter(avatar) }"
              align="center"
              @click="selectAvatar(avatar)")
              v-img(:src="getPicture(avatar)" width="100" height="100")
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
      selected: this.$route.query.avatarId || ''
    }
  },
  methods: {
    getPicture (avatar) {
      return `/images/avatars/${this.category}/${avatar}.jpg`
    },
    selectAvatar (avatar) {
      // 選択済みの場合は選択解除、そうでない場合は設定
      this.selected = (avatar == this.selected) ? '' : avatar
    },
    shouldFilter (avatar) {
      // フィルターすべきかどうか
      // 何らかの画像が選択されている状態かつ引数の画像でない場合
      return this.selected && this.selected != avatar
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
          category: this.$route.query.category,
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
