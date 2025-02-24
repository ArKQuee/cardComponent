import React from 'react'
import TeamMemberCard from './components/TeamMemberCard';


function App() {
  const teamMembers = [
      { name: "John Doe",
        jobTitle: "Software Engineer"
      },
      { name: "Jane Doe",
        jobTitle: "Product Manager"
      }
  ];

  return (
    <div>
      <h1 >Meet Our Team </h1>
      {teamMembers.map((person,i) => <TeamMemberCard name ={person.name} jobTitle = {person.jobTitle}/>)}

      </div>
  );     
}



export default App
