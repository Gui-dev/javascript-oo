import { BaseElement } from './base-element.js'
import 'jquery'
export class Image extends BaseElement {

  constructor( fileName ) {
    super()
    this.fileName = fileName
  }

  getElementString() {
    return `
      <img src="${this.fileName}" alt="[]" title="" style="width: 100%;">
    `
  }

}

