import _ from 'lodash';
import printMe from './print.js';
import Library from './library';
import './styles.css';

function component() {
  var element = document.createElement('div');
  var btn = document.createElement('button');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;
  element.appendChild(btn);

  if (module.hot) {
    module.hot.accept('./library', function() {
      console.log('Accepting the updated library module!');
      Library.log();
    })
  }
  return element;
}

document.body.appendChild(component());