// CSS
import "./About.css";

// Components
import { Navbar } from "../../components/Navbar";
import { SiteFooter } from "../../components/SiteFooter";
// Package

import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

// Assets
import water from "../../assets/svg/water-drop.svg";

export const About = () => {
  return (
    <>
      <Navbar />
      <main className="about__page">
        <section className="about__section">
          <h1 className="about__title">
            Expertly Connecting Talent with Opportunities
          </h1>
          <p className="about__description">
            Reel Talent is a recruiting company that aims to make hiring easy
            for businesses. We believe in transparency and strive to put it at
            the forefront of everything we do. Our goal is to provide a seamless
            and efficient hiring process that helps companies find the best
            talent for their needs. With Reel Talent, you can rest assured that
            you'll find the right fit for your organization.
          </p>
        </section>
        {/* <section className="card__section">
          <Card className="card__container">
            <CardImg
              bottom
              src={
                "https://images.unsplash.com/photo-1674897507077-439a36fb581b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80"
              }
              alt="Card image cap"
              className="image"
            />
            <CardBody>
              <CardTitle className="card__title">Card Title 1</CardTitle>
              <CardText className="card__text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </CardText>
            </CardBody>
          </Card>
          <Card className="card__container">
            <CardImg
              bottom
              src={
                "https://images.unsplash.com/photo-1674897507077-439a36fb581b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80"
              }
              alt="Card image cap"
              className="image"
            />
            <CardBody>
              <CardTitle className="card__title">Card Title 2</CardTitle>
              <CardText className="card__text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </CardText>
            </CardBody>
          </Card>
          <Card className="card__container">
            <CardImg
              bottom
              src={
                "https://images.unsplash.com/photo-1674897507077-439a36fb581b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80"
              }
              alt="Card image cap"
              className="image"
            />
            <CardBody>
              <CardTitle className="card__title">Card Title 3</CardTitle>
              <CardText className="card__text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </CardText>
            </CardBody>
          </Card>
          <Card className="card__container">
            <CardImg
              bottom
              src={
                "https://images.unsplash.com/photo-1674897507077-439a36fb581b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80"
              }
              alt="Card image cap"
              className="image"
            />
            <CardBody>
              <CardTitle className="card__title">Card Title 4</CardTitle>
              <CardText className="card__text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </CardText>
            </CardBody>
          </Card>
        </section> */}
      </main>
      <SiteFooter />
    </>
  );
};
