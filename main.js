function addGlobalEventListener(type, selector, callback) {
  document.addEventListener(type, (e) => {
    if (e.target.matches(selector)) callback(e);
  });
}

addGlobalEventListener('click', '.conspiracyImg', (e) => {
  const imgId = e.target.id;
  localStorage.setItem('selectedImageId', imgId);
  window.location.href = 'investigation.html';
});
