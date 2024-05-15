// Variables for NFTS.
let nfts = [];


// Function in taking some values and also creating a NFT object.
function mintNFT(name, creator, description, rarity) {
 
    let nft = {
        name: name,
        creator: creator,
        description: description,
        rarity: rarity
    };
    // Store the NFT to the nft Array.
    nfts.push(nft);
}


// A loop that will pass to the array of the NFT and also print the output.
function listNFTs() {
    for (let i = 0; i < nfts.length; i++) {
        console.log("NFT " + (i + 1) + ":");
        console.log("Name: " + nfts[i].name);
        console.log("Creator: " + nfts[i].creator);
        console.log("Description: " + nfts[i].description);
        console.log("Rarity: " + nfts[i].rarity);
        console.log("---------------------");
    }
}

// Printing the total output of NFTs.
function getTotalSupply() {
    return nfts.length;
}



// Minting NFTs but not all.
mintNFT("Art Piece #1", "Alice", "A beautiful piece of digital art", "Rare");
mintNFT("Art Piece #2", "Bob", "An amazing 3D model", "Epic");
mintNFT("Art Piece #3", "Charlie", "A stunning photograph", "Legendary");

// Print all NFTs.
listNFTs();

// Print the total number of NFTs.
console.log("Total NFTs Minted: " + getTotalSupply());
