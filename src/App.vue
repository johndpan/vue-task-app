<template>
    <div id="app">
      <div class="container">
        <div class="section" >
          <taskcreate @task-created="addNewTask"></taskcreate>
        </div>
        <div class="row">
          <div class="col s10 l6 offset-l3">
            <div v-for="(task, index) in tasks" v-bind:key="index">
              <task :taskTitle="task.taskTitle"></task>
              <button @click="removeTask(index)"
                   class="waves-effect waves-red red-text btn-flat">
                <i class="material-icons">close</i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import task from './components/task.vue'
import taskcreate from './components/taskcreate.vue'

export default {
  name: 'App',
  data() {
    return {
      tasks: []
    }
  },
  components: {
    task,
    taskcreate
  },
  mounted() {
    if (localStorage.getItem('tasks')) {
      try {
        this.tasks= JSON.parse(localStorage.getItem('tasks'));
      } catch(e) {
        localStorage.removeItem('tasks');
      }
    }
  },
  methods: {
    addNewTask(task) {
      console.log("emit recieved from task.vue")
      this.tasks.push(task);
      this.saveTasks(); 
    },
    removeTask(x) {
      this.tasks.splice(x, 1);
      this.saveTasks();
    },
    saveTasks() {
      const parsed = JSON.stringify(this.tasks);
      localStorage.setItem('tasks', parsed);
    }
  }
  
}
</script>
