module.exports = {
	outputDir : './build',
	productionSourceMap: false,
  	publicPath: process.env.NODE_ENV === 'production'
    	? '/simple-template-vuejs/'
    	: '/'
}
