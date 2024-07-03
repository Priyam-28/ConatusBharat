/* eslint-disable react/prop-types */



const VideoSection = ({darkMode}) => {




  return (
    <div className={`z-50 ${darkMode ? 'bg-black' : 'bg-white'}`} style={{ height: 'calc(100vh - 50px)' }}>
      <video
        className="w-full h-full object-contain"
        autoPlay
        loop
        muted
        src={darkMode ? 'Video2.mp4' : 'Video1.mp4'}
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoSection;
