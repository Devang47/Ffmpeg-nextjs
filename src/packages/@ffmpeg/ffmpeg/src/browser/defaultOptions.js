import pkg from '../../package.json';

/*
 * Default options for browser environment
 */
const corePath = `https://unpkg.com/@ffmpeg/core@${pkg.devDependencies['@ffmpeg/core'].substring(1)}/dist/ffmpeg-core.js`;

export default { corePath };
