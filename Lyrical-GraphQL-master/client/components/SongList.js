import React, {PureComponent, Component} from 'react';
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';
import {hashHistory, Link} from 'react-router';
import {deleteSong, fetchSongs} from '../queries';

class SongList extends Component {

    onSongDelete(id) {
        this.props.mutate({
            variables: {
                id: id
            },
        }).then(()=> this.props.data.refetch()); // use refatch instead refetchQueries here, refetchQueries use to fetch a query outside component but refetch is using to fetch data inside component
    }

    renderSongs() {
        return (
            this.props.data.songs.map((song) => {
                    return (
                        <li className="collection-item" key={song.id}>
                            <Link to={`/songs/${song.id}`}>{song.title}</Link>
                            <i className="material-icons" onClick={() => this.onSongDelete(song.id)}>delete</i>
                        </li>
                    )
                }
            )
        )
    }

    render() {
        //   console.log(this.props);

        return (
            this.props.data.loading ? <div>Loading</div> :
                <div>
                    <ul className="collection">
                        {this.renderSongs()}
                    </ul>
                    <Link to="/songs/new" className="btn-floating btn-large red light">
                        <i className="material-icons">add</i>
                    </Link>
                </div>
        )
    }
}


export default graphql(deleteSong)(
    graphql(fetchSongs)(SongList)
);