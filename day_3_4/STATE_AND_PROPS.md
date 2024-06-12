# State and Props

## State
State is used to store data that can change and cause the component to re-render its output. 
- In class component, `this.setState(newState)` is used to update state and `this.state` is used to access state.
- In functional component, state variable is created using `useState()` method. Example:
  ```js
    const [data, setData] = useState(12)
  ```
  Here, `data` is the state variable, `setData` is the method to update `data` and `12` is the initial value.


## Props
- A fundamental concept that enables communication between components. Allow passing data from parent to child.
- In class components props are accessed using `this.props` 
- In functional component props are accesses as parameter of the React Component function thus can be directly accessed from parameters.
- You can pass; primitive types, and react elements as props. Also, ref can be passed as prop from React 19.

### The children props i.e props.children
The children prop is used to pass element to a wrapper component as a child.


