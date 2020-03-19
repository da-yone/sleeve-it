<template lang="pug">
  v-container
    v-app-bar(fixed app flat color="#e98065" height="64")
      v-row
        v-col(align="center")
          v-img(src="/logo.png" width="96" height="64")
    v-row(no-gutters)
      v-col(cols="12" sm="6")
        v-form
          v-row
            v-col
              v-text-field(v-model="id" label="Username or email")
          v-row
            v-col
              v-text-field(v-model="password" label="Password" type="password")
          v-row
            v-col
              v-btn(color="black" :block="true" @click="submit")
                span.white--text Log in
          v-row
            v-divider
          v-row
            v-col(align="center")
              p OR
          v-row
            v-col
              v-btn(to="/guest" color="blue" :block="true" nuxt)
                span.white--text Guest
</template>

<script>
export default {
  data () {
    return {
      id: '',
      password: ''
    }
  },
  methods: {
    submit () {
      this.$router.push('/host')
    }
  }
}
</script>
