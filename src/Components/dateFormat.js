const englishFormat = {
  defaultFormat: 'MMDDYYYY',
  div: ' / ',
  useMonthName: true
}

const spanishFormat = {
  defaultFormat: 'DDMMYYYY',
  div: [' de ', ' del '],
  useMonthName: true,
  months: [
    'Enero', 'Febrero', 'Marzo',
    'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre',
    'Octubre', 'Noviembre ', 'Diciembre'
  ]
}

export {
  englishFormat,
  spanishFormat
}
