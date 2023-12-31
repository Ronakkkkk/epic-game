const main = async () => {
    const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
    const gameContract = await gameContractFactory.deploy(
      ["Leo", "Rocket", "Pikachu"],       // Names
      ["https://i.imgur.com/pKd5Sdk.png", // Images
      "https://i.imgur.com/e9UBsyr.jpeg", 
      "https://i.imgur.com/WMB6g9u.png"],
      [100, 200, 300],                    // HP values
      [100, 50, 25]   ,   
      "Elon Musk", // Boss name
      "https://i.imgur.com/AksR0tt.png", // Boss image
      10000, // Boss hp
      50 // Boss attack damage                 // Attack damage values
    );
    await gameContract.deployed();
    console.log("Contract deployed to:", gameContract.address);
    
let txn;

txn = await gameContract.mintCharacterNFT(2);
await txn.wait();

txn = await gameContract.attackBoss();
await txn.wait();

txn = await gameContract.attackBoss();
await txn.wait();
console.log("done");
};
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  runMain();