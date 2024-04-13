function App() {
    return (
       <div className="app">
         <Tweet
           username="john_doe"
           name="John Doe"
           date="April 12, 2024"
           message="Hello, world! This is my first tweet."
         />
         <Tweet
           username="jane_doe"
           name="Jane Doe"
           date="April 11, 2024"
           message="Just starting my day with a cup of coffee. #MorningMotivation"
         />
         <Tweet
           username="tech_guru"
           name="Tech Guru"
           date="April 10, 2024"
           message="Excited for the latest React updates! #ReactLove"
         />
       </div>
    );
   }

   ReactDOM.render(
    <App />,
    document.getElementById("root")
  );