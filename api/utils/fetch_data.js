const parser = require('xml-js');

const fetchData = async (url, mode) => {
    try {
        const response = await fetch(url);
        
        let data = null;
        if(response.status === 200) {
            const resData = await response.text();

            if(mode === "XML") {
                const options = {compact: true};
                data = parser.xml2js(resData, options);
            } else if (mode === "JSON") {
                data = JSON.parse(resData);
            }
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