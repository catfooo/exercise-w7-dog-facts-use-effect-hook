// DogFact Component
export const DogFact = ({fact}) => {
  // Hint: Extract the 'body' from 'attributes' of the 'fact' prop
  const cleanFact = fact?.attributes?.body
  // Hint: Render the 'cleanFact' if available, otherwise show a loading message
  return (<div>{cleanFact ? `Dog fact: ${cleanFact}` : "Loading dog fact..."}</div>)
};

// Hint: To use this component, import it in your main App component and pass the 'fact' prop to it.
// Example: <DogFact fact={yourFactData} />
