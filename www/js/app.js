//INPUT PROPS
//webServerBase - Base URL of web server
//VALID STATES
// - notSignedIn
// - signedIn
var App = React.createClass({displayName: "App",
  getInitialState: function() {
    return{ appState: "notSignedIn"
          };
  },
  transitionUserSignedIn: function() {
    this.setState({
      appState: "signedIn"
    });
  },
  render: function() {
    var windowHeight  = $(window).innerHeight();
    var windowWidth   = $(window).innerWidth();
    //var styles = {backgroundColor: "green",
    //              width:            windowWidth,
    //              height:           windowHeight};
    var page = React.createElement("div", null, "Page not Initialized");
    if (this.state.appState === "notSignedIn") {
      console.log("App: Entering State - notSignedIn");
      page = React.createElement(WelcomePage, {className: "page col-xs-12", 
                          webServerBase: this.props.webServerBase, 
                          pageCallback: this.transitionUserSignedIn});
    } else if (this.state.appState === "signedIn") {
      console.log("App: Entering State - signedIn");
      page = React.createElement(DashboardPage, {className: "page col-xs-12", 
                            webServerBase: this.props.webServerBase});
    } else {
      console.log("App: UNKNOWN STATE ENTERED!");
    }
    //return <div style={styles}>This was generated by React</div>;
    return React.createElement("div", null, 
            page
           );
  }
});
