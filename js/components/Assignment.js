export default{
    template:`
    <li>
    
    <label class="p-4 flex justify-between items-center">
    {{assignment.name}}

    <input type="checkbox" v-model="assignment.complete" class="ml-4">
    
    </label>
    
    
    </li>
    
    `,
    props:{
        assignment:object
    }
}