'use strict';

(function () {
  var wizardCoat = document.querySelector('.wizard-coat');
  var wizardCoatInput = document.querySelector('input[name=coat-color]');
  var wizardEyes = document.querySelector('.wizard-eyes');
  var wizardEyesInput = document.querySelector('input[name=eyes-color]');
  var wizardFireball = document.querySelector('.setup-fireball-wrap');
  var wizardFireballInput = document.querySelector('input[name=fireball-color]');

  wizardCoat.addEventListener('click', function () {
    var randomCoatColor = window.wizardsCoatColors[window.getRandomNumber(5)];
    this.style.fill = randomCoatColor;
    wizardCoatInput.value = randomCoatColor;
  });
  wizardEyes.addEventListener('click', function () {
    var randomEyesColor = window.wizardsEyesColors[window.getRandomNumber(4)];
    this.style.fill = randomEyesColor;
    wizardEyesInput.value = randomEyesColor;
  });
  wizardFireball.addEventListener('click', function () {
    var randomFirballColor = window.wizardsFireballColors[window.getRandomNumber(4)];
    this.style.backgroundColor = randomFirballColor;
    wizardFireballInput.value = randomFirballColor;
  });
})();
