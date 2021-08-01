import Comment from "./Comment/comment";

export default function CommentList(props) {

    return <div>
        <Comment author={'Alon'}>
            <h1>The nicest comment ever</h1>
            <p>more and more content!</p>
        </Comment>
        <Comment content={'hey there'} author={'anonymus'} />
        <Comment content={'hakshev hamemem'} author={'Avi'} />
    </div>;

} 