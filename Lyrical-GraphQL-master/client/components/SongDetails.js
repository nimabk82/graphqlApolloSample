import React, {PureComponent} from 'react';
import {graphql} from 'react-apollo';
import {hashHistory, Link} from 'react-router';
import {fetchSong} from '../queries';
import LyricCreate from './LyricCreate';
import LyricsList from './LyricsList';

class SongDetails extends PureComponent {

    render() {
        const {song} = this.props.data;
        return (
            this.props.data.loading ? <div>Loading</div> :
                <div>
                    <Link to="/">Back</Link>
                    <h3>{song.title}</h3>
                    <LyricsList lyrics={song.lyrics}/>
                    <LyricCreate songId={this.props.params.id}/>
                </div>
        )
    }
}


export default graphql(fetchSong, {
        options: (props => {
            return {variables: {id: props.params.id}}
        })
    } //video 56, add options to get id from path and pass it to graphql
)(SongDetails);