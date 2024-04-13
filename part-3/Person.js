function Person(props) {
    const { name, age, hobbies } = props;
    const displayName = name.length > 8 ? name.substring(0, 6) + '...' : name;
   
    return (
       <div>
         <p>Learn some information about this person</p>
         <h3>{age > 18 ? "Please go vote!" : "You must be 18"}</h3>
         <p>Name: {displayName}</p>
         <ul>
           {hobbies.map((hobby, index) => (
             <li key={index}>{hobby}</li>
           ))}
         </ul>
       </div>
    );
   }