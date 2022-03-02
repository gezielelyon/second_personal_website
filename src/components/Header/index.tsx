import React from 'react';

import DropdownMenuPrimitive from './DropdownMenu';

import { Container, MainContent } from './styles';

export interface IHeaderProps {
  currentLanguage: string;
}

export const Header = ({ currentLanguage }: IHeaderProps) => {
  return (
    <Container>
      <MainContent>
        <DropdownMenuPrimitive currentLanguage={currentLanguage} />

        <span style={{ fontSize: 25, cursor: 'default' }}>🤟</span>
      </MainContent>
    </Container>
  );
};
