import SharedComponent from '../Shared/shared.component'

import './grid.component.css'

function GridComponent() {

    let EmployeDetails = [
        {sno: 1,name: 'pavan', Email: 'pavan@gmail.com', phoneNumber:976785445},
        {sno: 2,name: 'sri', Email: 'sri@gmail.com', phoneNumber:976785445},
        {sno: 3,name: 'Aravind', Email: 'Aravind@gmail.com', phoneNumber:976785445},
        {sno: 4,name: 'Varun', Email: 'Varun@gmail.com', phoneNumber:976785445}
    ]

    let headers = ['S.No','Emp.Name','Email','Phone Number']

{  /*  EmployeDetails.push(
        {name:'rakesh', Email: 'rakesh@gmail.com', phoneNumber: 648953245}
    )

    EmployeDetails[2].phoneNumber = 9898989800
    EmployeDetails.pop()
    
    EmployeDetails.unshift(
        {name:'rakesh', Email: 'rakesh@gmail.com', phoneNumber: 648953245}
    )
    EmployeDetails.shift()
    let newEmploye = {name: 'Suresh', Email: 'suresh@gmail.com', phoneNumber: 878765677}
    EmployeDetails.splice(2,0,newEmploye)
    console.log(EmployeDetails) */}

    EmployeDetails.push(
        {sno: 5,name:'rakesh', Email: 'rakesh@gmail.com', phoneNumber: 648953245}
    )



  return ( 
      <div>
          
           
          <SharedComponent  title={"My Employee Details"} headers={headers} body={EmployeDetails}/>

          <table className="table table-borderd table-striped">
              <thead>
                  <tr>
                      <th>S.N.O</th>
                      <th>Emp.Name</th>
                      <th>Email</th>
                      <th>Phone Number</th>
                  </tr>
              </thead>
              <tbody> 
              {EmployeDetails.map((eachEmploye,index) => 
                  <tr>
                    <td>{index+1}</td>
                    <td>{eachEmploye.name}</td>
                    <td>{eachEmploye.Email}</td>
                    <td>{eachEmploye.phoneNumber}</td>
                  </tr>
              )}
              </tbody>
              
          </table>

          
      </div>

  )
}

export default GridComponent