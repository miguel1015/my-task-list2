import "./styles.css"
import { useNavigate } from "react-router-dom"


export function Contact() {
  // const getStyle = () =>{
  //   return{
  //     textDecoration: task.completed ? 'line-through' : 'none'
  //   }
  // }
  let navigate = useNavigate()

  
  return (
    <div>
    <div className='container-todoapp'>
    <h1>Todo App</h1>
    <div >
    <div>
      <div className='placeholder'>
        <form >
            <input type="text" placeholder='add your new todo' />
            <button className='cruz'>+</button> 
            {/* <button className='boton-description'  ><i className="fa fa-sort-desc" aria-hidden="true"></i></button>  */}
            
            {/* {validation.todo && <span style={{color: 'red' }}>{validation.todo}</span>} */}
        </form> 
      </div>
    </div>
      <input placeholder="add your description"/>
      {/* <button>
      <i className="fa fa-sort-desc" aria-hidden="true"></i>
      </button> */}
      {/* <button className='add-btn-delete' >
        <i className="fa fa-trash-o" aria-hidden="true"></i>
      </button> */}
      {/* <button className='add-btn-edit'>
        <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
      </button> */}
    </div>
    <div className='container-final'>
      <div className="you-have"><p>You have 0 pending tasks</p>
      </div>
      <button className='button-clear'> Clear all</button>
    </div>
    {/* <button onClick={()=>{navigate("/home")}}> change to Home page </button> */}
  </div>
    <button className="boton-inicio" onClick={()=>{navigate("/Home")}}> change to Home page </button>
  </div>

  )
}
