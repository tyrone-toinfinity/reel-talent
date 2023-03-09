// CSS
import "./MeetTheTeam.css";
// assets
import bobby from "../assets/images/Bobby_profile.jpg";
import nick from "../assets/images/Nick_profile.jpg";
export const MeetTheTeam = () => {
  const nickQuotes = [
    {
      text: "I had the pleasure of working with Nick previously, and we partnered together to help scale the company over the last year. Nick is a very passionate individual who brings a unique perspective to recruiting! His empathy, expertise, and strong dedication to creating a seamless and unforgettable candidate experience is like no other. Nick would make an incredible addition to any organization!",
      author: "Fatima Vejzović",
    },
    {
      text: "I met Nick when I did a project for the company he was working at. After finishing that project, I asked him to help guide me through the phases of the job recruitment process. Nick went above and beyond during this process to help me. In addition to helping me find a job, Nick was a constant mentor to me. He never hesitated to share his insights with me and was a calming voice of reason many times. Along the way, I got to know Nick -- he's an amazing human being who cares about the people he is trying help. It was always extremely easy to connect with Nick. I never felt like I was talking to a recruiter; I always felt like I was talking to a friend. This all speaks to the fact that he has years of experience in his industry. He knows what he's talking about and he excels at connecting with people. I'm glad to call Nick a friend and can't speak highly enough about him.",
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
          <img src={nick} alt="Nick Starkey" className="team-member__image" />
          <h3>Nick Starkey</h3>
          <p className="team-member__role">Our Head Recruiter</p>
          <p className="team-member__quote">
            {nickQuotes[0].text} <br />
            <span className="team-memeber__author">
              - {nickQuotes[0].author}
            </span>
          </p>
          <p className="team-member__quote">
            {nickQuotes[1].text} <br />
            <span className="team-memeber__author">
              - {nickQuotes[1].author}
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
