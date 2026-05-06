import React from 'react';
import { Trophy, ChevronUp, Minus } from 'lucide-react';
import styles from './LeaderboardCard.module.css';

const leaderboardData = [
  { rank: 1, name: 'Sarah Miller', points: '124,500', trend: 'up' },
  { rank: 2, name: 'Alex Johnson', points: '118,200', trend: 'up', isCurrentUser: true },
  { rank: 3, name: 'Mike Davis', points: '115,800', trend: 'same' },
  { rank: 4, name: 'Emma Wilson', points: '109,400', trend: 'up' },
  { rank: 5, name: 'David Brown', points: '102,100', trend: 'down' },
];

const LeaderboardCard = () => {
  return (
    <div className={`card ${styles.leaderboardCard} animate-fade-in delay-400`}>
      <div className={styles.header}>
        <div className={styles.titleContainer}>
          <Trophy size={20} color="var(--accent-warning)" />
          <h2>Fleet Leaderboard</h2>
        </div>
      </div>
      
      <div className={styles.list}>
        {leaderboardData.map((driver) => (
          <div key={driver.rank} className={`${styles.listItem} ${driver.isCurrentUser ? styles.highlighted : ''}`}>
            <div className={styles.rankContainer}>
              <span className={styles.rank}>{driver.rank}</span>
              {driver.trend === 'up' && <ChevronUp size={14} color="var(--accent-success)" />}
              {driver.trend === 'same' && <Minus size={14} color="var(--text-muted)" />}
              {driver.trend === 'down' && <ChevronUp size={14} color="var(--accent-danger)" className={styles.trendDown} />}
            </div>
            
            <div className={styles.driverInfo}>
              <div className={styles.avatar}>
                {driver.name.charAt(0)}
              </div>
              <span className={styles.name}>{driver.name} {driver.isCurrentUser && '(You)'}</span>
            </div>
            
            <div className={styles.points}>{driver.points} pts</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeaderboardCard;
