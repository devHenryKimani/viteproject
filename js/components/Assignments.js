
import AssignmentList from "./AssignmentList.js";
export default{
    components:{AssignmentList},
    template:`
    <section class="space-y-6">
    <assignment-list :assignments="inProgressAssignments" title="In progress"></assignment-list>
    <assignment-list :assignments="completedAssignments" title="completed"></assignment-list>
    <form @submit.prevent="add">
    <div class="border border-gray-600 text-black">
   <input v-model="newAssignment" placeholder="New assignment..." class="text-black" />
    <button type="submit" class="bg-white border-l">Add </button>
   </div>
    </form>
    </section>
    `,
    data(){
        return{
            assignments:[
                {name:'Finish project', complete:false, id: 1},
                {name:'Read chapter 4', complete:false, id: 2},
                {name:'Turn in homework', complete:false, id: 3},
            ],
            newAssignment:''
        }
     },
      
     computed:{
        inProgressAssignments(){
           return this.assignments.filter(assignment=> ! assignment.complete);
        },

        completedAssignments(){
           return this.assignments.filter(assignment=> assignment.complete);
        }
     },
     methods: {
      add(){
         this.assignments.push({
            name: this.newAssignment,
            completed: false,
            id: this.assignments.length +1
         });
         this.newAssignment='';
      }
     }
}