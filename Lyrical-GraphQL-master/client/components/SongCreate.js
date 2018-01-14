import React, {Component} from 'react';
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';
import {Link,hashHistory} from 'react-router';
import {fetchSongs,addSong} from '../queries';

class SongCreate extends Component {

    constructor(props){
        super(props);

        this.state = {
            title:''
        }
    }

    onSubmit(){
        event.preventDefault();
        this.props.mutate({
            variables : {
                title:this.state.title
            },
            refetchQueries: [{query:fetchSongs}] //video 49 , add this line to ask apollo to refetch the data again for reloading the list with new data
        }).then(()=> hashHistory.push('/'));
    }

    render() {
        return (
            <div>
                <Link to="/">back</Link>
                <h3>Create Song</h3>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <label>Song Title : </label>
                    <input
                        onChange={(e)=>this.setState({title:e.target.value})}
                       value={this.state.title}
                    />
                </form>
            </div>
        )
    }
}

export default graphql(addSong)(SongCreate);