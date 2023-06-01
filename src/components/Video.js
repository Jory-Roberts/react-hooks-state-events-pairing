const Video = ({ title, views, comments }) => {
    return (
        <div className='video'>
            <iframe
                width='919'
                height='525'
                src='https://www.youtube.com/embed/dQw4w9WgXcQ'
                frameBorder='0'
                allowFullScreen
                title='Thinking in React'
            />
            <h1>{title}</h1>
            <p>{`Views: ${views}`}</p>
            <h3>Comments:</h3>
            {comments.map((comment) => (
                <div key={comment.id}>
                    <p>User: {comment.user}</p>
                    <p>Comment: {comment.comment}</p>
                </div>
            ))}
        </div>
    );
};
export default Video;
