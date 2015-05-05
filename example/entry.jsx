import React from 'react'
import RentableHeader from '../index.jsx'
import data from './data.js'

// expose React for debugging
window.React = React

React.render(<RentableHeader {...data} />, document.getElementById('app'))
