import { ethers } from 'hardhat';

async function main() {
  const [deployer] = await ethers.getSigners();

  const v2Router = await ethers.getContractAt(
    'MonoswapV2Router02',
    '0x544f4F5C2C9Df8fb524Df97A5bEC54890034eed6'
  );
  const mono = await ethers.getContractAt(
    'ERC20',
    '0xa07aC8cDe2a98B189477b8e41F0c2Ea6CdDbC055'
  );
  const weth = await ethers.getContractAt(
    'WETH9',
    '0x4200000000000000000000000000000000000023'
  );
  console.log('approve mono');
  console.log(
    (
      await mono.approve(
        await v2Router.getAddress(),
        ethers.parseEther('1000000')
      )
    ).hash
  );
  const tx = await v2Router.addLiquidityETH(
    await mono.getAddress(),
    ethers.parseEther('10000'),
    0,
    0,
    (
      await ethers.getSigners()
    )[0],
    9999999999,
    { value: ethers.parseEther('5') }
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
