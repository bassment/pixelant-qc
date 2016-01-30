import shared from '../../css/shared.css';
import styles from '../../css/Home.css';

import React from 'react';
import {Link} from 'react-router';
import Helmet from 'react-helmet';

export default class Home extends React.Component {

  render() {
    return (
      <div>
        <Helmet title="Automate"/>
          <section className={shared.section}>
            <h1>Welcome!</h1>
          <Link to="/survey">
            <button className={styles.testButton}>Start Testing!</button>
          </Link>
          </section>
      </div>
    );
  }
}
