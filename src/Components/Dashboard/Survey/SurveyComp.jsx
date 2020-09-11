import React, { Component } from "react";
import * as Survey from "survey-react";
import "survey-react/survey.css";
import { json } from "./survey_json.js";
import { Link } from "react-router-dom";
class SurveyComp extends Component {
     onValueChanged = (result) => {
        console.log("value changed!");
    }
    
     onComplete = (result) => {
        console.log("RESULT", result.valuesHash);
    }
   
  render() {
    var model = new Survey.Model(json);
    return (
      <div>
        <div className="d-flex justify-content-around">
        <h2>Survey Expense Manager</h2>
        <Link to="/dashboard">
        <button
        style={{backgroundColor:"#1ab394"}}
        className="btn">Go back</button>
        </Link>
        </div>
        <Survey.Survey
          model={model}
          onComplete={this.onComplete}
          onValueChanged={this.onValueChanged}
        />
      </div>
    );
  }
}
export default SurveyComp;
