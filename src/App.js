import Web3 from 'web3';
import './App.css';
import React from 'react';
import { Wheel } from 'react-custom-roulette';
import 'bootstrap/dist/css/bootstrap.min.css';
import chip1 from "./img/chip1.png";
import chip5 from "./img/chip5.png";
import chip10 from "./img/chip10.png";
import chip20 from "./img/chip20.png";
import chip50 from "./img/chip50.png";
import chip100 from "./img/chip100.png";
import chip500 from "./img/chip500.png";
import chip1K from "./img/chip1K.png";
import chip2K from "./img/chip2K.png";
import chip5K from "./img/chip5K.png";
import blocquetteTitle from "./img/blocquette.png";
import Blocquette from './blocquette.json'
import { Button, ButtonGroup, ToggleButton, Spinner, Table } from 'react-bootstrap';

const data = [
  { option: '0', style: { backgroundColor: 'green', textColor: 'white' } },
  { option: '32', style: { backgroundColor: 'red' } },
  { option: '15', style: { backgroundColor: 'black' } },
  { option: '19', style: { backgroundColor: 'red' } },
  { option: '4', style: { backgroundColor: 'black' } },
  { option: '21', style: { backgroundColor: 'red' } },
  { option: '2', style: { backgroundColor: 'black' } },
  { option: '25', style: { backgroundColor: 'red' } },
  { option: '17', style: { backgroundColor: 'black' } },
  { option: '34', style: { backgroundColor: 'red' } },
  { option: '6', style: { backgroundColor: 'black' } },
  { option: '27', style: { backgroundColor: 'red' } },
  { option: '13', style: { backgroundColor: 'black' } },
  { option: '36', style: { backgroundColor: 'red' } },
  { option: '11', style: { backgroundColor: 'black' } },
  { option: '30', style: { backgroundColor: 'red' } },
  { option: '8', style: { backgroundColor: 'black' } },
  { option: '23', style: { backgroundColor: 'red' } },
  { option: '10', style: { backgroundColor: 'black' } },
  { option: '5', style: { backgroundColor: 'red' } },
  { option: '24', style: { backgroundColor: 'black' } },
  { option: '16', style: { backgroundColor: 'red' } },
  { option: '33', style: { backgroundColor: 'black' } },
  { option: '1', style: { backgroundColor: 'red' } },
  { option: '20', style: { backgroundColor: 'black' } },
  { option: '14', style: { backgroundColor: 'red' } },
  { option: '31', style: { backgroundColor: 'black' } },
  { option: '9', style: { backgroundColor: 'red' } },
  { option: '22', style: { backgroundColor: 'black' } },
  { option: '18', style: { backgroundColor: 'red' } },
  { option: '29', style: { backgroundColor: 'black' } },
  { option: '7', style: { backgroundColor: 'red' } },
  { option: '28', style: { backgroundColor: 'black' } },
  { option: '12', style: { backgroundColor: 'red' } },
  { option: '35', style: { backgroundColor: 'black' } },
  { option: '3', style: { backgroundColor: 'red' } },
  { option: '26', style: { backgroundColor: 'black' } },
]

const chips = [
  { name: '1', value: '1' },
  { name: '5', value: '2' },
  { name: '10', value: '3' },
  { name: '20', value: '4' },
  { name: '50', value: '5' },
  { name: '100', value: '6' },
  { name: '500', value: '7' },
  { name: '1K', value: '8' },
  { name: '2K', value: '9' },
  { name: '5K', value: '10' },
];

function SpinButton(props) {

  return (
    <Button
        variant="warning"
        disabled={props.isSpinning}
        onClick={!props.isSpinning ? props.onClick : null}
        size="lg"
    >
        {props.isSpinning &&
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>}
        {!props.isSpinning &&'SPIN'}
    </Button>
    );  
}

