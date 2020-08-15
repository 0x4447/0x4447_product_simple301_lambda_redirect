//
//  This lambda sends a redirect message to the browser that visited the URL.
//
exports.handler = (event) => {

    return new Promise(function(resolve, reject) {

        //
        //  1.  Respond with a redirect.
        //
        return resolve({
            statusCode: 301,
            headers: {
                Location: process.env.URL
            }
        });

    });

};