<template>
  <div id="app">
    <p>{{ message }}</p>
    <a :href="url">visit my account</a>
    <p>The movie is {{ isMovieOld(releasedYear) ? "old" : "new" }}</p>
    <button v-on:click="clickedButton()">Please clicked!</button>
    <input type="text" @keyup.ctrl.enter="name = $event.target.value">
    Ouput: {{ name }}
    <form action="" method="GET" v-on:submit.prevent>
      <input type="submit" value="submit">
    </form>
    <div v-html="html"></div>
    <ul>
      <li :key="index.id" :asdas="value" v-for="(value, key, index) in person">

        {{ value }}: {{ key }}: {{ index }}
      </li>
    </ul>

    <template v-if="number === 11">
      <h1>aaaa</h1>
      <div>aaaaa</div>
    </template>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        message: "Hello Vue!",
        url: "http://facebook.com",
        releasedYear: 2001,
        name: "aasdasdasdasd",
        html: "<h1>hello!</h1>",
        number: 11,
        person: {
          firstname: 'foo',
          lasname: 'bar',
          age: 27
        }
      }
    },
    methods: {
      isMovieOld: function(releasedYear) {
        return this.releasedYear < 2000;
      },
      clickedButton: function() {
        this.message = "Tối nay nhậu chứ?"  
        alert(this.message);
      },
      pressedEnter: function(event) {
        this.name = event.target.value;
      }
    }
  }
</script>

<style scoped>
  p {
    font-size: 2em;
    text-align: center;
  }
</style>
