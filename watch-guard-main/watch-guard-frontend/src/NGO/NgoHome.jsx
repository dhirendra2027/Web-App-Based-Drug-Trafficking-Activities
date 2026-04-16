import React, { useEffect, useState } from "react";
import NgoCard from "../NgoCard";
import axios from "axios";

function NgoHome() {
  const [ngos, setNgos] = useState([]);
  async function fetchNgos() {
    await axios
      .get("http://localhost:3000/ngo")
      .then((response) => {
        setNgos(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    fetchNgos();
  }, []);



  const rehabInfo = {
    freeOptions:
      "Sometimes, cost is a barrier for some to receive treatment. This is unfortunate. However, many centres offer low-cost or free options to help low-income patients. The centres in this list advertise the fact that they have free de-addiction treatment.",
    addictionsTreated: [
      "Alcohol dependency, which can severely impact health and relationships",
      "Drug addictions, including substances like opioids, heroin, cocaine, cannabis, and prescription medications",
      "Behavioural addictions such as gambling, which can lead to financial and social consequences",
      "Internet or gaming addiction, which is increasingly prevalent among younger populations",
    ],
    treatmentServices: [
      "Detoxification programs to safely manage withdrawal",
      "Individual and group therapy sessions to address underlying psychological issues",
      "Counselling services for emotional support",
      "Medical care and psychiatric evaluations to tailor treatment plans",
      "Educational workshops and vocational training programs to build skills for a stable future",
      "Aftercare services, including support groups and relapse prevention programs, to ensure long-term recovery",
    ],
    accreditations: [
      "All mental health establishments and residential treatment centres in India must be registered under the Mental Healthcare Act, 2017",
      "The State Mental Health Authority licenses rehabilitation centers",
      "Rehab facilities may be affiliated with the Ministry of Health and Family Welfare",
      "The Ministry of Health and Family Welfare's Drug De-addiction Programme (DDAP) offers financial grants to expand post-abuse treatment facilities in selected government hospitals",
      "Integrated rehabilitation centers for addicts (IRCAs) provide inpatient treatment",
    ],
  };

  return (
    <div>
      {ngos.length > 0 ? (
        <div className="pt-10">
          <div className="flex justify-between">
            <h3 className="text-2xl">Free</h3>
            <a href="/ngo/all/Free">View All</a>
          </div>
          <hr className="w-full" />
          <div className="relative pt-10">
            <div className="overflow-x-auto scrollbar-hide">
              <div className="flex gap-8">
                {ngos
                  .filter((ngo) => ngo.price === "Free Services")
                  .map((ngo, index) => (
                    <NgoCard ngo={ngo} key={index} />
                  ))}
                {ngos.filter((ngo) => ngo.price !== "Free Services").length ===
                  0 && <h1>No Free NGO</h1>}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h1>Loading ...</h1>
      )}

      <div className="pt-10">
        <div className="flex justify-between">
          <h3 className="text-2xl">Paid</h3>
          <a href="/ngo/all/Paid">View All</a>
        </div>
        <hr className="w-full" />
        <div className="relative pt-10">
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex gap-8">
              {ngos
                .filter((ngo) => ngo.price !== "Free Services")
                .map((ngo, index) => (
                  <NgoCard ngo={ngo} key={index} />
                ))}
              {ngos.filter((ngo) => ngo.price === "Free Services").length ===
                0 && <h1>No Free NGO</h1>}
            </div>
          </div>
        </div>
      </div>

      <div className="pt-6 text-justify">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Free Treatment</h2>
          <p>{rehabInfo.freeOptions}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Types of Addictions Treated
          </h2>
          <ul className="list-disc pl-5">
            {rehabInfo.addictionsTreated.map((addiction, index) => (
              <li key={index} className="mb-2">
                {addiction}
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Treatment Services Offered
          </h2>
          <ul className="list-disc pl-5">
            {rehabInfo.treatmentServices.map((service, index) => (
              <li key={index} className="mb-2">
                {service}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Accreditations and Certifications
          </h2>
          <ul className="list-disc pl-5">
            {rehabInfo.accreditations.map((accreditation, index) => (
              <li key={index} className="mb-2">
                {accreditation}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}

export default NgoHome;
