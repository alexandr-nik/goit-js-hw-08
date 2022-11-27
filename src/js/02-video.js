// videoplayer-current-time
// Разбери документацию метода on() и начни отслеживать событие timeupdate - обновление времени воспроизведения.
// Сохраняй время воспроизведения в локальное хранилище. Пусть ключом для хранилища будет строка "videoplayer-current-time".
// При перезагрузке страницы воспользуйся методом setCurrentTime() для того чтобы возобновить воспроизведение с сохраненной позиции.
// Добавь в проект библиотеку lodash.throttle и сделай так, чтобы время воспроизведения обновлялось в хранилище не чаще чем раз в секунду.

import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

const currentTime = setCurrentTimeOnLocalStorage();

player.setCurrentTime(currentTime);

player.on(
  'timeupdate',
  throttle(function (e) {
    setCurrentTimeOnLocalStorage();
    localStorage.setItem('videoplayer-current-time', JSON.stringify(e.seconds));
  }, 2000)
);

function setCurrentTimeOnLocalStorage() {
  if (!localStorage.getItem('videoplayer-current-time')) {
    localStorage.setItem('videoplayer-current-time', 0);
  }
  return localStorage.getItem('videoplayer-current-time');
}

