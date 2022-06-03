import mysql2 from 'mysql2'

const createConnection = mysql2.createConnection({
  host: "localhost",
  user: "root",
  password: "Leo175033",
  database:"db_esportebit"
})
createConnection.connect((err) => {
  if (err) {
    console.log("Error occurred", err);
  } else {
    console.log("Connected to MySQL Server");
  }
});

export {createConnection}