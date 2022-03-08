import React, { useState } from 'react';
import { useRouter } from 'next/router';

import { IoIosArrowDown } from 'react-icons/io';

import { darkTheme, lightTheme } from '@styles/index';

import {
  Box,
  DropdownMenu,
  DropdownMenuTrigger,
  IconButton,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from './styles';

export interface IDropdownMenuProps {
  currentLanguage: string;
  currentThemeMode: 'light' | 'dark';
}

export const DropdownMenuDemo = ({
  currentLanguage,
  currentThemeMode,
}: IDropdownMenuProps) => {
  const router = useRouter();

  const [language, setLanguage] = useState(currentLanguage);

  const handleChangeLanguage = (value: string) => {
    const newLocale = value === 'English' ? 'en' : 'pt';

    router.push('/', undefined, {
      locale: newLocale,
    });

    setLanguage(value);
  };

  return (
    <Box>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <IconButton aria-label="Customise options">
            {language}
            <IoIosArrowDown
              size={18}
              color={currentThemeMode === 'light' ? '#010101' : '#fff'}
              style={{ marginLeft: 5 }}
            />
          </IconButton>
        </DropdownMenuTrigger>

        <DropdownMenuContent
          className={currentThemeMode === 'light' ? lightTheme : darkTheme}
          sideOffset={5}
        >
          <DropdownMenuRadioGroup
            value={language}
            onValueChange={handleChangeLanguage}
          >
            <DropdownMenuRadioItem value="English">
              {currentLanguage === 'English' ? currentLanguage : 'Inglês'}
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="Portuguese">
              {currentLanguage === 'Português' ? currentLanguage : 'Portuguese'}
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </Box>
  );
};

export default DropdownMenuDemo;
