import React from 'react';

interface WorkCardProps {
    videoUrl?: string; // Optional for now, using placeholder if missing
    thumbnail?: string; // Optional thumbnail
}

const WorkCard: React.FC<WorkCardProps> = ({ videoUrl, thumbnail }) => {
    return (
        <div className="relative w-[250px] md:w-[350px] aspect-video overflow-hidden cursor-pointer group bg-black hover:z-10 transition-all duration-300">
            {/* Video / Thumbnail */}
            <div className="absolute inset-0 bg-gray-900">
                {
                    videoUrl ? (
                        <video
                            src={videoUrl}
                            poster={thumbnail}
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                        />
                    ) : (
                        /* Placeholder visual if no video provided yet */
                        <div className="w-full h-full bg-gradient-to-br from-gray-800 to-black group-hover:scale-105 transition-transform duration-500 ease-out flex items-center justify-center">
                            <div className="text-white/20 font-bold text-lg uppercase tracking-widest">
                                Preview
                            </div >
                        </div >
                    )}
            </div >

            {/* Hover Overlay */}
            < div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />

            {/* Border/Glow effect on hover could be added here */}
        </div >
    );
};

export default WorkCard;
