import React from "react";

import './add-property.component.css'
import { AdminMenu } from "../../layout/admin-menu/admin-menu.component";
import { deleteAddPropertyData, getAddPropertyData, getPropertyTypeData,saveAddpropertyData, updateAddPropertyData} from "../../../../Services/property.service";
import SharedComponent from "../../../Shared/shared.component";
import { AuthRoute } from "../../../../Services/AuthRoute";


export class AddProperty extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            propertyTypes:[],
            addPropertyData:[],
            btnText: 'Save',
            playerId: 0
        }
    }

    headers = [ 'iD','Property Name','Property type','SqureFeet','Constuctor Date','Loans', 'Actions' ]

    propertyNameRef = React.createRef()
    propertyTypeRef = React.createRef()
    squrefeetRef = React.createRef()
    constuctionRef = React.createRef()
    homeloanRef = React.createRef()
    personaloneRef = React.createRef()

    // get the property-type data and add-property data from db
    componentDidMount(){
        getPropertyTypeData()
        .then((res) => {
            
            this.setState({propertyTypes: res.data})
        })
        .catch(() => {
            alert('No data')
        })
        this.CallThedata();
    }

    // call the add-property data from db
     CallThedata = () => {
        getAddPropertyData()
        .then((res) => {
            this.setState({addPropertyData:res.data})
            
        })
        .catch(() => {
            alert('Not get any data')
        })
     }


    // Save user form data in the db
    SavePropertyDAta = (event) => {
        event.preventDefault()
        const {playerId} = this.state
        const data = {
            id: playerId,
            propertyName: this.propertyNameRef.current.value,
            propertyType: this.propertyTypeRef.current.value,
            squrefeet : this.squrefeetRef.current.value,
            constuction: this.constuctionRef.current.value,
            homeloan : this.homeloanRef.checked,
            personalone : this.personaloneRef.checked
        }
        
        if (playerId === 0){

        saveAddpropertyData(data)
        .then((res) => {
            alert('Data is saved Successfully..')
            this.CallThedata()
        })
        .catch(() => {
            alert('Data not Savesd!')
        })
    }else {
        updateAddPropertyData(data)
        .then((res) => {
            alert('Update data successfully..')
            this.CallThedata()
        })
        .catch(() => {
            alert('Update data failed..')
        })
      
    }  


    }

    // delete the data in db
    deleteItemGrid = (item) => {
        console.log(item)
        deleteAddPropertyData(item.id)
        .then(() => {
            alert('Data deleted.. ')
            this.CallThedata()
        })
        .catch(() => {
            alert('Data deleted failed..')
        })
    }

    UpdatePropertyGrid = (item) => {
      console.log(item)
      this.propertyNameRef.current.value = item.propertyName
      this.propertyTypeRef.current.value = item.propertyType
     this.squrefeetRef.current.value = item.squrefeet
     this.constuctionRef.current.value = item.constuction
     this.setState({btnText:'Update',playerId:item.id})
    }

      // clear the user entered data in input tags
   ClearData = () => {
     this.propertyNameRef.current.value = ''
     this.propertyTypeRef.current.value = ''
    this.squrefeetRef.current.value = ''
    this.constuctionRef.current.value = ''
}

    render() {
        return (
            <AuthRoute>
                <div className="row">
                    <div className="col-3">
                        <AdminMenu/>
                    </div>
                    <div className="col-8">
                    <form  onSubmit={this.SavePropertyDAta}>
                    <h2>Add Property</h2>
                            <div className="form-group">
                                <label className='propty-label'>Property Name</label>
                                <input type="text" className="form-control property-input" ref={this.propertyNameRef}></input>
                            </div>
                            <div>
                                <label className='propty-label'>Property Type</label>
                                <select className="form-control property-input" ref={this.propertyTypeRef}>
                                    <option value=""> ..select..</option>
                                {this.state.propertyTypes.map((item) => 
                                    <option value={item.propertyName}>{item.propertyName}</option>
                                )}

                                </select>
                            </div>
                            <div className="form-group">
                                <label className='propty-label'>Squarefeet</label>
                                <input type="text" className="form-control property-input" ref={this.squrefeetRef}></input>
                            </div>
                            <div className="form-group">
                                <label className='propty-label'>Construction Date</label>
                                <input type="date" className="form-control property-input" ref={this.constuctionRef}></input>

                            </div>
                            <div>
                                <label className='propty-label'>Loan Availability</label>
                                <div className="form-check form-switch">
                                <input  type="checkbox" id="home" ref={this.homeloanRef}/>
                                <label className="label-el" htmlFor="home">Home Loan</label>
                            </div>

                            <div className="form-check form-switch">
                                <input  type="checkbox" id="personal" ref={this.personaloneRef}/>
                                <label className="label-el" htmlFor="personal">personal Loan</label>
                            </div>
                            </div>
                            <div className="mt-3">
                                <input type="submit" className="btn btn-primary" value={this.state.btnText}></input> &nbsp; &nbsp;
                                <input type="reset" className="btn btn-secondary" value="cancel"></input>
                            </div>
                    </form>
                    <div className="mt-5">
                        {<SharedComponent key='A' title={"Add Property"}  headers = {this.headers} body={this.state.addPropertyData}
                        UpdatePropertyGrid={this.UpdatePropertyGrid} deleteItemGrid={this.deleteItemGrid} />}
                    </div>
                    </div>
                </div>
            </AuthRoute>
        )
    }
}