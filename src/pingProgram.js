import {
  PublicKey,
  sendAndConfirmTransaction,
  Transaction,
  TransactionInstruction,
} from "@solana/web3.js"

async function pingProgram(connection, payer) {
  const PROGRAM_ID = new PublicKey(
    "ChT1B39WKLS8qUrkLvFDXMhEJ4F1XZzwUNHUt4AU9aVa"
  )
  const PROGRAM_DATA_PUBLIC_KEY = new PublicKey(
    "Ah9K7dQ8EHaZqcAsgBW8w37yN2eAy3koFmUn4x3CJtod"
  )

  // tx
  const transaction = new Transaction()

  // instruction
  const instruction = new TransactionInstruction({
    // keys of accounts to r/w
    keys: [
      {
        pubkey: PROGRAM_DATA_PUBLIC_KEY,
        isSigner: false,
        isWritable: true,
      },
    ],
    // id of program to send the tx
    programId: PROGRAM_ID,
    // data - none in this tx
  })

  // add instruction to transaction
  transaction.add(instruction)
  //
  const transactionSignature = await sendAndConfirmTransaction(
    connection,
    transaction,
    [payer]
  )
  console.log(
    `tx: https://explorer.solana.com/tx/${transactionSignature}?cluster=devnet`
  )
}

export default pingProgram
