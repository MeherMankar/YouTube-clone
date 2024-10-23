import React from 'react';

const VideoPlayer = ({ video }) => {
    return (
        <div>
            <h2>{video.title}</h2>
            <video src={video.url} controls />
            {/* Add comments section here */}
        </div>
    );
};

export default VideoPlayer;
