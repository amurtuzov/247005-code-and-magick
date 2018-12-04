'use strict';
var wizardsNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var wizardsSurnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var wizardsCoatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var wizardsEyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
var wizardsFireballColors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var getRandomNumber = function (maxNumber) {
  return Math.round(Math.random() * maxNumber);
};

var CreateWizard = function (names, surnames, coatColors, eyesColors) {
  this.name = names[getRandomNumber(7)] + ' ' + surnames[getRandomNumber(7)];
  this.coatColor = coatColors[getRandomNumber(5)];
  this.eyesColor = eyesColors[getRandomNumber(4)];
};
var getWizards = function () {
  var wizards = [];
  for (var i = 0; i < 4; i++) {
    wizards[i] = new CreateWizard(wizardsNames, wizardsSurnames, wizardsCoatColors, wizardsEyesColors);
  }
  return wizards;
};

var wizardsList = document.querySelector('.setup-similar-list');
var wizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

var renderWizard = function (wizard) {
  var wizardElement = wizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};

var fragment = document.createDocumentFragment();
getWizards().forEach(function (item) {
  fragment.appendChild(renderWizard(item));
});

wizardsList.appendChild(fragment);
document.querySelector('.setup-similar').classList.remove('hidden');

var setup = document.querySelector('.setup');
var setupOpener = document.querySelector('.setup-open');
var setupCloser = setup.querySelector('.setup-close');
var usernameInput = setup.querySelector('.setup-user-name');
var setupForm = setup.querySelector('.setup-wizard-form');
var setupSaver = setup.querySelector('.setup-submit');

var openSetup = function () {
  setup.classList.remove('hidden');
  setup.style.top = "80px";
  setup.style.left = "50%";
  setupCloser.addEventListener('click', closeSetup);
  document.addEventListener('keydown', closeSetupEscPress);
  setupCloser.addEventListener('keydown', closeSetupEnterPress);
  setupSaver.addEventListener('click', setupFormSubmit);
  setupSaver.addEventListener('keydown', setupFormEnterSubmit);
  usernameInput.addEventListener('focus', function () {
    document.removeEventListener('keydown', closeSetupEscPress);
  });
  usernameInput.addEventListener('blur', function () {
    document.addEventListener('keydown', closeSetupEscPress);
  });
};

var setupFormSubmit = function () {
  setupForm.submit();
};
var setupFormEnterSubmit = function (evt) {
  if (evt.keyCode === 13) {
    setupForm.submit();
  }
};

var closeSetup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', closeSetupEscPress);
  setupCloser.removeEventListener('click', closeSetup);
  setupCloser.removeEventListener('keydown', closeSetupEnterPress);
  setupSaver.removeEventListener('click', setupFormSubmit);
};

var openSetupEnterPress = function (evt) {
  if (evt.keyCode === 13) {
    setup.classList.remove('hidden');
    setup.style.top = "80px";
    setup.style.left = "50%";
    setupCloser.addEventListener('click', closeSetup);
    document.addEventListener('keydown', closeSetupEscPress);
    setupCloser.addEventListener('keydown', closeSetupEnterPress);
    setupSaver.addEventListener('click', setupFormSubmit);
    setupSaver.addEventListener('keydown', setupFormEnterSubmit);
    usernameInput.addEventListener('focus', function () {
      document.removeEventListener('keydown', closeSetupEscPress);
    });
    usernameInput.addEventListener('blur', function () {
      document.addEventListener('keydown', closeSetupEscPress);
    });
  }
};

var closeSetupEnterPress = function (evt) {
  if (evt.keyCode === 13) {
    setup.classList.add('hidden');
    document.removeEventListener('keydown', closeSetupEscPress);
    setupCloser.removeEventListener('click', closeSetup);
    setupCloser.removeEventListener('keydown', closeSetupEnterPress);
    setupSaver.removeEventListener('click', setupFormSubmit);
  }
};

var closeSetupEscPress = function (evt) {
  if (evt.keyCode === 27) {
    setup.classList.add('hidden');
    document.removeEventListener('keydown', closeSetupEscPress);
    setupCloser.removeEventListener('click', closeSetup);
    setupCloser.removeEventListener('keydown', closeSetupEnterPress);
    setupSaver.removeEventListener('click', setupFormSubmit);
  }
};

setupOpener.addEventListener('keydown', openSetupEnterPress);
setupOpener.addEventListener('click', openSetup);

var setupWizard = function () {
  var wizardCoat = document.querySelector('.wizard-coat');
  var wizardCoatInput = document.querySelector('input[name=coat-color]');
  var wizardEyes = document.querySelector('.wizard-eyes');
  var wizardEyesInput = document.querySelector('input[name=eyes-color]');
  var wizardFireball = document.querySelector('.setup-fireball-wrap');
  var wizardFireballInput = document.querySelector('input[name=fireball-color]');

  wizardCoat.addEventListener('click', function () {
    var randomCoatColor = wizardsCoatColors[getRandomNumber(5)];
    this.style.fill = randomCoatColor;
    wizardCoatInput.value = randomCoatColor;
  });
  wizardEyes.addEventListener('click', function () {
    var randomEyesColor = wizardsEyesColors[getRandomNumber(4)];
    this.style.fill = randomEyesColor;
    wizardEyesInput.value = randomEyesColor;
  });
  wizardFireball.addEventListener('click', function () {
    var randomFirballColor = wizardsFireballColors[getRandomNumber(4)];
    this.style.backgroundColor = randomFirballColor;
    wizardFireballInput.value = randomFirballColor;
  });
};
setupWizard();
