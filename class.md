### React Memo

#### React.memo is a higher order component. It's similar to React.PureComponent but for functional components instead of classes.

#### If your functional component renders the same result given the same props, you can wrap it in a call to React.memo for a performance boost in some cases by memoizing the result.

#### This means that React will skip rendering the component if the props have not changed.

#### React.memo only checks for prop changes. If your function component wrapped in React.memo has a useState or useContext Hook in its implementation, it will still rerender when state or context change.

#### Example:

```jsx
import React from "react";

const MyComponent = React.memo(function MyComponent(props) {
  /* only rerenders if props change */
});
```
