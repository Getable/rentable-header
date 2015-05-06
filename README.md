# RentableHeader

This is a header component for the experiment pages

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [Install](#install)
- [Usage](#usage)
- [Props](#props)
- [CSS Variables](#css-variables)
- [Tests](#tests)
- [Developing](#developing)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Install
```js
npm i @getable/rentable-header
```

## Usage
```js
  import React from 'react'
  import RentableHeader from '@getable/rentable-header'
  React.render(<RentableHeader />, document.createElement('div'))
```

```css
@import "@getable/rentable-header";
```

## Props
N/A

## CSS Variables
N/A

## Tests
Tests are in [tape](https://github.com/substack/tape). You can run them with:

```bash
browserify -t babelify --debug | smokestack
```

## Developing
Install [ribcage](https://github.com/Techwraith/ribcage)

```sh
npm i -g ribcage
ribcage preview .
# run with client side js enabled
ribcage preview . -s
```

Open [http://localhost:4001/default](http://localhost:4001/default)

