const Feed = () => {
  return (
    <div
      className="relative max-w-full p-6 rounded-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://www.mercedes-benz.co.uk/content/dam/hq/passengercars/cars/g-class/w465-pi/overview/offroad/03-2024/images/mercedes-benz-g-class-w465-offroad-angleofrepose-1440x720-03-2024.jpg')",
      }}
    >
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-50 rounded-lg"></div>

      {/* Facebook Feed */}
      <div
        className="fb-page mb-6 w-full z-10 relative"
        data-href="https://www.facebook.com/MercedesBenz"
        data-tabs="timeline"
        data-width=""
        data-height=""
        data-small-header="false"
        data-adapt-container-width="true"
        data-hide-cover="false"
        data-show-facepile="true"
      >
        <blockquote
          cite="https://www.facebook.com/MercedesBenz"
          className="fb-xfbml-parse-ignore"
        >
          <a href="https://www.facebook.com/MercedesBenz">Mercedes-Benz</a>
        </blockquote>
      </div>
      <script
        async
        defer
        crossOrigin="anonymous"
        src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v12.0"
      ></script>

      {/* Twitter Feed */}
      <div className="relative z-10">
        <a
          className="twitter-timeline"
          href="https://twitter.com/MercedesBenz?ref_src=twsrc%5Etfw"
          data-width="600" // Increased width
          data-height="600"
          data-theme="light"
          data-chrome="noheader nofooter noborders"
        >
          Tweets by MercedesBenz
        </a>
        <script
          async
          src="https://platform.twitter.com/widgets.js"
          charSet="utf-8"
        ></script>
      </div>

     
    </div>
  );
};

export default Feed;
