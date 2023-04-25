import React from 'react';
import { PlayerContext } from './context';

import type { Player, Tutorial } from '../../types';

interface PlayerProviderProps {
  children: React.ReactNode;
}

export const PlayerProvider = ({ children }: PlayerProviderProps) => {
  const [loading, setLoading] = React.useState(true);
  const [player, setPlayer] = React.useState<Player>({
    level: 1,
    xp: 0,
    max_xp: 1000,
    new: true,
    tutorial: {
      active: true,
      step: 0,
    },
    tasks: [],
  });

  function savePlayer(player: Player) {
    localStorage.setItem('player', JSON.stringify(player));
  }

  function updatePlayerField(player: Partial<Player>) {
    setPlayer((old_player) => {
      const newPlayer = { ...old_player, ...player };
      savePlayer(newPlayer);

      return newPlayer;
    });
  }

  function updatePlayerLevel(player: Player, remainingXP: number) {
    updatePlayerField({
      level: player.level + 1,
      max_xp: player.max_xp + player.level * 250,
      xp: remainingXP,
    });
  }

  function updatePlayerXP(player: Player, xp: number) {
    const nextXP = player.xp + xp;

    if (nextXP >= player.max_xp) {
      const remainingXP = nextXP - player.max_xp;

      updatePlayerLevel(player, remainingXP);
    } else {
      updatePlayerField({
        xp: nextXP,
      });
    }
  }

  function updateTutorialField(tutorial: Partial<Tutorial>) {
    updatePlayerField({
      tutorial: {
        ...player.tutorial,
        ...tutorial,
      },
    });
  }

  function resetPlayer() {
    setLoading(true);

    setPlayer(() => {
      const newPlayer = {
        level: 1,
        xp: 0,
        max_xp: 1000,
        new: true,
        tutorial: {
          step: 0,
          active: false,
        },
        tasks: [],
      };

      savePlayer(newPlayer);
      return newPlayer;
    });

    setLoading(false);
  }

  React.useEffect(() => {
    setLoading(true);

    const player = localStorage.getItem('player');

    if (player) setPlayer(JSON.parse(player));

    setLoading(false);
  }, []);

  return (
    <PlayerContext.Provider
      value={{ player, loading, updatePlayerXP, updatePlayerField, updateTutorialField, savePlayer, resetPlayer }}>
      {children}
    </PlayerContext.Provider>
  );
};
