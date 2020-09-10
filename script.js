const elements = {
  video: document.getElementById('video'),
  button: document.getElementById('button'),
};

// Prompt to select media stream, pass to video element, then play
async function selectMediaStream() {
  const { video, button } = elements;
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    video.srcObject = mediaStream;
    video.onloadedmetadata = () => {
      video.play();
    };
  } catch (err) {
    console.log(`Error: ${err}`);
  }
}

// Event Listeners
elements.button.addEventListener('click', async () => {
  // Disable Button
  elements.button.disable = true;
  // Start Picture in Picture
  await elements.video.requestPictureInPicture();
  // Reset Button
  elements.button.disable = false;
});

// On Load
selectMediaStream();
