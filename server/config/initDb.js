import pg from "pg";
import dotenv from "dotenv";
dotenv.config({ path: "F:\\Projects\\CodePath\\Web103\\web103_finalproject\\server\\.env" });
console.log("DATABASE_URL =", process.env.DATABASE_URL);
const { Client } = pg;

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    require: true,
    rejectUnauthorized: false
  }
});

async function initDB() {
  try {
    await client.connect();

    console.log("🔄 Creating tables...");

    // USERS
    await client.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        email TEXT UNIQUE NOT NULL,
        password_hash TEXT NOT NULL,
        created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
      );
    `);

    // STUDY GOALS
    await client.query(`
      CREATE TABLE IF NOT EXISTS study_goals (
        id SERIAL PRIMARY KEY,
        user_id INTEGER NOT NULL,
        title TEXT NOT NULL,
        description TEXT,
        target_hours DECIMAL,
        status TEXT DEFAULT 'active',
        created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE
      );
    `);

    // SUBJECTS
    await client.query(`
      CREATE TABLE IF NOT EXISTS subjects (
        id SERIAL PRIMARY KEY,
        name TEXT UNIQUE NOT NULL
      );
    `);

    // GOAL_SUBJECTS
    await client.query(`
      CREATE TABLE IF NOT EXISTS goal_subjects (
        goal_id INTEGER NOT NULL,
        subject_id INTEGER NOT NULL,
        PRIMARY KEY (goal_id, subject_id),
        FOREIGN KEY(goal_id) REFERENCES study_goals(id) ON DELETE CASCADE,
        FOREIGN KEY(subject_id) REFERENCES subjects(id) ON DELETE CASCADE
      );
    `);

    // STUDY SESSIONS
    await client.query(`
      CREATE TABLE IF NOT EXISTS study_sessions (
        id SERIAL PRIMARY KEY,
        goal_id INTEGER NOT NULL,
        duration_minutes INTEGER NOT NULL,
        notes TEXT,
        logged_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY(goal_id) REFERENCES study_goals(id) ON DELETE CASCADE
      );
    `);

    console.log("✅ All tables created successfully!");
    
    console.log("Print tables to verify:");

    const tables = await client.query(`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public';
    `);

    console.log("📋 Tables:");
    console.table(tables.rows);

    const columns = await client.query(`
      SELECT table_name, column_name, data_type, is_nullable
      FROM information_schema.columns
      WHERE table_schema = 'public'
      ORDER BY table_name, ordinal_position;
    `);

    console.log("📊 Columns:");
    console.table(columns.rows);

    const usersTable = await client.query(`
      SELECT column_name, data_type
      FROM information_schema.columns
      WHERE table_name = 'users';
    `);

    console.log("👤 Users table:");
    console.table(usersTable.rows);

    await client.end();
  } catch (err) {
    console.error("❌ Error creating tables:", err);
    process.exit(1);
  }
}

initDB();