var UserName = React.createClass({displayName: "UserName",
    render: function () {
        return ( React.createElement("div", null, " test "));
    }
}); 
        

React.render(
    React.createElement(UserName, null)
    ,document.body
);