import React, {PureComponent, Component} from 'react';
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';
import {hashHistory, Link} from 'react-router';
import {deleteSong, fetchSongs} from '../queries';

class LyricsList extends Component {

    renderLyrics() {
        return (
            this.props.lyrics.map((lyric) => {
                    return (
                        <li className="collection-item" key={lyric.id}>
                            <Link to={`/songs/${lyric.id}`}>{lyric.content}</Link>
                            <i className="material-icons">thumb_up</i>
                        </li>
                    )
                }
            )
        )
    }

    render() {
        console.log(this.props.data);
        return (
            this.props.lyrics.loading ? <div>Loading</div> :
                <div>
                    <ul className="collection">
                        {this.renderLyrics()}
                    </ul>
                   {/* <Link to="/songs/new" className="btn-floating btn-large red light">
                        <i className="material-icons">add</i>
                    </Link>*/}
                </div>
        )
    }
}


export default (
    graphql(fetchSongs)(LyricsList)
);