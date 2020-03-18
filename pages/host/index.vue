<template lang="pug">
  v-container.orange.pt-12
    v-row(justify="center" no-gutters)
      v-col(cols="10")
        v-row.mt-12
          v-col
            h2.white--text I want to ...
        v-row.mt-12
          v-col
            v-btn(to="/host/room" color="black" :block="true" nuxt)
              span.white--text Create a room!
        v-row
          v-col
            v-btn(to="/host/report" color="black" :block="true" nuxt)
              span.white--text See a report!
</template>
