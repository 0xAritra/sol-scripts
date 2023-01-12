import {
  LAMPORTS_PER_SOL,
  PublicKey,
  sendAndConfirmTransaction,
  SystemProgram,
  Transaction,
} from "@solana/web3.js"

async function sendSol(connection, payer) {
  // to - set address
  const to = new PublicKey("8iNmDVNit6nafiudXvwFD7ix8FFRVtKtUehMvwq2epch")
  // amount (in SOL)
  const amount = 10

  const transaction = new Transaction()
  const instruction = SystemProgram.transfer({
    fromPubkey: payer.publicKey,
    toPubkey: to,
    lamports: LAMPORTS_PER_SOL * amount,
  })

  transaction.add(instruction)

  const transactionSignature = await sendAndConfirmTransaction(
    connection,
    transaction,
    [payer]
  )

  console.log(`Sent ${amount} SOL to ${to.toBase58()}`)
  console.log(
    `tx: https://explorer.solana.com/tx/${transactionSignature}?cluster=devnet`
  )
}

export default sendSol
