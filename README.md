# RentableHeader

This is a header component for the experiment pages

## Usage
```js
  import React from 'react'
  import RentableHeader from 'rentable-header'
  React.render(<RentableHeader />, document.createElement('div'))
```

```css
@import "rentable-header";
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

