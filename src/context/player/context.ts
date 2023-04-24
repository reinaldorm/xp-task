import React from 'react';

import type { Player, Task } from '../../types';

export interface PlayerContextProps {
  player: Player;
  loading: boolean;
  updatePlayerField: (player: Partial<Player>) => void;
  updatePlayerXP: (player: Player, xp: number) => void;
  resetPlayer: () => void;
  savePlayer: (player: Player) => void;
}

export const PlayerContext = React.createContext<PlayerContextProps | null>(null);

export const usePlayer = () => React.useContext(PlayerContext) as PlayerContextProps;
