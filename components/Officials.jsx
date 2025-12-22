"use client";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.96 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Officials = () => {
  const officials = [
    {
      name: "Rev. Fr. Dr. Wilfred Nwachukwu",
      office: "Officiating Priest",
      image:
        "https://res.cloudinary.com/dw7khzaml/image/upload/v1766183415/Screenshot_from_2025-12-19_23-29-19_mzmfpr.png",
    },
    {
      name: "Rev. Fr. Philip Oguariri",
      office: "Officiating Priest",
      image:
        "https://res.cloudinary.com/dw7khzaml/image/upload/v1766185937/Screenshot_from_2025-12-20_00-11-58_bxl6xl.png",
    },
    {
      name: "Rev. Fr. Emmanuel Izuchukwu Ogu",
      office: "Officiating Priest",
      image:
        "https://res.cloudinary.com/dw7khzaml/image/upload/v1766387769/Screenshot_from_2025-12-22_08-14-17_bprtzs.png",
    },
    {
      name: "Mr & Mrs Iwu",
      office: "Sponsors",
      image:
        "https://res.cloudinary.com/dw7khzaml/image/upload/v1766182143/Screenshot_from_2025-12-19_22-43-15_gee5c9.png",
    },
    {
      name: "Mr. Nwosu Cajetan Anetochi",
      office: "Master of Ceremony",
      image:
        "https://res.cloudinary.com/dw7khzaml/image/upload/v1766182049/Screenshot_from_2025-12-19_22-44-04_psiiv6.png",
    },
    {
      name: "Udochi Nwam",
      office: "Chief Bridesmaid",
      image:
        "https://res.cloudinary.com/diae7jcps/image/upload/v1766076736/Udochi_keb8id.jpg",
    },
    {
      name: "Matthew Ekeanyanwu",
      office: "Best Man",
      image:
        "https://res.cloudinary.com/diae7jcps/image/upload/v1766076739/Ebuka_qagz6t.jpg",
    },
    {
      name: "Idowu Samuel",
      office: "Make Up/Hair Stylist",
      image:
        "https://res.cloudinary.com/diae7jcps/image/upload/v1766076734/idowu_izw6we.jpg",
    },
  ];

  return (
    <section
      id="officials"
      className="py-20 bg-gradient-to-b from-[#87CEEB] to-white"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[#D4AF37] uppercase tracking-widest text-sm mb-3">
            Our Ceremony
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Wedding Officials
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            The wonderful people who will guide us through our sacred ceremony.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pb-24">
          {officials.map((official, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition"
            >
              <div className="text-center">
                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-4 bg-gray-100">
                  <img
                    src={official.image}
                    alt={official.name}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-1 text-[#364153]">
                  {official.name}
                </h3>{" "}
                <p className="text-[#4682B4] text-sm font-medium">
                  {official.office}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Officials;
