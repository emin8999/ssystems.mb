import React, { useState } from "react";
import Map from "../../components/Map/index.jsx";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaEnvelope } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import TextField from "@mui/material/TextField";
import Header from "../../components/Header/index.jsx";
const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Input dəyişiklikləri
  const HandleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Form göndərmə
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://your-server.com/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert("Mesaj uğurla göndərildi!");
        setFormData({ name: "", email: "", message: "" });
      } else alert("Mesaj göndərilmədi.");
    } catch (error) {
      console.error(error);
      alert("Xəta baş verdi.");
    }
  };

  return (
    <>
      <Header />
      <div className="flex flex-col lg:flex-row lg:ml-[10%] mt-[2%] lg:gap-[4%] px-4 pb-[5%]">
        <div className="w-full lg:w-[40%] lg:h-auto mb-8 lg:mb-0">
          <Map />
        </div>

        <div className="flex flex-col w-full lg:w-[50%] pt-5 lg:pt-0">
          <div className="text-3xl sm:text-4xl md:text-5xl font-semibold text-custom-blue pt-[4%]">
            Send Us Message
          </div>
          <div className="font-inter font-thin text-base leading-6 tracking-normal text-custom-gray pt-2">
            Reach out to our support team for any service requests, questions,
            or estimates — we’ll respond promptly.
          </div>

          <div className="contacts-container pt-5 flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <BsFillTelephoneFill style={{ color: "#0ED789" }} />
              <span className="font-inter font-thin text-base text-custom-gray">
                (907) 555-0101
              </span>
            </div>
            <div className="flex items-center gap-2">
              <FaEnvelope style={{ color: "#0ED789" }} />
              <span className="font-inter font-thin text-base text-custom-gray">
                nvt.isst.nute@gmail.com
              </span>
            </div>
            <div className="flex items-center gap-2">
              <FaLocationDot style={{ color: "#0ED789" }} />
              <span className="font-inter font-thin text-base text-custom-gray">
                Artojo g. 7E, Klaipėda
              </span>
            </div>
          </div>

          <form
            className="pt-5 flex flex-col gap-6 sm:gap-4"
            onSubmit={handleSubmit}
          >
            <TextField
              name="email"
              label="Enter Your mail"
              variant="outlined"
              value={formData.email}
              onChange={HandleChange}
              sx={{
                width: "100%",
                maxWidth: 544,
                borderRadius: 2.5,
                "& .MuiOutlinedInput-root": {
                  borderRadius: 2.5,
                  "& fieldset": { borderColor: "#0ED789", borderWidth: 1 },
                  "&:hover fieldset": { borderColor: "#0ED789" },
                  "&.Mui-focused fieldset": { borderColor: "#0ED789" },
                },
                "& label.Mui-focused": { color: "#0ED789" },
              }}
            />
            <TextField
              name="name"
              label="Enter Your name"
              variant="outlined"
              value={formData.name}
              onChange={HandleChange}
              sx={{
                width: "100%",
                maxWidth: 544,
                borderRadius: 2.5,
                "& .MuiOutlinedInput-root": {
                  borderRadius: 2.5,
                  "& fieldset": { borderColor: "#0ED789", borderWidth: 1 },
                  "&:hover fieldset": { borderColor: "#0ED789" },
                  "&.Mui-focused fieldset": { borderColor: "#0ED789" },
                },
                "& label.Mui-focused": { color: "#0ED789" },
              }}
            />
            <TextField
              name="message"
              label="Enter Your message"
              variant="outlined"
              multiline
              rows={4}
              value={formData.message}
              onChange={HandleChange}
              sx={{
                width: "100%",
                maxWidth: 544,
                borderRadius: 2.5,
                "& .MuiOutlinedInput-root": {
                  borderRadius: 2.5,
                  "& fieldset": { borderColor: "#0ED789", borderWidth: 1 },
                  "&:hover fieldset": { borderColor: "#0ED789" },
                  "&.Mui-focused fieldset": { borderColor: "#0ED789" },
                },
                "& label.Mui-focused": { color: "#0ED789" },
              }}
            />
            <button
              type="submit"
              className="bg-[#0ED789] text-white w-[161px] h-[44px] rounded-[10px] flex items-center justify-center gap-[10px] mt-4 self-start sm:self-center"
            >
              Send Messages
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Index;
