// js基础：字符串的常用方法和技巧（上）

// at(index)
// 接收一个参数index，必须，参数合法值为(string.length - 1) * -1 ~ string.length - 1，返回字符串下标为index的字符,如果index为负数则从右往左查询
'String'.at(2) // r
'String'.at(-2) // n

// charAt(index)
// 接收一个参数index，必须，参数合法值为0 ~ string.length - 1，返回字符串下标为index的字符,使用方法与at()差不多，但是参数只能是正整数
'String'.charAt(2) // r

// charCodeAt(index)
// 接收一个参数index，必须，参数合法值为0 ~ string.length - 1，返回字符串下标为index的字符的Unicode值,如果传入参数位置没有字符，则返回NaN,使用方法与charAt()差不多，但是返回值是Unicode
'String'.charCodeAt(2) // 114
console.log('String'.charCodeAt(8)) // NaN

// codePointAt(index)
// 接收一个参数index，必须，参数合法值为0 ~ string.length - 1，返回字符串下标为index的字符的Unicode值,如果传入参数位置没有字符，则返回undefind,使用方法与charCodeAt()差不多，但是返回值是Unicode
'String'.codePointAt(2) // 114
console.log('String'.codePointAt(8)) // undefind

// concat(str)
// 接收一个字符串为参数，必须，返回原字符串与参数的拼接
'Str'.concat('ing') // String

// endsWith(str)
// 接收一个字符串为参数，必须，如果字符串是以传入参数结尾的则返回true，否则返回false
'String'.endsWith('ing') // true
'String'.endsWith('Str') // false

// includes(str,start)
// 接收两个参数：str:字符串、必须,start:数字、非必须、合法值为0 ~ string.length - 1，如果字符串索引在start后面含有str则返回true，否则返回false
'String'.includes('tr') // true
'String'.includes('tr', 1) // true
'String'.includes('tr', 3) // false
'String'.includes('td') // false

// indexOf(str,start)
// 接收两个参数：str:字符串、必须,start:数字、非必须、合法值为0 ~ string.length - 1，如果字符串索引在start后面含有str则返回str所在位置的索引，否则返回-1
'String'.indexOf('tr') // 1
'String'.indexOf('ri', 1) // 2
'String'.indexOf('tr', 2) // -1
'String'.indexOf('td') // -1

// lastIndexOf(str)
// 接收一个参数：str:字符串、必须，如果字符串中含有str则返回最后一个str所在位置的索引，否则返回-1
'abcdabcd'.lastIndexOf('ab') // 4

// localeCompare(str)
// 接收一个参数：str:字符串、必须，从左往右对比两个字符串，字符串与传入参数相同下标的值相互比较，如果字符串的值在传入参数的值后面，则返回1，如果在前面则返回-1，如果相同则比较后面，如果两个字符串完全相同则返回0（'b'在'a'后面，以此类推）
'a'.localeCompare('a') // 0
'a'.localeCompare('b') // -1
'b'.localeCompare('a') // 1
'ab'.localeCompare('aa') // 1

// match(str | rgx)
// 接收一个参数：str | rgx:字符串或者正则表达式、必须，如果字符串中含有传入的字符串或者能匹配上传入的正则表达式，则返回一个数组,否则返回null
'string'.match('tr') // [ 'tr', index: 1, input: 'string', groups: undefined ]
'string'.match(/s*/) // [ 's', index: 0, input: 'string', groups: undefined ]
'string'.match('tt') // null
'string'.match(/ss/) // null

// matchAll(str | rgx)
// 接收一个参数：str | rgx:字符串或者正则表达式(必须是全局的)、必须，返回一个可迭代的对象，对象中包含了匹配的数组
'abcabcabd'.matchAll('ab').next()
'abcabcabd'.matchAll(/ab/g)
'abcabcabd'.matchAll('aa')
'abcabcabd'.matchAll(/aa/g)

// padEnd(length,str)
// 接收两个参数：length：长度，str：字符串，返回一个原字符串与传入字符串的拼接,传入字符串拼接在原字符串后面，传入字符串一直重复直到字符串长度与传入长度相同，如果传入长度比原本长度小，则返回原字符串
'string'.padEnd(5, 'a') //string
'string'.padEnd(10, 'a') //stringaaaa
'string'.padEnd(11, 'ab') //stringababa

// padStart(length,str)
// 接收两个参数：length：长度，str：字符串，返回一个原字符串与传入字符串的拼接,传入字符串拼接在原字符串前面，传入字符串一直重复直到字符串长度与传入长度相同，如果传入长度比原本长度小，则返回原字符串
'string'.padStart(5, 'a') //string
'string'.padStart(10, 'a') //aaaastring
'string'.padStart(11, 'ab') //ababastring

// repeat(count)
// 接收一个参数：count：次数，返回一个原字符串重复count次数的字符串
'string'.repeat(2) //stringstring
