// const hoverImg = document.querySelectorAll('.conspiracyImg');

const largeImg = document.querySelector('.largeImage img');

function addGlobalEventListener(type, selector, callback) {
  document.addEventListener(type, (e) => {
    if (e.target.matches(selector)) callback(e);
  });
}

addGlobalEventListener('click', '.conspiracyImg', (e) => {
  window.location.href = 'investigation.html';
  switch (e.target.matches(selector)) {
    case 'main_02':
      largeImg.setAttribute('src', 'images_bw/02_nessie.png');
      break;
  }
});
