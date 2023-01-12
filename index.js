import { Connection, clusterApiUrl, PublicKey } from "@solana/web3.js"
import { getMint } from "@solana/spl-token"

import initializeKeypair from "./src/initializeKey.js"
import airdropSol from "./src/airdropSol.js"
import pingProgram from "./src/pingProgram.js"
import sendSol from "./src/sendSol.js"
import createNewMint from "./src/createNewMint.js"
import createTokenAccount from "./src/createTokenAccount.js"
import mintTokens from "./src/mintTokens.js"

async function main() {
  const connection = new Connection(clusterApiUrl("devnet"), "confirmed") // devnet connection

  const signer = await initializeKeypair(connection) // passing the connection for the airdrop

  // await airdropSol(signer, connection) // can be done when initializing key too

  // await pingProgram(connection, signer)

  // await sendSol(connection, signer)

  // const mint = await createNewMint(connection, signer)

  const mintInfo = await getMint(
    connection,
    // mint
    new PublicKey("DxBLABFJ6uBeZvXyXZNToUmFsjang1TxH7WtJ9CTFRM2")
  )

  const tokenAccount = await createTokenAccount(
    connection,
    signer,
    // mint
    new PublicKey("DxBLABFJ6uBeZvXyXZNToUmFsjang1TxH7WtJ9CTFRM2")
  )

  const noOfTokens = 100

  await mintTokens(
    connection,
    signer,
    // mint,
    new PublicKey("DxBLABFJ6uBeZvXyXZNToUmFsjang1TxH7WtJ9CTFRM2"),
    tokenAccount.address,
    noOfTokens * 10 ** mintInfo.decimals
  )
}

main()
  .then(() => {
    console.log("main: finished successfully")
    process.exit(0)
  })
  .catch((err) => {
    console.log(err)
    process.exit(1)
  })
