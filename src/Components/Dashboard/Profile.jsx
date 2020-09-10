import React, { Component } from 'react'
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getUser } from '../../Redux/Actions/userActions';
class Profile extends Component {
    constructor(props){
        super(props)
        this.state = {
        user:{}
        }

    }
    componentWillReceiveProps(nextProps) {
        console.log(nextProps.user , "USER");
        if (nextProps.user !== this.props.user) {
        //   const User = nextProps.user;
          this.setState({
            User: nextProps.user
          })
        }
        console.log('componentWillReceiveProps', ' State ', this.state)
      }
      componentDidMount(){
        this.props.getUser(localStorage.getItem("id"));
      }
    render() {
        return (
            <div>
                Hello
                <header>

                </header>
                <section>
                    
                </section>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      user: state.user.data
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUser: (id) => dispatch(getUser(id)),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Profile));


