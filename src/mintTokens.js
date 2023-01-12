import { mintTo } from "@solana/spl-token"

async function mintTokens(connection, signer, mint, to, amount) {
  const transactionSignature = await mintTo(
    connection,
    signer,
    mint,
    to,
    signer,
    amount
  )

  console.log(
    `Mint Token Transaction: https://explorer.solana.com/tx/${transactionSignature}?cluster=devnet`
  )
}

export default mintTokens
