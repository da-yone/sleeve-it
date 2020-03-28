<template lang="pug">
  div
    v-container(ref="print")
      v-row
        v-app-bar(absolute flat color="#e98065" height="70")
          v-row
            v-col(align="center")
              v-img(src="/header.png" width="100" height="60")
        v-row.mt-12.pt-6(justify="center")
          v-col(cols="10")
            v-row(align="center" v-for="avatar in data" :key="avatar.id")
              v-col
                v-card
                  v-img(:src="getPicture(avatar.id)" width="120" height="120")
              v-col
                h3(align="center") {{ avatar.count }}
              v-col
                div(v-for="person in avatar.persons" :key="person.nickName")
                  h4 {{ person.nickName }}
                  span {{ person.feeling }}
    v-row(justify="center")
      v-col(cols="10")
        v-row
          v-col
            v-btn(color="black" :block="true" @click="download")
                span.white--text Download JPEG
            a(ref="download" download="report.jpg")
        v-row
          v-col
            v-btn(to="/" color="grey" :block="true")
              span.white--text Home
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
            d.persons.push({ nickName: a.nickName, feeling: a.feeling })
            d.count++
          }
        })
      })
      console.log(this.data)
      // 並び替え
      this.data.sort(this.compare)
    },
    compare (a, b) {
      return b.count - a.count
    },
    async download () {
      const printEl = this.$refs.print
      const downloadEl = this.$refs.download
      printEl.classList.add('pt-3')
      // HTML2CANVASで画像化 (DataURL)
      const imageUrl = await this.$html2canvas(printEl, { type: 'dataURL' })
      // ダミーのaタグのhref属性に設定
      downloadEl.href = imageUrl
      // aタグのクリックイベントを起こす
      downloadEl.click()
    }
  }
}
</script>
