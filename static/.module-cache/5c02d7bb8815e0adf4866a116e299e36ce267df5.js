
function initialUserData(){
    $.ajax({
        url: 'https://randomuser.me/api/?results=10',
        dataType: 'json',
        success: function(data){
            console.log('get ajax data success',data);
            window.data = data.results;
            initialReact();
        }
    });
}


var UserName = React.createClass({displayName: "UserName",
    render: function () {
        console.log(this.props);
        return (
            React.createElement("div", {className: "user-name"}, " ", this.props.data.title +". "+ this.props.data.first +" - "+ this.props.data.last, " ")
        );
    }
}); 
        
var UserAvatar = React.createClass({displayName: "UserAvatar",
    render:function(){
        return(
            React.createElement("img", {className: "user-avatar", src: this.props.data.medium})
        );
    }
});

var UserProfile = React.createClass({displayName: "UserProfile",
    render:function(){
        console.log(this.props.data);
        var userdatas = this.props.data.map(function(d){
            return( 
                React.createElement("div", {className: "user-profile"}, 
                    React.createElement(UserAvatar, {data: d.user.picture}), 
                    React.createElement(UserName, {data: d.user.name}), 
                    React.createElement(DeleteButton, null)
                )
            );
        });
        return (React.createElement("div", null, userdatas));
    }
});
        
var DeleteButton = React.createClass({displayName: "DeleteButton",
    clickEvent:function(e){
        console.log(e);
    },
    render:function(){
        return React.createElement("button", {onClick: this.clickEvent}, "刪除使用者")
    }
});

//render react to document.body 
function initialReact (){
    React.render(React.createElement(UserProfile, {data: data}),document.body);
}
                 
//畫面讀取好以後下載使用者資訊                 
$(document).ready(function(){
    initialUserData();
});
