<template lang="pug">
  v-container
    v-app-bar(fixed app flat color="#ff6a00")
      v-row(justify="center" align="center")
        v-toolbar-title
          span.white--text SLEEVE IT
    v-row(justify="center")
      v-col(cols="11" sm="6")
        v-row(align="center" v-for="avatar in avatars" :key="avatar.id")
          v-col
            v-avatar(tile color="grey" width="100" height="100")
              span 100
          v-col
            h3(align="center") {{count(avatar.id)}}
          v-col
            p(v-for="person in avatar.persons" :key="person") {{person}}
        v-row
          v-col
            v-btn(color="black" :block="true")
              span.white--text Download JPEG
        v-row
          v-col
            v-btn(to="/host/report" color="grey" :block="true")
              span.white--text Back
</template>

<script>
export default {
  data() {
    return {
      avatars: [
        { id: 1, persons: ['Oscar', 'Alvaro'] },
        { id: 2, persons: ['Sarah'] },
        { id: 3, persons: ['John'] },
        { id: 4, persons: ['Masa'] },
        { id: 5, persons: [] },
        { id: 6, persons: [] },
        { id: 7, persons: [] },
        { id: 8, persons: [] },
        { id: 9, persons: [] }
      ]
    }
  },
  methods: {
    count(id) {
      return this.avatars[id - 1].persons.length
    },
    download() {
      alert('download conmplete!')
    }
  }
}
</script>
