document.querySelector('.setup').classList.remove('hidden');
var names = ['Иван','Хуан Себастьян','Мария','Кристоф','Виктор','Юлия','Люпита','Вашингтон'];
var surnames = ['да Марья','Верон','Мирабелла','Вальц','Онопко','Топольницкая','Нионго','Ирвинг'];
var coatColors = ['rgb(101, 137, 164)','rgb(241, 43, 107)','rgb(146, 100, 161)','rgb(56, 159, 117)','rgb(215, 210, 55)','rgb(0, 0, 0)'];
var eyesColors = ['black','red','blue','yellow','green'];

var getRandomNumber = function (maxNumber) {
	return Math.round(Math.random() * maxNumber);
};

var CreateWizard = function(names, surnames, coatColors, eyesColors) {
	this.name = names[getRandomNumber(7)] + ' ' + surnames[getRandomNumber(7)];
	this.coatColor = coatColors[getRandomNumber(6)];
	this.eyesColor = eyesColors[getRandomNumber(5)];
};
var getWizards = function () {
	var wizards = [];
	for (var i = 0; i < 4; i++) {
		wizards[i] = new CreateWizard(names,surnames,coatColors,eyesColors);
	};
	return wizards;
};

var wizardsList = document.querySelector('.setup-similar-list');
var wizardTemplate = document.querySelector('#similar-wizard-template')
	.content
	.querySelector('.setup-similar-item');

var renderWizard = function(wizard) {
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