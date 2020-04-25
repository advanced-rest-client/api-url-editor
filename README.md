[![Published on NPM](https://img.shields.io/npm/v/@api-components/api-url-editor.svg)](https://www.npmjs.com/package/@api-components/api-url-editor)

[![Build Status](https://travis-ci.com/advanced-rest-client/api-url-editor.svg)](https://travis-ci.org/advanced-rest-client/api-url-editor)

# api-url-editor

An AMF powered URL editor for the HTTP request editor.

It uses [api-url-data-model](https://github.com/advanced-rest-client/api-url-data-model) to transform AMF model to the view model recognized by this element.

```html
<api-url-editor
  required
  amf="..."
  baseuri="https://api.domain.com"
  endpointpath="/users/me"
  querymodel="..."
  pathmodel="..."></api-url-editor>
```

## Version compatibility

This version only works with AMF model version 2 (AMF parser >= 4.0.0).
For compatibility with previous model version use `3.x.x` version of the component.

## Usage

### Installation
```
npm install --save @api-components/api-url-editor
```

### In an html file

```html
<html>
  <head>
    <script type="module">
      import '@api-components/api-url-editor/api-url-editor.js';
    </script>
  </head>
  <body>
    <api-url-editor></api-url-editor>
    <script>
    {
      const editor = document.querySelector('api-url-editor');
      editor.amf = {...};
      editor.onvalue = (e) {
        console.log('URL value', e.target.value);
      };
    }
    </script>
  </body>
</html>
```

### In a LitElement

```js
import { LitElement, html } from 'lit-element';
import '@api-components/api-url-editor/api-url-editor.js';

class SampleElement extends LitElement {
  render() {
    return html`
    <api-url-editor
      required
      ?disabled="${this.disabled}"
      ?outlined="${this.outlined}"
      ?legacy="${this.legacy}"
      ?noLabelFloat="${this.noLabelFloat}"
      .amf="${this.amf}"
      .baseUri="${this.apiBaseUri}"
      .endpointPath="${this.endpointPath}"
      .queryModel="${this.queryModel}"
      .pathModel="${this.pathModel}"
      @value-changed="${this._handleValue}"></api-url-editor>
    `;
  }

  _handleValue(e) {
    this.urlValue = e.target.value;
  }
}
customElements.define('sample-element', SampleElement);
```

### Passing AMF data model

The component does not directly interact with AMF model. It uses a view model generated by [api-url-data-model](https://github.com/advanced-rest-client/api-url-data-model). This element parses API spec to produce basic information about currently selected endpoint like path variables model, query parameters model, and base URI.

Your UI has to provide a way to select an endpoint. You can use [api-navigation](https://github.com/advanced-rest-client/api-navigation) element which renders API structure in a nav bar and dispatches selection event.

#### In an html file

```html
<api-url-editor></api-url-editor>
<api-url-data-model></<api-url-data-model>

<script type="module">
import '@api-components/api-url-editor/api-url-editor.js';
import '@api-components/api-url-data-model/api-url-data-model.js';

{
  const api = await generateApiModel();
  const selectedEndpoint = 'amf://id#63'; // some ID from the AMF model for endpoint / operation

  const model = document.querySelector('api-url-data-model');
  model.amf = api; // This is required to compute ld+json keys!
  model.server = server; // a server for current selection
  model.selected = selectedEndpoint;

  const editor = document.querySelector('api-url-editor');
  model.amf = api;
  editor.baseUri = model.apiBaseUri;
  editor.endpointPath = model.endpointPath;
  editor.queryModel = model.queryModel;
  editor.pathModel = model.pathModel;
}
</script>
```

#### In a LitElement

```js
import { LitElement, html } from 'lit-element';
import '@api-components/api-url-editor/api-url-editor.js';

class SampleElement extends LitElement {
  static get properties() {
    return {
      amfModel: { type: Object },
      selectedShape: { type: String },
      apiBaseUri: { type: String },
      endpointPath: { type: String },
      queryModel: { type: Array },
      pathModel: { type: Array },
      ...
    }
  }

  render() {
    return html`
    <api-url-data-model
      @apibaseuri-changed="${this._baseUrlChangeHandler}"
      @endpointpath-changed="${this._endpointPathChangeHandler}"
      @pathmodel-changed="${this._pathModelChangeHandler}"
      @querymodel-changed="${this._queryModelChangeHandler}"
      .server="${server}"
      .selected="${this.selectedShape}"
      .amf="${this.amfModel}"
    ></api-url-data-model>
    <api-url-editor
      required
      ?disabled="${this.disabled}"
      ?outlined="${this.outlined}"
      ?compatibility="${this.compatibility}"
      ?noLabelFloat="${this.noLabelFloat}"
      .amf="${this.amfModel}"
      .baseUri="${this.apiBaseUri}"
      .endpointPath="${this.endpointPath}"
      .queryModel="${this.queryModel}"
      .pathModel="${this.pathModel}"
      @value-changed="${this._handleValue}"></api-url-editor>
    `;
  }

  _handleValue(e) {
    this.urlValue = e.target.value;
  }

  _baseUrlChangeHandler(e) {
    this.apiBaseUri = e.detail.value;
  }

  _endpointPathChangeHandler(e) {
    this.endpointPath = e.detail.value;
  }

  _queryModelChangeHandler(e) {
    this.queryModel = e.detail.value;
  }

  _pathModelChangeHandler(e) {
    this.pathModel = e.detail.value;
  }
}
customElements.define('sample-element', SampleElement);
```


## Development

```sh
git clone https://github.com/advanced-rest-client/api-url-editor
cd api-url-editor
npm install
```

### Running the demo locally

```sh
npm start
```

### Running the tests
```sh
npm test
```

### API components

This components is a part of [API components ecosystem](https://elements.advancedrestclient.com/)
