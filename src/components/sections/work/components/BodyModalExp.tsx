import { EXPERIENCES } from "@/helpers/data";
import { Figo } from "./Figo";
import { GU } from "./GU";
import { useTranslation } from "react-i18next";

interface IProps {
    experience: (typeof EXPERIENCES)[0];
}
type TLanguage = "vi" | "en";

export const BodyModalExp = ({ experience }: IProps) => {
    const { i18n } = useTranslation();
    const currentLanguage = i18n.resolvedLanguage as TLanguage;
    const getDescription = (abbr: string) => {
        switch (abbr) {
            case "Figo":
                return <Figo currentLanguage={currentLanguage} />;
            case "GU":
                return <GU currentLanguage={currentLanguage} />;
            default:
                return <p>No description available.</p>;
        }
    };
    return (
        <>
            <p>
                <strong>Company:</strong> {experience?.company[currentLanguage]}
            </p>
            <p>
                <strong>Duration:</strong> {experience?.duration[currentLanguage]}
            </p>
            <p>
                <strong>Key responsibilities:</strong>
            </p>
            {getDescription(experience.abbr ?? "")}
        </>
    );
};
