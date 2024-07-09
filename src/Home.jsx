import React from "react";
import Create from "./create.jsx";

function Home(){
    const[todos,setTodos] = useState([]);
    return(
        <div> 
         <h2>Todo List</h2>
         <create />
         {
            todos.length === 0 ?
            <div> <h2>No Record</h2></div>
            :
            todos.map(todo => {
                <div>
                    {todo}
                </div>
            })
         }
         </div>
    );
}

export default Home;