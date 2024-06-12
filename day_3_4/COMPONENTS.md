In this chapter, we will be learning about Components, data passing with props and the state.

# React Components
We can write components in two different ways in React.
## Class Component
   1. Components using Class definition by extending the React.Component class are Class components.
   2. See https://react.dev/reference/react/Component to learn about component and component life cycle.
   3. The `this` object is used to access state, context and other APIs.


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



