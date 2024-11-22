d"use client";
import { CTA, Footer, Navbar, ComingSoon } from "@/components";
import "../../../../styles/swiper-about.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

// Import React State
import React, { useState, useEffect } from "react";

// Import React Router
import { usePathname } from "next/navigation";

// Import Data Types Property of Member Division
import Profile from "../../../../data/divisionData";

// Import Member Division Card
import CardMember from "../../../../components/CardDivision";

// Import Function
import { formatEndpointText } from "@/utils/formatEndpointText";
import { formatName } from "@/utils/formatName";

// About Page
const Division = (props: any) => {
  const pathName = usePathname();
  const pathArray = pathName.split("/");
  const lastEndPoint = pathArray[pathArray.length - 1];
  const divisionName = formatEndpointText(lastEndPoint);

  const [isAvailable, setIsAvailable] = useState(true);
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [snippets, setSnippets] = useState("");

  // Fetch Data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://candidate-college.vercel.app/api/divisions/${lastEndPoint}`
        );
        const responseData = await response.json();

        setSnippets(responseData.data.snippets);

        if (responseData.data.members.length > 0) {
          const MembersData = responseData.data.members.map((item: any) => ({
            img: item.image,
            name: item.name,
            position: item.position,
            linkedin: item.linkedin,
            instagram: item.instagram,
          }));

          setProfiles(MembersData);
        } else {
          setIsAvailable(false);
        }
      } catch (error) {
        console.error("Error fetching data from API : ", error);
      }
    };

    fetchData();
  }, []);

  // Setting Layout Card
  const renderCards = () => {
    const headAndCoHeadCards: any = [];
    const staffCards: any = [];

    // Classify data based on value position property

    profiles.forEach((profile, index) => {
      if (profile.position === "Head") {
        headAndCoHeadCards.push(profile);
      } else if (profile.position === "Co Head") {
        headAndCoHeadCards.push(profile);
      } else if (profile.position === "Staff") {
        staffCards.push(profile);
      }
    });

    // Simplified logic to calculate cards per row
    const cardsPerRow = [2]; // The first row for head and co-head remains constant
    const remainingProfiles = profiles.length - 2; // Adjust based on actual head/co-head count

    const fullRows = Math.floor(remainingProfiles / 4);
    const partialRow = remainingProfiles % 4;

    // Create rows of 4 for the full rows
    if (fullRows > 0) {
      const newArr = new Array(fullRows).fill(4);
      cardsPerRow.push(...newArr);
    }

    // Add the partial row, if any
    if (partialRow > 0) {
      cardsPerRow.push(partialRow);
    }

    // Apply card layout according predetermined settings
    let finish = 0;
    let start = 0;
    return cardsPerRow.map((numCards, rowIndex) => {
      let rowCards = [];

      if (rowIndex === 0) {
        rowCards = headAndCoHeadCards.slice(0, 2).reverse();
      } else {
        finish += numCards;
        rowCards = staffCards.slice(start, finish);
        start += numCards;
      }

      return (
        <div
          key={rowIndex}
          className="flex lg:justify-center overflow-auto lg:items-centers lg:flex-row xsm:flex-col xxsm:flex-col"
        >
          {rowCards.map((profile: any, index: number) => (
            <div key={index} className="lg:mx-0 xsm:mx-auto xxsm:mx-auto">
              <CardMember
                img={`https://cors-proxy-infinityfree.vercel.app/uploads/${profile.img}`}
                name={formatName(profile.name)}
                position={profile.position}
                linkedin={profile.linkedin}
                instagram={profile.instagram}
              />
            </div>
          ))}
        </div>
      );
    });
  };

  return (
    <main className="bg-white h-full">
      {/* Navbar */}
      <Navbar active="About Us" />

      {/* 
          If data members exist, display division members page; 
          if data member not exist, display coming soon page
      */}
      {isAvailable ? (
        <React.Fragment>
          {/* Hero */}
          <section className="flex flex-col w-full h-full lg:pt-[100px] xsm:pt-[80px] xxsm:pt-[50px] px-5 py-96 justify-center xsm:items-center xxsm:items-center relative bg-primary z-30">
            <h1 className="font-bold text-white pt-14 lg:text-5xl xsm:text-4xl xxsm:text-3xl">
              {divisionName}
            </h1>
            <p className="text-gray text-sm leading-7 lg:pt-8 xsm:pt-7 xxsm:pt-6 max-w-[600px] mx-auto text-center">
              {snippets}
            </p>
            <br />
            <br />
          </section>

          {/* Card */}
          <div className="flex flex-col bg-zinc-100">
            <div className="flex flex-col lg:-mt-[420px] xxsm:-mt-[400px] z-40">
              {renderCards()}
            </div>
            <br />
            <br />
          </div>
        </React.Fragment>
      ) : (
        // Coming Soon
        <ComingSoon />
      )}

      {/* CTA */}
      <CTA />

      {/* Footer */}
      <section className="w-full bg-primary">
        <Footer />
      </section>
    </main>
  );
};

// Division.defaultProps = {
//   description: "Tes",
// };

export default Division;
