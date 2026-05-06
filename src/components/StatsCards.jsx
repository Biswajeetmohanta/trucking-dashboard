import React from 'react';
import { Route, Package, CalendarClock, Zap } from 'lucide-react';
import styles from './StatsCards.module.css';

const StatCard = ({ title, value, icon, trend, isPositive, delayClass }) => (
  <div className={`card ${styles.statCard} animate-fade-in ${delayClass}`}>
    <div className={styles.header}>
      <span className={styles.title}>{title}</span>
      <div className={styles.iconWrapper}>{icon}</div>
    </div>
    <div className={styles.content}>
      <h3 className={styles.value}>{value}</h3>
      <div className={`${styles.trend} ${isPositive ? styles.positive : styles.negative}`}>
        {trend}
      </div>
    </div>
  </div>
);

const StatsCards = () => {
  return (
    <div className={styles.grid}>
      <StatCard 
        title="Total Miles" 
        value="12,450" 
        icon={<Route size={20} color="var(--accent-primary)" />} 
        trend="+8% this month"
        isPositive={true}
        delayClass="delay-100"
      />
      <StatCard 
        title="Deliveries" 
        value="142" 
        icon={<Package size={20} color="var(--accent-success)" />} 
        trend="+12% this month"
        isPositive={true}
        delayClass="delay-200"
      />
      <StatCard 
        title="On-Time Rate" 
        value="98.5%" 
        icon={<CalendarClock size={20} color="var(--accent-warning)" />} 
        trend="-0.5% this month"
        isPositive={false}
        delayClass="delay-300"
      />
      <StatCard 
        title="Energy Score" 
        value="A+" 
        icon={<Zap size={20} color="#8b5cf6" />} 
        trend="Top 5% fleet"
        isPositive={true}
        delayClass="delay-400"
      />
    </div>
  );
};

export default StatsCards;
