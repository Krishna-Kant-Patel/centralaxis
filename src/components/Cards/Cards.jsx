const FeatureCard = ({ title, description, points, videoSrc, reverse }) => {
  return (
    <div 
      className={`flex flex-col lg:flex-row ${
        reverse ? 'lg:flex-row-reverse' : ''
      } bg-[#18181b] text-white rounded-xl justify-between overflow-hidden my-8 shadow-lg px-3 py-4`}
    >
      {/* Text Section */}
      <div className="lg:w-1/2 p-6 lg:p-6 flex flex-col justify-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">{title}</h2>
        <p className="text-gray-300 mb-6">{description}</p>
        <ul className="space-y-3 text-gray-300">
          {points.map((point, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="text-green-400 mt-1">✔️</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Video Section */}
      <div className="lg:w-1/3 flex items-center justify-center bg-black">
        <video
          src={videoSrc}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default FeatureCard;
