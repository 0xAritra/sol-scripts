import { getOrCreateAssociatedTokenAccount } from "@solana/spl-token"

async function createTokenAccount(connection, signer, mint) {
  const tokenAccount = await getOrCreateAssociatedTokenAccount(
    connection,
    signer,
    mint,
    signer.publicKey
  )

  // console.log(tokenAccount)

  console.log(
    `Token Account: https://explorer.solana.com/address/${tokenAccount.address}?cluster=devnet`
  )

  return tokenAccount
}

export default createTokenAccount
