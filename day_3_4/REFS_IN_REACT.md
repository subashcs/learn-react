# Refs in React

Refs provide a way to access DOM nodes or React elements created in the render method. Refs also provide loophole to escape Reacts one way data flow i.e. form parent to children. Using Refs parent component can access the child component/elements data.

## When to use Ref
There are a few good use cases for refs:
   -  Managing focus, text selection, or media playback.
   -  Triggering imperative animations.
   -  Integrating with third-party DOM libraries.

Avoid using refs for anything that can be done declaratively or in a controlled manner with React.

## Creating Refs

In class components:

```javascript
this.inputRef = React.createRef();
```
In function components:

```javascript
 const inputRef = React.useRef(null); 
```

## Attaching ref to an element:

```jsx
<input type="text" ref={inputRef}/> // Note: In class components here ref={this.inputRef}
```
 
## Accessing ref values

```javascript
console.log(inputRef.current)
```

## Modifying Ref values

```javascript
inputRef.current = newValue // Note: newValue can be anything
```

[Official Docs Old](https://legacy.reactjs.org/docs/refs-and-the-dom.html)
[Official Docs New](https://react.dev/learn/referencing-values-with-refs)