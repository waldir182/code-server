let exp = {
  Function: /(?:.+?(?=\((.+)?\)))/g,
  String: /(\"(.+)?\")/g,
  Number: /./g,
  Symbol: /./g,
  Comment: /./g
}

export default exp;