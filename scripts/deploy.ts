import { ethers } from 'hardhat';

async function main() {
  const [deployer] = await ethers.getSigners();
  const v2Factory = {
    address: '0x3Ff3AC9d1423e6a07cc0891500983F924dDFBffb',
  };
  const weth = {
    address: '0x4200000000000000000000000000000000000023',
  };
  const blast = {
    address: '0x4300000000000000000000000000000000000002',
  };
  const monoswapV2Router02 = await ethers.deployContract('MonoswapV2Router02', [
    v2Factory.address,
    weth.address,
    blast.address,
    deployer.address,
  ]);

  console.log(
    `MonoswapV2Router02 deployed to: ${await monoswapV2Router02.getAddress()} "${
      v2Factory.address
    }" "${weth.address}" "${blast.address}" "${deployer.address}"`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
