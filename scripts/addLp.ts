import { ethers } from 'hardhat';

async function main() {
  const v2Router = await ethers.getContractAt(
    'UniswapV2Router02',
    '0x6FF541E0E613d9ED730BAFB3c7472E7351f1FE05'
  );
  const testToken = {
    address: '0x67a0953033644A9ffB75a70906583fd7280e7248',
  };
  const weth = {
    address: '0x4200000000000000000000000000000000000023',
  };

  const tx = await v2Router.addLiquidityETH(
    testToken.address,
    ethers.parseEther('10000'),
    0,
    0,
    (
      await ethers.getSigners()
    )[0],
    9999999999,
    { value: ethers.parseEther('0.1') }
  );
  tx.wait();
  console.log(tx);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
