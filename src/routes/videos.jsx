import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import VideoCard from "../components/VideoCard.jsx";

export const Route = createFileRoute("/videos")({
  component: RouteComponent,
});

function RouteComponent() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch("https://api.freeapi.app/api/v1/public/youtube/videos");
        const data = await response.json();
        const videosData = data.data.data;
        console.log("Correct data:", videosData);
        setVideos(videosData);
        console.log("Fetched videos:", videos);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching videos:", error);
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);
 return (<div>
  {loading && <div className="loading">Loading...</div>}
   <h1>Videos</h1>
   <div className="videos">
     {videos && videos.map((video) => (
       <VideoCard key={video.id} video={video.items} />
     ))}
   </div>
 </div>
 );
}
