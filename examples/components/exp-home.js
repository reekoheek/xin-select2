import { define, Component } from '@xinix/xin';
import 'jquery';
import 'xin-select2';

class ExpHome extends Component {
  get template () {
    return require('./exp-home.html');
  }

  get props () {
    return {
      ...super.props,
      foo: {
        type: 'String',
        value: '',
      },
      bar: {
        type: 'String',
        value: '',
      },
      baz: {
        type: 'String',
        value: '',
      },
      baz1: {
        type: 'String',
        value: '',
      },
    };
  }

  onFooChanged () {
    this.async(() => {
      console.info('foo: ' + this.foo);
    });
  }

  onBarChanged () {
    this.async(() => {
      console.info('bar: ' + this.bar);
    });
  }

  onBazChanged () {
    this.async(() => {
      console.info('baz: ' + this.baz);
    });
  }

  onBaz1Changed () {
    this.async(() => {
      console.info('baz1: ' + this.baz1);
    });
  }
}

define('exp-home', ExpHome);
