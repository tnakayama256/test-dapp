export default function handler(req, res) {
    const tokenId = req.query.tokenId
    const image_url =
        'https://raw.githubusercontent.com/tnakayama256/test-dapp/main/public/metadatas/'
    res.status(200).json({
        name: 'NFT Ticket #' + tokenId,
        description: 'mktsherman',
        image: image_url + 'mkt.png',
    })
}
