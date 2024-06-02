const NFTs = []
function mintNFT (_name, _hairColor, _skintone,_jewel){
  const NFT= {
    "name": _name,
    "hairColor":  _hairColor ,
    "skintone":  _skintone,
    "jewel" : _jewel
  } 
  NFTs.push(NFT);
  console.log("Minted: "+_name);

}
function listNFTs (){
  for(let i =0; i<NFTs.length; i++) {
    console.log(NFTs[i]);
  }
}

function getTotalSupply(){
  console.log(NFTs.length);
}
mintNFT("Harry","Grey","Fair","Silver Chain");
listNFTs();
getTotalSupply();
