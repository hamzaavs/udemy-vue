<script>
export default {
  data() {
    return {
      detailsAreVisible: false,
      friend: {
          id: "hamza",
          name: "Hamza Avşar",
          phone: "123 456 7890",
          mail: "hamza@localhost.com"
      },
    }
  },

  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    }
  }
}
</script>

<template>
  <h2>{{ friend.name }}</h2>
  <button @click="toggleDetails">{{detailsAreVisible ? 'Hidden' : 'Show' }} Details</button>
  <ul v-if="detailsAreVisible === true">
    <li>
      <strong>Phone:</strong>
      {{ friend.phone }}
    </li>
    <li>
      <strong>Email:</strong>
      {{ friend.mail }}
    </li>
  </ul>
</template>

<style scoped>

</style>