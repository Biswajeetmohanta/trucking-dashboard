import React from 'react';
import { MapPin, CheckCircle2, Clock } from 'lucide-react';
import styles from './ActivityTable.module.css';

const activities = [
  { id: 'TRP-892', origin: 'Chicago, IL', dest: 'Dallas, TX', date: 'Today, 10:30 AM', status: 'Completed', miles: 924, points: 150 },
  { id: 'TRP-891', origin: 'Detroit, MI', dest: 'Chicago, IL', date: 'Yesterday', status: 'Completed', miles: 283, points: 45 },
  { id: 'TRP-890', origin: 'Cleveland, OH', dest: 'Detroit, MI', date: 'Oct 12, 2023', status: 'Completed', miles: 169, points: 25 },
  { id: 'TRP-889', origin: 'Pittsburgh, PA', dest: 'Cleveland, OH', date: 'Oct 10, 2023', status: 'Delayed', miles: 133, points: 20 },
];

const ActivityTable = () => {
  return (
    <div className={`card ${styles.tableCard} animate-fade-in delay-300`}>
      <div className={styles.header}>
        <h2>Recent Activity</h2>
        <button className={styles.viewAllBtn}>View All</button>
      </div>

      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.tripId}>Trip ID</th>
              <th>Route</th>
              <th className={styles.date}>Date</th>
              <th>Status</th>
              <th className={`${styles.rightAlign} ${styles.miles}`}>Miles</th>
              <th className={styles.rightAlign}>Points</th>
            </tr>
          </thead>
          <tbody>
            {activities.map((activity) => (
              <tr key={activity.id} className={styles.tableRow}>
                <td data-label="Trip ID" className={styles.tripId}>{activity.id}</td>
                <td data-label="Route">
                  <div className={styles.route}>
                    <MapPin size={14} className={styles.routeIcon} />
                    <span>{activity.origin} <span className={styles.arrow}>→</span> {activity.dest}</span>
                  </div>
                </td>
                <td data-label="Date" className={styles.date}>{activity.date}</td>
                <td data-label="Status">
                  <span className={`${styles.badge} ${activity.status === 'Completed' ? styles.badgeSuccess : styles.badgeWarning}`}>
                    {activity.status === 'Completed' ? <CheckCircle2 size={12} /> : <Clock size={12} />}
                    {activity.status}
                  </span>
                </td>
                <td data-label="Miles" className={`${styles.rightAlign} ${styles.miles}`}>{activity.miles}</td>
                <td data-label="Points" className={`${styles.rightAlign} ${styles.points}`}>+{activity.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ActivityTable;