function ChipButtons(props) {

  return (
    <ButtonGroup toggle vertical={false}>
      
      <ToggleButton
        key={0}
        type="radio"
        variant="secondary"
        name="radio"
        value={chips[0].value}
        checked={props.selectedChip === chips[0].value}
        onChange={(e) => props.handleChipSelect(e.currentTarget.value)}
      >
        {props.selectedChip !== chips[0].value && <img src={chip1} className="chip"/>}
        {props.selectedChip === chips[0].value && <img src={chip1} className="chip-selected"/>}
      </ToggleButton>

      <ToggleButton
        key={1}
        type="radio"
        variant="secondary"
        name="radio"
        value={chips[1].value}
        checked={props.selectedChip === chips[1].value}
        onChange={(e) => props.handleChipSelect(e.currentTarget.value)}
      >
        {props.selectedChip !== chips[1].value && <img src={chip5} className="chip"/>}
        {props.selectedChip === chips[1].value && <img src={chip5} className="chip-selected"/>}
      </ToggleButton>

      <ToggleButton
        key={2}
        type="radio"
        variant="secondary"
        name="radio"
        value={chips[2].value}
        checked={props.selectedChip === chips[2].value}
        onChange={(e) => props.handleChipSelect(e.currentTarget.value)}
      >
        {props.selectedChip !== chips[2].value && <img src={chip10} className="chip"/>}
        {props.selectedChip === chips[2].value && <img src={chip10} className="chip-selected"/>}
      </ToggleButton>

      <ToggleButton
        key={3}
        type="radio"
        variant="secondary"
        name="radio"
        value={chips[3].value}
        checked={props.selectedChip === chips[3].value}
        onChange={(e) => props.handleChipSelect(e.currentTarget.value)}
      >
        {props.selectedChip !== chips[3].value && <img src={chip20} className="chip"/>}
        {props.selectedChip === chips[3].value && <img src={chip20} className="chip-selected"/>}
      </ToggleButton>

      <ToggleButton
        key={4}
        type="radio"
        variant="secondary"
        name="radio"
        value={chips[4].value}
        checked={props.selectedChip === chips[4].value}
        onChange={(e) => props.handleChipSelect(e.currentTarget.value)}
      >
        {props.selectedChip !== chips[4].value && <img src={chip50} className="chip"/>}
        {props.selectedChip === chips[4].value && <img src={chip50} className="chip-selected"/>}
      </ToggleButton>

      <ToggleButton
        key={5}
        type="radio"
        variant="secondary"
        name="radio"
        value={chips[5].value}
        checked={props.selectedChip === chips[5].value}
        onChange={(e) => props.handleChipSelect(e.currentTarget.value)}
      >
        {props.selectedChip !== chips[5].value && <img src={chip100} className="chip"/>}
        {props.selectedChip === chips[5].value && <img src={chip100} className="chip-selected"/>}
      </ToggleButton>

      <ToggleButton
        key={6}
        type="radio"
        variant="secondary"
        name="radio"
        value={chips[6].value}
        checked={props.selectedChip === chips[6].value}
        onChange={(e) => props.handleChipSelect(e.currentTarget.value)}
      >
        {props.selectedChip !== chips[6].value && <img src={chip500} className="chip"/>}
        {props.selectedChip === chips[6].value && <img src={chip500} className="chip-selected"/>}
      </ToggleButton>

      <ToggleButton
        key={7}
        type="radio"
        variant="secondary"
        name="radio"
        value={chips[7].value}
        checked={props.selectedChip === chips[7].value}
        onChange={(e) => props.handleChipSelect(e.currentTarget.value)}
      >
        {props.selectedChip !== chips[7].value && <img src={chip1K} className="chip"/>}
        {props.selectedChip === chips[7].value && <img src={chip1K} className="chip-selected"/>}
      </ToggleButton>

      <ToggleButton
        key={8}
        type="radio"
        variant="secondary"
        name="radio"
        value={chips[8].value}
        checked={props.selectedChip === chips[8].value}
        onChange={(e) => props.handleChipSelect(e.currentTarget.value)}
      >
        {props.selectedChip !== chips[8].value && <img src={chip2K} className="chip"/>}
        {props.selectedChip === chips[8].value && <img src={chip2K} className="chip-selected"/>}
      </ToggleButton>

      <ToggleButton
        key={9}
        type="radio"
        variant="secondary"
        name="radio"
        value={chips[9].value}
        checked={props.selectedChip === chips[9].value}
        onChange={(e) => props.handleChipSelect(e.currentTarget.value)}
      >
        {props.selectedChip !== chips[9].value && <img src={chip5K} className="chip"/>}
        {props.selectedChip === chips[9].value && <img src={chip5K} className="chip-selected"/>}
      </ToggleButton>
    </ButtonGroup>
  );
}


