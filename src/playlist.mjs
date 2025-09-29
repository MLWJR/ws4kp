import reader from './playlist-reader.mjs';

const playlistGenerator = async (req, res) => {
  try {
    const availableFiles = await reader();

    // If we found files, force autoplay on the first one
    if (availableFiles.length > 0) {
      res.json({
        availableFiles,
        autoplay: true,              // tells frontend to autoplay
        firstTrack: availableFiles[0] // optional: preload first track
      });
    } else {
      res.json({
        availableFiles: [],
        autoplay: false
      });
    }
  } catch (e) {
    console.error(e);
    res.json({
      availableFiles: [],
      autoplay: false
    });
  }
};

export default playlistGenerator;
