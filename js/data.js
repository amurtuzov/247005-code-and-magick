'use strict';

(function () {
  var wizardsNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var wizardsSurnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  window.wizardsCoatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  window.wizardsEyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
  window.wizardsFireballColors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  var CreateWizard = function (names, surnames, coatColors, eyesColors) {
    this.name = names[window.getRandomNumber(7)] + ' ' + surnames[window.getRandomNumber(7)];
    this.coatColor = coatColors[window.getRandomNumber(5)];
    this.eyesColor = eyesColors[window.getRandomNumber(4)];
  };
  window.getWizards = function () {
    var wizards = [];
    for (var i = 0; i < 4; i++) {
      wizards[i] = new CreateWizard(wizardsNames, wizardsSurnames, window.wizardsCoatColors, window.wizardsEyesColors);
    }
    return wizards;
  };
})();
