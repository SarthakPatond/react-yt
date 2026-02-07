import React from 'react'
// import { Bookmark } from 'lucide-react'
import Card from './components/Card'
// import User from './components/User'
const App = () => {

  const jobOpenings =[
  {
    "brandLogo": "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/google.svg",
    "companyName": "Google",
    "datePosted": "5 days ago",
    "post": "Frontend Developer",
    "tag": "Full Time",
    "tag2": "Junior Level",
    "pay": 45,
    "location": "Bangalore, India"
  },
  {
    "brandLogo": "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/apple.svg",
    "companyName": "Apple",
    "datePosted": "2 weeks ago",
    "post": "iOS Engineer",
    "tag": "Full Time",
    "tag2": "Mid Level",
    "pay": 60,
    "location": "Hyderabad, India"
  },
  {
    "brandLogo": "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/meta.svg",
    "companyName": "Meta",
    "datePosted": "10 days ago",
    "post": "React Developer",
    "tag": "Contract",
    "tag2": "Junior Level",
    "pay": 50,
    "location": "Mumbai, India"
  },
  {
    "brandLogo": "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/amazon.svg",
    "companyName": "Amazon",
    "datePosted": "3 days ago",
    "post": "Software Development Engineer",
    "tag": "Full Time",
    "tag2": "Senior Level",
    "pay": 70,
    "location": "Chennai, India"
  },
  {
    "brandLogo": "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/netflix.svg",
    "companyName": "Netflix",
    "datePosted": "1 week ago",
    "post": "Backend Engineer",
    "tag": "Full Time",
    "tag2": "Senior Level",
    "pay": 80,
    "location": "Remote, India"
  },
  {
    "brandLogo": "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/microsoft.svg",
    "companyName": "Microsoft",
    "datePosted": "4 weeks ago",
    "post": "Cloud Engineer",
    "tag": "Full Time",
    "tag2": "Mid Level",
    "pay": 65,
    "location": "Noida, India"
  },
  {
    "brandLogo": "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/nvidia.svg",
    "companyName": "NVIDIA",
    "datePosted": "6 days ago",
    "post": "AI Engineer",
    "tag": "Full Time",
    "tag2": "Senior Level",
    "pay": 85,
    "location": "Pune, India"
  },
  {
    "brandLogo": "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/adobe.svg",
    "companyName": "Adobe",
    "datePosted": "2 days ago",
    "post": "UI/UX Developer",
    "tag": "Part Time",
    "tag2": "Junior Level",
    "pay": 40,
    "location": "Bangalore, India"
  },
  {
    "brandLogo": "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/uber.svg",
    "companyName": "Uber",
    "datePosted": "9 days ago",
    "post": "Mobile App Developer",
    "tag": "Full Time",
    "tag2": "Mid Level",
    "pay": 55,
    "location": "Hyderabad, India"
  },
  {
    "brandLogo": "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/airbnb.svg",
    "companyName": "Airbnb",
    "datePosted": "3 weeks ago",
    "post": "Full Stack Engineer",
    "tag": "Full Time",
    "tag2": "Senior Level",
    "pay": 75,
    "location": "Remote, India"
  }
]


  console.log(jobOpenings);


  return (
    <div className='parent'>
      {/* <Card />   */}
      {/* <User /> */}

      {jobOpenings.map(function (elem, index) {

        return <div key={index}>
          <Card companyName={elem.companyName}  post={elem.post} tag={elem.tag} tag2={elem.tag2} pay={elem.pay} location={elem.location} brandLogo={elem.brandLogo}  />
        </div>
      })}


    </div>
  )
}

export default App