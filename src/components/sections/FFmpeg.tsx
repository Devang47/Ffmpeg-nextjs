import React, { useState, useEffect } from "react";
import { useAppStore } from "~/context/use-app-store";
import { createFFmpeg, FFmpeg, fetchFile } from "~/packages/@ffmpeg/ffmpeg/src";
import Button from "../primitives/Button/Button";
import { addLog } from "~/lib/utils/ffmpegUtils";
import UploadIcon from "~/icons/UploadIcon";

const readFromBlobOrFile = (blob: any) =>
  new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.onload = () => {
      resolve(fileReader.result);
    };
    fileReader.onerror = ({ target }) => {
      reject(Error(`File could not be read! Code=${target?.readAsText}`));
    };
    fileReader.readAsArrayBuffer(blob);
  });

function FFmpegSection({
  args,
  inFilename,
  outFilename,
  mediaType,
  mainName,
  corePath,
}: any) {
  const [videoSrc, setVideoSrc] = useState("");
  const [progress, setProgress] = useState(0);
  const [ffmpeg, setFfmpeg] = useState<FFmpeg>();

  useEffect(() => {
    console.log("hhere");
    setFfmpeg(
      createFFmpeg({
        log: true,
        mainName,
        corePath,
        addLog,
      })
    );
  }, [corePath, mainName]);

  const onFileUploaded = async ({ target: { files } }: any) => {
    const file = new Uint8Array(
      (await readFromBlobOrFile(files[0])) as ArrayBufferLike
    );

    addLog("[info] Check console for all logs");

    if (!ffmpeg?.isLoaded()) {
      await ffmpeg?.load();
    }

    ffmpeg?.FS("writeFile", inFilename, await fetchFile(file as any));
    await ffmpeg?.run(...args);
    const data = ffmpeg?.FS("readFile", outFilename);
    setVideoSrc(
      URL.createObjectURL(new Blob([data?.buffer] as any, { type: mediaType }))
    );
  };

  const logs = useAppStore().logs;

  return (
    <div className="mt-10">
      {progress !== 0 ? (
        <div className=""> loading ...</div>
      ) : (
        <Button label="Upload a Video/Audio File" className="mx-auto !p-0">
          <label
            htmlFor="fileInput"
            className="py-2.5 px-6 cursor-pointer flex items-center gap-2.5 justify-center"
          >
            <UploadIcon />
            Upload a Video/Audio File
            <input
              id="fileInput"
              type="file"
              className="hidden"
              onChange={onFileUploaded}
            />
          </label>
        </Button>
      )}

      {videoSrc.length === 0 ? null : (
        <div className="rounded-lg mt-10 bg-dark-1 border border-light-4 border-opacity-30 w-10/12 max-w-large mx-auto h-fit p-4">
          <h2 className="font-bold text-lg mb-3 text-left">Output:</h2>
          <video
            className="w-full rounded-lg"
            src={videoSrc}
            autoPlay
            controls
          ></video>
        </div>
      )}

      <div className="py-2.5 px-5 text-base rounded bg-dark-1 text-white placeholder-light-4 border border-light-4 border-opacity-30 outline-none w-full duration-75 resize-y mx-auto mt-14 h-fit text-left">
        <h2 className="font-bold text-lg mb-3">Logs:</h2>
        <pre className="w-full overflow-y-scroll">
          {logs || "logs will appear here"}
        </pre>
      </div>
    </div>
  );
}

export default FFmpegSection;
