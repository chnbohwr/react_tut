
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

var DeleteButton = React.createClass({displayName: "DeleteButton",
    clickEvent:function(){
        console.log('should delete: ',this.props.index);
        console.log(this.props);
        this.props.onDelete(this.props.index);
    },
    render:function(){
        return React.createElement("button", {onClick: this.clickEvent}, "刪除使用者")
    }
});


var UserProfile = React.createClass({displayName: "UserProfile",
    getInitialState:function(){
       return {data:window.data};
    },
    deleteUser:function(index){
        var data = self.state.splice(index,1);
        self.setState({data:data});
    },
    render:function(){
        var self = this;
        var userdatas = this.state.data.map(function(d,index){
            return( 
                React.createElement("div", {className: "user-profile"}, 
                    React.createElement(UserAvatar, {data: d.user.picture}), 
                    React.createElement(UserName, {data: d.user.name}), 
                    React.createElement(DeleteButton, {onDelete: self.deleteUser, index: index})
                )
            );
        });
        return (React.createElement("div", null, userdatas));
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
