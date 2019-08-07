<template>
  <div>
    {{ count }}
    <div>
      <button @click="customIncrement(10)">increment</button>
    </div>
    <div>
      {{ todo }} count: {{ todoCount }} id=2: {{ todoById(2) }}
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import {mapGetters} from 'vuex' 
import {mapMutations} from 'vuex'
export default {
  data() {
    return {
      localCount: 1
    }
  },
  computed:{ 
    ...mapState(
    ['count']
    ),
    ...mapGetters({
      todo: 'doneTodos',
      todoCount: 'doneTodosCount',
      todoById: 'getTodoById'
    })
  },
  methods: {
    ...mapMutations([
      'increment',
      'customIncrement'
    ])
  }
}
</script>
<style scoped>

</style>
