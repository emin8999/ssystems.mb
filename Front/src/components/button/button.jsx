import { useTranslation } from "react-i18next";

function Button(){

    const { t } = useTranslation();

    return(
        <>
        <button style={{border: "1px solid #0ED789"}} className="bg-transparent text-[#0ED789] w-[118px] h-[44px] mt-7 rounded-xl">{t("HomePage.Extensive.learnMore")}</button>
        </>
    )
}

export default Button;