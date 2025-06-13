export default{



    template:`
    
    <section v-show="assignments.length">
        <h2 class="font-bold mb-2">{{title}}
        <span>{{assignments.length}}</span>
        
        </h2>
        <div class="flex gap-2">
        
        <button
        
        
        v-for="tag in tags" 
        
        class="border rounded px-1 py-px text-xs"
        
        >{{tags}}</button>
        </div>
        <ul class=" border border-gray-600 divide-y divide-gray-600">
            <li v-for ="assignment in assignments" :key="assignment.id">
                <label >
                {{assignment.name}}
                <input type="checkbox"  v-model="assignment.complete">
                </label>
            </li>
            
        </ul>
    </section>
    
    
    
    `,
    props:{
        assignments: Array,
        title: String
    },

    data(){
        return{
            currentTag:''
        }
    },
    computed: {
     filteredAssugnment(){
        return this.assignments.filter(a=>a.tag == this.currentTag);
     }
    },
    tags(){
        return new Set( this.assignments.map(a=>a.tag));
     }
}