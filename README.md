# scroll-to-target (scrollToTarget)

Simple, small, reliable and pure javascript scroll library.

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

## LICENSE

MIT