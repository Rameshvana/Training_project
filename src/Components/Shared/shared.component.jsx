
const SharedComponent = (props) => {
     
   const editItem = (eachRow) => {
     props.UpdatePropertyGrid(eachRow)
   }

   const deleteItem = (eachRow) => {
     props.deleteItemGrid(eachRow)
   } 

    return (
          <div>
            <h1>{props.title}</h1>
          <table className="table table-hover">
            
            <thead>
             <tr>
               {props.headers.map((item) => <th>{item}</th>)}
             </tr>
            </thead>
            <tbody>
             {props.body.map((eachRow) => 
             <tr>
               {Object.values(eachRow).map((data) => <td>{data}</td>)}
               <td>
                 <button type='button' className="btn btn-success" onClick={() => {editItem(eachRow)}}>Update</button> &nbsp; &nbsp;
                 <button type='button' className="btn btn-danger" onClick={() => {deleteItem(eachRow)}}>Delete</button>
               </td>
             </tr>
             )}
            </tbody>
          </table>
        </div>
    )
}

export default SharedComponent