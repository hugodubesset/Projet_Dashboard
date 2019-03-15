import React, { Component } from 'react'
import Widget1 from "../Widget/Widget1";
import Widget2 from "../Widget/Widget2";
import Widget3 from "../Widget/Widget3";
import Widget4 from "../Widget/Widget4";
import Widget5 from "../Widget/Widget5";
import Widget6 from "../Widget/Widget6";


export default class Menu extends Component {
    render() {
        return (

            <div className="App-header">

                <div className="row">
                    <div className="col-lg-12 col-md-6"><Widget1 Widget1={Widget1}/></div>
                </div>


                <div className="row">
                    <div className="col-lg-6 col-md-3"><Widget3 Widget3={Widget3}/></div>
                    <div className="col-lg-6 col-md-3"><Widget4 Widget4={Widget4}/></div>
                </div>



                <div className="row">
                    <div className="col-lg-12 col-md-6"><Widget2 Widget2={Widget2}/></div>
                </div>



                <div className="row">
                    <div className="col-lg-6 col-md-3"><Widget5 Widget5={Widget5}/></div>
                    <div className="col-lg-6 col-md-3"><Widget6 Widget6={Widget6}/></div>
                </div>

            </div>
        )
    }
}