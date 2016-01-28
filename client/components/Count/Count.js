import shared from '../../css/shared.css';

import React, {PropTypes} from 'react';
import Helmet from 'react-helmet';
import Counter from './Counter';

import CountStore from '../../stores/CountStore';
import connectToStores from 'alt-utils/lib/connectToStores';

@connectToStores
export default class Page extends React.Component {
  static propTypes = {
    counter: PropTypes.number.isRequired
  };

  static getStores() {
    return [CountStore];
  }

  static getPropsFromStores() {
    return CountStore.getState();
  }

  render() {
    return (
      <div>
        <Helmet title="Count"/>
          <section className={shared.section}>
            <Counter count={this.props.counter}/>
          </section>
      </div>
    );
  }
}
