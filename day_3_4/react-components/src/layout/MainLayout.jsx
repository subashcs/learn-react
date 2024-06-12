const MainLayout = (props) => {
  return (
    <div className="app">
      <header className="header">
        <h1>Todo App</h1>
      </header>

      <main className="main">
        {props.children}
        {/** Anything wrapped by MainLayout component will be rendered here */}
      </main>
    </div>
  );
};

export default MainLayout;
