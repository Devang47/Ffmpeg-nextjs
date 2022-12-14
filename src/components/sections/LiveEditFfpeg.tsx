import React, { useState } from "react";
import FFmpegSection from "./FFmpeg";
import { m } from "framer-motion";

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
    <m.div
      initial={{
        y: 50,
        opacity: 0,
      }}
      animate={{
        transition: { delay: 1.5 },
      }}
      whileInView={{
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.7,
        },
      }}
      viewport={{ once: true }}
      className="mt-20 text-center"
    >
      <div className="text-[12px] font-bold text-left text-light-2 mb-1.5 w-10/12 max-w-lg mx-auto">
        Select config:
      </div>
      <select
        className="py-2.5 px-5 border border-light-3 text-light-1 border-opacity-50 outline-none bg-dark-1 rounded appearance-none relative focus:border-highlight !pr-14 w-10/12 max-w-lg"
        name="select config"
        id="select-config"
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
    </m.div>
  );
}

export default LiveEditFfpeg;
