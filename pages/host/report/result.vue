<template lang="pug">
  v-container
    v-app-bar(fixed app flat color="#ff6a00")
      v-row(justify="center" align="center")
        v-toolbar-title
          span.white--text SLEEVE IT
    v-row.mt-6(justify="center")
      v-col(cols="11" sm="6")
        v-row(align="center" v-for="avatar in data" :key="avatar.id")
          v-col
            v-avatar(tile color="grey" width="100" height="100")
              span 100
          v-col
            h3(align="center") {{ count(avatar.id) }}
          v-col
            p(v-for="person in avatar.persons" :key="person") {{ person }}
        v-row.mt-6
          v-col
            v-btn(color="black" :block="true")
              span.white--text Download JPEG
        v-row
          v-col
            v-btn(to="/" color="grey" :block="true")
              span.white--text TOP
</template>

<script>
export default {
  async asyncData ({ $axios, query }) {
    const avatars = await $axios.$get('/sleeves/' + query.roomId)
      .then(data => data.sleeves.avatars)
    return { avatars }
  },
  data () {
    return {
      data: [
        { id: 1, persons: [] },
        { id: 2, persons: [] },
        { id: 3, persons: [] },
        { id: 4, persons: [] },
        { id: 5, persons: [] },
        { id: 6, persons: [] },
        { id: 7, persons: [] },
        { id: 8, persons: [] },
        { id: 9, persons: [] }
      ]
    }
  },
  mounted () {
    // 並び替え
    this.order()
  },
  methods: {
    count (id) {
      return this.data[id - 1].persons.length
    },
    download () {
      alert('download conmplete!')
    },
    order () {
      this.data.forEach((d) => {
        this.avatars.forEach((a) => {
          if (d.id === parseInt(a.avatarId)) {
            d.persons.push(a.nickName)
          }
        })
      })
    }
  }
}
</script>
