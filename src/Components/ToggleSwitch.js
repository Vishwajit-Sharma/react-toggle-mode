import { FaRegSun, FaRegMoon } from "react-icons/fa";
import ThemeContext from "../Context/ThemeContext";
import { useContext } from "react";

const ToggleSwitch = () => {
  const { isDark, setIsDark } = useContext(ThemeContext);
  console.log("ThemeToggle", isDark);

  return (
    <div className="toggleDiv">
      {isDark ? (
        <FaRegSun onClick={() => setIsDark(!isDark)} />
      ) : (
        <FaRegMoon onClick={() => setIsDark(!isDark)} />
      )}
    </div>
  );
};
export default ToggleSwitch;
