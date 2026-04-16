import React, { useState } from "react";
import { useForm } from "react-hook-form";

function IncidentDetails({ handleNext, handlePrevious, setFinalComplaint }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [DrugName, setDrugName] = useState(true);

  const handleDrugCheck = () => {
    setDrugName(!DrugName);
  };

  const handleComplaint = (data) => {
    var incidentDetails = {};
    Object.keys(data).map(key => {
      if(data[key] !== ""){
        incidentDetails[key] = data[key];
      }
    });
    if(incidentDetails.image.length === 0 ){
      delete incidentDetails.image;
    }
    setFinalComplaint(prev => ({...prev, incidentDetails }))
  };

  return (
    <form
      onSubmit={handleSubmit((data) => {handleComplaint(data); handleNext()})}
      className="w-[75vw] rounded-lg bg-white h-fit shrink-0 overflow-hidden flex flex-col">
      <h2 className="bg-[#d5ddf9] text-xl py-4 text-center">
        Step 2 : Enter Incident Details
      </h2>
      <div className="w-full h-full p-6">
        {DrugName && (
          <div>
            <h4 className="font-semibold mb-4">
              Do you know the name of the drug?{" "}
              <span className="text-red-500">*</span>
            </h4>
            <select
            {...register("drugName")}
              id="illegal-drugs"
              name="drugName"
              className="w-full p-3 border-[1.8px] border-zinc-200 text-zinc-600 outline-none focus:border-zinc-400 focus:rounded-xl transistion-all duration-300 ">
              <option value="">Drug Name</option>
              <option value="cocaine">Cocaine</option>
              <option value="heroin">Heroin</option>
              <option value="methamphetamine">Methamphetamine</option>
              <option value="mdma">MDMA (Ecstasy)</option>
              <option value="lsd">LSD (Lysergic acid diethylamide)</option>
              <option value="marijuana">Marijuana (Cannabis)</option>
              <option value="opioids">Opioids</option>
              <option value="fentanyl">Fentanyl</option>
              <option value="psilocybin">Psilocybin (Magic Mushrooms)</option>
              <option value="ketamine">Ketamine</option>
              <option value="pcp">PCP (Phencyclidine)</option>
              <option value="crack-cocaine">Crack Cocaine</option>
              <option value="synthetic-cannabinoids">
                Synthetic Cannabinoids (K2/Spice)
              </option>
              <option value="bath-salts">
                Bath Salts (Synthetic Cathinones)
              </option>
              <option value="inhalants">Inhalants</option>
              <option value="ghb">GHB (Gamma-hydroxybutyrate)</option>
              <option value="rohypnol">Rohypnol (Flunitrazepam)</option>
              <option value="mescaline">Mescaline (Peyote)</option>
              <option value="dmt">DMT (Dimethyltryptamine)</option>
              <option value="kratom">Kratom</option>
            </select>
          </div>
        )}
        <label for="understnd-check" class="flex gap-2 items-center my-4">
          <input

            onChange={handleDrugCheck}
            id="understnd-check"
            type="checkbox"
            class="appearance-none w-5 h-5 border-2 border-gray-400 rounded-md checked:bg-blue-600 checked:border-blue-600 transition-all duration-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          I don't know the name of the drug.
        </label>
        {!DrugName && (
          <label>
            <span className="font-semibold">
              Describe the drug’s look <span className="text-red-500">*</span>
            </span>
            <textarea
            {...register("drugLook")}
              id="drugLook"
              className="w-full min-h-[10vh] my-4 p-3 border-[1.8px] border-zinc-200 text-zinc-600 focus:rounded-xl placeholder-zinc-600 transistion-all duration-300 focus:outline-none focus:border-zinc-400"
              name="drugLook"
              type="text"
              required
            />
          </label>
        )}
        <label>
          <span className="font-semibold">
            Brief of Complaint <span className="text-red-500">*</span>
          </span>
          <textarea
          {...register("drugBrief")}
            id="drugBrief"
            className="w-full min-h-[20vh] my-4 p-3 border-[1.8px] border-zinc-200 text-zinc-600 focus:rounded-xl placeholder-zinc-600 transistion-all duration-300 focus:outline-none focus:border-zinc-400"
            name="drugBrief"
            type="text"
            required
          />
        </label>

        <h4 className="font-semibold mb-4">Upload Image / Complaint </h4>
        <div class="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center">
          <p class="text-gray-500 mb-4">
            Select or Drag your files to upload jpeg, mp4, png, pdf (Max File
            Size: 15 MB)
          </p>

          <label class="flex flex-col items-center px-8 py-2 bg-[#34385c] text-white rounded-lg tracking-wide uppercase cursor-pointer hover:bg-[#283055]">
            <span>Choose File(s)</span>
            <input 
            name="image"
            {...register("image")}
             type="file" class="hidden" multiple />
          </label>
        </div>
        <div className="">
          <input
            onClick={handlePrevious}
            type="button"
            value="Previous"
            className="px-8 py-2 mr-4 border-[#34385c] border text-[#34385c] rounded mt-6"
          />
          <input
            type="submit"
            value="Next"
            className="px-8 py-2 bg-[#34385c] text-white rounded mt-6"
          />
        </div>
      </div>
    </form>
  );
}

export default IncidentDetails;
