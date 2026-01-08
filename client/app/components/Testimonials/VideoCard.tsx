import React from 'react';
import { Play } from 'lucide-react';

interface VideoCardProps {
    name: string;
    videoUrl: string;
    thumbnail?: string;
}

const VideoCard: React.FC<VideoCardProps> = ({ name, videoUrl, thumbnail }) => {
    return (
        <div className="relative w-[200px] h-[350px] rounded-xl overflow-hidden cursor-pointer group border border-white/10 bg-black">
            {/* Thumbnail / Video Placeholder */}
            <div className="absolute inset-0 bg-black">
                {thumbnail ? (
                    <img src={thumbnail} alt={name} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                ) : (
                    <div className="w-full h-full bg-black" />
                )}
            </div>

            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="w-12 h-12 bg-orange-500/90 rounded-lg flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-6 h-6 text-white ml-1" fill="white" />
                </div>
            </div>

            {/* Gradient Overlay */}
            {/* Gradient Overlay Removed as per user request */}
            {/* <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent z-0" /> */}

            {/* Name Label Removed */}
            {/* <div className="absolute bottom-4 left-0 right-0 text-center z-20">
                <h3 className="text-white font-semibold text-sm tracking-wide">{name}</h3>
            </div> */}

            {/* Wistia Logo Mockup (Optional - matching reference) */}
            <div className="absolute bottom-1 right-2 z-20 opacity-60">
                {/* Simple placeholder for logo if needed, skipping for now to keep clean */}
            </div>
        </div>
    );
};

export default VideoCard;
