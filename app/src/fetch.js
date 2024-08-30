'use strict';

async function fetch(url, init) {
    const {default: fetch} = await import("node-fetch");
    return await fetch(url, init);
}


module.exports = {
fetch
};
