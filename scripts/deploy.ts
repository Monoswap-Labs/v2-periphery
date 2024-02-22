import { ethers } from 'hardhat';

async function main() {
  const v2Factory = {
    address: '0xA5fE9cF5C76b35Ad36E1Af07F4a8Ce5b0b19346F',
  };
  const weth = {
    address: '0x4200000000000000000000000000000000000023',
  };
  const monoswapV2Router02 = await ethers.deployContract('MonoswapV2Router02', [
    v2Factory.address,
    weth.address,
  ]);

  console.log(
    `MonoswapV2Router02 deployed to: ${await monoswapV2Router02.getAddress()} "${
      v2Factory.address
    }" "${weth.address}"`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
