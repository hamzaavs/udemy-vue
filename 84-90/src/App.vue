<script >
export default {
  data() {
    return {
      friends: [
        {
          id: "hamza",
          name: "Hamza Avşar",
          phone: "123 456 7890",
          mail:  "hamza@localhost.com"
        },
        {
          id: "mahmut",
          name: "Mahmut Taşlı",
          phone: "123 456 7890",
          mail:  "mahmut@localhost.com"
        }
      ]
    }
  }
}
</script>

<template>
  <section>
    <h2>My Friends</h2>
    <ul>
      <friend-contact></friend-contact>
      <friend-contact></friend-contact>
    </ul>
  </section>
</template>

<style>
  section {
    height: 75vh;
    width: 25vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin:  auto;
    max-width: 40rem;
    box-shadow: #1f1f1f 0px 0px 10px;
    border-radius: 12px;
    position: relative;
    top: 5rem;

  }
  h2 {
    text-align: center;
    margin: 1rem 0;
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    ;
  }
  li {
    margin: 0.5rem 0;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  button {
    font: inherit;
    cursor: pointer;
    background: #ff2058;
    color: white;
    border: 1px solid #ff2058;
    padding: 0.25rem 1rem;
    border-radius: 4px;
  }
  button:hover, button:active {
    background: #ff4382;
    border-color: #ff4382;
  }

</style>