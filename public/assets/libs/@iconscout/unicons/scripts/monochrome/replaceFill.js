const SVGO = require('svgo')
const svgoOptions = require('./svgoOptions')

const COLOR_CLASS = {
  'fill="#6563ff"': 'className="uim-primary"',
  'fill="#8c8aff"': 'className="uim-secondary"',
  'fill="#b2b1ff"': 'className="uim-tertiary"',
  'fill="#d8d8ff"': 'className="uim-quaternary"',
  'fill="#ffffff"': 'className="uim-quinary"',
  'fill="#fff"': 'className="uim-quinary"',
}

const replaceFillWithClass = async (svg, name) => {
  // Parse it via SVGO
  let processedSVG = await processSVG(svg)
  const hexList = processedSVG.match(/(fill=\"\#)([A-F0-9a-f]{3,6})\"/gi)

  if (hexList) {
    hexList.forEach(hex => {
      // console.log(COLOR_CLASS[hex])
      if (COLOR_CLASS[hex]) {
        processedSVG = processedSVG.replace(hex, COLOR_CLASS[hex])
      } else {
        console.error(`Unidentified Color found: ${name}: ${hex}`)
      }
    })

    return processedSVG
  } else {
    throw new Error(`No Colors found: ${name}`)
  }
}

const processSVG = async (data) => {
  const svgo = new SVGO(svgoOptions)
  const result = await new Promise ((resolve, reject) => {
    svgo.optimize(data).then(function(result) {
      resolve(result)
    })
  })
  return result.data
}

module.exports = replaceFillWithClass
