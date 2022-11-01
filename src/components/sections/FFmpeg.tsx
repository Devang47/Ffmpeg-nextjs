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

    setProgress(1);

    if (!ffmpeg?.isLoaded()) {
      await ffmpeg?.load();
    }

    ffmpeg?.FS("writeFile", inFilename, await fetchFile(file as any));
    await ffmpeg?.run(...args);
    const data = ffmpeg?.FS("readFile", outFilename);
    setVideoSrc(
      URL.createObjectURL(new Blob([data?.buffer] as any, { type: mediaType }))
    );

    setProgress(0);
  };

  const logs = useAppStore().logs;

  return (
    <div className="mt-10">
      <Button
        disabled={progress !== 0}
        label="Upload a Video/Audio File"
        className="mx-auto !p-0"
      >
        <label
          htmlFor="fileInput"
          className="py-2.5 px-6 cursor-pointer flex items-center gap-2.5 justify-center"
        >
          {progress !== 0 ? (
            "loading ..."
          ) : (
            <>
              <UploadIcon />
              Upload a Video/Audio File
              <input
                id="fileInput"
                type="file"
                className="hidden"
                onChange={onFileUploaded}
              />
            </>
          )}
        </label>
      </Button>

      <div className="mt-8 text-light-3 text-sm">
        <code>Check console for logs</code>
      </div>
      <div className="mt-4 text-light-3 text-sm max-w-md mx-auto">
        <code>
          This website isn&apos;t using SharedArrayBuffer, that&apos;s why the
          browser might freeze for a moment until the processing is done, but
          script will continue to add logs in the console.
        </code>
      </div>

      {videoSrc.length === 0 ? null : (
        <div className="rounded-lg mt-10 bg-dark-1 border border-light-4 border-opacity-30 w-10/12 max-w-large mx-auto h-fit p-4">
          <h2 className="font-bold text-lg mb-3 text-left text-light-1">
            Output:
          </h2>
          <video
            className="w-full rounded-lg"
            src={videoSrc}
            autoPlay
            controls
          ></video>
        </div>
      )}

      <div className="py-2.5 px-5 text-base rounded bg-dark-1 text-white placeholder-light-4 border border-light-4 border-opacity-30 outline-none w-full max-w-xl duration-75 resize-y mx-auto mt-14 h-fit text-left">
        <h2 className="font-bold text-lg mb-3 text-light-1">
          Logs:
          <span className="text-light-3 font-medium text-sm ml-2">
            (Check console if this freezes)
          </span>
        </h2>
        <pre className="w-full overflow-y-scroll text-light-3">
          {logs || "logs will appear here"}
        </pre>
      </div>
    </div>
  );
}

export default FFmpegSection;
