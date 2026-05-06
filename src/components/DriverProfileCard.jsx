import React from 'react';
import { Star, TrendingUp, ShieldCheck } from 'lucide-react';
import styles from './DriverProfileCard.module.css';

const DriverProfileCard = () => {
  return (
    <div className={`card ${styles.profileCard} animate-fade-in`}>
      <div className={styles.header}>
        <div className={styles.avatarContainer}>
          <img 
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200&h=200&auto=format&fit=crop" 
            alt="Driver Profile" 
            className={styles.avatar} 
          />
          <div className={styles.statusBadge}></div>
        </div>
        <div className={styles.info}>
          <h2>Alex Johnson</h2>
          <p className={styles.role}>Senior Carrier</p>
          <div className={styles.rating}>
            <Star size={16} fill="#f59e0b" color="#f59e0b" />
            <span>4.9</span>
            <span className={styles.reviews}>(124 trips)</span>
          </div>
        </div>
      </div>
      
      <div className={styles.divider}></div>
      
      <div className={styles.stats}>
        <div className={styles.statItem}>
          <div className={styles.statIcon} style={{ background: 'rgba(59, 130, 246, 0.1)', color: 'var(--accent-primary)' }}>
            <TrendingUp size={20} />
          </div>
          <div className={styles.statText}>
            <span className={styles.statLabel}>Level</span>
            <span className={styles.statValue}>Platinum</span>
          </div>
        </div>
        
        <div className={styles.statItem}>
          <div className={styles.statIcon} style={{ background: 'rgba(16, 185, 129, 0.1)', color: 'var(--accent-success)' }}>
            <ShieldCheck size={20} />
          </div>
          <div className={styles.statText}>
            <span className={styles.statLabel}>Safety Score</span>
            <span className={styles.statValue}>98/100</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DriverProfileCard;
