import test from 'tape'
import React from 'react'
import {addons} from 'react/addons'
import RentableHeader from './index.jsx'
const {TestUtils} = addons
const {isElement} = TestUtils

test('RentableHeader: constructor', (t) => {
  const rentableHeader = React.createElement(RentableHeader)
  t.ok(
    isElement(rentableHeader)
    , 'is a valid react component'
  )

  t.end()
})

