import { LAMPORTS_PER_SOL } from "@solana/web3.js"

async function airdropSol(signer, connection) {
  const balance = await connection.getBalance(signer.publicKey)
  console.log("Current Balance 🤑:", balance / LAMPORTS_PER_SOL, "SOL")

  // can add a conditional - if SOL < 1 then do airdrop, otherwise dont?

  // amount to be airdropped
  const airdropAmount = 2

  console.log(`Airdropping ${airdropAmount} SOL...`)

  // tx signature
  const airdropSignature = await connection.requestAirdrop(
    signer.publicKey,
    LAMPORTS_PER_SOL * airdropAmount // 2 SOL maxm
  )

  const latestBlockhash = await connection.getLatestBlockhash()

  // confirm Tx
  await connection.confirmTransaction({
    blockhash: latestBlockhash.blockhash,
    lastValidBlockHeight: latestBlockhash.lastValidBlockHeight,
    signature: airdropSignature,
  })

  const newBalance = await connection.getBalance(signer.publicKey)
  // console.log(airdropSignature)
  console.log("New Balance 🤑:", newBalance / LAMPORTS_PER_SOL, "SOL")
}
export default airdropSol
