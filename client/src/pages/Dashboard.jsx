import { useEffect, useState } from "react";

const Dashboard = () => {
  const [data, setData] = useState({ goals: [], sessions: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await fetch("/api/dashboard", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) {
          throw new Error("Unauthorized");
        }

        const result = await res.json();
        setData(result);

      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboard();
  }, []);

  if (loading) return <div>Loading dashboard...</div>;

  return (
    <div>
      <h1>Dashboard</h1>

      <h2>Your Goals</h2>
      {data.goals.length === 0 ? (
        <p>No goals yet</p>
      ) : (
        <ul>
          {data.goals.map((goal) => (
            <li key={goal.id}>{goal.title}</li>
          ))}
        </ul>
      )}

      <h2>Recent Sessions</h2>
      {data.sessions.length === 0 ? (
        <p>No sessions logged</p>
      ) : (
        <ul>
          {data.sessions.map((session) => (
            <li key={session.id}>
              {session.duration} mins
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dashboard;