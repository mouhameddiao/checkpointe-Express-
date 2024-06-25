// middleware/workingHours.js
module.exports = function (req, res, next) {
    const date = new Date();
    const day = date.getDay(); // 0-6 (0 = Sunday, 6 = Saturday)
    const hour = date.getHours(); // 0-23
  
    // Vérifiez si c'est un jour de semaine (1-5) et si l'heure est entre 9 et 17
    if (day >= 1 && day <= 5 && hour >= 9 && hour < 17) {
      next();
    } else {
      res.send("L'application web n'est disponible que du lundi au vendredi, de 9h à 17h.");
    }
  };
  