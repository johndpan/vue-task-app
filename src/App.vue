<template>
  <v-app>
    <v-content>
      <v-container>
        <taskcreate @task-created="addNewTask"></taskcreate>
        
            <div v-for="(task, index) in tasks" v-bind:key="index">
              <task :taskTitle="task.taskTitle"></task>
              <v-btn 
                @click="removeTask(index)"
                dark color="red">
                <i class="material-icons">close</i>
              </v-btn>
            </div>

      </v-container>
    </v-content>
  </v-app>
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