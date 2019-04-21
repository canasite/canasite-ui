import React from 'react';
import styled from 'styled-components';
import { SettingsSection } from './settingsSection';

import TruckIcon from '../assets/icons/truck-icon.svg';
import creditCardIcon from '../assets/icons/creditCard-icon.svg';
import preferencesIcon from '../assets/icons/preferences-icon.svg';
import conditionsIcon from '../assets/icons/conditions-icon.svg';
import starRatingIcon from '../assets/icons/starRating-icon.svg';

const sections = [
  {
    setting: 'Mes adresses',
    hint: 'Configurer les adresses où sont livrés vos achats',
    icon: {
      src: TruckIcon,
      width: "36px"
    }
  },
  {
    setting: 'Mes moyens de paiement',
    hint: 'Ajouter des moyens de paiement pour votre compte',
    icon: {
      src: creditCardIcon
    }
  },
  {
    setting: 'Mes préfèrences',
    hint: 'Paramétrer votre expérience sur Canasite',
    icon: {
      src: preferencesIcon
    }
  },
  {
    setting: 'Conditions générales',
    hint: 'Toutes les conditions en rapport avec nos services',
    icon: {
      src: conditionsIcon
    }
  },
  {
    setting: 'Evaluer Canasite',
    hint: 'Donnez votre avis',
    icon: {
      src: starRatingIcon
    }
  },
];

const Sections = styled.ul`
  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    max-height: 20rem;
    flex-wrap: wrap;
    padding: 0 6rem;
    margin: 2rem 0;
  }
`

export const SettingsSections = () => {
  return (
    <Sections>
      {sections.map((section, index) => <SettingsSection {...section} key={index}></SettingsSection>)}
    </Sections>
  );
};
