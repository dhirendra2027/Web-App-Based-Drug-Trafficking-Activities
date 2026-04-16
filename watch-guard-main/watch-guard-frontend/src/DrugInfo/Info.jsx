import React from "react";
import Main from "../assets/Info/Main.mp4";
import SideEffect from "../assets/Info/SideEffect.png";
import DiseaseCaused from "../assets/Info/DiseaseCaused.png";
import Deaddiction from "../assets/Info/Deaddiction.png";

function Info() {
  const cocaineEffects = {
    physicalSideEffects: [
      "Increased Heart Rate: Cocaine stimulates the central nervous system, leading to a rapid heart rate, which can be dangerous.",
      "High Blood Pressure: Cocaine causes blood vessels to constrict, leading to elevated blood pressure.",
      "Dilated Pupils: Cocaine use often results in enlarged pupils.",
      "Nausea and Vomiting: Users may experience gastrointestinal distress.",
      "Decreased Appetite: Cocaine suppresses appetite, leading to potential weight loss.",
      "Insomnia: Cocaine can disrupt sleep patterns, leading to difficulty falling or staying asleep.",
    ],
    mentalAndPsychologicalEffects: [
      "Euphoria: Cocaine use often results in a temporary feeling of intense pleasure or euphoria.",
      "Anxiety: Users may feel anxious, paranoid, or restless.",
      "Irritability: Cocaine can cause mood swings and increased irritability.",
      "Hallucinations: High doses of cocaine can lead to auditory or visual hallucinations.",
    ],
    behavioralEffects: [
      "Aggression: Cocaine can cause users to become aggressive or violent.",
      "Impulsivity: Users may engage in risky behaviors or poor decision-making.",
    ],
  };

  const cocaineHealthEffects = {
    cardiovascular_diseases: [
      "Heart attack: Cocaine can cause the heart to work harder, increasing the risk of a heart attack.",
      "Stroke: The elevated blood pressure and constriction of blood vessels can lead to a stroke.",
      "Cardiomyopathy: Long-term use can weaken the heart muscle, leading to heart failure.",
    ],
    respiratory_issues: [
      "Lung damage: Inhaling cocaine (especially in the form of crack) can damage the lungs, leading to conditions like pulmonary edema or hemorrhage.",
      "Respiratory arrest: High doses of cocaine can cause breathing to stop altogether.",
    ],
    neurological_disorders: [
      "Seizures: Cocaine can cause seizures due to its stimulating effects on the brain.",
      "Cognitive impairment: Long-term use can lead to memory loss, difficulty concentrating, and other cognitive deficits.",
      "Parkinson's disease: There is evidence that long-term cocaine use increases the risk of developing Parkinson's disease later in life.",
    ],
    mental_health_disorders: [
      "Depression: After the initial high, cocaine users often experience a 'crash' that can lead to severe depression.",
      "Psychosis: Prolonged use can result in cocaine-induced psychosis, characterized by paranoia, delusions, and hallucinations.",
    ],
    infectious_diseases: [
      "HIV/AIDS and Hepatitis: Sharing needles or engaging in risky sexual behaviors while under the influence increases the risk of contracting HIV or hepatitis.",
      "Skin infections: Injecting cocaine can lead to abscesses, cellulitis, and other skin infections.",
    ],
    kidney_damage: [
      "Rhabdomyolysis: Cocaine use can cause muscle tissue to break down, releasing harmful substances into the bloodstream that can damage the kidneys.",
      "Renal failure: The strain on the kidneys from processing these toxins can lead to kidney failure.",
    ],
    gastrointestinal_problems: [
      "Ulcers: Cocaine can cause the lining of the stomach to erode, leading to ulcers.",
      "Bowel gangrene: Cocaine constricts blood vessels in the intestines, which can lead to bowel ischemia and gangrene.",
    ],
  };

  const drugsDeaddiction = [
    "Acknowledge the Problem: Recognize the addiction and the need for change.",
    "Seek Professional Help: Consult a healthcare provider or addiction specialist for assessment and treatment.",
    "Detoxification (Detox): Safely manage withdrawal symptoms under medical supervision.",
    "Behavioral Therapy: Engage in therapies like Cognitive Behavioral Therapy (CBT) to change thoughts and behaviors associated with drug use.",
    "Build a Support System: Join support groups like Narcotics Anonymous (NA) for peer support.",
    "Avoid Triggers: Identify and avoid situations, people, or environments that may lead to relapse.",
    "Medication-Assisted Treatment (MAT): Use prescribed medications to manage cravings and withdrawal symptoms, if applicable.",
    "Long-Term Commitment: Continue therapy, maintain healthy habits, and stay vigilant to prevent relapse."
  ];

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="relative h-[91vh] w-full">
        <video
          className="object-cover h-full w-full mix-blend-lighten"
          src={Main}
          muted
          loop
          autoPlay></video>
        <div className="absolute w-full top-0 h-full z-10 bg-black opacity-50 blur-xl"></div>
        <div className="absolute w-full top-0 h-full z-10 flex justify-center items-end p-4">
          <h2 className="text-4xl font-semibold">
            Reason To Stop Using Drugs.
          </h2>
        </div>
      </div>
      <div className="p-16 text-lg text-justify min-h-[280vh]">
        <p>
          Drugs may offer temporary escape, but they come at a devastating cost.
          They damage your health, impair your mind, and can lead to addiction,
          trapping you in a cycle that's hard to break. Drugs can destroy
          relationships, careers, and futures, leading to isolation, legal
          troubles, and even death. Choosing not to take drugs is choosing life,
          health, and the opportunity to reach your full potential. Stay strong,
          seek help if needed, and remember that life has so much more to offer
          than the fleeting and destructive effects of drugs.
        </p>
        <div className="min-h-[150vh] w-full relative flex flex-col items-center mt-10">
          <h2 className="text-5xl font-semibold absolute top-[35%]">
            SIDE EFFECTS OF DRUGS
          </h2>
          <img className="w-full" src={SideEffect} alt="" />
          <div className="bg-[#313131] w-[99.5%]  h-[85vh] absolute bottom-0 rounded-xl p-8">
            <h2 className="text-3xl font-semibold">Physical Side Effects:</h2>
            <ul className="mb-10 pl-5 list-disc">
              {cocaineEffects.physicalSideEffects.map((effect, index) => (
                <li key={index}>{effect}</li>
              ))}
            </ul>

            <h2 className="text-3xl font-semibold">
              Mental and Psychological Effects:
            </h2>
            <ul className="mb-10 pl-5 list-disc">
              {cocaineEffects.mentalAndPsychologicalEffects.map(
                (effect, index) => (
                  <li key={index}>{effect}</li>
                )
              )}
            </ul>

            <h2 className="text-3xl font-semibold">Behavioral Effects:</h2>
            <ul className="pl-5 list-disc">
              {cocaineEffects.behavioralEffects.map((effect, index) => (
                <li key={index}>{effect}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="min-h-[150vh] w-full relative flex flex-col items-center mt-10">
          <h2 className="text-5xl font-semibold absolute top-[35%]">
            DISEASES CAUSED BY DRUGS
          </h2>
          <img className="w-full" src={DiseaseCaused} alt="" />
          <div className="bg-[#313131] w-[99.5%]  h-fit absolute -bottom-[30%] rounded-xl p-8">
            {Object.entries(cocaineHealthEffects).map(([category, effects]) => (
              <div key={category} className="mb-4">
                <h2 className="text-xl font-semibold mb-2 capitalize">
                  {category.replace("_", " ")}
                </h2>
                <ul className="list-disc pl-5">
                  {effects.map((effect, index) => (
                    <li key={index} className="mb-1">
                      {effect}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="min-h-[100vh] w-full relative flex flex-col items-center mt-[50vh]">
          <h2 className="text-5xl w-[90%] font-semibold absolute top-[25%]">
          De-addiction is a personal journey that often requires a combination of strategies tailored to individual needs. With determination, the right support, and professional help, long-term recovery is achievable.
          </h2>
          <img className="w-full" src={Deaddiction} alt="" />
          <div className="bg-[#313131] w-[99.5%]  h-fit absolute bottom-[3%] rounded-xl p-8" >
            <ul className="list-disc pl-5">
                {drugsDeaddiction.map((val) => {
                    return <li key={val}>{val}</li>;
                })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
