import React from 'react';
import Sidebar from './components/Sidebar';
import DriverProfileCard from './components/DriverProfileCard';
import StatsCards from './components/StatsCards';
import RewardsPoints from './components/RewardsPoints';
import ActivityTable from './components/ActivityTable';
import LeaderboardCard from './components/LeaderboardCard';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.appContainer}>
      <Sidebar />
      
      <main className={styles.mainContent}>
        <header className={styles.header}>
          <div>
            <h1 className={styles.pageTitle}>Dashboard</h1>
            <p className={styles.pageSubtitle}>Welcome back, Alex. You have 2 trips scheduled today.</p>
          </div>
        </header>

        <div className={styles.dashboardGrid}>
          {/* Top Row: Profile, Stats, Rewards */}
          <div className={styles.topRow}>
            <div className={styles.profileSection}>
              <DriverProfileCard />
            </div>
            <div className={styles.statsSection}>
              <StatsCards />
            </div>
            <div className={styles.rewardsSection}>
              <RewardsPoints />
            </div>
          </div>

          {/* Bottom Row: Activity Table, Leaderboard */}
          <div className={styles.bottomRow}>
            <div className={styles.activitySection}>
              <ActivityTable />
            </div>
            <div className={styles.leaderboardSection}>
              <LeaderboardCard />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
