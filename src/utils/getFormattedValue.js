export default function getFormattedValue(time) {
  const minutes = Math.trunc(time / 60); // Diviser par 60 pour obtenir des minutes
  const seconds = time % 60; // Obtenir les secondes restantes après les minutes
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes; // Formatage à deux chiffres
  const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds; // Formatage à deux chiffres
  return `${formattedMinutes}:${formattedSeconds}`; // Retourner le temps formaté
}
