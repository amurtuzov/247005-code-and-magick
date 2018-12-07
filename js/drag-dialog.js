'use strict';
(function () {
  var setupDialog = document.querySelector('.setup');
  var uploader = setupDialog.querySelector('.upload');
  var uploaderInput = uploader.querySelector('input');
  var uploaderPic = uploader.querySelector('.setup-user-pic');
  uploaderInput.style.display = 'none';

  uploaderPic.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    var dragged = false;

    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();
      dragged = true;
      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };
      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      setupDialog.style.left = (setupDialog.offsetLeft - shift.x) + 'px';
      setupDialog.style.top = (setupDialog.offsetTop - shift.y) + 'px';
    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
      if (!dragged) {
        uploaderInput.click();
      }
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });
})();
