import React from 'react';
import GridExampleElement from './grid-example-element';
import CssLayoutsMenu from './css-layouts-menu.component';
import fetchExample from '../../utils/fetch-example';
import { injectCodeElementsToExample, injectFooterToExample } from './utils';
import './css-layouts.component.css';

if (!customElements.get('grid-example')) {
  customElements.define('grid-example', GridExampleElement, { extends: 'div' });
}

export default class CssLayouts extends React.Component {

  constructor(props) {
    super(props);

    this.onItemClick = this.onItemClick.bind(this);

    this.state = {
      exampleHtml: ''
    };
  }

  render() {
    return (
      <section className="css-layouts">
        <h1>CSS Layouts</h1>
        <nav>
          <CssLayoutsMenu onItemClick={this.onItemClick} />
        </nav>
        <article dangerouslySetInnerHTML={{ __html: this.state.exampleHtml } }></article>
      </section>
    );
  }
  
  componentDidMount() {
    if (this.props.location.hash) {
      this.fetchAndApplyExample(this.props.location.hash);
    }
  }

  onItemClick(event) {
    const exampleName = event.target.getAttribute('href');

    if (exampleName === this.props.location.hash) {
      event.preventDefault();
      return;
    }

    this.fetchAndApplyExample(exampleName);
  }

  fetchAndApplyExample(exampleNameWithHash) {
    fetchExample('css-examples', exampleNameWithHash.slice(1))
      .then(x => injectCodeElementsToExample(x))
      .then(x => injectFooterToExample(x))
      .then(exampleHtml => {
        this.setState({ exampleHtml });
      });
  }

}
