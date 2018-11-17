'use strict';

var drawCloud = function (ctx) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);
  ctx.fillStyle = 'rgba(255,255,255,1)';
  ctx.fillRect(100, 10, 420, 270);
};

var drawText = function (ctx) {
  ctx.fillStyle = 'rgba(0, 0, 0, 1)';
  ctx.fillText('Ура вы победили!', 110, 50);
  ctx.fillText('Список результатов:', 110, 70);
  ctx.textBaseline = 'hanging';
  ctx.font = '16px PT Mono';
};

var getMaxValue = function (times) {
  var maxValue = times[0];
  for (var i = 1; i < times.length; i++) {
    if (times[i] > maxValue) {
      maxValue = times[i];
    }
  }
  return maxValue;
};

window.renderStatistics = function (ctx, names, times) {
  drawCloud(ctx);
  drawText(ctx);

  var maxColumnLength = 150 * getMaxValue(times) / getMaxValue(times);
  var columnPosition = 50;

  for (var i = 0; i < names.length; i++) {
    columnPosition += 90;
    ctx.fillStyle = 'rgba(0, 0, 0, 1)';
    var columnLength = 150 * times[i] / getMaxValue(times);
    ctx.fillText(Math.round(times[i]), columnPosition, (85 + (maxColumnLength - columnLength)));
    ctx.fillText(names[i], columnPosition, 260);
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      var randomNumber = +Math.random().toFixed(1);
      var randomOpacity = (randomNumber === 0) ? (randomNumber + 0.1) : randomNumber;
      ctx.fillStyle = 'rgb(0, 0, 205,' + randomOpacity + ')';
    }
    ctx.fillRect(columnPosition, (105 + (maxColumnLength - columnLength)), 40, columnLength);
  }
};
