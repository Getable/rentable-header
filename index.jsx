import React, {Component} from 'react'
import {addons} from 'react/addons'
const {shouldComponentUpdate} = addons.PureRenderMixin
const namespace = 'rentableHeader'

export default class RentableHeader extends Component {
  // use the pure-render mixin without the mixin. This allows us to use es6
  // classes and avoid "magic" code
  shouldComponentUpdate (...args) {
    return shouldComponentUpdate.apply(this, args)
  }

  render () {
    return (
      <header className={namespace}>
        <h1><span className={`${namespace}-titleAccent`}>Rentable</span>Equipment</h1>
      </header>
      )
  }
}
