// Prompt the user to select a media stream, pass to video element, then play.
async function selectMediaStream() {
    try {
      const mediaStream = await navigator.mediaDevices.getDisplayMedia();
      videoElement.srcObject = mediaStream;
      videoElement.onloadedmetadata = () => {
        videoElement.play();
      };
    } catch (error) {
      // Throw the error
      console.log('Uh oh, error in selectMediaStream: ', error);
    }
}