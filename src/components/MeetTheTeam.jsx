// CSS
import "./MeetTheTeam.css";
// assets
import bobby from "../assets/images/Bobby_profile.jpg";
import nick from "../assets/images/Nick_profile.jpg";
export const MeetTheTeam = () => {
  const nickQuotes = [
    {
      text: "Nick is the most dedicated recruiter I've ever worked with. He really took the time to understand my career goals and found the perfect job for me.",
      author: "Sarah Smith",
    },
    {
      text: "Working with Nick was a pleasure. He was always available to answer my questions and provided excellent guidance throughout the job search process.",
      author: "Tammy Hall",
    },
  ];

  const bobbyDescription =
    "Bobby is a multi-talented professional who combines his technical expertise with strong people skills. As the Head Engineer and Talent Manager, Bobby is passionate about building high-performing teams and fostering a culture of innovation. He is dedicated to creating a supportive environment where team members can thrive and achieve their full potential";

  return (
    <>
      <h2 className="meetTeamHeader">Meet the Team</h2>
      <div className="team">
        <div className="team-member">
          <img src={nick} alt="Nick Starkey" className="team-member__image" />
          <h3>Nick Starkey</h3>
          <p className="team-member__role">Our Head Recruiter</p>
          <p className="team-member__quote">
            {nickQuotes[0].text} - {nickQuotes[0].author}
          </p>
          <p className="team-member__quote">
            {nickQuotes[1].text} - {nickQuotes[1].author}
          </p>
        </div>
        <div className="team-member">
          <img src={bobby} alt="Bobby Woody" className="team-member__image" />
          <h3>Bobby Woody</h3>
          <p className="team-member__role">Our Head Engineer</p>
          <p className="team-member__description">{bobbyDescription}</p>
        </div>
      </div>
    </>
  );
};
