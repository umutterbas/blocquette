pragma solidity ^0.5.0;

contract Blocquette{
  
  address payable creator;
	string public name;
	uint public betCount = 0;
	uint8[] payouts;
	mapping (address => uint256) winnings;
	uint8[] numberRange;
	uint necessaryBalance;
	uint256 maxAmountAllowedInTheBank;
	
	
	Bet[] public bets;
	
	function rand()
    public
    view
    returns(uint256)
{
    uint256 seed = uint256(keccak256(abi.encodePacked(
        block.timestamp + block.difficulty +
        ((uint256(keccak256(abi.encodePacked(block.coinbase)))) / (now)) +
        block.gaslimit + 
        ((uint256(keccak256(abi.encodePacked(msg.sender)))) / (now)) +
        block.number
    )));

    return ((seed - ((seed / 1000) * 1000))%37);
}


      struct Bet {
    address betterAddress;
    uint8 betType;
    uint8 number;
    uint betAmount;
  }
  
  function addEther() payable public {}


	constructor() public payable{
    creator = msg.sender;
		name = "UKB Blocquette";
		payouts = [36,2,2];
		numberRange = [36,1,1];
		necessaryBalance = 0;
		maxAmountAllowedInTheBank = 200000000000000000000; /* 200 ether */
	}
	
	event RandomNumber(uint256 number);
	
	
	  function getStatus() public view returns(uint, uint, uint) {
    return (
      bets.length,             // number of active bets
      address(this).balance,   // roulette balance
      winnings[msg.sender]     // winnings of player
    ); 
  }
  
  //25 contractte
  //3 koydum, 6 geti gelicek


	function createBet(uint8 _number, uint8 _betType) payable public{
		//Require valid betValues


		//Require a valid betAmount
		require(msg.value > 0,'Wrong message value');
		require(_betType >= 0 && _betType <= 2, 'Wrong betType');
		require(_number >=0 && _number <= numberRange[_betType], 'Wrong number input according to betType');
		
		
		uint payoutForThisBet = payouts[_betType] * msg.value;
        uint provisionalBalance = necessaryBalance + payoutForThisBet;
        
        require(provisionalBalance < address(this).balance, 'Contract does not have enough ether to pay you back, we cannot process your bet');

    		bets.push(Bet({
          betterAddress: msg.sender,
          betType: _betType,
          number: _number,
          betAmount: msg.value
        }));
        
        
		//Trigger an event
	

	}

	
	function processoBeto() public {
	//betType 0 0-36
	//betType 1 0-1 Tek Cift
	//betType 2 0-1 Siyah-Kirmizi
	uint256 number = rand();
	
	for (uint i = 0; i < bets.length; i++) {
	  
      bool won = false;
      Bet memory b = bets[i];
      if (number == 0) {
        won = (b.betType == 0 && b.number == 0);                   /* bet on 0 */
      } else {
        if (b.betType == 0) { 
          won = (b.number == number);                              /* bet on number */
        } else if (b.betType == 1) {
          if (b.number == 1) won = (number % 2 == 0);              /* bet on even */
          if (b.number == 0) won = (number % 2 == 1);              /* bet on odd */
        } 
        else if (b.betType == 2) {
          if (b.number == 0) {                                     /* bet on black */
            if (number <= 10 || (number >= 20 && number <= 28)) {
              won = (number % 2 == 0);
            } else {
              won = (number % 2 == 1);
            }
          } else {                                                 /* bet on red */
            if (number <= 10 || (number >= 20 && number <= 28)) {
              won = (number % 2 == 1);
            } else {
              won = (number % 2 == 0);
            }
          }
        }
      }
      /* if winning bet, add to player winnings balance */
      if (won) {
        winnings[b.betterAddress] += b.betAmount * payouts[b.betType];
        
      }
    }
    /* delete all bets */
    bets.length = 0;
    /* reset necessaryBalance */
    necessaryBalance = 0;
    /* check if to much money in the bank */
    if (address(this).balance > maxAmountAllowedInTheBank) takeProfits();
    /* returns 'random' number to UI */
    emit RandomNumber(number);
    
}

function cashOut() public {
    address payable player = msg.sender;
    uint256 amount = winnings[player];
    require(amount > 0, 'You have no winnings');
    require(amount <= address(this).balance, 'Contract does not have enough balance to pay you back');
    winnings[player] = 0;
    player.transfer(amount);
  }




function takeProfits() internal {
    uint amount = address(this).balance - maxAmountAllowedInTheBank;
    if (amount > 0) creator.transfer(amount);
  }

}