<template>
  <v-form @submit.prevent="onSubmit">
    <v-row justify="center">
      <v-col xl="6" cols="12" >
        <v-text-field 
           v-model="taskTitle" 
           label="Task Title" 
           autofocus 
           counter 
           clearable default></v-text-field>
        <v-btn type="submit" name="action" dark color="green"><i class="material-icons" white>add</i></v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
export default {
  name: 'taskcreate',
  data() {
    return {
      taskTitle: null
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
