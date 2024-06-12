// For React component lifecycle demo uncomment Timer and see console logs
// import Timer from "../components/Timer";

const MainLayout = (props) => {
  return (
    <div className="app">
      <header className="header">
        <h1>
          Todo App
          {/* Just for demo commented intentionally
            <span>
            <Timer />
          </span> */}
        </h1>
      </header>

      <main className="main">
        {props.children}
        {/** Anything wrapped by MainLayout component will be rendered here */}
      </main>
    </div>
  );
};

export default MainLayout;
