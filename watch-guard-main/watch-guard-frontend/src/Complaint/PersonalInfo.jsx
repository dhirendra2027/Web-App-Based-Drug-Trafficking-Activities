import React, { useState } from "react";
import { useForm } from "react-hook-form";

function PersonalInfo({ handleNext , setFinalComplaint }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [selectedState, setSelectedState] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedSubDistrict, setSubSelectedDistrict] = useState("");

  const data = {
    "Andhra Pradesh": {
      Visakhapatnam: {
        "Visakhapatnam Urban": [
          "MVP Colony Police Station",
          "Dwaraka Police Station",
        ],
        "Visakhapatnam Rural": [
          "Anakapalle Police Station",
          "Chodavaram Police Station",
        ],
      },
      Vijayawada: {
        "Vijayawada Urban": [
          "Suryaraopet Police Station",
          "Patamata Police Station",
        ],
        "Vijayawada Rural": [
          "Gannavaram Police Station",
          "Nuzvid Police Station",
        ],
      },
    },
    "Arunachal Pradesh": {
      Itanagar: {
        "Itanamplex": [
          "Itanagar Police gar Capital CoStation",
          "Naharlagun Police Station",
        ],
        "Papum Pare": ["Doimukh Police Station", "Balijan Police Station"],
      },
      Pasighat: {
        "East Siang": ["Pasighat Police Station", "Ruksin Police Station"],
        "Lower Siang": ["Likabali Police Station", "Nari Police Station"],
      },
    },
    "Assam": {
      Guwahati: {
        "Guwahati City": ["Panbazar Police Station", "Dispur Police Station"],
        "Guwahati Rural": ["Azara Police Station", "Sonapur Police Station"],
      },
      Dibrugarh: {
        "Dibrugarh Urban": ["Dibrugarh Police Station", "Moran Police Station"],
        "Dibrugarh Rural": [
          "Naharkatia Police Station",
          "Tengakhat Police Station",
        ],
      },
    },
    "Bihar": {
      Patna: {
        "Patna Sadar": [
          "Gandhi Maidan Police Station",
          "Kotwali Police Station",
        ],
        "Patna City": ["Chowk Police Station", "Pirbahore Police Station"],
      },
      Gaya: {
        "Gaya Town": ["Gaya City Police Station", "Civil Lines Police Station"],
        "Gaya Rural": ["Bodh Gaya Police Station", "Sherghati Police Station"],
      },
    },
    "Chhattisgarh": {
      Raipur: {
        "Raipur Urban": [
          "Civil Lines Police Station",
          "Telibandha Police Station",
        ],
        "Raipur Rural": ["Abhanpur Police Station", "Tilda Police Station"],
      },
      Bilaspur: {
        "Bilaspur Urban": [
          "City Kotwali Police Station",
          "Torwa Police Station",
        ],
        "Bilaspur Rural": ["Ratanpur Police Station", "Kota Police Station"],
      },
    },
    "Goa": {
      Panaji: {
        Tiswadi: ["Panaji Police Station", "Agassaim Police Station"],
        Bardez: ["Mapusa Police Station", "Anjuna Police Station"],
      },
      Margao: {
        Salcete: ["Margao Town Police Station", "Fatorda Police Station"],
        Mormugao: ["Vasco Police Station", "Verna Police Station"],
      },
    },
    "Gujarat": {
      Ahmedabad: {
        "Ahmedabad City": [
          "Navrangpura Police Station",
          "Vastrapur Police Station",
        ],
        "Ahmedabad Rural": ["Sanand Police Station", "Dholka Police Station"],
      },
      Surat: {
        "Surat City": ["Athwa Police Station", "Umra Police Station"],
        "Surat Rural": ["Olpad Police Station", "Palsana Police Station"],
      },
    },
    "Haryana": {
      Gurgaon: {
        "Gurgaon North": [
          "DLF Phase 2 Police Station",
          "Sector 29 Police Station",
        ],
        "Gurgaon South": ["Sohna Police Station", "Badshahpur Police Station"],
      },
      Faridabad: {
        "Faridabad Central": ["NIT Police Station", "Central Police Station"],
        "Faridabad Old": [
          "Old Faridabad Police Station",
          "Ballabhgarh Police Station",
        ],
      },
    },
    "Himachal Pradesh": {
      Shimla: {
        "Shimla Urban": [
          "Shimla East Police Station",
          "Shimla West Police Station",
        ],
        "Shimla Rural": ["Dhalli Police Station", "Theog Police Station"],
      },
      Dharamshala: {
        Kangra: ["Dharamshala Police Station", "McLeodganj Police Station"],
        Palampur: ["Palampur Police Station", "Baijnath Police Station"],
      },
    },
    "Jharkhand": {
      Ranchi: {
        "Ranchi Urban": ["Kotwali Police Station", "Doranda Police Station"],
        "Ranchi Rural": ["Namkum Police Station", "Kanke Police Station"],
      },
      Jamshedpur: {
        "Jamshedpur Urban": [
          "Bistupur Police Station",
          "Sakchi Police Station",
        ],
        "Jamshedpur Rural": ["Mango Police Station", "Golmuri Police Station"],
      },
    },
    "Karnataka": {
      Bangalore: {
        "Bangalore Central": [
          "Cubbon Park Police Station",
          "Vidhana Soudha Police Station",
        ],
        "Bangalore South": [
          "Koramangala Police Station",
          "Jayanagar Police Station",
        ],
      },
      Mysore: {
        "Mysore City": [
          "Devaraja Police Station",
          "Krishnaraja Police Station",
        ],
        "Mysore Rural": [
          "Nanjangud Police Station",
          "T. Narasipura Police Station",
        ],
      },
    },
    "Kerala": {
      Thiruvananthapuram: {
        "Thiruvananthapuram City": [
          "Museum Police Station",
          "Peroorkada Police Station",
        ],
        "Thiruvananthapuram Rural": [
          "Neyyattinkara Police Station",
          "Attingal Police Station",
        ],
      },
      Kochi: {
        "Kochi City": [
          "Central Police Station",
          "Ernakulam North Police Station",
        ],
        "Kochi Rural": ["Aluva Police Station", "Perumbavoor Police Station"],
      },
    },
    "Madhya Pradesh": {
      Bhopal: {
        "Bhopal North": ["MP Nagar Police Station", "TT Nagar Police Station"],
        "Bhopal South": [
          "Habibganj Police Station",
          "Koh-e-Fiza Police Station",
        ],
      },
      Indore: {
        "Indore West": [
          "Vijay Nagar Police Station",
          "Rajendra Nagar Police Station",
        ],
        "Indore East": [
          "Tukoganj Police Station",
          "Chandan Nagar Police Station",
        ],
      },
    },
    "Maharashtra": {
      Mumbai: {
        "Mumbai City": ["Colaba Police Station", "Marine Drive Police Station"],
        "Mumbai Suburban": ["Bandra Police Station", "Andheri Police Station"],
      },
      Pune: {
        "Pune City": [
          "Shivajinagar Police Station",
          "Koregaon Park Police Station",
        ],
        "Pune Rural": ["Baramati Police Station", "Lonavala Police Station"],
      },
    },
    "Manipur": {
      Imphal: {
        "Imphal West": ["Lamphel Police Station", "City Police Station"],
        "Imphal East": ["Porompat Police Station", "Heingang Police Station"],
      },
      Thoubal: {
        Thoubal: ["Thoubal Police Station", "Lilong Police Station"],
        Kakching: ["Kakching Police Station", "Sugnu Police Station"],
      },
    },
    "Meghalaya": {
      Shillong: {
        "East Khasi Hills": ["Sadar Police Station", "Laban Police Station"],
        "Ri-Bhoi": ["Nongpoh Police Station", "Umiam Police Station"],
      },
      Tura: {
        "West Garo Hills": ["Tura Police Station", "Phulbari Police Station"],
        "South West Garo Hills": [
          "Ampati Police Station",
          "Mahendraganj Police Station",
        ],
      },
    },
    "Mizoram": {
      Aizawl: {
        "Aizawl City": ["Aizawl Police Station", "Bawngkawn Police Station"],
        "Aizawl Rural": ["Sairang Police Station", "Darlawn Police Station"],
      },
      Lunglei: {
        Lunglei: ["Lunglei Police Station", "Tlabung Police Station"],
        Lawngtlai: ["Lawngtlai Police Station", "Chawngte Police Station"],
      },
    },
    "Nagaland": {
      Kohima: {
        "Kohima North": ["North Police Station", "Chiephobozou Police Station"],
        "Kohima South": ["South Police Station", "Zubza Police Station"],
      },
      Dimapur: {
        "Dimapur Sadar": ["East Police Station", "West Police Station"],
        "Dimapur Rural": [
          "Chumukedima Police Station",
          "Medziphema Police Station",
        ],
      },
    },
    "Odisha": {
      Bhubaneswar: {
        "Bhubaneswar Urban": [
          "Capital Police Station",
          "Khandagiri Police Station",
        ],
        "Bhubaneswar Rural": [
          "Tamando Police Station",
          "Balianta Police Station",
        ],
      },
      Cuttack: {
        "Cuttack City": [
          "Mangalabag Police Station",
          "Chauliaganj Police Station",
        ],
        "Cuttack Rural": ["Sadar Police Station", "Tangi Police Station"],
      },
    },
    "Punjab": {
      Amritsar: {
        "Amritsar City": [
          "Civil Lines Police Station",
          "Cantonment Police Station",
        ],
        "Amritsar Rural": ["Ajnala Police Station", "Majitha Police Station"],
      },
      Ludhiana: {
        "Ludhiana City": [
          "Division No. 5 Police Station",
          "Salem Tabri Police Station",
        ],
        "Ludhiana Rural": ["Khanna Police Station", "Jagraon Police Station"],
      },
    },
    "Rajasthan": {
      Jaipur: {
        "Jaipur East": [
          "Ashok Nagar Police Station",
          "Jawahar Nagar Police Station",
        ],
        "Jaipur West": [
          "Vaishali Nagar Police Station",
          "Sodala Police Station",
        ],
      },
      Udaipur: {
        "Udaipur City": ["Surajpole Police Station", "Ambamata Police Station"],
        "Udaipur Rural": ["Gogunda Police Station", "Mavli Police Station"],
      },
    },
    "Sikkim": {
      Gangtok: {
        Gangtok: ["Sadar Police Station", "Ranipool Police Station"],
        Pakyong: ["Pakyong Police Station", "Rangpo Police Station"],
      },
      Namchi: {
        Namchi: ["Namchi Police Station", "Jorethang Police Station"],
        Ravangla: ["Ravangla Police Station", "Melli Police Station"],
      },
    },
    "Tamil Nadu": {
      Chennai: {
        "Chennai North": [
          "Anna Nagar Police Station",
          "Washermenpet Police Station",
        ],
        "Chennai South": ["T Nagar Police Station", "Adyar Police Station"],
      },
      Coimbatore: {
        "Coimbatore City": [
          "Race Course Police Station",
          "Singanallur Police Station",
        ],
        "Coimbatore Rural": [
          "Pollachi Police Station",
          "Mettupalayam Police Station",
        ],
      },
    },
    "Telangana": {
      Hyderabad: {
        "Hyderabad City": [
          "Banjara Hills Police Station",
          "Jubilee Hills Police Station",
        ],
        Cyberabad: ["Madhapur Police Station", "Gachibowli Police Station"],
      },
      Warangal: {
        "Warangal Urban": [
          "Mills Colony Police Station",
          "Hanamkonda Police Station",
        ],
        "Warangal Rural": ["Narsampet Police Station", "Parkal Police Station"],
      },
    },
  };

  const handleComplaint = (data) => {
    var personalInfo = {};
    Object.keys(data).map(key => {
      if(data[key] !== ""){
        personalInfo[key] = data[key];
      }
    });
    setFinalComplaint(prev => ({...prev, personalInfo }));
  }

  const handleStateChange = (e) => {
    setSelectedState(e.target.value);
    setSelectedDistrict("");
    setSubSelectedDistrict("");
  };

  const handleDistrictChange = (e) => {
    setSelectedDistrict(e.target.value);
    setSubSelectedDistrict("");
  };
  const handleSubDistrictChange = (e) => {
    setSubSelectedDistrict(e.target.value);
  };

  return (
    <form
      onSubmit={handleSubmit((data) => handleComplaint(data))}
      className="w-[75vw] rounded-lg bg-white h-fit shrink-0 overflow-hidden flex flex-col">
      <h2 className="bg-[#d5ddf9] text-xl py-4 text-center">
        Step 1: Personal Details of the Informer
      </h2>
      <div className="w-full h-full p-6">
        <h4 className="font-semibold text-lg mb-4">
          All fields are not mandatory
        </h4>
        <h4 className="font-semibold text-lg mb-4 text-[#3e49a8]">
          Personal Information
        </h4>
        <div className="grid grid-cols-2 grid-rows-2 w-full h-[30%]  gap-6">
          <input
            {...register("name")}
            className="w-full p-3 border-[1.8px] border-zinc-200 text-zinc-600 focus:rounded-xl placeholder-zinc-600 transistion-all duration-300 focus:outline-none focus:border-zinc-400"
            name="name"
            type="text"
            placeholder="Name"
            
          />
          <input
            {...register("age")}
            className="w-full p-3 border-[1.8px] border-zinc-200 text-zinc-600 focus:rounded-xl placeholder-zinc-600 transistion-all duration-300 focus:outline-none focus:border-zinc-400"
            name="age"
            type="text"
            placeholder="Age"
            
          />
          <select
            {...register("gender")}
            className="w-full p-3 border-[1.8px] border-zinc-200 text-zinc-600 outline-none focus:border-zinc-400 focus:rounded-xl transistion-all duration-300 "
            name="gender">
            <option value="">Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Transgender">Transgender</option>
            <option value="Other">Other</option>
          </select>
          <select
            {...register("nationality")}
            className="w-full p-3 border-[1.8px] border-zinc-200 text-zinc-600 outline-none focus:border-zinc-400 focus:rounded-xl transistion-all duration-300 "
            name="nationality">
            <option value="">Nationality</option>
            <option value="Indian">Indian</option>
            <option value="Foreigner">Foreigner</option>
            <option value="Both">Both</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <h4 className="font-semibold text-lg my-4 text-[#3e49a8]">
          Contact Details
        </h4>
        <div className="grid grid-cols-2 w-full h-[30%]  gap-6">
          <input
            {...register("email")}
            className="w-full p-3 border-[1.8px] border-zinc-200 text-zinc-600 focus:rounded-xl placeholder-zinc-600 transistion-all duration-300 focus:outline-none focus:border-zinc-400"
            name="email"
            type="text"
            placeholder="Email"
            
          />

          <input
            {...register("number")}
            className="w-full p-3 border-[1.8px] border-zinc-200 text-zinc-600 focus:rounded-xl placeholder-zinc-600 transistion-all duration-300 focus:outline-none focus:border-zinc-400"
            name="number"
            type="text"
            placeholder="Number"
            
          />

          <input
            {...register("pincode")}
            className="w-full p-3 border-[1.8px] border-zinc-200 text-zinc-600 focus:rounded-xl placeholder-zinc-600 transistion-all duration-300 focus:outline-none focus:border-zinc-400"
            name="pincode"
            type="text"
            placeholder="Pincode"
            
          />

          <select
            {...register("state")}
            id="state"
            name="state"
            value={selectedState}
            onChange={handleStateChange}
            className=" w-full p-3 border-[1.8px] border-zinc-200 text-zinc-600 outline-none focus:rounded-xl focus:border-zinc-400 transistion-all duration-300 ">
            <option value="">State</option>
            {Object.keys(data).map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>

          <select
            {...register("district")}
            id="district"
            name="district"
            value={selectedDistrict}
            onChange={handleDistrictChange}
            className=" w-full p-3 border-[1.8px] border-zinc-200 text-zinc-600 outline-none focus:rounded-xl focus:border-zinc-400 transistion-all duration-300 ">
            <option value="">District</option>
            {selectedState &&
              Object.keys(data[selectedState]).map((district) => (
                <option key={district} value={district}>
                  {district}
                </option>
              ))}
          </select>

          <select
            {...register("subDistrict")}
            id="subDistrict"
            name="subDistrict"
            value={selectedSubDistrict}
            onChange={handleSubDistrictChange}
            className=" w-full p-3 border-[1.8px] border-zinc-200 text-zinc-600 outline-none focus:rounded-xl focus:border-zinc-400 transistion-all duration-300 ">
            <option value="">Sub District</option>
            {selectedDistrict &&
              Object.keys(data[selectedState][selectedDistrict]).map(
                (district) => (
                  <option key={district} value={district}>
                    {district}
                  </option>
                )
              )}
          </select>

          <input
            {...register("locality")}
            className="w-full p-3 border-[1.8px] border-zinc-200 text-zinc-600 focus:rounded-xl placeholder-zinc-600 transistion-all duration-300 focus:outline-none focus:border-zinc-400"
            name="locality"
            type="text"
            placeholder="Locality/Village"
            
          />

          <select
            {...register("police-station")}
            id="police-statio"
            name="police-station"
            className=" w-full p-3 border-[1.8px] border-zinc-200 text-zinc-600 outline-none focus:rounded-xl focus:border-zinc-400 transistion-all duration-300 ">
            <option value="">Police Station</option>
            {selectedSubDistrict &&
              data[selectedState][selectedDistrict][selectedSubDistrict].map(
                (policeStation) => (
                  <option key={policeStation} value={policeStation}>
                    {policeStation}
                  </option>
                )
              )}
          </select>
        </div>
        <h4 className="font-semibold text-lg my-4 text-[#3e49a8]">Others</h4>
        <div className="grid grid-cols-2 w-full h-[30%]  gap-6">
          <select
            {...register("education")}
            className="w-full p-3 border-[1.8px] border-zinc-200 text-zinc-600 outline-none focus:border-zinc-400 focus:rounded-xl transistion-all duration-300 "
            name="education">
            <option value="">Education</option>
            <option value="Uneducated">Uneducated</option>
            <option value="Matric">Matric</option>
            <option value="Graduate">Graduate</option>
            <option value="Post Graduate">Post Graduate</option>
            <option value="Above">Above</option>
          </select>
          <select
            {...register("work")}
            className="w-full p-3 border-[1.8px] border-zinc-200 text-zinc-600 outline-none focus:border-zinc-400 focus:rounded-xl transistion-all duration-300 "
            name="work">
            <option value="">Work Profile</option>
            <option value="Labour">Labour</option>
            <option value="Farmer">Farmer</option>
            <option value="Student">Student</option>
            <option value="Buisness">Buisness</option>
            <option value="Private Job">Private Job</option>
            <option value="Govt. Job">Govt. Job</option>
            <option value="Political">Political</option>
            <option value="Others">Others</option>
          </select>
        </div>
        <input
          onClick={handleNext}
          type="submit"
          value="Next"
          className="px-8 py-2 bg-[#34385c] text-white rounded mt-6"
        />
      </div>
    </form>
  );
}

export default PersonalInfo;
