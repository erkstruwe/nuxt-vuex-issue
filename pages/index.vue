<template>
  <div>
    <p>{{ $store.state.a }}</p>
    <p>{{ $store.getters.b }}</p>
    <p>{{ $store.getters.b }}</p>
    <p>{{ c }}</p>
    <p>{{ c }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    c() {
      console.log("getting c")
      return this.$store.getters.b + 1
    }
  },
}
</script>
