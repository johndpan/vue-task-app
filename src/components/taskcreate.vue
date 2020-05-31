<template>
    <div class="row">
      <form @submit.prevent="onSubmit">
        <div class="row">
          <div class="input-field col s10 l6 offset-l3">
            <input id="input_text" type="text" data-length="10" v-model="taskTitle">
            <label for="input_text">Task Title</label>
          </div>
          <div class="input-field col">
            <button type="submit" name="action" class="btn waves-effect waves-light green"><i class="material-icons">add</i></button>
          </div>
        </div>
      </form>
    </div>
</template>

<script>
export default {
  name: 'taskcreate',
  data() {
    return {
      taskTitle: null,
    }
  },
  methods:
  {
    onSubmit() {
      console.log("emit from task.vue")
      let task = {
        taskTitle: this.taskTitle
      }
      if (this.taskTitle != null) {
        this.$emit('task-created', task)
      }
        this.taskTitle = null
    }
  }
}
</script>
