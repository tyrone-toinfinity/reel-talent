// CSS
import "./MeetTheTeam.css";
// assets
import bobby from "../assets/images/Bobby_profile.jpg";
import Shelly from "../assets/images/shelly_profile.jpg";
export const MeetTheTeam = () => {
  const ShellyQuotes = [
    {
      text: "I met Shelly while working on a project for her company. Afterward, I asked her to guide me through the job recruitment process, and she went above and beyond to help me. Shelly was not only a mentor but also a calming voice of reason. She genuinely cares about people and is easy to connect with. Shelly's years of experience and expertise in the industry make her exceptional at what she does. I consider her a friend and highly recommend her.",
      author: "Shivaen Ahuja",
    },
  ];

  const bobbyDescription =
    "Bobby is a multi-talented professional who combines his technical expertise with strong people skills. As the Head Engineer and Talent Manager, Bobby is passionate about building high-performing teams and fostering a culture of innovation. He is dedicated to creating a supportive environment where team members can thrive and achieve their full potential";

  return (
    <>
      <h2 className="meetTeamHeader">Meet the Team</h2>
      <div className="team">
        <div className="team-member">
          <img
            src={Shelly}
            alt="Shelly Starkey"
            className="team-member__image"
          />
          <h3>Shelly Starkey</h3>
          <p className="team-member__role">Our Head Recruiter</p>
          <p className="team-member__quote">
            {ShellyQuotes[0].text} <br />
            <span className="team-memeber__author">
              - {ShellyQuotes[0].author}
            </span>
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
