import styles from '../../css/global.css';

import React from 'react';
import Helmet from 'react-helmet';

import Survey from './Survey';

export default class Page extends React.Component {
  render() {
    return (
      <div>
        <Helmet title="T3Kit"/>
          <section className={styles.section}>
            <h2>T3Kit</h2>
            <Survey/>
          </section>
      </div>
    );
  }
}
