# READING OLD

## Higher Order Components (HOC)

A higher-order component is a pure function that takes a component and returns a new component.

```javascript
const EnhancedComponent = higherOrderComponent(WrappedComponent);

```

Official DOCS for [HIGHER ORDER COMPONENTS](https://legacy.reactjs.org/docs/higher-order-components.html)

Higher order components are no longer used. To enhance the components with external data.

HOCs were common in third-party React libraries, such as Redux’s connect and Relay’s createFragmentContainer.


*** HOCs are no longer advised. You should use either custom hooks or context to introduced enhancements to your component instead of HOC. ***
Example:
**** An example use case is rendering different views based on whether user is authenticated or not. ****

In this case you can use custom `useAuth` hook or Wrapper `AuthLayout` Component that returns users authenticated state and apply the logic in the particular component instead of using HOC's. 


## Wrapper Components
A wrapper component is a new component that renders another component (the wrapped component) and potentially adds additional functionality or UI elements around it.
While both wrapper components and HOCs can achieve similar results, wrapper components generally align better with React's philosophy of composable and declarative components. For most new development, using wrapper components and hooks is the recommended approach.

## Context API
[Read here](https://react.dev/reference/react/useContext)


## UseReducer hook
[Read Here](https://react.dev/reference/react/useReducer)

Example:
```javascript
 <WrapperComponent>
        <MyComponent message="This component is wrapped!" />
 </WrapperComponent>
```


# Day 13

See [Setup](./SETUP.md) instructions for React Router here.

Read about:
 - [React Router](https://reactrouter.com/en/main/start/tutorial#setup)