class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      mustSpin: false,
      prizeNumber: 0, // prizeNumber is the winning option's index in the data array
      isSpinning: false,
      totalBet: 0,
      numbers: Array(41).fill(0),
      selectedChip: '1',
      account: "",
      blocquette: null,
      table: [],
      balance: 0
    }
  }

  async getBalance() {
    let balance = await window.web3.eth.getBalance(this.state.account); //Will give value in.
    balance = window.web3.utils.fromWei(balance);
    this.setState({balance: balance});
    console.log(balance);
  }

  createBet(betNumber, betAmount, betType, last){
    this.state.blocquette.methods.createBet(betNumber,betType).send({from:this.state.account, value:window.web3.utils.toWei(betAmount.toString(), "wei")}).once('receipt', (receipt) => {
      console.log(receipt);
      if(last) {
      this.setState({isSpinning:false})
      this.getBalance();
    }
    });
  }
  
  processBet(){
    this.setState({isSpinning: true});
    this.state.blocquette.methods.processoBeto().send({from:this.state.account}).once('receipt', (receipt) => {
    console.log(receipt.events);
    // RECEIVE the prize from blockchain
    const prize = parseInt(receipt.events.RandomNumber.returnValues.number);
    const prizeIndex = data.findIndex(num => parseInt(num.option) === prize);

    //CREATE THE TABLE
    let table = [];
    const currentBets = receipt.events.RandomBet;
    if(!Array.isArray(currentBets)) {
      const betterAddress = currentBets.returnValues.betterAddress;
      const betAmount = currentBets.returnValues.betAmount;
      const betType = currentBets.returnValues.betType;
      const number = currentBets.returnValues.number;
      const profit = currentBets.returnValues.profit;
      const row = {
        betterAddress : betterAddress,
        betAmount: betAmount,
        betType: betType,
        number: number,
        profit: profit
      }
      table.push(row);
    }
    else {
      for (let i = 0; i < currentBets.length; i++) {
        const betterAddress = currentBets[i].returnValues.betterAddress;
        const betAmount = currentBets[i].returnValues.betAmount;
        const betType = currentBets[i].returnValues.betType;
        const number = currentBets[i].returnValues.number;
        const profit = currentBets[i].returnValues.profit;
        const row = {
          betterAddress : betterAddress,
          betAmount: betAmount,
          betType: betType,
          number: number,
          profit: profit
        }
        table.push(row);
      }
    }
    this.setState({isSpinning: false, prizeNumber: prizeIndex, mustSpin: true, table: table});
    this.getBalance();
    });
  }

  async componentWillMount(){
    await this.loadWeb3()
    await this.loadBlockchainData()
  }

  async loadWeb3() {
    if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        await window.ethereum.enable();
    }
    else if (window.web3){
      window.web3 = new Web3(window.web3.currentProvider);

    }
    else{
      window.alert("Metamask not detected!")
    }
  }

  async loadBlockchainData() {
    if(window.web3) {
      const web3 = window.web3;
      //load account
      const accounts = await web3.eth.getAccounts();
      this.setState({account: accounts[0]});
      
      const networkId = await web3.eth.net.getId();
      const networkData = Blocquette.networks[networkId];
      if(networkData){
        const blocquette = new web3.eth.Contract(Blocquette.abi,networkData.address);
        let balance = await web3.eth.getBalance(this.state.account); //Will give value in.
        balance = web3.utils.fromWei(balance);
        console.log(balance);
        this.setState({blocquette: blocquette, balance: balance});
      }else {
        window.alert("Blocquette contract not deployed to detected network.")
      }
      
    }
  }

  handleSpinClick() {
  
    let bets = []
    let numbers = this.state.numbers.slice();
    for (let i = 0; i < numbers.length; i++) {
      if(numbers[i]>0) {
        const element = {"betValue":i, "betAmount":numbers[i]};
        bets.push(element);
      }
    }
    if(!bets.length) {
      alert("Please make your bet before spinning.")
    }
    else {
      // SEND bets to blockchain
      const numbers = Array(41).fill(0);
      this.setState({numbers: numbers, totalBet: 0, isSpinning:true});
      const lastIndex = bets.length-1;
      bets.forEach( (bet,index) => {
        let last = false;
        if(index==lastIndex) { last = true; }
        //IF ODDA TIKLANDi betType 1 num 0 39
        if(bet.betValue===39) {
          this.createBet(0, bet.betAmount, 1, last);
        }
        //IF EVENA TIKLANDI betType 1 num 1 40
        else if(bet.betValue===40){
          this.createBet(1, bet.betAmount, 1, last);
        }
        //IF BLACK betType 2 num 0 38
        else if(bet.betValue===38){
          this.createBet(0, bet.betAmount, 2, last);
        }
        //IF RED betType 2 num 1 37
        else if(bet.betValue===37) {  
          this.createBet(1, bet.betAmount, 2, last);
        }
        else{
          this.createBet(bet.betValue, bet.betAmount, 0, last);
        }
      });
    }
  }

  handleStopSpinning() {
    this.setState({ mustSpin: false});
  }

  handleChipSelect(chip) {

    this.setState({selectedChip: chip});
  }

  async getResult() {
    const status = await this.state.blocquette.methods.getStatus().call();
    console.log(status);
  }
  
  handleNumClick(e) {
    const number = Number(e.target.value);
    const value = this.state.selectedChip;
    const chipIndex = chips.findIndex(chip => chip.value === value);
    let name = chips[chipIndex].name;
    if(name.includes('K')) {
      name = (parseInt(name.slice(0,-1))*1000).toString();
    }
    const amount = parseInt(name);
    const newTotal = this.state.totalBet + amount;
    const numbers = this.state.numbers.slice();
    numbers[number] = numbers[number] + amount;    
    this.setState({ totalBet:newTotal, numbers:numbers })
  }

  handleClearClick() {
      const numbers = Array(41).fill(0);
      this.setState({numbers: numbers, totalBet: 0});
  }

  handleCashOut() {
    this.state.blocquette.methods.cashOut().send({from:this.state.account}).once('receipt', (receipt) => {
      alert("Cash Out Completed.")
      this.getBalance();
    })
  }

  renderSpinButton() {

    return( 
      <SpinButton
        isSpinning={this.state.isSpinning}
        onClick={() => this.processBet()}
      />
    );
  }

  renderChipButtons() {

    return( 
      <ChipButtons
        selectedChip={this.state.selectedChip}
        handleChipSelect={(chip) => this.handleChipSelect(chip)}
      />
    );
  }

  renderAllNumbers(row) {

    let start = 0;
    let end = 0;
    let buttons = [];
    if(row===0) {
      start = 0;
      end = 12;
    }
    else if(row===1) {
      start = 12;
      end = 22;
    }
    else if(row===2) {
      start = 22;
      end = 32;
    }
    else if(row===3) {
      start = 32;
      end = 37;
    }
    for (let i = start; i < end; i++) {
      
      buttons.push(this.renderNumberButton(i));
    }

    return buttons;
  }

  renderNumberButton(num) {

    const reds = [1,3,5,7,9,12,14,16,18,19,21,23,25,27,30,32,34,36];
    const blacks = [2,4,6,8,10,11,13,15,17,20,22,24,26,28,29,31,33,35];
    
    if(num===0) {
      return(
        <div className="hor">
          <div>
            <Button variant="success" size="lg" value={num} onClick={(e) => this.handleNumClick(e, "value")}>{num}</Button>
          </div>
          <div>
            {this.state.numbers[num] !== 0 && <button className="round">{this.state.numbers[num]}</button>}
          </div>
        </div>
      );
    }
    else if(reds.includes(num)) {
      return( 
        <div className="hor">
          <div>
            <Button variant="danger" size="lg" value={num} onClick={(e) => this.handleNumClick(e, "value")}>{num}</Button>
          </div>
          <div>
            {this.state.numbers[num] !== 0 && <button className="round">{this.state.numbers[num]}</button>}
          </div>
        </div>
      );
    }
    else if(blacks.includes(num)) {
      return(
        <div className="hor">
          <div>
            <Button variant="dark" size="lg" value={num} onClick={(e) => this.handleNumClick(e, "value")}>{num}</Button>
          </div>
          <div>
            {this.state.numbers[num] !== 0 && <button className="round">{this.state.numbers[num]}</button>}
          </div>
        </div>
      );
    }
  }

  renderOthers() {
      return(
        <div className="hor">
          <div className="hor">
            <div>
              <Button variant="danger" size="lg" value={37} onClick={(e) => this.handleNumClick(e, "value")}>RED</Button>
            </div>
            <div>
              {this.state.numbers[37] !== 0 && <button className="round">{this.state.numbers[37]}</button>}
            </div>
          </div>
          <div className="hor">
            <div>
              <Button variant="dark" size="lg" value={38} onClick={(e) => this.handleNumClick(e, "value")}>BLACK</Button>
            </div>
            <div>
              {this.state.numbers[38] !== 0 && <button className="round">{this.state.numbers[38]}</button>}
            </div>
          </div>
          <div className="hor">
            <div>
              <Button variant="secondary" size="lg" value={39} onClick={(e) => this.handleNumClick(e, "value")}>ODD</Button>
            </div>
            <div>
              {this.state.numbers[39] !== 0 && <button className="round">{this.state.numbers[39]}</button>}
            </div>
          </div>
          <div className="hor">
            <div>
              <Button variant="info" size="lg" value={40} onClick={(e) => this.handleNumClick(e, "value")}>EVEN</Button>
            </div>
            <div>
              {this.state.numbers[40] !== 0 && <button className="round">{this.state.numbers[40]}</button>}
            </div>
          </div>
        </div>
      );
  }

  renderTableRows() {

    // get Table from the contract
    const tableRows = [];
    const table = this.state.table.slice();
    for (let i = 0; i < table.length; i++) {
      tableRows.push(this.renderTableRow(table[i]));
    }
    return tableRows;
  }

  renderTableRow(row) {

    return(
      <tr>
        <td>{row.betterAddress}</td>
        <td>{row.betAmount}</td>
        <td>{row.betType==="0" && row.number}
        {row.betType==="1" && row.number==="0" && "ODD"}
        {row.betType==="1" && row.number==="1" && "EVEN"}
        {row.betType==="2" && row.number==="0" && "BLACK"}
        {row.betType==="2" && row.number==="1" && "RED"}</td>
        <td>{data[this.state.prizeNumber].option}</td>
        <td>{row.profit}</td>
      </tr>
    );
  }

  renderTable() {

    return(
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Better Address</th>
            <th>Bet Amount</th>
            <th>Bet Value</th>
            <th>Resulting Value</th>
            <th>Profit</th>
          </tr>
        </thead>
        <tbody>
          {this.state.table.length!==0 && this.renderTableRows()}
        </tbody>
      </Table>
    );
  }

  render() {
    return (
      <div className="App background-green" >
        <div>
        {this.state.account==="" && <Button variant="dark" size="lg" disabled={true} className="account">You are not connected to the Ethereum Network.</Button>}
          {this.state.account!=="" && <Button variant="dark" size="lg" disabled={true} className="account">Connected Account Address: {this.state.account}</Button>}
        </div>
        <div>
          {this.state.account!=="" && <Button variant="dark" size="lg" disabled={true} className="account">Connected Account Balance: {this.state.balance} ETH</Button>}
        </div> 
        <div>    
          <br/><br/><br/><br/>
              <img src={blocquetteTitle} alt="blocquette" className="title" />
        </div>
        <div className='row'>
          <div className='column-small'>
            <Wheel
            mustStartSpinning={this.state.mustSpin}
            prizeNumber={this.state.prizeNumber}
            data={data}
            backgroundColors={['#3e3e3e', '#df3428']}
            textColors={['#ffffff']}
            textDistance={85}
            innerRadius={60}
            perpendicularText={true}
            innerBorderWidth={5}
            onStopSpinning={() => this.handleStopSpinning()}
            />
            <br />
            <div className="rows">
              <div className="hor-wide">
                {this.renderSpinButton()}{'   '}
                <Button variant="secondary" size="lg" className="space" onClick={() => this.handleClearClick()}>CLEAR</Button>
                <Button variant="success" size="lg" className="space" onClick={() => this.handleSpinClick()}>BET</Button>
              </div>
            </div>
            <br/><br/><br/>
            <div>
              <Button variant="info" size="lg" >TOTAL BET: {this.state.totalBet}</Button>
              <Button variant="primary" size="lg" className="space" onClick={() => this.handleCashOut()}>CASH OUT</Button>
            </div>
          </div>
          <div className='column-big rows'>
            <div className="row">
              {this.renderAllNumbers(0)}
              <br /><br /><br /><br /><br />
            </div>
            <div className="row">
              {this.renderAllNumbers(1)}
              <br /><br /><br /><br /><br />
            </div>
            <div className="row">
              {this.renderAllNumbers(2)}
              <br /><br /><br /><br /><br />
            </div>
            <div className="row">
              {this.renderAllNumbers(3)}
              {this.renderOthers()}
              <br /><br /><br /><br /><br />
              {this.renderChipButtons()}
            </div>
          </div>
          <div className="table">
            {this.renderTable()}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
