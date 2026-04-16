const express = require("express");

const ngoRouter = express.Router();

const ngos = [
  {
    id : 1,
    name: "Alpha Healing Center",
    description:
      "The ISO certified Alpha Healing Center provides comprehensive medical and psychiatric care. Alpha Healing Center is one of the best rehab centres in India offering individualized plans for a range of addiction-related problems. Adiva, a Fortis Group Company, proudly manages the center's clinical governance. Their world-class addiction treatment services include drug de-addiction treatment, alcohol de-addiction treatment, smoking and chewing tobacco de-addiction treatment, social media de-addiction treatment, gambling de-addiction treatment, technology de-addiction treatment, and co-occurring disorders. The center further believes in holistic healing that addresses all the problems of a person comprehensively by healing their mind, body, and spirit.",
    imageUrl:
      "https://rp-deaddictioncentres.s3.amazonaws.com/wp-content/uploads/2017/06/DJI_0248--scaled.jpg",
    view: [
      "https://rehabpath-deaddictioncentres.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/2017/06/07213307/DSC8846-CORRECTED-1-e1650530404751.jpg",
      "https://rp-deaddictioncentres.s3.amazonaws.com/wp-content/uploads/2017/06/IMG-20180904-WA0007-e1650528950859.jpg",
      "https://rp-deaddictioncentres.s3.amazonaws.com/wp-content/uploads/2017/06/AA91786--scaled.jpg",
    ],
    contact: "+919136783804",
    website: "https://alphahealingcenter.in/",
    reviews: "Reviews 4.7",
    price: "₹ 200000 - 600000 p/m",
    tagLine: "Experience Holistic Healing in our Rehabilitation Center",
  },
  {
    id : 2,
    name: "Lotus Wellness and Rehabilitation Center - Coimbatore",
    description:
      "The Lotus Wellness and Rehabilitation Center - Coimbatore provides free educational materials and programs aimed at preventing drug abuse and addiction. They promote a healthy, drug-free lifestyle by educating youth on the dangers of drugs. Their services include online courses, booklets, and videos that provide facts about drugs and how to avoid them. They partner with schools and community organizations globally.",
    imageUrl:
      "https://rp-deaddictioncentres.s3.amazonaws.com/wp-content/uploads/2021/11/WhatsApp-Image-2022-11-19-at-9.18.32-AM.jpeg",
    view: [
      "https://rp-deaddictioncentres.s3.amazonaws.com/wp-content/uploads/2016/11/WhatsApp-Image-2023-12-18-at-11-35-52-PM.jpeg",
      "https://rp-deaddictioncentres.s3.amazonaws.com/wp-content/uploads/2021/11/WhatsApp-Image-2023-01-04-at-6.32.45-AM-1.jpeg",
      "https://rp-deaddictioncentres.s3.amazonaws.com/wp-content/uploads/2021/11/Screenshot-2022-12-07-at-2.15.22-AM-scaled.jpg",
    ],
    contact: "+917339062555",
    website: "https://lotuswellness.life/",
    reviews: "Reviews 4.8",
    price: "Free Services",
    tagLine: "Empowering Youth to Make Healthy Choices",
  },
  {
    id : 3,
    name: "Sukoon Recovery Centre",
    description:
      "Sukoon Recovery Centre is a nonprofit organization providing individualized, holistic drug and alcohol addiction treatment with a focus on mental health services. They offer services such as detoxification, residential programs, and outpatient care. With centers across the United States, they aim to help individuals recover from addiction and rebuild their lives.",
    imageUrl:
      "https://rp-deaddictioncentres.s3.amazonaws.com/wp-content/uploads/2023/07/1.jpg",
    view: [
      "https://rp-deaddictioncentres.s3.amazonaws.com/wp-content/uploads/2023/07/4.jpg",
      "https://rp-deaddictioncentres.s3.amazonaws.com/wp-content/uploads/2023/07/7.jpg",
      "https://rp-deaddictioncentres.s3.amazonaws.com/wp-content/uploads/2023/08/image-3.jpg",
    ],
    contact: "+91 8929082073",
    website: "https://sukoonhealth.com/rehabilitation-centre-in-delhi/",
    reviews: "Reviews 4.5",
    price: "Free Services",
    tagLine: "We Are Recovery",
  },
  {
    id : 4,
    name: "Sanctum Wellness and Healing",
    description:
      "Drug Rehabilitation India provides comprehensive de-addiction programs across various cities in India. Their services range from detoxification, residential treatment, counseling, and aftercare. They specialize in handling alcohol, drug, and behavioral addictions using both traditional methods and holistic therapies. Their team of experts includes doctors, counselors, and therapists to ensure patients get the best possible care.",
    imageUrl:
      "https://rp-deaddictioncentres.s3.amazonaws.com/wp-content/uploads/2019/10/image34-1.jpg",
    view: [
      "https://rp-deaddictioncentres.s3.amazonaws.com/wp-content/uploads/2012/10/dining-table-Niharika-Singh-e1690580930725.jpeg",
      "https://rp-deaddictioncentres.s3.amazonaws.com/wp-content/uploads/2012/10/new-pic-to-be-added-under-FACILITIES-in-ABOUT-US-page-10-Niharika-Singh-scaled.jpg",
      "https://rp-deaddictioncentres.s3.amazonaws.com/wp-content/uploads/2012/10/outside-pool-2-Niharika-Singh-e1690580892240.jpeg",
    ],
    contact: "+919717351762",
    website: "https://www.sanctumwellness.org/",
    reviews: "Reviews 4.6",
    price: "₹ 100000 - 400000 p/m",
    tagLine: "Find the Strength to Rebuild Your Life",
  },
];

ngoRouter.get("/", function (req, res) {
  res.json(ngos);
});

module.exports = ngoRouter;
