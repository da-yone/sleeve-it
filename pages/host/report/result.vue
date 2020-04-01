<template lang="pug">
  div
    v-container(ref="print")
      v-row
        v-app-bar(absolute flat color="#e98065" height="70")
          v-row
            v-col(align="center")
              v-img(src="/header.png" width="100" height="60")
        v-row.mt-6.pt-6(justify="center")
          v-col(cols="11")
            v-card.mt-12(raised v-for="avatar in data" :key="avatar.id")
              v-row(align="center")
                v-col.pt-0.pb-0
                  v-img(:src="getPicture(avatar.id)" max-width="400" max-height="200")
                    p.count {{ avatar.count }}
              v-row(v-for="person in avatar.persons" :key="person.nickName")
                v-col.pt-0
                  p.comment.pl-3.pr-3.mt-3
                    strong {{ person.nickName }}
                    span {{ person.feeling }}
    v-row(justify="center")
      v-col(cols="10")
        v-row
          v-col
            v-btn(color="black" :block="true" @click="downloadCapture")
              span.white--text Download JPEG
            a(ref="downloadLink" download="report.jpg")
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
      alert('download complete!')
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
      // 並び替え
      this.data.sort(this.compare)
    },
    compare (a, b) {
      return b.count - a.count
    },
    async downloadCapture () {
      const printEl = this.$refs.print
      const downloadEl = this.$refs.downloadLink
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

<style lang="scss" scoped>
.count {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  transform: translate(90%, 50%);
  margin-right: 1rem;
  margin-bottom: 2rem;
  font-size: 5rem;
  font-weight: 400;
  color: whitesmoke;
  font-weight: bold;
}
.comment {
  word-break: break-all;
  line-height: 1.2;

  strong {
    display: inline-block;
    margin-right: 0.5rem;
    font-size: 1.2rem;
    letter-spacing: 0.025rem;
  }
}
</style>
