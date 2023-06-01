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
            <h3>{title}</h3>
            <p>{`Views: ${views}`}</p>
        </div>
    );
};
export default Video;
