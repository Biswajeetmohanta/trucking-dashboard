import React from 'react';
import { Gift, ChevronRight } from 'lucide-react';
import styles from './RewardsPoints.module.css';

const RewardsPoints = () => {
  return (
    <div className={`card ${styles.rewardsCard} animate-fade-in delay-200`}>
      <div className={styles.header}>
        <div className={styles.titleContainer}>
          <Gift size={24} color="var(--accent-warning)" />
          <h2>Rewards Balance</h2>
        </div>
        <button className={styles.redeemBtn}>
          Redeem <ChevronRight size={16} />
        </button>
      </div>

      <div className={styles.pointsDisplay}>
        <span className={styles.points}>45,200</span>
        <span className={styles.pts}>PTS</span>
      </div>

      <div className={styles.progressContainer}>
        <div className={styles.progressHeader}>
          <span>Next Reward: $50 Fuel Card</span>
          <span>50,000 PTS</span>
        </div>
        <div className={styles.progressBar}>
          <div className={styles.progressFill} style={{ width: '90%' }}></div>
        </div>
        <p className={styles.progressText}>Only 4,800 points away! Complete 2 more trips.</p>
      </div>
    </div>
  );
};

export default RewardsPoints;
