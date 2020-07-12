const timeText = {
  SECONDS: {
    sing: 'agora',
    plural: 'agora'
  },
  MINUTES: {
    sing: 'minuto',
    plural: 'minutos'
  },
  HOURS: {
    sing: 'hora',
    plural: 'horas'
  },
  DAYS: {
    sing: 'dia',
    plural: 'dias'
  },
  MONTHS: {
    sing: 'mês',
    plural: 'meses'
  },
}

export default time => {
  let currentTime = Date.now()/1000 - time

  // Seconds
  if (currentTime < 60) {
    return 'agora'
  }
  
  currentTime /= 60
  
  // Minutes
  if (currentTime < 60) {
    return `${Number.parseInt(currentTime)} ${timeText.MINUTES[currentTime > 1 ? 'sing':'plural']}`
  }

  currentTime /= 60

  // Hours
  if (currentTime < 24) {
    return `${Number.parseInt(currentTime)} ${timeText.HOURS[currentTime > 1 ? 'sing':'plural']}`
  }
  
  currentTime /= 24

  // Days
  if (currentTime < 30) {
    return `${Number.parseInt(currentTime)} ${timeText.DAYS[currentTime > 1 ? 'sing':'plural']}`
  }

  currentTime /= 30

  // Months
  return `${Number.parseInt(currentTime)} ${timeText.MONTHS[currentTime > 1 ? 'sing':'plural']}`
}
