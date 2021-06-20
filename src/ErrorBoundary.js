import React from "react";

export default class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {
      return { hasError: true };
    }
    
    render() {
      if (this.state.hasError) {
        return <h1>&#9785; Whoops! Something's not right. Maybe try refreshing the page?</h1>;
      }
  
      return this.props.children; 
    }
  }