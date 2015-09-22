$.get('http://jsonplaceholder.typicode.com/posts', function (data) {
    window.posts = data;
    React.render( React.createElement(PostBox, null/) , document.body);
});

var PostList = React.createClass({displayName: "PostList",
    render: function () {
        var post_list = this.props.posts.map(function (post) {
            return ( React.createElement("li", null, 
                React.createElement("h3", null, " ", 
                    post.title, 
                " "), " ", React.createElement("p", null, " ", 
                    post.body, 
                " "), " ")
            );
        })
        return ( React.createElement("ul", {posts: 
            posts
        }, " ", 
            post_list, 
        " "));
    }
});

var InputBox = React.createClass({displayName: "InputBox",
    textChange: function (event) {
        this.setState({
            message: event.target.value
        });
    },
    getInitialState: function () {
        return {
            message: ""
        };
    },
    render: function () {
        return ( React.createElement("div", null, 
            React.createElement("input", {type: "text", 
            value: 
                this.state.message, 
            
            onChange: 
                this.textChange
            }
            ), " ", React.createElement("div", null, " ", 
                this.state.message, 
            " "), " ")
        );
    }
});

var PostBox = React.createClass({displayName: "PostBox",
    render: function () {
        return ( React.createElement("div", null, 
            React.createElement(InputBox, null/), 
            React.createElement(PostList, null/)
            )
        );
    }
});