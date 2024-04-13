function App() {
    return (
       <div>
         <Person
           name="John Doe"
           age={25}
           hobbies={["Reading", "Hiking", "Cooking"]}
         />
         <Person
           name="Jane Smith"
           age={17}
           hobbies={["Painting", "Dancing", "Gaming"]}
         />
         <Person
           name="Alice Johnson"
           age={30}
           hobbies={["Yoga", "Traveling", "Photography"]}
         />
       </div>
    );
   }

   ReactDOM.render(
    <App />,
    document.getElementById("root")
  );