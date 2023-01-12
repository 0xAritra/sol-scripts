import { createMint } from "@solana/spl-token"

async function createNewMint(connection, signer) {
  const tokenMint = await createMint(
    connection,
    signer,
    // same as signer?
    signer.publicKey,
    signer.publicKey,
    9
  )
  console.log(
    `token mint: https://explorer.solana.com/address/${tokenMint}?cluster=devnet`
  )
  return tokenMint
}

export default createNewMint
