
// Handles loading the events for <model-viewer>'s slotted progress bar
const onProgress = (event) => {
  const progressBar = event.target.querySelector('.progress-bar');
  const updatingBar = event.target.querySelector('.update-bar');
  updatingBar.style.width = `${event.detail.totalProgress * 100}%`;
  if (event.detail.totalProgress === 1) {
    event.target.addEventListener(
        'load',
        () => {
            requestAnimationFrame(() => {
                progressBar.classList.add('hide');
            });
        },
        { once: true }
    );

    event.target.removeEventListener('progress', onProgress);
} else {
    progressBar.classList.remove('hide');
  }
};
document.querySelector('model-viewer').addEventListener('progress', onProgress);