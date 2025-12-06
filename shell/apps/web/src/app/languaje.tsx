import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { localize } from '../redux/localizer'; 
import { AVAILABLE_LOCALES } from '../i18n/translation';

interface RootState {
  localizer: {
    locale: string;
  };
}

const LanguageSelector: React.FC = () => {
  const dispatch = useDispatch();

  // Obtener locale actual desde Redux
  let currentLocale = useSelector((state: RootState) => state.localizer.locale);

  // Ajustar mapeos si tu backend usa es-419, etc.
  if (currentLocale === 'es-419') {
    currentLocale = 'es-ES';
  }

  // Cambiar idioma desde el <select>
  const handleLocaleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = event.target.value;

    dispatch(localize({ locale: newLocale }));
  };

  // Cambiar idioma desde los botones ES / EN
  const handleButtonChange = (locale: string) => {
    dispatch(localize({ locale }));
  };

  return (
    <div className="flex flex-row-reverse ">
      
      <div className="flex items-center bg-gray-900/60 backdrop-blur-sm rounded-full p-1 border border-white/10">
      
        <button
          onClick={() => handleButtonChange("es-ES")}
          className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
            currentLocale === "ES"
              ? "bg-[#439A86] text-orange-300 shadow-lg"
              : "text-orange-300 hover:text-white"
          }`}
        >
          ES
        </button>

        <button
          onClick={() => handleButtonChange("en-US")}
          className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
            currentLocale === "EN"
              ? "bg-[#439A86] text-orange-300 shadow-lg"
              : "text-orange-300 hover:text-white"
          }`}
        >
          EN
        </button>
      </div>

      {/* Select para más idiomas directo de los posibles idiomas y funciona 
      <select
        onChange={handleLocaleChange}
        value={currentLocale}
        className="px-3 py-1.5 rounded-md bg-gray-900/40 border border-white/10 text-gray-200 text-sm"
      >
        {AVAILABLE_LOCALES.map((locale) => (
          <option key={locale.code} value={locale.code}>
            {locale.name}
          </option>
        ))}
      </select>
        */}
    </div>
  );
};

export default LanguageSelector;
