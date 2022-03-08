import React from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';

import DropdownMenuPrimitive from './DropdownMenu';

import { ChangeThemeButton, Container, MainContent } from './styles';

export interface IHeaderProps {
  currentLanguage: string;
  currentThemeMode: 'light' | 'dark';
  setCurrentThemeMode: React.Dispatch<React.SetStateAction<'light' | 'dark'>>;
}

export const Header = ({
  currentLanguage,
  currentThemeMode,
  setCurrentThemeMode,
}: IHeaderProps) => {
  const handleChangeCurrentThemeMode = () => {
    if (currentThemeMode === 'light') {
      setCurrentThemeMode('dark');
    } else {
      setCurrentThemeMode('light');
    }
  };

  return (
    <Container>
      <MainContent>
        <DropdownMenuPrimitive
          currentLanguage={currentLanguage}
          currentThemeMode={currentThemeMode}
        />

        <ChangeThemeButton
          onClick={handleChangeCurrentThemeMode}
          aria-label="Theme icon"
        >
          {currentThemeMode === 'light' ? (
            <FiMoon size={20} color="#0A0A0A" />
          ) : (
            <FiSun size={20} color="#fff" />
          )}
        </ChangeThemeButton>
      </MainContent>
    </Container>
  );
};
