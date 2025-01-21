import React, {useState} from "react"
function TodoList(){

    const [tasks, setTaks] = useState([]);

    const [newtast, setNewTask] = useState("");

    function handleInputChange(event){
        setNewTask(event.target.value)
    }

    function addTask(){
        if(newtast.trim() !== ""){
            setTaks(t => [...t, newtast]);
            setNewTask("");
        }
    }

    function deleteTask(index){
        const update = tasks.filter((_,i)=> i !== index);
        setTaks(update);
    }
    function MoveTaskUp(index){
        if(index > 0){
            const updateTasks = [...tasks];
            [updateTasks[index], updateTasks[index - 1]] = 
            [updateTasks[index -1], updateTasks[index]]
            setTaks(updateTasks);
        }
    }

    function MoveTaskDown(index){
        const updateTasks = [...tasks];
        [updateTasks[index], updateTasks[index + 1]] = 
        [updateTasks[index + 1], updateTasks[index]]
        setTaks(updateTasks);

    }



    return(
        <>
        <div className="to-do-list">
            <h1>To-Do-List</h1>
            <div>
                <input type="text"
                placeholder="enter a task"
                value={newtast}
                onChange={handleInputChange}> 
                
                </input>
                <button className="add-btn" onClick={addTask}>Add</button>
            </div>

            <ol>
                {tasks.map((task ,i)=>
                    <li key={i}>
                        <span className="text">{task}</span>
                        <button onClick={() => deleteTask(i)}>
                            Delete
                        </button>
                        <button onClick={() => MoveTaskUp(i)}>
                            UP
                        </button>
                        <button onClick={() => MoveTaskDown(i)}>
                            Down
                        </button>
                    </li>
                )}
            </ol>

        </div>

        
        </>
    );
}

export default TodoList