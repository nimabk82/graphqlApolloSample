import React, {Component} from 'react';
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';
import {Link,hashHistory} from 'react-router';
import {addLyrics, fetchSong} from '../queries';

class LyricCreate extends Component {

    constructor(props){
        super(props);

        this.state = {
            content:''
        }
    }

    onSubmit(){
        event.preventDefault();
        this.props.mutate({
            variables : {
                content:this.state.content,
                songId : this.props.songId
            },
        })
            .then(()=> this.setState({content:''}))
    }

    render() {
        return (
            <div>
                <h6>Add lyrics</h6>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <input
                        onChange={(e)=>this.setState({content:e.target.value})}
                       value={this.state.content}
                    />
                </form>
            </div>
        )
    }
}

export default (graphql(addLyrics))(LyricCreate);