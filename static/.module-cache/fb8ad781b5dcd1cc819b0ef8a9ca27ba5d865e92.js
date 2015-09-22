$.get('http://jsonplaceholder.typicode.com/posts',function(data){
    window.posts = data;
    React.render(React.createElement(PostBox, null),document.body);
});

var PostList = React.createClass({displayName: "PostList",
    render:function(){
        var filter_text = this.props.filter;
        var post_list = this.props.posts.map(function(post){
            var index_body= post.body.indexOf(filter_text),
                index_title=post.title.indexOf(filter_text);
            if((index_body === -1) && (index_title ===-1)){
                return;
            }
           
            return(
                React.createElement("li", {key: post.id}, 
                    React.createElement("h3", null, post.title), 
                    React.createElement("p", null, post.body)
                )
            );
        })
        return (
            React.createElement("ul", null, 
                post_list
            )
        );
    }
});

var InputBox = React.createClass({displayName: "InputBox",
    render: function () {
        return (
            React.createElement("div", null, 
                React.createElement("input", {type: "text", value: this.props.filter, onChange: this.props.change}), 
                React.createElement("div", null, this.props.filter)
            )
        );
    }
});

var PostBox = React.createClass({displayName: "PostBox",
    textChange:function(event){
        this.setState({message: event.target.value});
    },
    getInitialState:function(){
        return {message:""};
    },
    render:function(){
        return (
            React.createElement("div", null, 
                React.createElement(InputBox, {filter: this.state.message, change: this.textChange}), 
                React.createElement(PostList, {posts: posts, filter: this.state.message})
            )
        );
    }
}); 

