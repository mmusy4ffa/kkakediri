const bcrypt = require('bcryptjs');

async function createAdmin() {
  const password = 'admin123';
  const hashedPassword = await bcrypt.hash(password, 10);
  console.log('Password:', password);
  console.log('Hashed:', hashedPassword);
  console.log(
    "SQL: INSERT INTO admins (username, password) VALUES ('admin', '" + hashedPassword + "');"
  );
}

createAdmin();
