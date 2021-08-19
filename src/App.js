import "./styles.css";
import { useTranslation } from "react-i18next";

export default function App() {
  const { t } = useTranslation();
  return (
    <div className="App">
      <div>{t("current_date", { value: new Date() })}</div>
      <div>{t("key2", { text: "Salimjon" })}</div>
      {t("landing_section_course_groups_subtitle", {
        value: 6
      })}
    </div>
  );
}
