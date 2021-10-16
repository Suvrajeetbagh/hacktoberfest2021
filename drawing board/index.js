window.onload = () => {
  const canvas = document.querySelector('#canvas');
  const ctx = canvas.getContext('2d');
  const erasor = document.getElementsByClassName('erasor');
  const color = document.getElementsByClassName('color');

  erasor[0].addEventListener('click', ers);
  color[0].addEventListener('click', pencil);

  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;

  function pencil() {
    let painting = false;

    function startPosition(e) {
      painting = true;
      draw(e);
    }

    function finishedPosition() {
      painting = false;
      ctx.beginPath();
    }
    function draw(e) {
      if (!painting) return;
      ctx.linecap = 'round';
      ctx.lineJoin = 'round';
      ctx.lineWidth = parseInt(document.getElementById('pen-size').value);
      ctx.lineTo(e.clientX, e.clientY);
      ctx.stroke();
    }

    canvas.addEventListener('mousedown', startPosition);
    canvas.addEventListener('mouseup', finishedPosition);
    canvas.addEventListener('mousemove', draw);
  }
  function ers() {
    let erasing = false;

    function startPositionE(e) {
      erasing = true;
      erase(e);
    }

    function finishedPositionE() {
      erasing = false;
      ctx.beginPath();
    }
    function erase(e) {
      if (!erasing) return;
      ctx.linecap = 'round';
      ctx.lineJoin = 'round';
      ctx.lineWidth = 20;
      ctx.strokeStyle = 'white';

      ctx.lineTo(e.clientX, e.clientY);
      ctx.stroke();
    }

    canvas.addEventListener('mousedown', startPositionE);
    canvas.addEventListener('mouseup', finishedPositionE);
    canvas.addEventListener('mousemove', erase);
  }

  download_img = function (e) {
    var imageURI = canvas.toDataURL('image/png', 1.0);
    e.href = imageURI;
  };

  document.getElementById('reset').addEventListener('click', function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  });
};
