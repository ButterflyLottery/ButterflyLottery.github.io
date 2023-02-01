# Butterfly Lottery

## Why Butterfly?

The famous metaphor of butterfly effect in chaos theory, says a butterfly flapping its wings in Brazil may cause a tornado in Texas. When you play Butterfly Lottery this will hardly ever cause any storm or tornado, but it will definetely have effect on lottery results of next draw and all future ones.

## How can I play?
You can play on www.justluckit.com
Or you can download this file(link) and play yourself.
If you want to publish your website here please contact us on our discord channel (https://discord.gg/pmv9Cuc2DS).

## How lucky numbers are drawn?
Every time you make a coupon in Butterfly649 a hash function modifies the randomness of the game.
"The numbers you play + prior hash result" goes into a hash function and the output is saved as new "randomness". The nex player takes this randomness and repeats the process with the number he played + output from your has function. Your decision of choosing number 2 or number 3 on your coupon totally changes the result of next draw and all future draws.
???(hash function in details)
Randomness is saved on program subregisters. We need a few subregisters to scale Butterfly Lottery. So, many people are able to play at the same time.
When the countdown time shown on home screen is zero, new draw week begins and subregisters stop saving (we will refer this as "draw" in the text). Randomness in all subregisters, in order by register no, go to another hash function with their related main registers
(
output = hashFunction(randomness of 1st register + randomness of mainregister);
 randomness of mainregister = output;
 output = hashFunction(randomness of 2nd register+randomness of mainregister);
randomness of mainregister = output ;
 ...and so on until the last subregister)
 to reach randomness in mainregisters. The same process repeats for mainregisters to find final randomness.
(
output = hashFunction(randomness of 1st mainregister + final randomness);
 final randomness = output;
 output = hashFunction(randomness of 2nd mainregister  + final randomness);;
final randomness = output ;
 ...and so on until the last mainregister)
 We derive the lucky numbers from this final randomness.(we will refer this and above derivations as "process" in the text). You can look at the randomness of the counters and how final randomness is derived at this link.
How long the derivation of lucky numbers will take depends on the number of subregisters.
It can take from 5 minutes up to an hour. Then lucky can be queried from blockchain. ()
The number of subregisters depends on how often Butterfly Lottery is played. Maximum number of subregisters can be 65,025.
Once created subregisters can not be deleted.
Initial randomness in subregisters when first created is "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX".(44 X's).
Then it is changed as a player uses it.
Which subregister will player use is chosen by random generator.
(subcounters randomness and derivation)
There are two sets of subregisters with their related mainregisters. While one is used for saving data, the data of other one is processed. At every draw they replace eachother. The one that is processed starts to save data and the saved data of another is started to be processed.
 Randomness of subregisters is preserved on the processing. However randomness of mainregisters are modified on the process. Every week after the draw and before the process we will be putting here(link) randomness values of subregisters and mainregisters. So, if you wish, you can replicate the process and reach the same lucky numbers to make sure lottery results are not manipulated by third parties.
Is Lottery Result Predictable?
Randomness is modified only by playing and you can see it anytime on blockchain. So, you can know the result of the draw at that exact moment. Does that mean you match six numbers? Let's try!
You make coupon of exact matching numbers and play. However, you modify the randomness when you play and new draw result is different than the numbers you chose. Can you calculate how your numbers would have an effect on the modification and choose such six numbers that would match your modification? Maybe in the future. No supercomputer is capable of such a calculation in a such short amount of time yet. Besides  many other players may also be playing at that moment and effecting the results.
When is Draw?
At this moment draw is made every seven days. Countdown is made according to Unix Time Stamp. When countdown is zero someone call Butterfly Lottery smart(link) contract and starts a new week. Seven days are added to timestamp and new countdown begins.
Where is data stored and calculated?
All coupons you made are saved on blockchain. And all distributions, calculations and control of coupons are done on blockchain.
All accounts storing data about past draws are stored on Blockchain and can be seen here(link).
After the draw controllers check each coupon by calling the smart contract. Controllers also get some reward for this process. Anybody can be a controller and earn rewards. Join our discord channel for details (https://discord.gg/pmv9Cuc2DS).
You can also host this game on your web site and earn Sol as people play. Join our discord channel for details (https://discord.gg/pmv9Cuc2DS).
How much prize is distributed?
At this moment 10% of the game price gets host and another 10% gets miner
The rest 80%(except game expenses, which is around 0.0001%) is distributed to winners as below:
3 matchers get:
4 matchers get:
5 matchers get:
6 matchers get:
Government organized lotteries ussually give out between 40% - 50% of the pool.
How to receive prizes?
Players can claim their prizes or deposits after control progress is over. Deposit is needed to keep data on Solana Blockchain.
Players claim their prizes or deposit on blockchain instantly without any permission or register.
You can see how is claim made on the link()
 Depending on how many coupons made it can take from few minutes up to a day after draw is made.
Does Butterfly Lottery Belongs to anyone?
No. Butterfly Lottery doesn't belong to anybody or any company or government. It is a smart contract on Solana Blockchain. As we stated above you can take part in controlling coupons and hosting the game without any permission or register.
For a while we will be controlling lottery settings like how often we have draw, coupon price, share of prizes and controllers etc. But we are planning and working on creating a community program where community members can vote and offer changes with Butterfly Lottery Token.
 Butterfly Lottery  Token is not listed on any market yet. However, we are planning airdrops.
Join our discord channel to hear about us (https://discord.gg/pmv9Cuc2DS).
Finally we will make our program immutable on blockchain and open our source code.

discord : https://discord.gg/pmv9Cuc2DS
