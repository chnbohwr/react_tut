var username="jack"
var HelloMessage = React.createClass({displayName: "HelloMessage",
    render:function(){
        return(
            React.createElement("div", null, "Hello:", this.props.name)
        );
    }
});


$(document).ready(function(){
    React.render(React.createElement(HelloMessage, {name: username}),document.body);
});
