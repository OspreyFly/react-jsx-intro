function Tweet(props) {
    return (
       <div className="tweet">
         <h2>{props.name} (@{props.username})</h2>
         <p>{props.message}</p>
         <p className="date">{props.date}</p>
       </div>
    );
   }
   