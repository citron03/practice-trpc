import Database from "better-sqlite3";

const db = new Database("database.db");

// 테이블 생성 (없으면 생성)
db.exec(`
  CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    text TEXT NOT NULL
  )
`);

export { db };
