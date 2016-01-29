import shared from '../../css/shared.css';

import React from 'react';
import Helmet from 'react-helmet';

export default class Report extends React.Component {
  render() {
    return (
      <div>
        <Helmet title="Survey"/>
        <section className={shared.section}>
          <h1>Soon you will receive your test reports on email!</h1>
        </section>
      </div>
    );
  }
}
