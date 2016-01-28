import shared from '../../css/shared.css';

import React from 'react';
import Helmet from 'react-helmet';

import Survey from './Survey';

export default class Page extends React.Component {
  render() {
    return (
      <div>
        <Helmet title="T3Kit"/>
          <section className={shared.section}>
            <Survey/>
          </section>
      </div>
    );
  }
}
