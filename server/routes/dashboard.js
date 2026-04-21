const express = require("express");
const router = express.Router();
const pool = require("../db");
const auth = require("../middleware/auth");

// GET dashboard data
router.get("/", auth, async (req, res) => {
  try {
    const userId = req.user.id;

    // Example: fetch goals
    const goals = await pool.query(
      "SELECT * FROM goals WHERE user_id = $1 ORDER BY created_at DESC",
      [userId]
    );

    // Example: fetch sessions
    const sessions = await pool.query(
      "SELECT * FROM sessions WHERE user_id = $1 ORDER BY created_at DESC",
      [userId]
    );

    res.json({
      goals: goals.rows,
      sessions: sessions.rows,
    });

  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;