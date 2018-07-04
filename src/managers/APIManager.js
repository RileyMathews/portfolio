/* 
    module: api manager
    purpose: to handle interactions with the api
    author: Riley Mathews
*/

import url from "./APISettings"

// declare object
const APIManager = Object.create(null, {
    // function for getting all items in a collection
    get: {
        value: function (collection) {
            return fetch(`${url}${collection}`)
        }
    }
})

export default APIManager