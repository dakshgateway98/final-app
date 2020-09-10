import React, { Component } from "react";
import * as Survey from "survey-react";
import "survey-react/survey.css";
import { json } from "./survey_json.js";
class SurveyComp extends Component {
     onValueChanged = (result) => {
        console.log("value changed!");
    }
    
     onComplete = (result) => {
        console.log( result.valuesHash);
    }
   
  render() {
    var model = new Survey.Model(json);
    return (
      <div>
        <h2>Survey Expense Manager</h2>
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
