import '../../css/globals.css';
import styles from '../../css/T3Kit.css';

import React from 'react';

export default class Page extends React.Component {
  render() {
    return (
      <div>
        <h1>T3Kit</h1>
        <h2>Which type of test do you prefer?</h2>
        <form>
          <label className={styles.radioButton} htmlFor="layout">Layout</label>
          <input type="radio" id="layout" name="type" value="layout"/>
          <label className={styles.radioButton} htmlFor="functional">Functional</label>
          <input type="radio" id="functional" name="type" value="functional"/>
          <label className={styles.radioButton} htmlFor="both">Both</label>
          <input type="radio" id="both" name="type" value="both"/>
        </form>
        <button className={styles.submitButton}>Next</button>
      </div>
    );
  }
}
