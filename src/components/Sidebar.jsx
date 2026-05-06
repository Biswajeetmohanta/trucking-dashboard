import React from 'react';
import { LayoutDashboard, Gift, Map, Award, Settings, LogOut, Truck } from 'lucide-react';
import styles from './Sidebar.module.css';

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.logoContainer}>
        <div className={styles.logoIcon}>
          <Truck size={24} color="#fff" />
        </div>
        <h1 className={styles.logoText}>HaulRewards</h1>
      </div>

      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={`${styles.navItem} ${styles.active}`}>
            <LayoutDashboard size={20} />
            <span>Dashboard</span>
          </li>
          <li className={styles.navItem}>
            <Map size={20} />
            <span>My Trips</span>
          </li>
          <li className={styles.navItem}>
            <Gift size={20} />
            <span>Rewards</span>
          </li>
          <li className={styles.navItem}>
            <Award size={20} />
            <span>Leaderboard</span>
          </li>
        </ul>
      </nav>

      <div className={styles.bottomNav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Settings size={20} />
            <span>Settings</span>
          </li>
          <li className={styles.navItem}>
            <LogOut size={20} />
            <span>Logout</span>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
