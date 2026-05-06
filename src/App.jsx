import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import DriverProfileCard from './components/DriverProfileCard';
import StatsCards from './components/StatsCards';
import RewardsPoints from './components/RewardsPoints';
import ActivityTable from './components/ActivityTable';
import LeaderboardCard from './components/LeaderboardCard';
import styles from './App.module.css';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const getPageTitle = () => {
    switch (activeTab) {
      case 'dashboard': return 'Dashboard';
      case 'trips': return 'My Trips';
      case 'rewards': return 'Rewards';
      case 'leaderboard': return 'Leaderboard';
      default: return 'Dashboard';
    }
  };

  const getPageSubtitle = () => {
    switch (activeTab) {
      case 'dashboard': return 'Welcome back, Alex. You have 2 trips scheduled today.';
      case 'trips': return 'View and manage your recent and upcoming trips.';
      case 'rewards': return 'Track your points and redeem rewards.';
      case 'leaderboard': return 'See where you stand among your peers.';
      default: return '';
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
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
        );
      case 'trips':
        return <ActivityTable />;
      case 'rewards':
        return (
          <div style={{ maxWidth: '600px' }}>
            <RewardsPoints />
          </div>
        );
      case 'leaderboard':
        return (
          <div style={{ maxWidth: '800px' }}>
            <LeaderboardCard />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className={styles.appContainer}>
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className={styles.mainContent}>
        <header className={styles.header}>
          <div>
            <h1 className={styles.pageTitle}>{getPageTitle()}</h1>
            <p className={styles.pageSubtitle}>{getPageSubtitle()}</p>
          </div>
        </header>

        {renderContent()}
      </main>
    </div>
  );
}

export default App;
