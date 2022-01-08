import { useAuthContext } from '../hooks/useAuthContext';

import modeIcon from '../assets/mode-icon.svg';

// Styles
import './ThemeSelector.css';

const themeColors = ['#58249c', '#249c6b', '#b70233'];

export default function ThemeSelector() {
  // * TODO: Add a context hook to access the theme
  const { changeColor, changeMode, mode } = useAuthContext();

  // * function to change the theme color
  const toggleMode = () => {
    changeMode(mode === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="theme-selector">
      <div className="mode-toggle">
        <img
          onClick={toggleMode}
          src={modeIcon}
          alt="dark/light toggle icon"
          style={{
            filter: mode === 'dark' ? 'invert(100%)' : 'invert(0%)',
          }}
        />
      </div>
      <div className="theme-buttons">
        {themeColors.map((color) => (
          <div
            key={color}
            onClick={() => changeColor(color)}
            style={{ background: color }}
          />
        ))}
      </div>
    </div>
  );
}
