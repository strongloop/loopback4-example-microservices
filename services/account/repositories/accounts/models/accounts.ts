export class Accounts {
  accountNumber: string
  customerNumber: string
  balance: number
  branch: string
  avgBalance: number
  minimumBalance: number

  constructor(data: Partial<Accounts>) {
     Object.assign(this, data);  
  }
}
