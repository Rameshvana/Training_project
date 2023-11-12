import React from "react";

import './add-property.component.css'


export class AddProperty extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <>
                <div>
                    <h2>Add Property</h2>
                    <form>
                        <div className="form-group">
                            <label className="label-el">Property Name</label>
                            <input type="text" className="form-control input"></input>
                        </div>
                        <div>
                            <label className="label-el">Property Type</label>
                            <select className="form-control input">
                                <option value=""> ..select..</option>
                                <option value="1">Villa</option>
                                <option value="2">House</option>

                            </select>
                        </div>
                        <div className="form-group">
                            <label className="label-el">Squarefeet</label>
                            <input type="text" className="form-control input" ></input>
                        </div>
                        <div className="form-group">
                            <label className="label-el">Construction Date</label>
                            <input type="text" className="form-control input"></input>

                        </div>
                        <div>
                            <label className="label-el">Loan Availability</label>
                            <div className="form-check form-switch">
                            <input  type="checkbox" id="home" />
                            <label className="label-el" htmlFor="home">Home Loan</label>
                        </div>

                        <div className="form-check form-switch">
                            <input  type="checkbox" id="personal" />
                            <label className="label-el" htmlFor="personal">personal Loan</label>
                        </div>
                        </div>
                        <div mt-3>
                            <input type="submit" className="btn btn-primary" value="save"></input> &nbsp; &nbsp;
                            <input type="reset" className="btn btn-secondary" value="cancel"></input>
                        </div>
                    </form>
                </div>
            </>
        )
    }
}