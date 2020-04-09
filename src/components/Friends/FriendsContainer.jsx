import React from 'react';
import Friends from "./Friends";
import {connect} from "react-redux";


let FriendsContainer = (props) => {
    return (
      <Friends friends={props.friends}/>
    );
};

const mapStateToProps = (state) => {
  return {
      friends: state.sidebar.friends
  }
};

FriendsContainer = connect(mapStateToProps, {})(FriendsContainer);

export default FriendsContainer;