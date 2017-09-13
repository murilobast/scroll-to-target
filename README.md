# scroll-to-target (scrollToTarget)

Simple, small, reliable and pure javascript scroll library with 0 dependencies.

[![NPM](https://nodei.co/npm/scroll-to-target.png)](https://nodei.co/npm/scroll-to-target/)

## `Usage`
```js
scrollToTarget(selector, speed, offset)
```
###### name : *string*
> A valid dom selector 
> 
> *Required*

###### speed : *number*
> Scroll duration in milliseconds 
> 
> *Optional, defaults to: 300 {ms}*

###### offset : *number*
> Space in pixels between the target element and the window top.
> 
> *Optional, defaults to: 0 {pixels}*


## `Example`

```js
scrollToTarget('#valid-dom-element-selector', 500, 80)
```
The code above will scroll the page to the #valid-dom-element-selector with 80px gutter and a duration of 500ms.

## `Compatibility`

IE8+, iOS Safari 3.2+, MS Edge, Chrome 4+, Firefox 3.5+
## `LICENSE`

MIT