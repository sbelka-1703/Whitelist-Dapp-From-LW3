export default function handler(){
    //get the tokenId from the query params
    const tokenId = req.query.tokenId;
    // As the images are uploaded on github, we can extract the images from gihub directly.
    const image_url = 
    "https://raw.githubusercontent.com/LearnWeb3DAO/NFT-Collection/main/my-app/public/cryptodevs/"
    /* 
     -The api is sending back metadata for a Crypto Dev
     -To make our collection compatible with OpenSea, we need to follow some Metadata standards
      when sending back the respons from the api
    */
   res.status(200).json({
       name: "Crypto Dev #" + tokenId,
       description: "Crypto Dev is a collection of developers in crypto",
       image: image_url + tokenId + ".svg"
   });
}