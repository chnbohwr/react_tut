var UserName = React.creatClass({
    render: function () {
        return ( React.createElement("div", null, " test "));
    }
}); 
        

React.render(
    React.createElement(UserName, null)
    ,document.body
);