import React from 'react';
import { LayoutDashboard, Gift, Map, Award, Settings, LogOut, Truck } from 'lucide-react';
import styles from './Sidebar.module.css';

const Sidebar = ({ activeTab, setActiveTab }) => {
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
          <li 
            className={`${styles.navItem} ${activeTab === 'dashboard' ? styles.active : ''}`}
            onClick={() => setActiveTab('dashboard')}
          >
            <LayoutDashboard size={20} />
            <span>Dashboard</span>
          </li>
          <li 
            className={`${styles.navItem} ${activeTab === 'trips' ? styles.active : ''}`}
            onClick={() => setActiveTab('trips')}
          >
            <Map size={20} />
            <span>My Trips</span>
          </li>
          <li 
            className={`${styles.navItem} ${activeTab === 'rewards' ? styles.active : ''}`}
            onClick={() => setActiveTab('rewards')}
          >
            <Gift size={20} />
            <span>Rewards</span>
          </li>
          <li 
            className={`${styles.navItem} ${activeTab === 'leaderboard' ? styles.active : ''}`}
            onClick={() => setActiveTab('leaderboard')}
          >
            <Award size={20} />
            <span>Leaderboard</span>
          </li>
          <li className={`${styles.navItem} ${styles.settingsItem}`}>
            <Settings size={20} />
            <span>Settings</span>
          </li>
          <li className={styles.navItem}>
            <LogOut size={20} />
            <span>Logout</span>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
