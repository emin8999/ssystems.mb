import { useState } from "react";
import Container from "../../AboutUs/Container/Container.jsx";
import { useTranslation } from "react-i18next";

const ApplicationForm = () => {

  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    position: "",
    resume: null,
    message: ""
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const jobs = [
    {
      id: 1,
      title: `${t("Career.OpenPositions.job1.title")}`,
      type: `${t("Career.OpenPositions.job1.type")}`,
      description: `${t("Career.OpenPositions.job1.description")}`
    },
    {
      id: 2,
      title: `${t("Career.OpenPositions.job2.title")}`,
      type: `${t("Career.OpenPositions.job2.type")}`,
      description: `${t("Career.OpenPositions.job2.description")}`
    },
    {
      id: 3,
      title: `${t("Career.OpenPositions.job3.title")}`,
      type: `${t("Career.OpenPositions.job3.type")}`,
      description: `${t("Career.OpenPositions.job3.description")}`
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({
      ...prev,
      resume: e.target.files[0]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const applicationData = {
      ...formData,
      resume: formData.resume ? formData.resume.name : null,
      submittedAt: new Date().toISOString(),
      id: Date.now()
    };

    const existingApplications = JSON.parse(localStorage.getItem('jobApplications')) || [];
    const updatedApplications = [...existingApplications, applicationData];
    localStorage.setItem('jobApplications', JSON.stringify(updatedApplications));
    
    console.log("Form submitted and saved to localStorage:", applicationData);

    setFormData({
      fullName: "",
      phone: "",
      email: "",
      position: "",
      resume: null,
      message: ""
    });

    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <section className="mt-8 md:mt-12 lg:mt-16 xl:mt-[100px] px-4 sm:px-6 lg:px-8 xl:px-0">
      <Container>
        <div className="w-full">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[64px] text-[#1D2B4F] text-center mb-4 sm:mb-6 md:mb-8 lg:mb-10 xl:mb-12">
            {t("Career.ApplicationForm.title")}
          </h2>

          <p className="text-[#808080] text-center text-sm sm:text-base mb-6 sm:mb-8 md:mb-10 lg:mb-12 max-w-2xl mx-auto px-2 sm:px-4">
            {t("Career.ApplicationForm.text")}
          </p>

          {isSubmitted && (
            <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg sm:rounded-xl text-center text-sm sm:text-base">
              {t("Career.ApplicationForm.applicationSubmitted")}
            </div>
          )}

          <form onSubmit={handleSubmit} className="bg-white rounded-lg sm:rounded-xl lg:rounded-2xl p-4 sm:p-6 md:p-8 shadow-sm border border-gray-200 w-full">
            <FormFields 
              formData={formData}
              jobs={jobs}
              onInputChange={handleInputChange}
              onFileChange={handleFileChange}
            />

            <div className="flex justify-center mt-6 sm:mt-8">
              <button
                type="submit"
                className="py-3 px-8 bg-[#0ED789] rounded-[10px] text-white cursor-pointer font-semibold hover:bg-[#0dc57a] transition-colors text-base w-full sm:w-auto text-center"
              >
                {t("Career.ApplicationForm.send")}
              </button>
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
};

const FormFields = ({ formData, jobs, onInputChange, onFileChange }) => {

  const { t } = useTranslation();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
      <FormInput
        label={`${t("Career.ApplicationForm.name")}`}
        name="fullName"
        type="text"
        value={formData.fullName}
        onChange={onInputChange}
        required
      />

      <FormInput
        label={`${t("Career.ApplicationForm.phone")}`}
        name="phone"
        type="tel"
        value={formData.phone}
        onChange={onInputChange}
        required
      />

      <FormInput
        label={`${t("Career.ApplicationForm.email")}`}
        name="email"
        type="email"
        value={formData.email}
        onChange={onInputChange}
        required
      />

      <div>
        <label className="block text-[#1D2B4F] text-sm sm:text-base mb-2">{t("Career.ApplicationForm.position")}</label>
        <select
          name="position"
          value={formData.position}
          onChange={onInputChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-[10px] focus:outline-none focus:border-[#0ED789] transition-colors text-sm sm:text-base"
        >
          <option value="">{t("Career.ApplicationForm.select")}</option>
          {jobs.map((job) => (
            <option key={job.id} value={job.title}>{job.title}</option>
          ))}
        </select>
      </div>

      <div className="md:col-span-2">
        <label className="block text-[#1D2B4F] text-sm sm:text-base mb-2">{t("Career.ApplicationForm.upload")}</label>
        <input
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={onFileChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-[10px] focus:outline-none focus:border-[#0ED789] transition-colors text-sm"
        />
        {formData.resume && (
          <p className="text-sm text-[#0ED789] mt-2">{t("Career.ApplicationForm.selectedFile")} {formData.resume.name}</p>
        )}
      </div>

      <div className="md:col-span-2">
        <label className="block text-[#1D2B4F] text-sm sm:text-base mb-2">{t("Career.ApplicationForm.message")}</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={onInputChange}
          rows="5"
          className="w-full px-4 py-3 border border-gray-300 rounded-[10px] focus:outline-none focus:border-[#0ED789] transition-colors resize-vertical text-sm sm:text-base"
          placeholder={`${t("Career.ApplicationForm.tellUs")}`}
        ></textarea>
      </div>
    </div>
  );
};

const FormInput = ({ label, name, type, value, onChange, required }) => {
  return (
    <div>
      <label className="block text-[#1D2B4F] text-sm sm:text-base mb-2">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full px-4 py-3 border border-gray-300 rounded-[10px] focus:outline-none focus:border-[#0ED789] transition-colors text-sm sm:text-base"
        placeholder={label}
      />
    </div>
  );
};

export default ApplicationForm;