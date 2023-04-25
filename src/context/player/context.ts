import React from 'react';

import type { Player, Tutorial } from '../../types';

export interface PlayerContextProps {
  player: Player;
  loading: boolean;

  resetPlayer: () => void;
  savePlayer: (player: Player) => void;

  updatePlayerField: (player: Partial<Player>) => void;
  updatePlayerXP: (player: Player, xp: number) => void;
  updateTutorialField: (player: Partial<Tutorial>) => void;
}

export const PlayerContext = React.createContext<PlayerContextProps | null>(null);

export const usePlayer = () => React.useContext(PlayerContext) as PlayerContextProps;
