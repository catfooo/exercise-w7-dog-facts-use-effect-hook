// Import required  hooks
import React, { useState, useEffect } from 'react';
import { DogFact } from "./components/DogFact";

export const App = () => {
  // Hint: Initialize state for storing the dog fact
  const [factData, setFactData] = useState(null);
  // Hint: Define the API endpoint
  const API_ENDPOINT = "https://dogapi.dog/api/v2/facts"
  // Hint: Create a function to fetch the dog fact
  const fetchDogFact = async () => {
    try {
      const response = await fetch(API_ENDPOINT)
      const responseData = await response.json()
      setFactData(responseData.data[0])
    } catch (error) {
      console.error("Failed to fetch dog fact:", error)
    }
  }

  // // alternativ: use then/catch
  // const fetchDogFact = () => {
  //   fetch(API_ENDPOINT)
  //     .then(response => response.json())
  //     .then(data => {
  //       setFactData(data.data)
  //     })
  //     .catch(error => {
  //       console.error("Failed to fetch dog fact:", error)
  //     })
  // } 

  // Hint: Use the useEffect hook to fetch the dog fact when the component mounts
  useEffect(() => {
    fetchDogFact();
  }, [])


  return (
    <div className="App">
      <DogFact fact={factData} />
    </div>
  );
};
