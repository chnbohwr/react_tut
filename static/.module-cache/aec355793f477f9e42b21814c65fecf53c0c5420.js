$.ajax({
  url: 'https://randomuser.me/api/?results=10',
  dataType: 'json',
  success: function(data){
    window.data = data;
  }
});

var UserName = React.createClass({displayName: "UserName",
    render: function () {
        return (
            React.createElement("div", {className: "user-name"}, " hello ", this.props.nane, " ")
        );
    }
}); 
        
var UserAvatar = React.createClass({displayName: "UserAvatar",
    render:function(){
        return(
            React.createElement("img", {className: "user-avatar", src: "http://fakeimg.pl/100x100/"})
        );
    }
});

var UserProfile = React.createClass({displayName: "UserProfile",
    render:function(){
        return(
            React.createElement("div", {className: "user-profile"}, 
            React.createElement(UserAvatar, null), 
            React.createElement(UserName, null)
            )
        );
    }
});

$(document).ready(function(){
    React.render(React.createElement(UserProfile, null),document.body);
});
