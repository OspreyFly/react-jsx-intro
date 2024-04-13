function App() {
    return (
        <div>
            <FirstComponent />
            <NamedComponent name="Samuel" />
        </div>
    );
}
    
  
  
  ReactDOM.render(
    <App />,
    document.getElementById("root")
  );