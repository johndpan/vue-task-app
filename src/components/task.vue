<template>
  <div class="card hoverable">
    <div class="card-content black-text" :class="status.txtColor">
      <span class="right" >{{ status.text }}</span>
      <span class="card-title">{{ taskTitle }}</span>
      <taskdescription></taskdescription>
    </div>
    <div class="card-action actionBtns">
      <select class="browser-default" v-model="status" >
        <option value="" disabled selected>Choose your option</option>
        <option :class="option.txtColor" v-for="option in options" :key="option.id" :id="option.id" :value="{id: option.id, txtColor: option.txtColor, bgColor: option.bgColor, text: option.val}">{{ option.val }}</option>
      </select>
    </div>
  </div>
</template>

<script>
import taskdescription from './taskdescription.vue'

export default {
  name: 'task',
  props: {
    taskTitle: String
  },
  components: {
    taskdescription
  },
   data() {
    return {

      descriptions: [],      
      status: '',
      firstName: 'John',
      lastName: 'Panayiotou',
      options: [
            {
              id: 1,
              val: 'To Do',
              txtColor: 'blue-text text-darken-2',
              bgColor:  'blue darken-2'    
            },
            {
              id: 2,
              val: 'In Progress',
              txtColor: 'orange-text text-darken-3',
              bgColor:  'orange darken-3'    
            },
            {
              id: 3,
              val: 'Done',
              txtColor: 'green-text text-darken-2',
              bgColor:  'green darken-2' 
            }
          ]
    }
  },
  computed: {
    fullName() {
      return this.firstName + ' ' + this.lastName
    }
  },
  mounted() {
    if (localStorage.status) {
      this.status = localStorage.status;
    }
  },
  watch: {
    status(newStatus) {
      localStorage.status = newStatus;
    }
  },
  methods: {
    addNewDescr(taskdescription) {
      console.log("emit recieved from taskdescription.vue")
      this.descriptions.push(taskdescription);
      this.saveDescr(); 
    },
    saveDescr() {
      const parsed = JSON.stringify(this.descriptions);
      localStorage.setItem('descriptions', parsed);
    }
  }
}
</script>

<style scoped>
.actionBtns {
  display: flex;
  justify-content: center;
}
.m-1 {
  margin: auto;
}

.right {
  display: flex;
  justify-content: right;
}
</style>
