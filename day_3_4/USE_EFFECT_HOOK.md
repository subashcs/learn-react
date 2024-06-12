# Use Effect Hooks and Class Components Life cycle methods

## Uses
- Fetching data from API
- Setting up listeners or subscriptions after mount and cleaning them up before unmount.
- Manually manipulating the DOM when React's declarative approach isn't applicable.
- Customize updates based on props


## Component Lifecycle Methods in Class Components
These methods are still available for class components, but they are not be the preferred approach for new React development. They are also called in the order they are listed while rendering.

### Life cycle stages
1. Mounting - These methods are called in the following order when an instance of a component is being created and inserted into the DOM:
   1. constructor(props)
   -  Used for initializing state and binding event handlers.
   2. static getDerivedStateFromProps()
   - Updates state based on changes in props. Rarely used in favor of useEffect with dependency array.
   3. render()
   - Updates Browser DOM tree
   4. componentDidMount()
   - Invoked after the component mounts (inserts) into the DOM. Used for side effects like data fetching or subscriptions.


2. Updating - An update can be caused by changes to props or state. These methods are called in this order when a component is re-rendered:
   1. static getDerivedStateFromProps(props, state)
   2. shouldComponentUpdate(nextProps, nextState)
   3. render()
   4. getSnapshotBeforeUpdate(prevProps, prevState)
      Captures a snapshot of the DOM right before the update for potential use in componentDidUpdate.
   5. componentDidUpdate(prevProps, prevState, snapshot)
      Invoked after the component updates. Used for side effects that depend on state or props changes.


3. Unmounting - This method is called when a component is being removed from the DOM:
   1. componentWillUnmount()
      Invoked when the component is about to be unmounted (removed) from the DOM. Used for cleaning up subscriptions or timers.

[See example](./react-components/src/components/Timer.jsx)

## Use Effect Hook (useEffect())

The useEffect hook is a powerful tool in React for handling side effects in functional components. It replaces lifecycle methods such as componentDidMount, componentDidUpdate, and componentWillUnmount from class components, providing a unified way to work with all kinds of side effects in a single API.


### Examples:

1. Component Did Mount Equivalent:

```javascript

useEffect(() => {
console.log("Component did mount");
}, []); // Empty dependency array, runs once
```
2. Component Did Update Equivalent:

```javascript

useEffect(() => {
console.log("Component did update", someValue);
}, [someValue]); // Runs whenever `someValue` changes
```

3. Component Will Unmount Equivalent:

```javascript

useEffect(() => {
console.log("on mount")
return () => {
   console.log("Component will unmount");
};
}, []); // Cleanup function runs when component unmounts
```