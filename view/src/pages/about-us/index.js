import React from "react";
import Title from "../title";
import InfoBox from "../info-box";
import brotherpicture from './images/antandlee.gif';


const AboutUs = props => {
  return (
    <div>
      <Title title="About Us" />
      <div className="fo-page-grid-layout">
        <div className="fo-about-us_info-box">
          <InfoBox
            title="our philosophy is simple"
            text={[
              "To provide high quality, precision hairdressing and a professional service in a smart, contemporary salon complimented by a range of quality grooming products."
            ]}
          />
          <InfoBox
            title="we are"
            text={[
              "Lee and Anthony Tramontana, brothers and business partners.",
              "Our teenage years were spent sweeping the floor in our father’s barber shop until we started working full time in 1985.",
              "After a few years we left the nest and Anthony then went on to work in Leeds city centre while Lee went on to work in Manchester city centre.",
              "We finally decided to use our combined knowledge and experience to open our own salon in 1997 as we felt that traditional “barber shops” were plentiful but men’s hair salons were few and far between."
            ]}
          />
          <img title="Anthony & Lee Tramontana" src={brotherpicture} alt="Anthony & Lee Tramontana" />
        </div>
        <div className="fo-about-us_info-box">
          <InfoBox
            title="our name means"
            text={[
              "'Fratelli' is the Italian word for 'Brothers'. We chose this name for our business for the following reasons:"
            ]}
            bulletPoints={[
              "We are brothers",
              "We are from an Italian background",
              "We thought it sounded good",
              "We also think it sounds ok when said with a Bolton accent"
            ]}
          />
          <InfoBox
            title="public recognition"
            text={[
              "Over the years we have won many awards including the Northwest, Lancashire and Yorkshire Men’s Hairdressing Championships.",
              "We also won the inaugural Bolton News Hairdresser of the Year Award in 1999 which was voted for by our customers.",
              "We were the first Barber Shop in Greater Manchester to achieve a listing in The Good Barbers Guide.",
              "We were nominated for 'Men's Hair Stylist of the Year' in the 2012 English Hair & Beauty Awards.",
              "Finalists this time for the second consecutive year for the title  'Men's Hair Stylist of the Year' in the 2013 English Hair & Beauty Awards.",
              'Third year in a row that we are one of the finalists for "Men\'s Hair Stylist of the Year" in the English Hair & Beauty Awards 2014. Ah well always the bridesmaid never the........'
            ]}
          />
          <InfoBox
            title="official recognition"
            text={[
              "We are a State Registered Hairdressers which is an official recognition under the law: the Hairdressers Registration Act.",
              "We are members of the British Barbers Association which is committed to raising professional standards, highlighting and celebrating talent and facilitating the professional and commercial development of barbers, male grooming salons and men’s hairdresser.",
              "We are members of the Federation of Small Businesses which is is the largest UK organisation representing small and medium businesses.."
            ]}
          />
        </div>
      </div>
    </div>
  );
};
AboutUs.displayName = "AboutUs";

export default AboutUs;
