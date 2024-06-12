In this chapter, we will be learning about Components, data passing with props and the state.

# React Components
We can write components in two different ways in React.
## Class Component
   1. Components using Class definition by extending the React.Component class are Class components.
   2. See https://react.dev/reference/react/Component to learn about component and component life cycle.
   3. The `this` object is used to access state, context and other APIs.

### Class Component Lifecycle Methods:

These methods are still available for class components, but they are not be the preferred approach for new React development. They are also called in the order they are listed while rendering.

   1. constructor(props): 
   Used for initializing state and binding event handlers.
   2. static getDerivedStateFromProps(props, state): (Optional) 
   Updates state based on changes in props. Rarely used in favor of useEffect with dependency array.
   3. componentDidMount(): 
   Invoked after the component mounts (inserts) into the DOM. Used for side effects like data fetching or subscriptions.
   4. shouldComponentUpdate(nextProps, nextState): (Optional) 
   Controls whether the component should re-render based on upcoming props and state. Rarely used in modern practice.
   5. getSnapshotBeforeUpdate(prevProps, prevState): (Optional) 
   Captures a snapshot of the DOM right before the update for potential use in componentDidUpdate.
   6. componentDidUpdate(prevProps, prevState, snapshot):
   Invoked after the component updates. Used for side effects that depend on state or props changes.
   7. componentWillUnmount(): 
   Invoked when the component is about to be unmounted (removed) from the DOM. Used for cleaning up subscriptions or timers.

## Functional Component
   1. Components using normal JavaScript function definition are Functional Components
   2. Javascript functions are used as hooks to access different APIs
   
In functional components the `useEffect` hooks are used as modern alternative to lifecycle methods.


# Purity in Components
A function is said to be pure if it meets the following two conditions:
- Its return value is only determined by its input values
- Its return value is always the same for the same input values

**Optional Reading**
In React, React.PureComponents are used to create pure class components. See [PureComponent](https://react.dev/reference/react/PureComponent) official docs.

Note that keeping components pure requires much more effort. See 
1. [Keeping components pure](https://react.dev/learn/keeping-components-pure) official docs.
2. [Why does purity matter](https://react.dev/reference/rules/components-and-hooks-must-be-pure)


## Built in React Components
   Visit this [link](https://react.dev/reference/react/components).



