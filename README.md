# Picture in Picture

![cover](cover.gif)



This application allows the user to watch a video in "Picture in Picture" mode so that it always stays at the top. Once the application loads, the user is prompt with an interface where they should choose what window application or browser tab would like to display in "Picture to Picture" mode. Once the video is selected, the user can click on the button start to initialise the mode.



<br />



## Learning outcomes

- Learning how to display a video "Picture in Picture"
- Using the **Screen Capture API** and its method `getDisplayMedia()`
- Using **async await**



<br />

---

<br />

## Structure



**HTML** only counts with a button and a video, which is set to `hidden` by default.

**script.js** has only one `selectMediaStream` function that displays the chosen video in a "Picture in Picture" mode by using the **Screen Capture API** and `navigator.mediaDevices.getDisplay()` method.

```js
async function selectMediaStream() {
  const { video } = elements;
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
```

👉🏻We have a constant that will have the media stream data

👉🏻 We assign the media stream to the source object of the video and once that it is loaded, we play the video. ⚠️ But we won't see the video because it is hidden. 

<br >

```js
// Event Listeners
elements.button.addEventListener('click', async () => {
  // Disable Button
  elements.button.disable = true;
  // Start Picture in Picture
  await elements.video.requestPictureInPicture();
  // Reset Button
  elements.button.disable = false;
});
```

We call `requestPictureInPicture()` on the video element when the button with is clicked. This method returns a promise that places the video in a mini window on the bottom-right side of the screen by default when resolved, although it can be moved around by the user.

<br/>

---

Background generated with [heropatterns](https://www.heropatterns.com/)