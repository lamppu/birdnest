const parser = require('xml-js');

const fetchData = async (url) => {
    try {
        const response = await fetch(url);
        let data = null;
        if(response.status === 200) {
            const xmlData = await response.text();
    
            const options = {compact: true};
            data = parser.xml2js(xmlData, options);
        }
        return {
            status: response.status,
            data: data
        }
    } catch (error) {
        console.log(error);
        return {
            status: 400,
            data: null
        }
    }
}

module.exports = fetchData;