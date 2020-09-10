# Picture in Picture

% PIC %

% Description %



<br />



## Learning outcomes

- ...



<br />

---

<br />

## Structure

<br/>

---

<br/>

---

## Process

<br/>

We set a constant that will have the media stream data

We wait to assign it what screen or window they want to share

We pass it as the source to the media

When the video is loaded, we play it 



--- we hide the video by default and we want the window to appear once we click on the button. Asynchronous function

<br/>

---





Async keyword -> new feature in ES6 used --> async allows to use the await keyword in a function

There is an update for ECMAScript coming that is the so called `top-level await`: as of now await has to always be wrapped in an async function but new update -> you can use await in top level this already works for example in Google Chrome, which runs the v8 engine -> what reads javascript. They implement things that are coming from tc39 even though they aren't part of ECMAscrtip yet



Let’s call `requestPictureInPicture()` on the video element when the button with `#pipButton` is clicked. This method returns a promise that places the video in a mini window on the bottom-right side of the screen by default when resolved, although it can be moved around by the user.



```js
if ('pictureInPictureEnabled' in document) {
  pipButton.classList.remove('hidden')
  pipButton.disabled = false;

  pipButton.addEventListener('click', () => {
    video.requestPictureInPicture()
    .catch(err) {}
  });
}
```

