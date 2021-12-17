//With axios, the promise comes back complete and parsed.
const bitPriceText = document.querySelector('#bit-price-text');
const ethPriceText = document.querySelector('#eth-price-text');
const litPriceText = document.querySelector('#lit-price-text');

const getBitPrice = async () => {
    try{
        const data = await axios.get('https://api.cryptonator.com/api/full/btc-usd');
        const bitCoinPrice = parseFloat(data.data.ticker.price).toFixed(2);
        let commas = bitCoinPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        bitPriceText.innerHTML = `Price: $${commas}`; 
    }
    catch(e){
        console.log(e);
    }
}

const getEthPrice = async () => {
    const data = await axios.get('https://api.cryptonator.com/api/ticker/eth-usd');
    const ethCoinPrice = parseFloat(data.data.ticker.price).toFixed(2);
    let commas = ethCoinPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    ethPriceText.innerHTML = `Price: $${commas}`; 

}

const getLitPrice = async () => {
    const data = await axios.get('https://api.cryptonator.com/api/ticker/ltc-usd');
    const litCoinPrice = parseFloat(data.data.ticker.price).toFixed(2);
    let commas = litCoinPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    litPriceText.innerText =  `Price: $${commas}`;
}

getBitPrice();
getEthPrice();
getLitPrice();