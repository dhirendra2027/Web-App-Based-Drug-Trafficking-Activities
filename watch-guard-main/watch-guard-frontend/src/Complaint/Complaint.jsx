import React, { useEffect, useState } from "react";
import MobileVerification from "./MobileVerification";
import PersonalInfo from "./PersonalInfo";
import IncidentDetails from "./IncidentDetails";
import IncidentLocation from "./IncidentLocation";

const Complaint = () => {
  const [finalComplaint, setFinalComplaint] = useState({});
  const [ComplaintNotifier, setComplaintNotifier] = useState(false);
  const [disclaimer, setDisclaimer] = useState(false);
  const [terms, setTerms] = useState(false);
  const [translateX, setTranslateX] = useState(0);
  const [Submitted, setSubmitted] = useState(false);


  const handleNext = () => {
    setTranslateX((prev) => (prev < 103.5 * 5 ? prev + 103.5 : prev));
  };
  const handlePrev = () => {
    setTranslateX((prev) => (prev > 0 ? prev - 103.5 : prev));
  };

  useEffect;

  return (
    <div className="p-10 bg-[#353535] flex flex-col items-center justify-center">
      {Submitted ? (
        <h4 className="text-green-400 text-2xl">Complint Submitted</h4>
      ) : (
        <h4 className="text-red-500">
          The identity & all the information provided by citizens will remain
          confidential.
        </h4>
      )}

      <div className="mt-4">
        <div className="w-[75vw] text-black relative">
          <div className="overflow-hidden">
            <div
              className={`w-[75vw] flex whitespace-nowrap gap-10 text-wrap transition-all	duration-[300ms] ease-in-ease-out`}
              style={{ transform: `translateX(-${translateX}%)` }}>
              <div className="w-[75vw] rounded-lg bg-white h-fit p-6 shrink-0">
                <h2 className="text-2xl mb-6 font-semibold">Disclaimer</h2>

                <p className="text-justify">
                  MANAS – National Narcotics Helpline portal is a project of the
                  Narcotics Control Bureau, Ministry of Home Affairs, Government
                  of India to facilitate victims / citizens to report
                  drug-related issues / complaints by 24*7. This portal caters
                  to complaints pertaining to drug-related matters only.
                  Drug-related matters including drug trafficking, illegal sale
                  / purchase / storage / manufacturing and illicit cultivation
                  of narcotic drugs or psychotropic substances. The information
                  provided will be reviewed promptly by NCB officers. The
                  identity of the informer / citizen will be kept secret.
                </p>

                <p className="my-8 text-justify">
                  NOTE: If you witness an event that may lead to an immediate
                  threat to human health or safety, you should report it to your
                  local police, dial 112 or share it with the concerned law
                  enforcement authority.
                </p>
                <div>
                  <div classNames="flex items-center gap-2">
                    <input
                      onChange={() => {
                        setDisclaimer(!disclaimer);
                      }}
                      id="understnd-check"
                      type="checkbox"
                      />
                    <label for="understnd-check" className  ="cursor-pointer">
                      I Understand
                    </label>
                  </div>
                </div>
                <input
                  disabled={!disclaimer}
                  onClick={handleNext}
                  type="button"
                  value="I accept"
                  className={`${
                    disclaimer
                      ? "bg-blue-500 text-white"
                      : "bg-zinc-400 text-black"
                  } px-8 py-2 mt-8 rounded "`}
                />
              </div>
              <div className="w-[75vw] h-fit rounded-lg p-6 bg-white shrink-0">
                <h2 className="text-2xl mb-6 font-semibold">
                  Terms & Conditions
                </h2>

                <p className="text-justify">
                  As per provisions of Section 68 of the NDPS Act, 1985 identity
                  of the informers is intact and no one can compel a Drug Law
                  officer to disclose the identity under any circumstances. NCB
                  is committed to protecting the identity of the
                  informers/callers. Narcotics Control Bureau won’t be liable to
                  provide any kind of status / monitor or tracking details on
                  the complaints submitted by the user on the MANAS-National
                  Narcotics Helpline portal. NCB shall verify the details
                  provided and initiate the action as deemed fit under the
                  established procedures of Indian law and as per the NDPS Act,
                  1985.
                </p>

                <p className="my-8 text-justify">
                  Police, upon receiving confidential information, are not
                  required to reveal the source of the intelligence. To carry
                  out any raid, recording information in the General Diary is
                  crucial. However, those who provide the police with secretive
                  information are protected from disclosure under Section 125 of
                  the Indian Evidence Act, 1872. This means that if someone were
                  to ask a police officer directly how he obtained this
                  information, the officer could not be forced to answer.
                </p>

                <p className="my-8 text-justify">
                  Punishment for false Information: Section 58(2) of NDPS Act,
                  1985 makes giving false information wilfully and maliciously
                  which leads to a search or an arrest, a punishable offence
                  inviting a prison term of two years or fine or both.
                </p>

                <div>
                  <div class="flex items-center space-x-2">
                    <input
                      onChange={() => {
                        setTerms(!terms);
                      }}
                      id="term-condition-check"
                      type="checkbox"
                    />
                    <label for="term-condition-check" class="cursor-pointer">
                      I Agree
                    </label>
                  </div>
                </div>
                <input
                  disabled={!terms}
                  onClick={handleNext}
                  type="button"
                  value="I accept"
                  className={`${
                    terms ? "bg-blue-500 text-white" : "bg-zinc-400 text-black"
                  } px-8 py-2 mt-8 rounded "`}
                />
              </div>
              <MobileVerification handleNext={handleNext} />
              <PersonalInfo
                handleNext={handleNext}
                setFinalComplaint={setFinalComplaint}
              />
              <IncidentDetails
                setFinalComplaint={setFinalComplaint}
                handleNext={handleNext}
                handlePrevious={handlePrev}
              />
              <IncidentLocation
                setFinalComplaint={setFinalComplaint}
                setComplaintNotifier={setComplaintNotifier}
                handlePrevious={handlePrev}
                finalComplaint={finalComplaint}
                setSubmitted={setSubmitted}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Complaint;
