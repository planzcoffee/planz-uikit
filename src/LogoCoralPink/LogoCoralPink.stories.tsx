// external modules
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { text, withKnobs } from '@storybook/addon-knobs';

// internal modules
import LogoCoralPink from './LogoCoralPink';
import coralPinkLogo from '@/img/logo_coral_pink.png';

export default {
  title: 'components|LogoCoralPink',
  component: LogoCoralPink,
  decorators: [withKnobs],
};

export const coralPink = (): JSX.Element => {
  const logo = text('logo', coralPinkLogo);

  return <LogoCoralPink logo={logo} />;
};
