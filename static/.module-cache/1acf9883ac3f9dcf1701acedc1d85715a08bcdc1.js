var UserName = React.createClass({displayName: "UserName",
    render: function () {
        return (
            React.createElement("div", null, " hello ", this.props.nane, " ")
        );
    }
}); 
        
var UserAvatar = React.createClass({displayName: "UserAvatar",
    render:function(){
        return(
            React.createElement("h1", {src: 'http://fakeimg.pl/100x100/'}, "test")
        );
    }
});

var UserProfile = React.createClass({displayName: "UserProfile",
    render:function(){
        return(
            React.createElement("div", null, 
            React.createElement(UserAvatar, null), 
            React.createElement(UserName, null)
            )
        );
    }
});
