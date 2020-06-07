import './styles.css';
import app from './app'



(function (window) {
  app(window, document.querySelector('#root'))
})(window)

(function (window) {
  app(window, document.querySelector('#about'))
})(window)

