'use strict';

(function () {
  var setup = document.querySelector('.setup');
  var setupOpener = document.querySelector('.setup-open');
  var setupCloser = setup.querySelector('.setup-close');
  var usernameInput = setup.querySelector('.setup-user-name');
  var setupForm = setup.querySelector('.setup-wizard-form');
  var setupSaver = setup.querySelector('.setup-submit');

  var openSetup = function () {
    setup.classList.remove('hidden');
    setup.style.top = '80px';
    setup.style.left = '50%';
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
      setup.style.top = '80px';
      setup.style.left = '50%';
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
})();
