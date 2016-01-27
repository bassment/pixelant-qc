import React from 'react';

export default class Page extends React.Component {
  render() {
    return (
      <div>
        <h4>Which type of test do you prefer?</h4>
          <form>
            <label htmlFor="layout">Layout</label>
            <input type="radio" id="layout" name="type" value="layout"/>
            <label htmlFor="functional">Functional</label>
            <input type="radio" id="functional" name="type" value="functional"/>
            <label htmlFor="both">Both</label>
            <input type="radio" id="both" name="type" value="both"/>
          </form>
          <button>Next</button>
      </div>
    );
  }
}
