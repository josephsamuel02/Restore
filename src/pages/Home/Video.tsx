const Video = () => {
  return (
    <div className="my-24 w-full h-auto bg-white flex flex-center items-center p-6 md:p-16">
      <video className=" mx-auto h-auto md:w-3/5 rounded-lg" controls autoPlay muted>
        <source src="/videos/song.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};
export default Video;
