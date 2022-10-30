import React, { useState } from "react";
import FFmpegSection from "./FFmpeg";

const CONFIGS = [
  {
    name: "x264",
    args: ["-i", "video.avi", "-c:v", "libx264", "video.mp4"],
    inFilename: "video.avi",
    outFilename: "video.mp4",
    mediaType: "video/mp4",
  },
  {
    name: "libvpx",
    args: ["-i", "video.avi", "-c:v", "libvpx", "video.webm"],
    inFilename: "video.avi",
    outFilename: "video.webm",
    mediaType: "video/webm",
  },
  {
    name: "lame",
    args: ["-i", "audio.wav", "-c:a", "libmp3lame", "audio.mp3"],
    inFilename: "audio.wav",
    outFilename: "audio.mp3",
    mediaType: "audio/mp3",
  },
];

function LiveEditFfpeg() {
  const [config, setConfig] = useState(CONFIGS[0]);

  const IS_COMPATIBLE = typeof SharedArrayBuffer === "function";
  const mainName = IS_COMPATIBLE ? "proxy_main" : "main";
  const corePath = IS_COMPATIBLE
    ? "https://unpkg.com/@ffmpeg/core@0.11.0/dist/ffmpeg-core.js"
    : "https://unpkg.com/@ffmpeg/core-st@0.11.1/dist/ffmpeg-core.js";

  const changeSelectedValue = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setConfig(CONFIGS[Number(e.target.value)]);
  };

  return (
    <div className="mt-20 text-center">
      <select
        className="py-2.5 px-5 border border-light-3 text-light-1 border-opacity-50 outline-none bg-dark-1 rounded appearance-none relative focus:border-highlight !pr-14"
        name=""
        id=""
        onChange={changeSelectedValue}
      >
        {CONFIGS.map((e, i) => (
          <option key={i} value={i}>
            {e.name} - {`$ ffmpeg ${e.args.join(" ")}`}
          </option>
        ))}
      </select>

      <FFmpegSection
        inFilename={config.inFilename}
        outFilename={config.outFilename}
        mediaType={config.mediaType}
        mainName={mainName}
        corePath={corePath}
        args={config.args}
      />
    </div>
  );
}

export default LiveEditFfpeg;
