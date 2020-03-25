<template lang="pug">
  v-container
    v-app-bar(fixed app flat color="#e98065" height="64")
      v-row
        v-col(align="center")
          v-img(src="/logo.png" width="96" height="64")
    v-row(justify="center")
      v-col(cols="10" align="center")
        v-row(align="center" v-for="avatar in data" :key="avatar.id")
          v-col
            v-card
              v-img(:src="getPicture(avatar.id)" width="120" height="120")
          v-col
            h3(align="center") {{ avatar.count }}
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
    const sleeves = await $axios.$get('/sleeves/' + query.roomId)
      .then(data => data.sleeves)
    return {
      category: sleeves.category,
      avatars: sleeves.avatars
    }
  },
  data () {
    return {
      data: [
        { id: 1, persons: [], count: 0 },
        { id: 2, persons: [], count: 0 },
        { id: 3, persons: [], count: 0 },
        { id: 4, persons: [], count: 0 },
        { id: 5, persons: [], count: 0 },
        { id: 6, persons: [], count: 0 },
        { id: 7, persons: [], count: 0 },
        { id: 8, persons: [], count: 0 },
        { id: 9, persons: [], count: 0 }
      ]
    }
  },
  mounted () {
    // 並び替え
    this.order()
  },
  methods: {
    getPicture (id) {
      return `/images/avatars/${this.category}/${id}.jpg`
    },
    count (id) {
      return this.data[id - 1].persons.length
    },
    download () {
      alert('download conmplete!')
    },
    order () {
      // 集計
      this.data.forEach((d) => {
        this.avatars.forEach((a) => {
          if (d.id === parseInt(a.avatarId)) {
            d.persons.push(a.nickName)
            d.count++
          }
        })
      })
      // 並び替え
      this.data.sort(this.compare)
    },
    compare (a, b) {
      return b.count - a.count
    }
  }
}
</script>
