import gql from 'graphql-tag';

export const addLyrics = gql`
mutation AddLyricsToSong($songId : ID, $content : String){
  addLyricToSong(songId:$songId,content:$content){
   id
    lyrics {
     id
     content
   }
  }
}
`;